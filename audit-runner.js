#!/usr/bin/env node

/**
 * Quick UI Audit Runner
 * Run comprehensive UI checks without full Playwright test suite
 */

import { chromium } from '@playwright/test';

const BASE_URL = 'http://localhost:5174';
const VIEWPORTS = [
  { name: 'Desktop', width: 1280, height: 800 },
  { name: 'Mobile', width: 375, height: 667 }
];

const PAGES = [
  { name: 'Homepage', path: '/' },
  { name: 'Powai Location', path: '/physiotherapy-in-powai' }
];

async function runQuickAudit() {
  console.log('🔍 Starting Quick UI Audit...\n');
  const results = [];

  for (const viewport of VIEWPORTS) {
    console.log(`📱 Testing viewport: ${viewport.name} (${viewport.width}x${viewport.height})`);

    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    // Collect console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    for (const pageConfig of PAGES) {
      const url = BASE_URL + pageConfig.path;
      console.log(`  → Testing: ${pageConfig.name}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle' });

        // Check for horizontal overflow
        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        // Check navigation
        const navVisible = await page.locator('nav').isVisible();

        // Check for small fonts
        const smallFonts = await page.evaluate(() => {
          const elements = Array.from(document.querySelectorAll('*'));
          const small = elements.filter(el => {
            const style = window.getComputedStyle(el);
            const fontSize = parseFloat(style.fontSize);
            const hasText = el.textContent.trim().length > 20;
            return fontSize < 10 && hasText;
          });
          return small.length;
        });

        results.push({
          viewport: viewport.name,
          page: pageConfig.name,
          overflow: hasOverflow,
          navVisible,
          smallFonts,
          consoleErrors: consoleErrors.length
        });

        console.log(`    ✓ Nav visible: ${navVisible ? 'Yes' : 'No'}`);
        console.log(`    ✓ Overflow: ${hasOverflow ? '⚠️  YES' : 'No'}`);
        console.log(`    ✓ Small fonts: ${smallFonts} issues`);
        console.log(`    ✓ Console errors: ${consoleErrors.length}`);

      } catch (error) {
        console.log(`    ❌ Error: ${error.message}`);
        results.push({
          viewport: viewport.name,
          page: pageConfig.name,
          error: error.message
        });
      }
    }

    await browser.close();
    console.log('');
  }

  // Print summary
  console.log('=== UI AUDIT SUMMARY ===\n');

  const criticalIssues = results.filter(r => r.overflow || r.error || r.consoleErrors > 0);

  if (criticalIssues.length > 0) {
    console.log('🚨 Critical Issues Found:');
    criticalIssues.forEach(issue => {
      console.log(`  ${issue.viewport} - ${issue.page}:`);
      if (issue.overflow) console.log('    → Horizontal overflow detected!');
      if (issue.error) console.log(`    → Error: ${issue.error}`);
      if (issue.consoleErrors) console.log(`    → ${issue.consoleErrors} console errors`);
    });
  } else {
    console.log('✅ No critical UI issues detected!');
  }

  console.log('\n📊 Detailed Results:');
  results.forEach(r => {
    console.log(`- ${r.viewport} | ${r.page} | ${r.error ? 'ERROR' : 'OK'}`);
  });

  return results;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runQuickAudit()
    .then(() => {
      console.log('\n✅ Audit complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Audit failed:', error);
      process.exit(1);
    });
}

export { runQuickAudit };
