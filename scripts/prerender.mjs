#!/usr/bin/env node
import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const routesPath = resolve(root, 'public', 'routes.json');

if (!existsSync(dist)) {
  console.error('dist/ folder not found. Run `vite build` first.');
  process.exit(1);
}

if (!existsSync(routesPath)) {
  console.error('public/routes.json not found.');
  process.exit(1);
}

/**
 * Deduplicate <head> tags by keeping the page-specific ones set by
 * react-helmet-async.
 *
 * react-helmet-async inserts <title> at the TOP of <head> (insertBefore) but
 * appends <meta> and <link> at the END. So we keep:
 *   - <title>: first occurrence
 *   - <meta>, <link rel="canonical">: last occurrence by key
 */
function dedupHead(html) {
  // 1. <title> — Helmet inserts first → keep first
  let keptTitle = false;
  html = html.replace(/<title[^>]*>.*?<\/title>/gi, (m) => { if (keptTitle) return ''; keptTitle = true; return m; });

  // 2. <meta> — Helmet appends last → keep last by name/property/charset
  const metaByKey = {};
  html = html.replace(/<meta\s+([^>]*)>/gi, (full) => {
    const a = full.match(/<meta\s+([^>]*)>/i)[1];
    const k = (a.match(/(?:name|property|charset)\s*=\s*["']([^"']*)["']/i) || [])[1];
    if (k) { metaByKey[k.toLowerCase()] = full; return ''; }
    return full;
  });
  const metas = Object.values(metaByKey).join('\n    ');
  if (metas) html = html.replace('</head>', `${metas}\n  </head>`);

  // 3. <link rel="canonical"> — keep last
  let lastCanon = '';
  html = html.replace(/<link\s+[^>]*?rel=["']canonical["'][^>]*?>/gi, (m) => { lastCanon = m; return ''; });
  if (lastCanon) html = html.replace('</head>', `${lastCanon}\n  </head>`);

  return html;
}

const { routes } = JSON.parse(readFileSync(routesPath, 'utf-8'));
console.log(`Prerendering ${routes.length} routes...\n`);

// Start vite preview server (use local binary, not npx — avoids resolution overhead)
const viteBin = resolve(root, 'node_modules', '.bin', 'vite');
const server = spawn(viteBin, ['preview', '--port', '4173', '--strictPort', '--host', '0.0.0.0'], {
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe'],
});

const cleanup = () => { server.kill(); process.exit(); };
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Wait for server to be ready and capture the actual URL
const baseUrl = await new Promise((resolveUrl, reject) => {
  const timeout = setTimeout(() => reject(new Error('Server start timeout')), 60000);
  const handler = (data) => {
    const text = data.toString();
    const match = text.match(/Local:\s+(https?:\/\/[^\s]+)/);
    if (match) {
      clearTimeout(timeout);
      resolveUrl(match[1].replace(/\/$/, ''));
    }
  };
  server.stdout.on('data', handler);
  server.stderr.on('data', handler);
});

console.log(`Server ready at ${baseUrl}`);

const browser = await chromium.launch();
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (compatible; PrerenderBot/1.0; +https://adaptphysiotherapy.in)',
});
const page = await context.newPage();

let success = 0;
let failed = 0;

for (const route of routes) {
  const url = `${baseUrl}${route.path}`;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForSelector('#main-content', { timeout: 10000 });
    await page.waitForTimeout(300);

    const html = dedupHead(await page.content());
    const outputDir = route.path === '/' ? dist : resolve(dist, route.path.replace(/^\//, ''));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    writeFileSync(resolve(outputDir, 'index.html'), html);
    console.log(`  OK  ${route.path}`);
    success++;
  } catch (err) {
    console.error(`  FAIL ${route.path}: ${err.message}`);
    failed++;
  }
}

await browser.close();
server.kill();

console.log(`\nDone — ${success} prerendered, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);