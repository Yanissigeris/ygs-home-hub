import { test, expect, type Page } from "../playwright-fixture";

/**
 * Avatar cookie router e2e:
 * - Click each pathway card on the FR homepage
 * - Assert the `ygs_avatar_intent` cookie value
 * - Navigate to a long page (/blogue) and verify the sticky mobile CTA
 *   label + href reflect the stored intent.
 */

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

    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Pathway section is below the fold — scroll until card is mounted/visible
    const card = page.locator(`a[href="${c.cardHref}"]`).first();
    for (let i = 0; i < 8; i++) {
      if (await card.count()) break;
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(250);
    }
    await card.waitFor({ state: "attached", timeout: 15000 });
    await card.scrollIntoViewIfNeeded();
    await card.click();

    // Wait for navigation triggered by the card
    await page.waitForURL(`**${c.cardHref}`, { timeout: 15000 });

    // Cookie should now be set
    expect(await readIntentCookie(page)).toBe(c.intent);

    // Go to a long page where the sticky CTA can appear without footer overlap
    await page.goto("/blogue");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Trigger the sticky bar (visible after >55vh scroll, footer not in view)
    await page.evaluate(() => window.scrollTo(0, Math.round(window.innerHeight * 0.7)));

    const stickyCta = page
      .locator(`a[href="${c.expectedHref}"]`, { hasText: c.expectedLabel })
      .last();
    await expect(stickyCta).toBeVisible({ timeout: 10000 });
    await expect(stickyCta).toHaveText(c.expectedLabel);
  });
}
