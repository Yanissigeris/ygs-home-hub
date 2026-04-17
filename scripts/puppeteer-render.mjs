/**
 * Puppeteer post-pass for prerender.mjs.
 *
 * Strategy:
 *   1. Serve `dist/` over HTTP via sirv (so React Router + lazy chunks resolve normally).
 *   2. For each route already written by prerender.mjs, navigate Puppeteer there.
 *   3. Wait for #root to contain rendered HTML (lazy chunks resolved).
 *   4. Read the final outerHTML of #root and write it back into the static
 *      <div id="root"></div> of the corresponding dist/<route>/index.html.
 *
 * Notes:
 *   - We KEEP the meta/JSON-LD/hreflang already injected by prerender.mjs
 *     (we only touch the empty #root div).
 *   - We DO NOT switch to hydrateRoot in main.tsx — React 18's createRoot()
 *     will re-render the tree, which is fine: the prerendered HTML acts as
 *     a visible-content fallback for crawlers and a paint-then-hydrate UX
 *     for humans. Mismatches are silent (no hydration errors are thrown).
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

import sirv from "sirv";
import puppeteer from "puppeteer";

import { SEO_ROUTES } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const PORT = 4173;
const CONCURRENCY = 1; // Sequential — Chromium becomes unstable under parallel newPage() load
const NAV_TIMEOUT = 60_000;

/** Replace the (empty) <div id="root"></div> of a static file with rendered HTML. */
async function injectRootHtml(filePath, rootInnerHtml) {
  let html;
  try {
    html = await fs.readFile(filePath, "utf8");
  } catch {
    return false;
  }

  // Match <div id="root"> ... </div> (current build always emits empty)
  const re = /<div id="root">[\s\S]*?<\/div>/i;
  if (!re.test(html)) return false;

  const replacement = `<div id="root">${rootInnerHtml}</div>`;
  html = html.replace(re, replacement);
  await fs.writeFile(filePath, html, "utf8");
  return true;
}

/** Start a sirv static server bound to dist/. Returns { close }. */
function startStaticServer(distDir) {
  const handler = sirv(distDir, {
    dev: false,
    etag: true,
    single: false, // we already wrote per-route index.html files
  });
  const server = createServer((req, res) => handler(req, res));
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, "127.0.0.1", () => {
      resolve({
        close: () => new Promise((r) => server.close(() => r())),
      });
    });
  });
}

/** Render a single route and write its HTML back into dist. */
async function renderRoute(browser, route) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(NAV_TIMEOUT);

  // Block heavy/non-essential assets to speed things up.
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const t = req.resourceType();
    if (t === "image" || t === "media" || t === "font") {
      req.abort();
    } else {
      req.continue();
    }
  });

  // Capture page errors and console messages for debugging.
  page.on("pageerror", (err) => console.log(`[pageerror ${route}]`, err.message));
  page.on("console", (msg) => {
    const t = msg.type();
    if (t === "error" || t === "warning") {
      console.log(`[console.${t} ${route}]`, msg.text());
    }
  });
  page.on("requestfailed", (req) => {
    console.log(`[reqfail ${route}]`, req.url(), req.failure()?.errorText);
  });

  const url = `http://127.0.0.1:${PORT}${route}`;
  try {
    // Mark loader as already-seen so BrandedLoader returns null on first paint.
    // This avoids capturing the splash screen instead of the actual page.
    await page.evaluateOnNewDocument(() => {
      try {
        sessionStorage.setItem("ygs_loader_seen", "true");
        // Pre-set cookie consent to suppress the bottom banner during snapshot.
        localStorage.setItem("ygs_cookie_consent", "refused");
      } catch {}
    });

    await page.goto(url, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT });

    // Wait for a real content element (header / main / h1) to be present.
    // The BrandedLoader sets position:fixed with z-index 99999 and is the only
    // child until React mounts the routed page. Wait until #root has more than
    // just that loader OR contains a <main>/<header>/<h1>.
    await page.waitForFunction(
      () => {
        const r = document.getElementById("root");
        if (!r) return false;
        if (r.querySelector("main") || r.querySelector("header") || r.querySelector("h1")) {
          return true;
        }
        // Fallback: substantive HTML beyond the splash loader (~500 chars)
        return r.innerHTML.length > 3000;
      },
      { timeout: NAV_TIMEOUT, polling: 200 },
    );

    // Give lazy-loaded sections (LazySection, framer-motion, etc.) one more tick.
    await new Promise((r) => setTimeout(r, 300));

    const rootHtml = await page.evaluate(() => {
      const r = document.getElementById("root");
      return r ? r.innerHTML : "";
    });

    if (!rootHtml || rootHtml.length < 500) {
      console.warn(`⚠️  ${route}: short root HTML (${rootHtml.length}b), skipping.`);
      return false;
    }

    // Find the corresponding dist file.
    const filePath =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.replace(/^\//, ""), "index.html");

    const ok = await injectRootHtml(filePath, rootHtml);
    return ok;
  } catch (err) {
    console.warn(`⚠️  ${route}: ${err.message}`);
    return false;
  } finally {
    await page.close().catch(() => {});
  }
}

/** Process routes in batches with limited concurrency. */
async function runWithConcurrency(items, worker, limit) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
    }
  });
  await Promise.all(workers);
  return results;
}

export async function puppeteerRender({ extraRoutes = [] } = {}) {
  const routes = [...Object.keys(SEO_ROUTES), ...extraRoutes];
  console.log(`\n🤖 Puppeteer prerender: ${routes.length} routes…`);

  const server = await startStaticServer(DIST);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const t0 = Date.now();
  let ok = 0;
  let fail = 0;

  try {
    const results = await runWithConcurrency(
      routes,
      async (route) => renderRoute(browser, route),
      CONCURRENCY,
    );
    for (const r of results) (r ? ok++ : fail++);
  } finally {
    await browser.close().catch(() => {});
    await server.close().catch(() => {});
  }

  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`✅ Puppeteer: ${ok} rendered, ${fail} failed/skipped in ${secs}s\n`);
}
