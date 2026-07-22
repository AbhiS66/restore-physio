# Using Playwright MCP for UI Auditing & Agentic Browsing

This guide explains how to use Playwright MCP (Model Context Protocol) server for auditing UI issues in Chrome and for **agentic browsing** — where an AI agent autonomously discovers, navigates, and verifies every page on the site.

## Current Setup Status

✅ Playwright MCP server is configured in `.vscode/mcp.json`  
✅ The server is set to run with Chrome browser  
✅ Comprehensive UI audit tests created in `tests/ui-audit.spec.js`  
✅ Route manifest at `/routes.json` for agent page discovery  
✅ AI agent context file at `/llms.txt` with site overview, page types, and browsing tips  
✅ Agentic browsing tests in `tests/agentic-browsing.spec.js`  

## What is MCP?

MCP (Model Context Protocol) allows Claude to interact with external tools. The Playwright MCP server provides browser automation capabilities for testing and auditing web UIs.

## Running UI Audits

### Method 1: Using MCP Directly (If Tools Are Available)

If Claude has access to the Playwright MCP tools in your environment, you can run commands like:

- `playwright_navigate` - Navigate to a URL
- `playwright_screenshot` - Take screenshots
- `playwright_click` - Click elements
- `playwright_evaluate` - Run JavaScript in the browser

### Method 2: Running Playwright Tests Directly (Recommended)

Since you have Playwright already configured, run the comprehensive UI audit:

```bash
# Install dependencies (if not already installed)
npm install

# Run the UI audit tests
npm run test:visual

# Or run Playwright directly
npx playwright test tests/ui-audit.spec.js

# For visual tests with screenshots
npx playwright test tests/ui-audit.spec.js --project=chromium

# Generate HTML report
npx playwright show-report
```

## What Gets Audited

The `ui-audit.spec.js` test suite checks for:

### 1. Layout Issues
- **Horizontal overflow** - Detects broken layouts causing horizontal scrollbars
- **Element overlaps** - Finds elements that overlap each other incorrectly
- **Viewport boundaries** - Ensures content stays within viewport
- **Navigation consistency** - Checks navigation appears correctly across pages

### 2. Visual Consistency
- **Font sizes** - Identifies text that's too small (<10px) to read
- **Image rendering** - Checks images have proper dimensions
- **Spacing rhythm** - Detects inconsistent margins and padding
- **Button styling** - Verifies buttons have proper contrast and visibility

### 3. Responsiveness
- Tests across 4 viewport sizes:
  - Mobile (375x667)
  - Tablet (768x1024)
  - Desktop (1280x800)
  - Large Desktop (1920x1080)

### 4. Accessibility
- Color contrast verification
- Text readability
- ARIA attributes (basic checks)

### 5. Error Detection
- Console error logging
- Network failures
- Broken images
- Missing content

## Test Results

Results are saved in multiple formats:
- **HTML Report** - Visual report with screenshots: `playwright-report/index.html`
- **JSON Results** - Machine-readable data: `test-results/ui-audit-results.json`
- **Screenshots** - Visual comparisons in `test-results/`

## Viewing Results

After running tests:
```bash
# View HTML report
npx playwright show-report

# Or open the report directly in browser
open playwright-report/index.html
```

## Running in MCP Environment

If you want to use the MCP tools directly from Claude:

1. Ensure the MCP server is running: `npx -y @microsoft/mcp-server-playwright --browser chrome`
2. The tools should appear in Claude's available tools list
3. Use commands like:
   ```
   Navigate to http://localhost:5173
   Take a screenshot of the page
   Evaluate JavaScript to check for layout issues
   ```

## Common UI Issues Detected

The test suite will flag issues like:

1. **Overflow Issues**
   ```
   ❌ Horizontal scrollbar detected on mobile viewport
   ```

2. **Overlapping Elements**
   ```
   ⚠️  Potential overlap between navigation and hero text
   ```

3. **Small Font Sizes**
   ```
   ❌ Text elements found with font size < 10px
   ```

4. **Inconsistent Spacing**
   ```
   ⚠️  High variance in margin/padding detected
   ```

5. **Visual Regressions**
   ```
   ❌ Screenshot doesn't match baseline
   ```

## Configuration Files

- `.vscode/mcp.json` - MCP server configuration (for IDE integration)
- `playwright.config.js` - Playwright test configuration
- `tests/ui-audit.spec.js` - Comprehensive UI test suite

## Next Steps

1. Run the audit: `npx playwright test`
2. Review the HTML report for issues
3. Fix any critical UI bugs
4. Establish visual regression baselines: `npx playwright test --update-snapshots`
5. Integrate into CI/CD pipeline for continuous monitoring

## Troubleshooting

### If tests fail to start:
- Ensure dev server is running on port 5173
- Check that all dependencies are installed: `npm install`
- Verify Playwright browsers are installed: `npx playwright install`

### If MCP tools are not available:
- The configuration is set up correctly in `.vscode/mcp.json`
- You may need to restart Claude/VSCode for tools to appear
- Alternative: Run tests directly with `npx playwright test`

---

## Agentic Browsing with MCP

This site includes full support for **agentic browsing** — an AI agent (Claude with Playwright MCP) can autonomously navigate and verify the entire site.

### How It Works

1. **Agent Context** — The agent reads `/llms.txt` for business facts, page structure, and browsing tips
2. **Route Discovery** — The agent fetches `/routes.json` to discover all 42+ pages with metadata
3. **Systematic Crawl** — The agent visits each page, verifying rendering, SEO, and content
4. **Reporting** — The agent collects metrics and reports issues

### Agent Context (`/llms.txt`)

The file `public/llms.txt` provides a human-readable guide for AI agents with business facts, page structure for each page type, navigation tips, and example prompts. An agent should read this file first for context before crawling.

### Route Manifest (`/routes.json`)

The file `public/routes.json` is the agent's route discovery endpoint. It returns:

```json
{
  "version": 1,
  "totalRoutes": 42,
  "siteUrl": "https://www.adaptphysiotherapy.in",
  "routes": [
    { "path": "/", "pageType": "home", "label": "Home", "priority": 1.0 },
    { "path": "/physiotherapy-in-powai", "pageType": "location", "label": "Physiotherapy in Powai", "priority": 0.8 },
    ...
  ]
}
```

Every route includes: `path`, `pageType`, `label`, and `priority`. The agent uses `priority` to decide what to crawl first.

### Page Types

| Page Type  | Template           | Count | Agent Verification Strategy |
|------------|--------------------|-------|-----------------------------|
| `home`     | HomePage           | 1     | Hero, sections, schema      |
| `location` | LocationPage       | 14    | Location data, FAQs, nearby |
| `treatment` | TreatmentPage     | 3     | Content points, related locs|
| `technique` | TechniquePage     | 7     | What/how/benefits sections  |
| `service`  | ServiceDetailPage  | 9     | Approach steps, outcomes    |
| `blog`     | BlogPage           | 6     | Article body, FAQ accordion |
| `landing`  | LandingPage        | 1     | Pricing, trust signals, CTA |
| `team`     | TeamPage           | 1     | Member cards, credentials   |

### Agentic Browsing Workflow

An AI agent follows this workflow:

```
1. FETCH /routes.json               → Discover all pages
2. PRIORITIZE by pageType/priority   → High-value pages first
3. FOR each route:
   a. NAVIGATE to {path}
   b. VERIFY: no overflow, no console errors, h1 exists
   c. CHECK SEO: title, metaDescription, canonical, schema scripts
   d. SCAN: images load, internal links exist
   e. REPORT: pass/fail with details
4. CROSS-CHECK: nav consistency, unique titles, link integrity
5. SUMMARIZE: metrics, pass rate, issues found
```

### Example Agent Prompts

**Full site audit:**
> Navigate to http://localhost:5174/routes.json. Parse the JSON to discover all routes. Then visit each route and verify: page loads without overflow, h1 is present, console has no errors, and the canonical URL is correct. Report a summary.

**SEO check:**
> Fetch routes.json and visit every page. For each page, extract the title tag, meta description, canonical URL, and any JSON-LD schema scripts. Report which pages are missing any of these.

**Broken link check:**
> Fetch routes.json, then visit every page and collect all internal anchor links. Verify each link resolves to a 200 status. Report broken links.

**Mobile responsive check:**
> Set viewport to 375x667. Fetch routes.json and visit every page. Check for horizontal overflow on each page. Report which pages overflow.

### Running Agentic Tests

```bash
# Run the agentic browsing test suite (samples pages for CI speed)
npx playwright test tests/agentic-browsing.spec.js

# Run with full crawl (visits every page — slower but thorough)
npx playwright test tests/agentic-browsing.spec.js --grep "Full Agentic Crawl"

# Run SEO checks only
npx playwright test tests/agentic-browsing.spec.js --grep "SEO Metadata"

# Generate report
npx playwright show-report
```

### Regenerating the Route Manifest

After adding new pages, regenerate `public/routes.json`:

```bash
npm run build  # Vite plugin auto-generates the manifest
```

Or run the manifest generator directly:

```bash
node scripts/generate-routes-manifest.js
```

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [MCP Protocol](https://modelcontextprotocol.io/)
- [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Agentic Browsing Tests](../tests/agentic-browsing.spec.js)
- [Route Manifest](../public/routes.json)
