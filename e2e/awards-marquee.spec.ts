import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

/**
 * Visual + readability tests for the <AwardsMarquee /> stats strip.
 * Captures the strip at key mobile widths and validates:
 *  - Element is visible
 *  - No vertical clipping (content height fits within section)
 *  - Text contrast vs background ≥ WCAG AA (4.5:1)
 *  - Font size remains readable (≥ 12px effective)
 */

const VIEWPORTS = [
  { name: "iphone-se", width: 320, height: 568 },
  { name: "iphone-12-mini", width: 360, height: 780 },
  { name: "iphone-12", width: 390, height: 844 },
  { name: "iphone-plus", width: 414, height: 896 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 720 },
];

const SCREENSHOT_DIR = path.join(process.cwd(), "e2e", "__screenshots__", "awards-marquee");

function parseRgb(rgb: string): [number, number, number] {
  const m = rgb.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (!m) throw new Error(`Cannot parse color: ${rgb}`);
  return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
}

function relLum([r, g, b]: [number, number, number]): number {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
}

function contrastRatio(fg: string, bg: string): number {
  const L1 = relLum(parseRgb(fg));
  const L2 = relLum(parseRgb(bg));
  const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

async function findMarquee(page: Page) {
  // The component animates items inside; locate by characteristic award text.
  const marquee = page.locator("section").filter({ hasText: "Hall of Fame RE/MAX" }).first();
  await marquee.scrollIntoViewIfNeeded();
  await expect(marquee).toBeVisible();
  return marquee;
}

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
});

for (const vp of VIEWPORTS) {
  test(`AwardsMarquee @ ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/", { waitUntil: "networkidle" });

    const marquee = await findMarquee(page);

    // 1. Visual snapshot
    await marquee.screenshot({
      path: path.join(SCREENSHOT_DIR, `${vp.name}.png`),
    });

    // 2. No vertical clipping: scrollHeight should equal clientHeight (±1px)
    const clipping = await marquee.evaluate((el) => {
      const inner = el.querySelector<HTMLElement>("span");
      const sec = el as HTMLElement;
      return {
        scrollH: sec.scrollHeight,
        clientH: sec.clientHeight,
        innerH: inner?.getBoundingClientRect().height ?? 0,
        secH: sec.getBoundingClientRect().height,
      };
    });
    expect(
      Math.abs(clipping.scrollH - clipping.clientH),
      `Vertical clipping detected at ${vp.name}: scroll=${clipping.scrollH} client=${clipping.clientH}`
    ).toBeLessThanOrEqual(1);
    expect(
      clipping.innerH,
      `Inner span (${clipping.innerH}px) overflows section (${clipping.secH}px)`
    ).toBeLessThanOrEqual(clipping.secH + 1);

    // 3. Contrast + font size readability
    const styles = await marquee.evaluate((el) => {
      const span = el.querySelector<HTMLElement>("span.inline-flex");
      if (!span) return null;
      const sec = el as HTMLElement;
      const sStyle = getComputedStyle(span);
      const secStyle = getComputedStyle(sec);
      return {
        color: sStyle.color,
        // backgroundColor on the section may be transparent if gradient is used;
        // fall back to a known dark stop from the gradient.
        bg: secStyle.backgroundColor,
        bgImage: secStyle.backgroundImage,
        fontSize: parseFloat(sStyle.fontSize),
        fontWeight: sStyle.fontWeight,
      };
    });
    expect(styles).not.toBeNull();

    // Use a representative dark stop if background is gradient/transparent.
    const bg =
      styles!.bg && styles!.bg !== "rgba(0, 0, 0, 0)"
        ? styles!.bg
        : "rgb(14, 38, 48)"; // #0E2630 — darkest stop of the gradient

    const ratio = contrastRatio(styles!.color, bg);
    expect(
      ratio,
      `Contrast ${ratio.toFixed(2)}:1 below WCAG AA (4.5:1) at ${vp.name}. fg=${styles!.color} bg=${bg}`
    ).toBeGreaterThanOrEqual(4.5);

    expect(
      styles!.fontSize,
      `Font size ${styles!.fontSize}px too small at ${vp.name}`
    ).toBeGreaterThanOrEqual(12);

    // 4. At least one expected award label is rendered and non-empty
    await expect(marquee).toContainText(/Hall of Fame|Club Platine|Marty Waite/i);
  });
}
