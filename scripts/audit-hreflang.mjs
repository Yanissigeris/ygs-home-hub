#!/usr/bin/env node
/**
 * Post-build hreflang audit.
 *
 * For every prerendered route in dist/, verifies that the page contains
 * EXACTLY one <link rel="alternate" hreflang="X"> tag for each of:
 *   • fr-CA
 *   • en-CA
 *   • x-default
 *
 * Flags duplicates, missing entries, and unexpected hreflang values.
 *
 * Usage:  node scripts/audit-hreflang.mjs
 * Exits 1 if any route fails.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getAllSeoRoutes } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const REQUIRED = ["fr-CA", "en-CA", "x-default"];

const c = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

const routeToFile = (route) => {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
};

/** Extract all hreflang link tags as { hreflang, href } objects. */
const extractHreflangs = (html) => {
  const tags = [];
  const re = /<link\b[^>]*\bhreflang=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const hrefMatch = m[0].match(/\bhref=["']([^"']+)["']/i);
    tags.push({ hreflang: m[1], href: hrefMatch ? hrefMatch[1] : null, raw: m[0] });
  }
  return tags;
};

const failures = [];

async function auditRoute(route) {
  const file = routeToFile(route);
  let html;
  try {
    html = await fs.readFile(file, "utf8");
  } catch {
    failures.push({
      route,
      kind: "missing-file",
      detail: `Prerendered file not found: ${path.relative(DIST, file)}`,
    });
    return;
  }

  const tags = extractHreflangs(html);
  const counts = tags.reduce((acc, t) => {
    acc[t.hreflang] = (acc[t.hreflang] || 0) + 1;
    return acc;
  }, {});

  const issues = [];

  // Missing required values
  for (const lang of REQUIRED) {
    if (!counts[lang]) issues.push(`missing hreflang="${lang}"`);
  }

  // Duplicates of any value
  for (const [lang, n] of Object.entries(counts)) {
    if (n > 1) issues.push(`${n}× hreflang="${lang}" (expected 1)`);
  }

  // Unexpected hreflang values
  for (const lang of Object.keys(counts)) {
    if (!REQUIRED.includes(lang)) issues.push(`unexpected hreflang="${lang}"`);
  }

  // Total tag count check
  if (tags.length !== REQUIRED.length) {
    issues.push(`total ${tags.length} hreflang tags (expected ${REQUIRED.length})`);
  }

  if (issues.length) {
    failures.push({
      route,
      kind: "hreflang-mismatch",
      detail: issues.join("; "),
      tags,
    });
  }
}

async function main() {
  try {
    await fs.access(DIST);
  } catch {
    console.error(c.red("✗ dist/ not found — run `npm run build` first."));
    process.exit(1);
  }

  const allRoutes = await getAllSeoRoutes();
  const routes = Object.keys(allRoutes);
  console.log(c.bold(`\n🔎 Auditing hreflang across ${routes.length} routes...\n`));

  await Promise.all(routes.map(auditRoute));

  if (failures.length === 0) {
    console.log(c.green(c.bold(`✓ All ${routes.length} routes have exactly 1× fr-CA, 1× en-CA, 1× x-default.\n`)));
    return;
  }

  console.log(c.red(c.bold(`✗ ${failures.length} route(s) failed:\n`)));
  for (const f of failures) {
    console.log(c.red(`  ✗ ${f.route}`));
    console.log(c.dim(`      ${f.detail}`));
    if (f.tags && f.tags.length) {
      for (const t of f.tags) {
        console.log(c.dim(`      • ${t.hreflang} → ${t.href ?? "(no href)"}`));
      }
    }
  }
  console.log();
  process.exit(1);
}

main().catch((err) => {
  console.error(c.red("Audit crashed:"), err);
  process.exit(1);
});
