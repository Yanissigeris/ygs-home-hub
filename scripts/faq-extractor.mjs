/**
 * Shared FAQ extractor — parses src/pages/FAQPage.tsx (FR) and
 * src/pages/en/FAQPageEn.tsx (EN) and returns a flat array of {q, a}
 * pairs for each language, concatenating all 4 FAQ sections
 * (sellerFaq + buyerFaq + plexFaq + militaryFaq).
 *
 * Used by scripts/prerender.mjs to inject FAQPage JSON-LD into the
 * server-rendered HTML for /faq/ and /en/faq/.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FAQ_FR_FILE = path.resolve(__dirname, "..", "src/pages/FAQPage.tsx");
const FAQ_EN_FILE = path.resolve(__dirname, "..", "src/pages/en/FAQPageEn.tsx");

/**
 * Extract an array of {q, a} pairs from a TSX file by reading the
 * constants sellerFaq, buyerFaq, plexFaq, militaryFaq.
 */
function extractFaqItemsFromSource(src) {
  const arrayNames = ["sellerFaq", "buyerFaq", "plexFaq", "militaryFaq"];
  const items = [];

  for (const name of arrayNames) {
    const re = new RegExp(`const\\s+${name}\\s*=\\s*\\[([\\s\\S]*?)\\];`, "m");
    const m = src.match(re);
    if (!m) continue;
    const block = m[1];

    const itemRe = /\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*a:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
    let im;
    while ((im = itemRe.exec(block)) !== null) {
      const decode = (s) => s.replace(/\\(["\\/bfnrt])/g, (_, c) => {
        switch (c) {
          case "n": return "\n";
          case "t": return "\t";
          case "r": return "\r";
          case "b": return "\b";
          case "f": return "\f";
          default: return c;
        }
      });
      items.push({ q: decode(im[1]), a: decode(im[2]) });
    }
  }

  return items;
}

/** Return all FR FAQ items from /faq page (4 sections concatenated). */
export async function extractFaqFr() {
  const src = await fs.readFile(FAQ_FR_FILE, "utf8");
  return extractFaqItemsFromSource(src);
}

/** Return all EN FAQ items from /en/faq page (4 sections concatenated). */
export async function extractFaqEn() {
  const src = await fs.readFile(FAQ_EN_FILE, "utf8");
  return extractFaqItemsFromSource(src);
}
