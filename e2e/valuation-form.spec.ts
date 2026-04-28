import { test, expect } from "../playwright-fixture";

/**
 * Verifies the shared <ValuationForm> renders correctly across the 3 FR
 * valuation routes with the expected variant + address placeholder, and
 * that submission flows through the Supabase functions endpoint with the
 * correct payload (locationTag prefix on message), surfacing the standard
 * <SuccessMessage> on success.
 *
 * Uses the published host so prerendered HTML is reachable without Lovable auth.
 */

const BASE = "https://ygs-home-hub.lovable.app";

test.describe("ValuationForm — shared component across FR pages", () => {
  test("hub (/evaluation-gratuite-gatineau) renders glass variant", async ({ page }) => {
    await page.goto(`${BASE}/evaluation-gratuite-gatineau`, { waitUntil: "domcontentloaded" });

    const address = page.locator("input#address");
    await expect(address).toBeVisible();
    await expect(address).toHaveAttribute("placeholder", "123 rue Exemple, Gatineau");

    // Glass variant marker: backdrop-blur container wrapping the form
    const glass = page.locator(".backdrop-blur-xl form").first();
    await expect(glass).toBeVisible();
  });

  test("Hull (/evaluation-maison-hull) renders card variant with Hull placeholder", async ({ page }) => {
    await page.goto(`${BASE}/evaluation-maison-hull`, { waitUntil: "domcontentloaded" });

    const address = page.locator("input#address");
    await expect(address).toBeVisible();
    await expect(address).toHaveAttribute("placeholder", /Hull/);

    const card = page.locator("div.card-elevated form").first();
    await expect(card).toBeVisible();
  });

  test("Aylmer (/evaluation-maison-aylmer) renders card variant with Aylmer placeholder", async ({ page }) => {
    await page.goto(`${BASE}/evaluation-maison-aylmer`, { waitUntil: "domcontentloaded" });

    const address = page.locator("input#address");
    await expect(address).toBeVisible();
    await expect(address).toHaveAttribute("placeholder", /Aylmer/);

    const card = page.locator("form.card-elevated").first();
    await expect(card).toBeVisible();
  });

  test("Hull submit prepends [Hull] to message and shows SuccessMessage", async ({ page }) => {
    // Mock Supabase functions endpoint
    let capturedPayload: any = null;
    await page.route("**/functions/v1/send-email", async (route) => {
      const req = route.request();
      try {
        capturedPayload = req.postDataJSON();
      } catch {
        capturedPayload = req.postData();
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto(`${BASE}/evaluation-maison-hull`, { waitUntil: "domcontentloaded" });

    await page.locator("input#name").fill("Test User");
    await page.locator("input#email").fill("test@example.com");
    await page.locator("input#address").fill("123 rue Test, Hull");
    await page.locator("textarea#message").fill("3 chambres");

    await page.locator('form button[type="submit"]').click();

    // Wait for either the success message or a network round-trip
    await expect(page.getByText(/Merci! Demande envoyée|Merci|envoyée/i).first()).toBeVisible({
      timeout: 15000,
    });

    expect(capturedPayload).toBeTruthy();
    expect(capturedPayload.formType).toBe("valuation");
    expect(capturedPayload.lang).toBe("fr");
    expect(typeof capturedPayload.message).toBe("string");
    expect(capturedPayload.message.startsWith("[Hull] ")).toBe(true);
  });
});
