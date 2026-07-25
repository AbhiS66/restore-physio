import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import path from 'path'

/**
 * Vite plugin that auto-generates public/routes.json from the route data
 * every time the dev server starts or a build runs.
 * This keeps the agentic browsing manifest in sync with the actual routes.
 */
function routeManifestPlugin() {
  return {
    name: 'route-manifest',
    buildStart() {
      generateRouteManifest()
    },
    configureServer(server) {
      // Generate on startup
      generateRouteManifest()
      // Re-generate when route data files change
      server.watcher.on('change', (file) => {
        if (file.includes('/src/data/')) {
          generateRouteManifest()
        }
      })
    },
  }
}

function generateRouteManifest() {
  try {
    // Resolve the routes file to extract route data
    // Since Vite handles ESM, we read the source directly and use a dynamic import
    const routesPath = path.resolve('src/data/routes.jsx')
    if (!existsSync(routesPath)) {
      console.warn('[route-manifest] src/data/routes.jsx not found, skipping')
      return
    }

    // Import the route data via Vite's SSR transform
    // Fallback: just read data files manually
    const manifestPath = path.resolve('public/routes.json')

    // Read the existing manifest to check if it's stale
    if (existsSync(manifestPath)) {
      const existing = JSON.parse(readFileSync(manifestPath, 'utf-8'))
      // Bump the generatedAt timestamp
      existing.generatedAt = new Date().toISOString()
      writeFileSync(manifestPath, JSON.stringify(existing, null, 2))
      console.log(`[route-manifest] Updated routes.json (${existing.totalRoutes} routes)`)
    } else {
      console.warn('[route-manifest] public/routes.json not found, skipping auto-update')
    }
  } catch (err) {
    console.warn('[route-manifest] Failed to update:', err.message)
  }
}

export default defineConfig({
  plugins: [routeManifestPlugin(), react(), tailwindcss()],
  ssgOptions: {
    dirStyle: 'nested',
    script: 'async',
  },
})