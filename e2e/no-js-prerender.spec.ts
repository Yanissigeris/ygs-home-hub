/**
 * No-JS prerender test — true crawler simulation.
 *
 * Verifies that the static HTML emitted by `npm run build` is visible and
 * meaningful when JavaScript is disabled (mimics how Googlebot's first pass
 * and most social-network crawlers see the page).
 *
 * Strategy:
 *   1. Spin up a sirv static server on `dist/` (must be built first).
 *   2. For each sampled route, load it with JavaScript disabled.
 *   3. Assert the rendered DOM contains <main>, <h1>, <footer> and a
 *      meaningful amount of text content.
 *
 * Run:    npx playwright test e2e/no-js-prerender.spec.ts --project=chromium
 * Build:  `npm run build` must have produced dist/ first.
 */

import { test, expect, chromium, type Browser } from "@playwright/test";
import { createServer, Server } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import sirv from "sirv";
// @ts-expect-error — .mjs ESM module imported into a .spec.ts file
import { getAllSeoRoutes } from "../scripts/seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 4178;
const ORIGIN = `http://127.0.0.1:${PORT}`;

// All prerendered routes (FR + EN, including blog articles).
// Source of truth: scripts/seo-routes.mjs + blog data files.
const ROUTES = Object.keys(await getAllSeoRoutes());

let server: Server;
let browser: Browser;

test.beforeAll(async () => {
  if (!existsSync(path.join(DIST, "index.html"))) {
    throw new Error(
      `dist/index.html not found. Run \`npm run build\` before this test.`,
    );
  }
  const handler = sirv(DIST, { dev: false, etag: true, single: false });
  server = createServer((req, res) => handler(req, res));
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, "127.0.0.1", () => resolve());
  });
  // Single shared browser — launching one per test for 194 routes is too slow.
  browser = await chromium.launch({ executablePath: "/bin/chromium" });
});

test.afterAll(async () => {
  await browser?.close().catch(() => {});
  await new Promise<void>((r) => server?.close(() => r()));
});

test.describe("Prerendered HTML is crawler-friendly (JS disabled)", () => {
  test.describe.configure({ timeout: 15_000 });

  for (const route of ROUTES) {
    test(`renders content for ${route} without JavaScript`, async () => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage();

      try {
        const resp = await page.goto(`${ORIGIN}${route}`, { waitUntil: "load" });
        expect(resp?.status(), `HTTP status for ${route}`).toBe(200);

        await expect(page.locator("main").first()).toBeAttached();
        await expect(page.locator("footer").first()).toBeAttached();
        await expect(page.locator("h1").first()).toBeAttached();

        const h1Text = (await page.locator("h1").first().textContent()) ?? "";
        expect(h1Text.trim().length, `<h1> text for ${route}`).toBeGreaterThan(3);

        const bodyText = (await page.locator("body").innerText()) ?? "";
        expect(
          bodyText.replace(/\s+/g, " ").trim().length,
          `body text length for ${route}`,
        ).toBeGreaterThan(800);

        const title = await page.title();
        expect(title.length, `<title> for ${route}`).toBeGreaterThan(10);

        const desc = await page
          .locator('meta[name="description"]')
          .getAttribute("content");
        expect(desc?.length ?? 0, `meta description for ${route}`).toBeGreaterThan(30);

        const canonical = await page
          .locator('link[rel="canonical"]')
          .getAttribute("href");
        expect(canonical, `canonical for ${route}`).toBeTruthy();
      } finally {
        await context.close();
      }
    });
  }
});
