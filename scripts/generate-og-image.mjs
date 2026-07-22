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
  // Skip on Vercel — Playwright browsers aren't available,
  // and the committed og-image.png is deployed as-is.
  if (process.env.VERCEL) {
    console.log(`ℹ️  Skipping OG image generation on Vercel (using committed file)`);
    return;
  }

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
  // Don't fail the build — a pre-committed og-image.png exists
  console.error("❌ Failed to generate OG image:", err.message);
  if (!existsSync(OUTPUT_PATH)) {
    console.error("   No pre-committed og-image.png found — social previews will be broken.");
  } else {
    console.log("   Using pre-committed og-image.png as fallback.");
  }
});