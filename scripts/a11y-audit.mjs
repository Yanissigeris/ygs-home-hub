import puppeteer from "puppeteer";
import fs from "node:fs";
const axe = fs.readFileSync("node_modules/axe-core/axe.min.js", "utf8");

const BASE = process.env.BASE || "https://id-preview--2943bdbe-b8b7-47f2-9d57-c3edc61fa920.lovable.app";

const ROUTES = [
  "/", "/contact-yanis", "/evaluation-gratuite-gatineau", "/vendre", "/acheter",
  "/quartiers", "/aylmer", "/hull", "/plateau-aylmer",
  "/blogue", "/foire-aux-questions", "/militaire", "/relocalisation",
  "/en", "/en/contact", "/en/home-valuation", "/en/sell", "/en/buy",
  "/en/neighborhoods", "/en/aylmer", "/en/hull", "/en/plateau-aylmer",
  "/en/blog", "/en/faq", "/en/military", "/en/relocation",
];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

async function auditOne(route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  try {
    const resp = await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 40000 });
    const status = resp ? resp.status() : 0;
    if (status >= 400) {
      return { route, status, error: `HTTP ${status}` };
    }
    await page.evaluate(axe);
    const r = await page.evaluate(async () => {
      // @ts-ignore
      return await window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a","wcag2aa","wcag21a","wcag21aa"] },
        resultTypes: ["violations"],
      });
    });
    return {
      route, status,
      violations: r.violations.map((v) => ({
        id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl,
        nodes: v.nodes.length,
        sample: v.nodes.slice(0, 2).map((n) => ({
          target: n.target.join(" "),
          html: n.html.slice(0, 200),
          fail: (n.failureSummary || "").slice(0, 300),
        })),
      })),
    };
  } catch (e) {
    return { route, error: String(e).slice(0, 200) };
  } finally {
    await page.close();
  }
}

// Run with concurrency 4
const results = [];
const queue = [...ROUTES];
async function worker() {
  while (queue.length) {
    const r = queue.shift();
    const out = await auditOne(r);
    const v = out.violations ? out.violations.length : `ERR`;
    process.stderr.write(`${out.error ? "✗" : "✓"} ${r}  ${v}\n`);
    results.push(out);
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);

await browser.close();
fs.writeFileSync("/tmp/a11y-results.json", JSON.stringify(results, null, 2));

// Aggregate
const summary = {};
for (const r of results) {
  if (!r.violations) continue;
  for (const v of r.violations) {
    if (!summary[v.id]) summary[v.id] = { id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl, totalNodes: 0, routes: [] };
    summary[v.id].totalNodes += v.nodes;
    summary[v.id].routes.push(`${r.route}(${v.nodes})`);
  }
}
fs.writeFileSync("/tmp/a11y-summary.json", JSON.stringify(Object.values(summary).sort((a,b)=>b.totalNodes-a.totalNodes), null, 2));
console.log("DONE");
