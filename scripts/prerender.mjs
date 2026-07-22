#!/usr/bin/env node
import { chromium } from "@playwright/test";
import { spawn } from "child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");
const routesPath = resolve(root, "public", "routes.json");

if (!existsSync(dist)) {
  console.error("dist/ folder not found. Run `vite build` first.");
  process.exit(1);
}

if (!existsSync(routesPath)) {
  console.error("public/routes.json not found.");
  process.exit(1);
}

function dedupHead(html) {
  // Keep first title
  let keptTitle = false;
  html = html.replace(/<title[^>]*>.*?<\/title>/gis, (m) => {
    if (keptTitle) return "";
    keptTitle = true;
    return m;
  });

  // Keep last meta by key
  const metaByKey = {};

  html = html.replace(/<meta\s+([^>]*)>/gi, (full) => {
    const attrs = full.match(/<meta\s+([^>]*)>/i)?.[1] ?? "";
    const key =
      (
        attrs.match(
          /(?:name|property|charset)\s*=\s*["']([^"']*)["']/i
        ) || []
      )[1];

    if (key) {
      metaByKey[key.toLowerCase()] = full;
      return "";
    }

    return full;
  });

  const metas = Object.values(metaByKey).join("\n    ");

  if (metas) {
    html = html.replace("</head>", `${metas}\n  </head>`);
  }

  // Keep last canonical
  let canonical = "";

  html = html.replace(
    /<link\s+[^>]*rel=["']canonical["'][^>]*?>/gi,
    (m) => {
      canonical = m;
      return "";
    }
  );

  if (canonical) {
    html = html.replace("</head>", `${canonical}\n  </head>`);
  }

  return html;
}

const { routes } = JSON.parse(readFileSync(routesPath, "utf8"));

console.log(`Prerendering ${routes.length} routes...\n`);

const vitePath = resolve(
  root,
  "node_modules",
  "vite",
  "bin",
  "vite.js"
);

const PORT = 4173;
const baseUrl = `http://127.0.0.1:${PORT}`;

const server = spawn(
  process.execPath,
  [
    vitePath,
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(PORT),
    "--strictPort",
  ],
  {
    cwd: root,
    stdio: "inherit",
  }
);

server.on("exit", (code) => {
  if (code !== 0) {
    console.error(`Vite preview exited with code ${code}`);
  }
});

async function waitForServer(url, timeout = 60000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);

      if (res.ok) {
        return;
      }
    } catch (_) {}

    await new Promise((r) => setTimeout(r, 500));
  }

  throw new Error("Server start timeout");
}

try {
  await waitForServer(baseUrl);
  console.log(`Server ready at ${baseUrl}`);

  const browser = await chromium.launch();

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; PrerenderBot/1.0; +https://adaptphysiotherapy.in)",
  });

  const page = await context.newPage();

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;

    try {
      await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 15000,
      });

      await page.waitForSelector("#main-content", {
        timeout: 10000,
      });

      await page.waitForTimeout(300);

      const html = dedupHead(await page.content());

      const outputDir =
        route.path === "/"
          ? dist
          : resolve(dist, route.path.replace(/^\//, ""));

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(resolve(outputDir, "index.html"), html);

      console.log(`✓ ${route.path}`);

      success++;
    } catch (err) {
      console.error(`✗ ${route.path}`);
      console.error(err);

      failed++;
    }
  }

  await browser.close();

  server.kill("SIGTERM");

  console.log(
    `\nDone — ${success} prerendered, ${failed} failed`
  );

  process.exit(failed ? 1 : 0);
} catch (err) {
  console.error(err);

  server.kill("SIGTERM");

  process.exit(1);
}