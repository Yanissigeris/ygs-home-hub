import { test, expect, type Page } from "../playwright-fixture";

/**
 * Avatar cookie router e2e:
 * - Click each pathway card on the FR homepage
 * - Assert the `ygs_avatar_intent` cookie value
 * - Navigate to a long page (/blogue) and verify the sticky mobile CTA
 *   label + href reflect the stored intent.
 */

// The id-preview host requires Lovable auth; use the published host for an
// unauthenticated end-to-end run.
const BASE = "https://ygs-home-hub.lovable.app";

const MOBILE = { width: 390, height: 844 };

const CASES = [
  {
    intent: "investir",
    cardHref: "/investir-plex-gatineau",
    expectedLabel: "Analyser mon projet →",
    expectedHref: "/investir-plex-gatineau",
  },
  {
    intent: "vendre",
    cardHref: "/vendre-ma-maison-gatineau",
    expectedLabel: "Obtenir ma valeur →",
    expectedHref: "/evaluation-gratuite-gatineau",
  },
  {
    intent: "acheter",
    cardHref: "/acheter-a-gatineau",
    expectedLabel: "Voir les propriétés →",
    expectedHref: "/proprietes",
  },
] as const;

async function readIntentCookie(page: Page): Promise<string | null> {
  const cookies = await page.context().cookies();
  const c = cookies.find((c) => c.name === "ygs_avatar_intent");
  return c ? c.value : null;
}

for (const c of CASES) {
  test(`avatar router: ${c.intent} sets cookie + personalizes sticky CTA`, async ({
    page,
  }) => {
    await page.setViewportSize(MOBILE);
    await page.context().clearCookies();

    await page.goto(BASE + "/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Target the PathwaySection card specifically (it contains an <img>),
    // not the mobile-menu nav link with the same href.
    const card = page
      .locator(`a[href="${c.cardHref}"]`)
      .filter({ has: page.locator("img") })
      .first();
    for (let i = 0; i < 12; i++) {
      if (await card.count()) break;
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(300);
    }
    await card.waitFor({ state: "visible", timeout: 15000 });
    await card.scrollIntoViewIfNeeded();
    await card.click();

    // Wait for navigation triggered by the card
    await page.waitForURL(`**${c.cardHref}`, { timeout: 15000 });

    // Cookie should now be set
    expect(await readIntentCookie(page)).toBe(c.intent);

    // The sticky CTA only mounts on the FR home page (Index.tsx).
    // Go back home with the cookie set and verify it personalizes correctly.
    await page.goto(BASE + "/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Scroll past the hero (>55vh) but stay above the footer.
    await page.evaluate(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = Math.min(Math.round(window.innerHeight * 1.5), Math.round(max * 0.5));
      window.scrollTo(0, target);
    });
    await page.waitForTimeout(800);

    // The sticky mobile CTA renders inside a fixed div with z-index 500.
    // Look for an anchor matching the expected href whose text includes the
    // intent-specific label fragment (without the trailing arrow, which can
    // be rendered separately).
    const labelFragment = c.expectedLabel.replace(/\s*→\s*$/, "");
    const stickyCta = page.locator(
      `div.fixed a[href="${c.expectedHref}"]:has-text("${labelFragment}")`,
    );
    // If the sticky CTA hasn't deployed to the published host yet, the
    // assertion below will surface that gap clearly.
    await expect(stickyCta.first()).toBeVisible({ timeout: 10000 });
  });
}
