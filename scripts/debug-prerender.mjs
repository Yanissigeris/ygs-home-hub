/**
 * Debug helper: run Puppeteer on ONE route against the existing dist/ build
 * and print every pageerror / console.error / requestfailed.
 *
 * Usage: node scripts/debug-prerender.mjs /militaire-gatineau
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import sirv from "sirv";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 4174;

const route = process.argv[2] || "/militaire-gatineau";
console.log(`\n🔍 Debugging route: ${route}\n`);

// Ensure dist exists
try { await fs.access(path.join(DIST, "index.html")); }
catch { console.error("❌ dist/ not found. Run `npm run build` first."); process.exit(1); }

const handler = sirv(DIST, { dev: false, single: false });
const server = createServer(handler);
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));
console.log(`📡 Static server: http://127.0.0.1:${PORT}\n`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
page.setDefaultNavigationTimeout(60_000);

await page.evaluateOnNewDocument(() => {
  try {
    window.__PRERENDER__ = true;
    sessionStorage.setItem("ygs_loader_seen", "true");
    localStorage.setItem("ygs_cookie_consent", "refused");
  } catch {}
});

page.on("pageerror", (err) => {
  console.log(`\n🔴 [pageerror] ${err.message}`);
  if (err.stack) console.log(err.stack.split("\n").slice(0, 5).join("\n"));
});
page.on("console", (msg) => {
  const t = msg.type();
  if (t === "error" || t === "warning") {
    console.log(`🟡 [console.${t}] ${msg.text()}`);
  }
});
page.on("requestfailed", (req) => {
  console.log(`🟠 [reqfail] ${req.url()}  →  ${req.failure()?.errorText}`);
});
page.on("response", (res) => {
  if (res.status() >= 400) {
    console.log(`🟠 [HTTP ${res.status()}] ${res.url()}`);
  }
});

const url = `http://127.0.0.1:${PORT}${route}`;
console.log(`🌐 Navigating: ${url}\n`);
const t0 = Date.now();
try {
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
  console.log(`\n✅ networkidle0 reached in ${Date.now() - t0}ms`);

  const state = await page.evaluate(() => {
    const r = document.getElementById("root");
    return {
      rootChildren: r?.children.length ?? 0,
      rootLength: r?.innerHTML.length ?? 0,
      hasMain: !!r?.querySelector("main"),
      hasHeader: !!r?.querySelector("header"),
      hasH1: !!r?.querySelector("h1"),
      h1Text: r?.querySelector("h1")?.textContent?.slice(0, 80) ?? null,
      firstChildTag: r?.firstElementChild?.tagName ?? null,
      firstChildClass: r?.firstElementChild?.className?.toString().slice(0, 80) ?? null,
      bodyClasses: document.body.className,
      title: document.title,
    };
  });
  console.log("\n📊 Root state after networkidle0:");
  console.log(JSON.stringify(state, null, 2));

  // Wait an extra 3s in case lazy chunks resolve late
  await new Promise((r) => setTimeout(r, 3000));
  const state2 = await page.evaluate(() => {
    const r = document.getElementById("root");
    return {
      rootLength: r?.innerHTML.length ?? 0,
      hasMain: !!r?.querySelector("main"),
      hasHeader: !!r?.querySelector("header"),
      hasH1: !!r?.querySelector("h1"),
      h1Text: r?.querySelector("h1")?.textContent?.slice(0, 80) ?? null,
    };
  });
  console.log("\n📊 Root state after +3s:");
  console.log(JSON.stringify(state2, null, 2));
} catch (err) {
  console.log(`\n❌ goto failed: ${err.message}`);
}

await browser.close();
server.close();
console.log("\n👋 Done.\n");
