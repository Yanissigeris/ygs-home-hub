/**
 * Shared guide extractor — parses the seller guide pages
 * (src/pages/SellerGuidePage.tsx and src/pages/en/SellerGuidePageEn.tsx)
 * and returns their `sellerSteps` (HowTo) and `faq` (FAQPage) arrays.
 *
 * Used by scripts/prerender.mjs to inject HowTo + FAQPage JSON-LD into the
 * server-rendered HTML for /guide-vendeur-gatineau/ and /en/seller-guide/.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SELLER_GUIDE_FR_FILE = path.resolve(__dirname, "..", "src/pages/SellerGuidePage.tsx");
const SELLER_GUIDE_EN_FILE = path.resolve(__dirname, "..", "src/pages/en/SellerGuidePageEn.tsx");

function decode(s) {
  return s.replace(/\\(["\\/bfnrt])/g, (_, c) => {
    switch (c) {
      case "n": return "\n";
      case "t": return "\t";
      case "r": return "\r";
      case "b": return "\b";
      case "f": return "\f";
      default: return c;
    }
  });
}

/** Extract objects with two double-quoted string keys from a named array const. */
function extractPairs(src, arrayName, keyA, keyB) {
  const re = new RegExp(`const\\s+${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`, "m");
  const m = src.match(re);
  if (!m) return [];
  const block = m[1];

  const itemRe = new RegExp(
    `\\{\\s*${keyA}:\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*,\\s*${keyB}:\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*\\}`,
    "g"
  );
  const items = [];
  let im;
  while ((im = itemRe.exec(block)) !== null) {
    items.push([decode(im[1]), decode(im[2])]);
  }
  return items;
}

async function extractSellerGuide(file) {
  const src = await fs.readFile(file, "utf8");
  return {
    steps: extractPairs(src, "sellerSteps", "name", "text").map(([name, text]) => ({ name, text })),
    faq: extractPairs(src, "faq", "q", "a").map(([q, a]) => ({ q, a })),
  };
}

/** FR seller guide: { steps, faq }. */
export async function extractSellerGuideFr() {
  return extractSellerGuide(SELLER_GUIDE_FR_FILE);
}

/** EN seller guide: { steps, faq }. */
export async function extractSellerGuideEn() {
  return extractSellerGuide(SELLER_GUIDE_EN_FILE);
}
