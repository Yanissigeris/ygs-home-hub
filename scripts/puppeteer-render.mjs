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

import { getAllSeoRoutes } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const PORT = 4173;
const CONCURRENCY = 1; // Sequential — Chromium becomes unstable under parallel newPage() load
const NAV_TIMEOUT = 60_000;

/**
 * Replace the contents of <div id="root">…</div> in a static HTML file with
 * the freshly rendered React tree.
 *
 * IMPORTANT: we must correctly find the MATCHING closing </div> for #root,
 * not the first </div> we encounter. A naive non-greedy regex
 * (`<div id="root">[\s\S]*?</div>`) breaks once the root contains nested
 * <div> elements (which it always does after the first pass), causing
 * subsequent injections to leave orphan React trees stacked in the file —
 * producing duplicated <main>/<h1> tags and breaking the heading audit.
 *
 * Strategy: locate the opening tag, then walk forward counting <div>/</div>
 * pairs to find the matching close.
 */
async function injectRootHtml(filePath, rootInnerHtml) {
  let html;
  try {
    html = await fs.readFile(filePath, "utf8");
  } catch {
    return false;
  }

  const openTag = '<div id="root">';
  const start = html.indexOf(openTag);
  if (start < 0) return false;

  // Walk div tags after the opening to find the matching close.
  const tagRe = /<div\b[^>]*>|<\/div>/gi;
  tagRe.lastIndex = start + openTag.length;
  let depth = 1;
  let endIdx = -1;
  let m;
  while ((m = tagRe.exec(html))) {
    if (m[0].toLowerCase().startsWith("</")) {
      depth--;
      if (depth === 0) {
        endIdx = m.index + m[0].length; // position right after </div>
        break;
      }
    } else {
      depth++;
    }
  }
  if (endIdx < 0) return false;

  const before = html.slice(0, start);
  const after = html.slice(endIdx);
  html = `${before}<div id="root">${rootInnerHtml}</div>${after}`;
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

  // IMPORTANT: register init scripts BEFORE navigation so they run on the
  // very first document load (otherwise React mounts before our flags are set).
  await page.evaluateOnNewDocument(() => {
    try {
      // Tells LazySection to reveal immediately (capture full page, not just above-the-fold).
      window.__PRERENDER__ = true;
      // Skip splash loader so we capture real route content.
      sessionStorage.setItem("ygs_loader_seen", "true");
      // Suppress cookie banner during snapshot.
      localStorage.setItem("ygs_cookie_consent", "refused");
    } catch {}
  });

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
    await page.goto(url, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT });

    // Wait until the lazy-loaded page content is rendered inside <main>.
    // The SiteHeader (with its own <h1> logo) mounts immediately, so we cannot
    // just wait for any <h1>. We need <main> with substantial content.
    await page.waitForFunction(
      () => {
        const main = document.querySelector("main");
        if (!main) return false;
        // <main> must contain real route content, not just an empty Suspense fallback.
        return main.innerHTML.length > 1500;
      },
      { timeout: NAV_TIMEOUT, polling: 200 },
    );

    // Give framer-motion / LazySection one more tick to settle.
    await new Promise((r) => setTimeout(r, 400));

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
  const allRoutes = await getAllSeoRoutes();
  // Dedupe — blog routes are already in getAllSeoRoutes() AND may be passed
  // again via extraRoutes; rendering the same URL twice would corrupt the
  // already-injected root tree.
  const routes = Array.from(new Set([...Object.keys(allRoutes), ...extraRoutes]));
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
