# Using Playwright MCP for UI Auditing

This guide explains how to use Playwright MCP (Model Context Protocol) server for auditing UI issues in Chrome.

## Current Setup Status

✅ Playwright MCP server is configured in `.vscode/mcp.json`  
✅ The server is set to run with Chrome browser  
✅ Comprehensive UI audit tests created in `tests/ui-audit.spec.js`  

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

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [MCP Protocol](https://modelcontextprotocol.io/)
- [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp)
