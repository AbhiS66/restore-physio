/**
 * Generate OG Image (1200×630px) for social sharing previews.
 * Uses Playwright to screenshot an HTML template.
 *
 * Usage: node scripts/generate-og-image.mjs
 */

import { chromium } from "@playwright/test";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "..", "public");
const HTML_PATH = resolve(PUBLIC_DIR, "og-image.html");
const OUTPUT_PATH = resolve(PUBLIC_DIR, "og-image.png");

async function generate() {
  // Ensure public directory exists
  if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await page.goto(`file://${HTML_PATH}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: OUTPUT_PATH, fullPage: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log(`✅ OG image generated: ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

generate().catch((err) => {
  console.error("❌ Failed to generate OG image:", err);
  process.exit(1);
});