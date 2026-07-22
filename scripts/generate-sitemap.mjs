/**
 * Generate sitemap.xml from route data.
 * Traverses the same data arrays used by src/data/routes.js.
 *
 * Usage: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ──────────────────────────────────────────────────────────────
const SITE_URL = "https://www.adaptphysiotherapy.in";
const CHANGEFREQ = "monthly";

// ─── Priority by page type ──────────────────────────────────────────────
const PRIORITY = {
  home: "1.0",
  location: "0.9",
  treatment: "0.8",
  service: "0.8",
  technique: "0.7",
  blog: "0.7",
  landing: "0.7",
  team: "0.6",
};

// ─── All routes (mirrors src/data/routes.js) ─────────────────────────────
// Hardcoded at build time so this script runs without Vite module resolution.

const locations = [
  "powai", "vikhroli", "hiranandani", "bhandup", "kanjurmarg",
  "chandivali", "ghatkopar", "sakinaka", "marolnaka", "lt-powai",
  "raheja-vihar", "lake-homes", "highland-gardens", "nahar",
];

const treatmentPages = [
  "back-pain-treatment-powai", "sports-injury-rehab-mumbai", "knee-pain-physio-powai",
];

const techniques = [
  "ift", "tens-therapy", "manual-therapy", "k-taping", "laser-therapy",
  "ultrasound-therapy", "shockwave-therapy",
];

const services = [
  "home-visits", "knee-pain", "back-pain", "neck-pain",
  "parkinsons-rehab", "stroke-rehab", "knee-tkr-rehab", "post-surgery-rehab", "paediatric-physiotherapy",
];

const blogs = [
  "cost-of-home-physiotherapy-mumbai", "cost-of-home-physiotherapy-thane",
  "cost-of-home-physiotherapy-powai", "cost-of-home-physiotherapy-saki-naka",
  "cost-of-home-physiotherapy-marol-naka", "home-physiotherapy-after-knee-surgery",
];

const landingPages = ["home-physiotherapy-powai"];

// ─── Build XML ───────────────────────────────────────────────────────────
function url(loc, priority) {
  return `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <changefreq>${CHANGEFREQ}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const entries = [
  url("/", PRIORITY.home),
  ...locations.map((s) => url(`/physiotherapy-in-${s}`, PRIORITY.location)),
  ...treatmentPages.map((s) => url(`/${s}`, PRIORITY.treatment)),
  ...services.map((s) => {
    const slugMap = {
      "home-visits": "home-visit-physiotherapy",
      "knee-pain": "knee-pain-physiotherapy",
      "back-pain": "back-pain-physiotherapy",
      "neck-pain": "neck-pain-physiotherapy",
      "parkinsons-rehab": "parkinsons-rehabilitation",
      "stroke-rehab": "stroke-rehabilitation",
      "knee-tkr-rehab": "knee-replacement-rehab",
      "post-surgery-rehab": "post-surgery-rehabilitation",
      "paediatric-physiotherapy": "paediatric-physiotherapy",
    };
    return url(`/services/${slugMap[s] || s}`, PRIORITY.service);
  }),
  ...techniques.map((s) => {
    const slugMap = {
      ift: "interferential-therapy",
      "tens-therapy": "tens-therapy",
      "manual-therapy": "manual-therapy",
      "k-taping": "kinesiology-taping",
      "laser-therapy": "laser-therapy",
      "ultrasound-therapy": "ultrasound-therapy",
      "shockwave-therapy": "shockwave-therapy",
    };
    return url(`/techniques/${slugMap[s] || s}`, PRIORITY.technique);
  }),
  ...blogs.map((s) => url(`/blog/${s}`, PRIORITY.blog)),
  ...landingPages.map((s) => url(`/${s}`, PRIORITY.landing)),
  url("/team", PRIORITY.team),
  url("/blog", PRIORITY.blog),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.join("\n")}
</urlset>
`;

// ─── Write ───────────────────────────────────────────────────────────────
const PUBLIC_DIR = resolve(__dirname, "..", "public");
if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });

writeFileSync(resolve(PUBLIC_DIR, "sitemap.xml"), xml, "utf-8");
console.log(`✅ Sitemap generated: ${PUBLIC_DIR}/sitemap.xml`);
console.log(`   ${entries.length} URLs`);