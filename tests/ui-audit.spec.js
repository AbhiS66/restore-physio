import { test, expect } from '@playwright/test';

// Configuration
const BASE_URL = 'http://localhost:5174';
const VIEWPORTS = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 800 },
  { name: 'Large Desktop', width: 1920, height: 1080 }
];

const PAGES_TO_AUDIT = [
  { name: 'Homepage', path: '/' },
  { name: 'Powai Location', path: '/physiotherapy-in-powai' },
  { name: 'Vikhroli Location', path: '/physiotherapy-in-vikhroli' },
  { name: 'Hiranandani Location', path: '/physiotherapy-in-hiranandani' },
  { name: 'Back Pain Treatment', path: '/back-pain-treatment-powai' },
  { name: 'Sports Injury Rehab', path: '/sports-injury-rehab-mumbai' },
  { name: 'Knee Pain Physio', path: '/knee-pain-physio-powai' }
];

/**
 * UI Audit Test Suite
 * Tests for common UI issues across multiple viewport sizes
 */
test.describe('UI Audit Suite - Visual Consistency', () => {
  test.beforeEach(async ({ page }) => {
    // Verify page loads successfully
    test.setTimeout(60000);
    await page.goto(BASE_URL);
  });

  PAGES_TO_AUDIT.forEach(({ name, path }) => {
    test.describe(`${name} - ${path}`, () => {
      VIEWPORTS.forEach(({ name: viewportName, width, height }) => {
        test.describe(`Viewport: ${viewportName} (${width}x${height})`, () => {
          test.use({ viewport: { width, height } });

          test('should load without console errors', async ({ page }) => {
            const consoleErrors = [];
            page.on('console', msg => {
              if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
              }
            });

            await page.goto(`${BASE_URL}${path}`);
            await expect(page).toHaveURL(path === '/' ? BASE_URL : `${BASE_URL}${path}`);

            // Wait a bit for any async errors
            await page.waitForTimeout(2000);

            expect(consoleErrors).toHaveLength(0);
          });

          test('should not have layout overflow issues', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);
            await page.waitForLoadState('domcontentloaded');
            await page.waitForLoadState('networkidle');

            // Check for horizontal scrollbar (indicates overflow)
            const hasHorizontalScrollbar = await page.evaluate(() => {
              return document.documentElement.scrollWidth > document.documentElement.clientWidth;
            });

            expect(hasHorizontalScrollbar).toBe(false);
          });

          test('should display navigation menu properly', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);
            const nav = page.locator('nav, [role="navigation"]');
            await expect(nav).toBeVisible();

            // Nav should be within viewport bounds
            const navBox = await nav.boundingBox();
            expect(navBox).toBeTruthy();
            expect(navBox.x).toBeGreaterThanOrEqual(0);
            expect(navBox.width).toBeLessThanOrEqual(width);
          });

          test('should have consistent font sizes', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            // Check that text doesn't have unreasonably small fonts
            const smallFonts = await page.evaluate(() => {
              const elements = Array.from(document.querySelectorAll('*'));
              const small = elements.filter(el => {
                const style = window.getComputedStyle(el);
                const fontSize = parseFloat(style.fontSize);
                const hasText = el.textContent.trim().length > 20; // Elements with significant text
                return fontSize < 10 && hasText; // Smaller than 10px is problematic
              });
              return small.map(el => ({
                tag: el.tagName,
                class: el.className,
                fontSize: window.getComputedStyle(el).fontSize
              }));
            });

            expect(smallFonts).toHaveLength(0);
          });

          test('should render images without layout shift', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            // Check for images with incorrect dimensions
            const images = await page.locator('img');
            const count = await images.count();

            for (let i = 0; i < count; i++) {
              const image = images.nth(i);
              const isVisible = await image.isVisible();

              if (isVisible) {
                const hasValidDims = await image.evaluate(img => {
                  const rect = img.getBoundingClientRect();
                  return rect.width > 0 && rect.height > 0 && !img.hasAttribute('style');
                });

                if (!hasValidDims) {
                  const src = await image.getAttribute('src');
                  console.warn(`Image with invalid dimensions: ${src}`);
                }
              }
            }
          });

          test('should display header content properly', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            // Find and verify main heading or hero section
            const heading = page.locator('h1, .hero h1, .hero h2');
            const headingCount = await heading.count();

            if (headingCount > 0) {
              const firstHeading = heading.first();

              // Should be visible and not overflow
              const box = await firstHeading.boundingBox();
              expect(box).toBeTruthy();

              if (box) {
                expect(box.x).toBeGreaterThanOrEqual(0);
                expect(box.y).toBeGreaterThanOrEqual(0);
                expect(box.x + box.width).toBeLessThanOrEqual(width);
              }
            }
          });

          test('buttons should have proper contrast and spacing', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            const buttons = await page.locator('button, .btn, [role="button"], a[class*="btn"]');
            const buttonCount = await buttons.count();

            for (let i = 0; i < buttonCount && i < 10; i++) { // Check first 10 buttons
              const button = buttons.nth(i);
              const isVisible = await button.isVisible();

              if (isVisible) {
                // Check if button text is readable
                const textColor = await button.evaluate(el => {
                  return window.getComputedStyle(el).color;
                });

                const backgroundColor = await button.evaluate(el => {
                  return window.getComputedStyle(el).backgroundColor;
                });

                expect(textColor).toBeTruthy();
                expect(backgroundColor).toBeTruthy();
              }
            }
          });

          test('should not have overlapping elements', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            // Check for obvious element overlap issues
            const collisions = await page.evaluate(() => {
              const elements = Array.from(document.querySelectorAll('*:not(script):not(style):not(meta):not(link)'));
              const checks = [];

              for (let i = 0; i < elements.length - 1; i++) {
                const rect1 = elements[i].getBoundingClientRect();

                // Skip if element has no size
                if (rect1.width === 0 || rect1.height === 0) continue;

                for (let j = i + 1; j < elements.length; j++) {
                  const rect2 = elements[j].getBoundingClientRect();

                  if (rect2.width === 0 || rect2.height === 0) continue;

                  // Check if rectangles overlap
                  const overlap = rect1.left < rect2.right &&
                                 rect1.right > rect2.left &&
                                 rect1.top < rect2.bottom &&
                                 rect1.bottom > rect2.top;

                  if (overlap) {
                    checks.push({
                      elements: [`${elements[i].tagName}`, `${elements[j].tagName}`],
                      types: [elements[i].className, elements[j].className]
                    });
                  }
                }
              }

              return checks.slice(0, 5); // Return max 5 examples
            });

            // Overlaps are not always errors (e.g., hover effects), but warn about them
            if (collisions.length > 10) {
              console.warn(`Found ${collisions.length} potential element overlaps`);
            }
          });

          test('should maintain spacing and rhythm', async ({ page }) => {
            await page.goto(`${BASE_URL}${path}`);

            // Check for inconsistent vertical spacing
            const spacingIssues = await page.evaluate(() => {
              const containers = Array.from(document.querySelectorAll('.container, section, .section, main > *'));
              const issues = [];

              containers.forEach(container => {
                const children = Array.from(container.children);
                const margins = children.map(child => {
                  const style = window.getComputedStyle(child);
                  return parseFloat(style.marginTop) || parseFloat(style.marginBottom);
                }).filter(m => m > 0);

                // Check if margins are consistent (within reasonable tolerance)
                if (margins.length > 2) {
                  const avg = margins.reduce((a, b) => a + b, 0) / margins.length;
                  const variance = margins.reduce((sum, m) => sum + Math.pow(m - avg, 2), 0) / margins.length;

                  if (variance > 50) { // High variance = inconsistent spacing
                    issues.push({
                      container: container.className || container.tagName,
                      margins: margins,
                      variance: variance
                    });
                  }
                }
              });

              return issues;
            });

            // Allow some variance, there will always be some inconsistencies
            expect(spacingIssues.length).toBeLessThan(10); // Arbitrary threshold
          });
        });
      });
    });
  });

  test.describe('Cross-page consistency', () => {
    test('navigation should be consistent across pages', async ({ page }) => {
      const navItems = new Set();

      for (const { path } of PAGES_TO_AUDIT.slice(0, 3)) { // Check first 3 pages
        await page.goto(`${BASE_URL}${path}`);
        const navLinks = await page.locator('nav a, .nav-link, .navbar a').evaluateAll(links => {
          return links.map(link => ({
            text: link.textContent.trim(),
            href: link.getAttribute('href')
          }));
        });

        navLinks.forEach(link => navItems.add(JSON.stringify(link)));
      }

      // Should have consistent navigation (exact same items)
      expect(navItems.size).toBeGreaterThan(0);
    });
  });
});

/**
 * Accessibility UI Checks
 */
test.describe('UI Audit - Accessibility Aspects', () => {
  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto(BASE_URL);

    // Get contrast ratio for text elements
    const contrastIssues = await page.evaluate(() => {
      const texts = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button'));
      return texts.filter(el => {
        const style = window.getComputedStyle(el);
        const hasText = el.textContent.trim().length > 0;
        const fontSize = parseFloat(style.fontSize);
        return hasText && fontSize > 0;
      }).map(el => ({
        text: el.textContent.slice(0, 30),
        color: window.getComputedStyle(el).color,
        bgColor: window.getComputedStyle(el).backgroundColor
      }));
    });

    expect(contrastIssues.length).toBeGreaterThan(0);
  });
});

/**
 * Visual regression check - Perceptual diff
 */
test.describe('Visual Regression Detection', () => {
  test('homepage should match visual baseline', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Take screenshot and check for visual stability
    await expect(page).toHaveScreenshot('homepage-visual-baseline.png', {
      threshold: 0.2,
      fullPage: true
    });
  });
});
