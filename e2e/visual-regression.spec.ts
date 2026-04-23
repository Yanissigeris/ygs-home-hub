import { test, expect } from "@playwright/test";

/**
 * Visual regression — captures full-page screenshots of the home (FR + EN)
 * at desktop and mobile viewports. On first run, baselines are written.
 * Subsequent runs fail if pixels diverge beyond threshold (default 0.2%).
 *
 * Use this after refactoring CSS (e.g. splitting index.css) to ensure
 * the rendered output is unchanged.
 *
 * Update baselines intentionally with:
 *   npx playwright test e2e/visual-regression.spec.ts --update-snapshots
 */

const ROUTES = [
  { name: "home-fr", path: "/" },
  { name: "home-en", path: "/en" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
];

for (const route of ROUTES) {
  for (const vp of VIEWPORTS) {
    test(`visual: ${route.name} @ ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(route.path, { waitUntil: "networkidle" });

      // Disable animations and pause the hero video for deterministic captures
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
          .reveal, .reveal-left, .reveal-right {
            opacity: 1 !important;
            transform: none !important;
          }
        `,
      });
      await page.evaluate(() => {
        document.querySelectorAll("video").forEach((v) => {
          v.pause();
          v.currentTime = 0;
        });
      });

      // Let lazy images settle
      await page.waitForTimeout(800);

      await expect(page).toHaveScreenshot(`${route.name}-${vp.name}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.002,
        animations: "disabled",
        caret: "hide",
      });
    });
  }
});
