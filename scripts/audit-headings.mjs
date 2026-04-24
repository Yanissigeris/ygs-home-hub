/**
 * Audit heading hierarchy across all prerendered pages.
 *
 * Rules enforced:
 *   1. Exactly one <h1> per page.
 *   2. No heading level skipped going down (e.g. h2 → h4 is invalid).
 *   3. First heading after <h1> must be <h2>.
 *   4. Every heading must have non-empty text content.
 *
 * Reads dist/**\/index.html (produced by `npm run build`).
 * Exits with code 1 on any violation so CI fails the build.
 *
 * Usage: node scripts/audit-headings.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

if (process.env.NETLIFY === "true") {
  console.log("⏭️  Heading audit skipped on Netlify (meta-only prerender).");
  process.exit(0);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

async function collectIndexFiles(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "assets") continue;
      await collectIndexFiles(full, out);
    } else if (e.isFile() && e.name === "index.html") {
      out.push(full);
    }
  }
  return out;
}

function routeFromFile(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  return "/" + rel.replace(/\/index\.html$/, "");
}

/**
 * Extract all headings (h1-h6) from the rendered <body>, skipping
 * <noscript>, <template> and <script> blocks (crawlers ignore them
 * for heading hierarchy purposes when JS is enabled).
 */
function extractHeadings(html) {
  // Strip <head> entirely
  const bodyStart = html.indexOf("<body");
  const body = bodyStart >= 0 ? html.slice(bodyStart) : html;

  // Strip <noscript>, <template>, <script>, <style> blocks
  const cleaned = body
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<template[\s\S]*?<\/template>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const headings = [];
  const re = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(cleaned))) {
    const level = parseInt(m[1], 10);
    const text = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    headings.push({ level, text });
  }
  return headings;
}

function validateHeadings(headings) {
  const errors = [];

  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length === 0) errors.push("missing <h1>");
  else if (h1s.length > 1)
    errors.push(`${h1s.length} <h1> tags (must be exactly 1)`);

  // Empty headings
  headings.forEach((h, i) => {
    if (h.text.length === 0) errors.push(`h${h.level} #${i + 1} is empty`);
  });

  // First non-h1 heading should be h2
  const firstAfterH1 = headings.find((h) => h.level !== 1);
  if (firstAfterH1 && firstAfterH1.level !== 2) {
    errors.push(
      `first heading after <h1> is h${firstAfterH1.level} (expected h2): "${firstAfterH1.text.slice(0, 60)}"`,
    );
  }

  // No skipped levels going deeper
  let prev = 0;
  for (const h of headings) {
    if (prev > 0 && h.level > prev + 1) {
      errors.push(
        `heading skipped: h${prev} → h${h.level} ("${h.text.slice(0, 60)}")`,
      );
    }
    prev = h.level;
  }

  return errors;
}

async function main() {
  const files = await collectIndexFiles(DIST);
  if (files.length === 0) {
    console.error("❌ Heading audit: no dist/**/index.html files found.");
    process.exit(1);
  }

  const failures = [];
  let okCount = 0;

  for (const file of files) {
    const html = await fs.readFile(file, "utf8");
    const route = routeFromFile(file);
    const headings = extractHeadings(html);
    const errors = validateHeadings(headings);

    if (errors.length > 0) {
      failures.push({ route, errors, headings });
    } else {
      okCount++;
    }
  }

  console.log(
    `\n📋 Heading hierarchy audit: ${okCount}/${files.length} pages OK`,
  );

  if (failures.length > 0) {
    console.error(`\n❌ ${failures.length} page(s) failed heading audit:\n`);
    for (const f of failures) {
      console.error(`  ${f.route}`);
      for (const err of f.errors) console.error(`     • ${err}`);
    }
    console.error("");
    process.exit(1);
  }

  console.log("✅ All pages have a valid heading hierarchy.\n");
}

main().catch((err) => {
  console.error("❌ Heading audit crashed:", err);
  process.exit(1);
});
