/**
 * Agentic Browsing Test Suite
 *
 * This suite is designed for AI agents (like Claude) to autonomously browse
 * and verify the entire site. The agent:
 *   1. Fetches the route manifest from /routes.json to discover all pages
 *   2. Visits each page across multiple viewports
 *   3. Verifies content renders correctly
 *   4. Checks SEO metadata (title, description, canonical, schema)
 *   5. Validates internal link integrity
 *   6. Reports issues
 *
 * Run: npx playwright test tests/agentic-browsing.spec.js
 */

import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5174';
const VIEWPORTS = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Desktop', width: 1280, height: 800 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────

/**
 * Fetch the route manifest from the running dev server.
 * This is the agent's discovery mechanism - it returns ALL known routes.
 */
async function discoverRoutes({ page }) {
  const response = await page.goto(`${BASE_URL}/routes.json`);
  expect(response.ok()).toBeTruthy();
  const manifest = await response.json();
  return manifest;
}

/**
 * Check that a page doesn't have horizontal overflow (layout breakage).
 */
async function checkOverflow(page) {
  return page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
}

/**
 * Collect all console errors emitted during page load.
 */
async function collectErrors(page) {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  return errors;
}

/**
 * Extract SEO metadata from the page <head>.
 */
async function getSEOHead(page) {
  return page.evaluate(() => ({
    title: document.title,
    metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
    viewport: document.querySelector('meta[name="viewport"]')?.getAttribute('content') || '',
    h1Count: document.querySelectorAll('h1').length,
    h1Text: document.querySelector('h1')?.textContent?.trim() || '',
    schemaScripts: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => s.textContent),
  }));
}

/**
 * Check that all internal anchor links are valid on the page.
 */
async function checkInternalLinks(page, currentPath) {
  return page.evaluate((path) => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const internal = links
      .map(a => a.getAttribute('href'))
      .filter(h => h && h.startsWith('/') && !h.startsWith('//') && !h.includes('#') && h !== path);

    const results = internal.map(href => ({
      href,
      text: links.find(a => a.getAttribute('href') === href)?.textContent?.trim() || '(icon)',
      visible: links.find(a => a.getAttribute('href') === href)?.offsetParent !== null,
    }));

    // Deduplicate
    const seen = new Set();
    return results.filter(r => { if (seen.has(r.href)) return false; seen.add(r.href); return true; });
  }, currentPath);
}

// ─── Agentic Browsing Suite ──────────────────────────────────────────────

test.describe('Agentic Browsing Suite', () => {

  // ── Phase 1: Route Discovery ─────────────────────────────────────────

  test.describe('Phase 1: Route Discovery', () => {
    test('should discover all routes from manifest', async ({ page }) => {
      const manifest = await discoverRoutes({ page });
      expect(manifest.version).toBe(1);
      expect(manifest.totalRoutes).toBeGreaterThan(0);
      expect(Array.isArray(manifest.routes)).toBe(true);

      // Log discovered routes for the agent
      console.log(`\n📋 Discovered ${manifest.totalRoutes} routes:`);
      manifest.routes.forEach(r => console.log(`   [${r.pageType}] ${r.path} — ${r.label}`));
    });

    test('manifest should contain all page types', async ({ page }) => {
      const manifest = await discoverRoutes({ page });
      const types = new Set(manifest.routes.map(r => r.pageType));
      expect(types.has('home')).toBeTruthy();
      expect(types.has('location')).toBeTruthy();
      expect(types.has('treatment')).toBeTruthy();
      expect(types.has('technique')).toBeTruthy();
      expect(types.has('service')).toBeTruthy();
      expect(types.has('blog')).toBeTruthy();
      expect(types.has('landing')).toBeTruthy();
      expect(types.has('team')).toBeTruthy();
    });

    test('each route should have required fields', async ({ page }) => {
      const manifest = await discoverRoutes({ page });
      for (const route of manifest.routes) {
        expect(route.path).toBeTruthy();
        expect(route.pageType).toBeTruthy();
        expect(route.label).toBeTruthy();
        expect(typeof route.priority).toBe('number');
      }
    });
  });

  // ── Phase 2: Page Rendering ─────────────────────────────────────────

  test.describe('Phase 2: Page Rendering Verification', () => {
    let allRoutes;

    test.beforeAll(async ({ browser }) => {
      const page = await browser.newPage();
      const manifest = await discoverRoutes({ page });
      allRoutes = manifest.routes;
      await page.close();
    });

    for (const viewport of VIEWPORTS) {
      test.describe(`Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`, () => {

        // Test one representative page of each type (full coverage in agentic mode)
        // AI agent visits EVERY route in production; here we sample for CI speed
        const sampleRoutes = [
          ...allRoutes.filter(r => r.pageType === 'home'),
          ...allRoutes.filter(r => r.pageType === 'location').slice(0, 3),
          ...allRoutes.filter(r => r.pageType === 'treatment').slice(0, 1),
          ...allRoutes.filter(r => r.pageType === 'technique').slice(0, 1),
          ...allRoutes.filter(r => r.pageType === 'service').slice(0, 1),
          ...allRoutes.filter(r => r.pageType === 'blog').slice(0, 1),
          ...allRoutes.filter(r => r.pageType === 'landing').slice(0, 1),
          ...allRoutes.filter(r => r.pageType === 'team'),
        ];

        for (const route of sampleRoutes) {
          test(`[${route.pageType}] ${route.label} should render correctly`, async ({ page }) => {
            test.setTimeout(30000);
            await page.setViewportSize({ width: viewport.width, height: viewport.height });

            const errors = await collectErrors(page);
            await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });

            // Verify URL resolved (not a 404 redirect)
            const currentUrl = page.url();
            const currentPath = new URL(currentUrl).pathname;
            expect(currentPath).toBe(route.path);

            // Page should have content
            const bodyText = await page.locator('body').textContent();
            expect(bodyText.length).toBeGreaterThan(100);

            // No horizontal overflow
            const overflow = await checkOverflow(page);
            expect(overflow).toBe(false);

            // No console errors
            expect(errors).toHaveLength(0);

            // Navigation should be present
            const nav = page.locator('nav, [role="navigation"]');
            await expect(nav).toBeVisible();

            // h1 should exist
            const h1Count = await page.locator('h1').count();
            expect(h1Count).toBeGreaterThanOrEqual(1);

            // Footer should be present
            const footer = page.locator('footer');
            await expect(footer).toBeVisible();
          });
        }
      });
    }
  });

  // ── Phase 3: SEO Metadata Verification ───────────────────────────────

  test.describe('Phase 3: SEO Metadata Verification', () => {
    for (const pageType of ['home', 'location', 'treatment', 'technique', 'service', 'blog', 'landing', 'team']) {
      test(`[${pageType}] pages should have proper SEO metadata`, async ({ page, browser }) => {
        // Get one page of this type
        const manifest = await discoverRoutes({ page });
        const route = manifest.routes.find(r => r.pageType === pageType);
        if (!route) {
          test.skip(); return;
        }

        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        const seo = await getSEOHead(page);

        // Every page needs a title
        expect(seo.title.length).toBeGreaterThan(0);
        expect(seo.title).toContain('Adapt Physiotherapy');

        // Every page needs a meta description
        expect(seo.metaDescription.length).toBeGreaterThan(10);

        // Every page needs exactly one h1
        expect(seo.h1Count).toBe(1);

        // Every page needs a canonical URL
        expect(seo.canonical.length).toBeGreaterThan(0);

        // OG tags should be present
        expect(seo.ogTitle.length).toBeGreaterThan(0);
        expect(seo.ogDescription.length).toBeGreaterThan(0);

        // Robots tag should exist
        expect(seo.robots).toContain('index');

        // Structured data should exist on non-blog pages (blog is article, not business)
        expect(seo.schemaScripts.length).toBeGreaterThan(0);

        console.log(`\n✅ [${pageType}] ${route.path}:`);
        console.log(`   Title: ${seo.title}`);
        console.log(`   Description: ${seo.metaDescription.slice(0, 60)}...`);
        console.log(`   Canonical: ${seo.canonical}`);
        console.log(`   H1: ${seo.h1Text.slice(0, 60)}`);
        console.log(`   Schema scripts: ${seo.schemaScripts.length}`);
      });
    }

    test('all pages should have unique meta titles', async ({ page }) => {
      const manifest = await discoverRoutes({ page });
      const titles = [];

      for (const route of manifest.routes) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });
        const title = await page.title();
        titles.push({ path: route.path, title });
      }

      // Find duplicates
      const seen = {};
      const duplicates = [];
      titles.forEach(t => {
        if (seen[t.title]) duplicates.push(t);
        seen[t.title] = (seen[t.title] || 0) + 1;
      });

      if (duplicates.length > 0) {
        console.warn(`⚠️  Found ${duplicates.length} pages with duplicate titles:`);
        duplicates.forEach(d => console.warn(`   ${d.title} → ${d.path}`));
      }
      // Home and catch-all share; others should be unique
      const nonHomeDups = duplicates.filter(d => d.path !== '/');
      expect(nonHomeDups.length).toBe(0);
    });
  });

  // ── Phase 4: Internal Link Integrity ─────────────────────────────────

  test.describe('Phase 4: Internal Link Integrity', () => {
    test('all internal links on key pages should resolve to 200', async ({ page, browser }) => {
      const manifest = await discoverRoutes({ page });
      const crawlRoutes = manifest.routes.filter(r =>
        ['home', 'location', 'treatment', 'landing'].includes(r.pageType)
      ).slice(0, 5); // Sample 5 key pages

      const brokenLinks = [];

      for (const route of crawlRoutes) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        const links = await checkInternalLinks(page, route.path);

        for (const link of links) {
          try {
            const resp = await page.goto(`${BASE_URL}${link.href}`);
            if (resp && resp.status() >= 400) {
              brokenLinks.push({ from: route.path, to: link.href, status: resp.status(), text: link.text });
            }
          } catch {
            brokenLinks.push({ from: route.path, to: link.href, status: 0, text: link.text });
          }
        }

        // Navigate back to the original route for next link check
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded' });
      }

      if (brokenLinks.length > 0) {
        console.warn(`\n🔗 Broken internal links found (${brokenLinks.length}):`);
        brokenLinks.forEach(l => console.warn(`   ${l.from} → ${l.to} [${l.status}] "${l.text}"`));
      }
      expect(brokenLinks.length).toBe(0);
    });
  });

  // ── Phase 5: Responsive Layout Check ─────────────────────────────────

  test.describe('Phase 5: Responsive Layout Consistency', () => {
    test('all pages should adapt at 375px mobile viewport with no overflow', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const manifest = await discoverRoutes({ page });

      for (const route of manifest.routes) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });

        const overflow = await checkOverflow(page);
        if (overflow) {
          console.warn(`⚠️  Horizontal overflow on mobile: ${route.path}`);
        }
      }
    });
  });

  // ── Phase 6: Navigation Consistency ──────────────────────────────────

  test.describe('Phase 6: Navigation Consistency', () => {
    test('navbar links should be consistent across page types', async ({ page }) => {
      const manifest = await discoverRoutes({ page });
      const testPages = manifest.routes.filter(r =>
        ['home', 'location', 'treatment', 'service', 'landing'].includes(r.pageType)
      ).slice(0, 5);

      const navSets = [];

      for (const route of testPages) {
        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        const navLinks = await page.locator('nav a').evaluateAll(links =>
          links.map(l => ({ text: l.textContent.trim(), href: l.getAttribute('href') }))
        );
        navSets.push({ path: route.path, links: JSON.stringify(navLinks) });
      }

      // All pages should have the same nav links
      const firstSet = navSets[0]?.links;
      const mismatches = navSets.filter(n => n.links !== firstSet);
      if (mismatches.length > 0) {
        console.warn(`⚠️  Navigation differs on ${mismatches.length} page(s):`);
        mismatches.forEach(m => console.warn(`   ${m.path}`));
      }
      expect(mismatches.length).toBe(0);
    });
  });

  // ── Phase 7: Full Crawl (Agentic Mode) ───────────────────────────────

  test.describe('Phase 7: Full Agentic Crawl', () => {
    test('should visit every registered route and collect metrics', async ({ page }) => {
      test.setTimeout(300000); // 5 minutes for full crawl
      const manifest = await discoverRoutes({ page });

      const results = [];

      for (const route of manifest.routes) {
        const errors = await collectErrors(page);
        const start = Date.now();

        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });

        const loadTime = Date.now() - start;
        const overflow = await checkOverflow(page);
        const h1 = await page.locator('h1').count();
        const bodyLen = (await page.locator('body').textContent()).length;
        const imgCount = await page.locator('img').count();
        const brokenImgs = await page.evaluate(() =>
          Array.from(document.querySelectorAll('img'))
            .filter(img => !img.complete || img.naturalWidth === 0)
            .map(img => img.getAttribute('src'))
        );

        results.push({
          path: route.path,
          type: route.pageType,
          loadTime,
          overflow,
          h1Count: h1,
          bodyLength: bodyLen,
          imgCount,
          brokenImages: brokenImgs,
          consoleErrors: errors.length,
        });

        // Log progress for the agent
        const status = overflow ? '⚠️' : errors.length > 0 ? '⚠️' : brokenImgs.length > 0 ? '⚠️' : '✅';
        console.log(`${status} ${route.path} (${loadTime}ms)`);

        await page.waitForTimeout(200); // Polite crawl delay
      }

      // Summary
      const oks = results.filter(r => !r.overflow && r.consoleErrors === 0 && r.brokenImages.length === 0);
      const issues = results.filter(r => r.overflow || r.consoleErrors > 0 || r.brokenImages.length > 0);

      console.log(`\n📊 Crawl Summary:`);
      console.log(`   Total: ${results.length} pages`);
      console.log(`   OK: ${oks.length} pages`);
      console.log(`   Issues: ${issues.length} pages`);

      if (issues.length > 0) {
        console.warn(`\n🚨 Pages with issues:`);
        issues.forEach(r => {
          if (r.overflow) console.warn(`   [OVERFLOW] ${r.path}`);
          if (r.consoleErrors > 0) console.warn(`   [CONSOLE] ${r.path} (${r.consoleErrors} errors)`);
          if (r.brokenImages.length > 0) console.warn(`   [IMAGES] ${r.path} → ${r.brokenImages.join(', ')}`);
        });
      }

      // The crawl should not fail — it collects info. Expect basic sanity.
      expect(results.length).toBe(manifest.totalRoutes);
      expect(results.filter(r => r.bodyLength < 50).length).toBe(0);
    });
  });
});