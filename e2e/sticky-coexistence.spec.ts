import { test, expect } from "../playwright-fixture";

/**
 * Verify that StickyMobileCTA never co-exists with StickyGuideBanner.
 * - On a page that mounts StickyGuideBanner (e.g. /investir-plex-gatineau),
 *   StickyMobileCTA must NOT render even after scrolling past the hero.
 * - On a page without StickyGuideBanner (e.g. /faq), StickyMobileCTA SHOULD
 *   render after scrolling past the hero.
 */

const BASE = "https://ygs-home-hub.lovable.app";
const MOBILE = { width: 390, height: 844 };

async function scrollPastHero(page: import("../playwright-fixture").Page) {
  await page.evaluate(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const target = Math.min(Math.round(window.innerHeight * 1.5), Math.round(max * 0.5));
    window.scrollTo(0, target);
  });
  await page.waitForTimeout(800);
}

test("page WITH StickyGuideBanner hides StickyMobileCTA", async ({ page }) => {
  await page.setViewportSize(MOBILE);
  await page.context().clearCookies();

  await page.goto(BASE + "/investir-plex-gatineau");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Marker should exist (proves StickyGuideBanner is mounted)
  await expect(page.locator("[data-sticky-guide-banner]")).toHaveCount(1);

  await scrollPastHero(page);

  // The sticky mobile CTA renders inside `div.fixed.bottom-0` with z-[500]
  // and contains the "Appeler" tel link. Asserting that no such fixed bar
  // with the call button is visible confirms StickyMobileCTA bailed out.
  const stickyCallBtn = page.locator(
    'div.fixed.bottom-0 a[href="tel:+18192103044"]',
  );
  await expect(stickyCallBtn).toHaveCount(0);
});

test("page WITHOUT StickyGuideBanner shows StickyMobileCTA", async ({ page }) => {
  await page.setViewportSize(MOBILE);
  await page.context().clearCookies();

  await page.goto(BASE + "/faq");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // No marker on this page
  await expect(page.locator("[data-sticky-guide-banner]")).toHaveCount(0);

  await scrollPastHero(page);

  const stickyCallBtn = page.locator(
    'div.fixed.bottom-0 a[href="tel:+18192103044"]',
  );
  await expect(stickyCallBtn.first()).toBeVisible({ timeout: 10000 });
});
