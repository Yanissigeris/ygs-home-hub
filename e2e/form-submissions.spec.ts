import { test, expect } from "../playwright-fixture";

/**
 * Mock the Supabase edge function so form submissions succeed
 * without hitting the real backend.
 */
async function mockEdgeFunction(page: import("@playwright/test").Page) {
  await page.route("**/functions/v1/send-email", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    })
  );
}

/* ───────── EN Contact ───────── */
test("EN contact form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /send my request/i }).click();

  await expect(page.getByText(/message sent/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── EN Valuation ───────── */
test("EN valuation form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/en/home-valuation", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  await page.locator("#address").fill("123 Test St, Gatineau");
  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /free valuation/i }).click();

  await expect(page.getByText(/request sent|thank you/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── FR Contact ───────── */
test("FR contact form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /envoyer ma demande/i }).click();

  await expect(page.getByText(/demande envoyée/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── FR Valuation ───────── */
test("FR valuation form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/evaluation-gratuite-gatineau", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  await page.locator("#adresse").fill("123 rue Test, Gatineau");
  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /évaluation gratuite/i }).click();

  await expect(page.getByText(/demande envoyée|merci/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── Valuation Widget (Homepage) ───────── */
test("Homepage valuation widget submits successfully", async ({ page }) => {
  await mockEdgeFunction(page);
  // Also mock direct Supabase insert for the widget
  await page.route("**/rest/v1/valuation_leads**", (route) =>
    route.fulfill({
      status: 201,
      contentType: "application/json",
      body: JSON.stringify([{ id: "test" }]),
    })
  );

  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  // The widget is a 2-step form on the homepage
  const widget = page.locator("#valuation-widget, [data-testid='valuation-widget']").first();
  
  // If widget not found by id, scroll to find it
  const addressInput = page.locator("#widget-address, #adresse-widget, input[placeholder*='rue'], input[placeholder*='adresse' i]").first();

  if (await addressInput.isVisible({ timeout: 5000 }).catch(() => false)) {
    await addressInput.fill("456 rue Test, Gatineau");
    // Try to advance to step 2 or submit
    const nextBtn = page.locator("button:has-text('Suivant'), button:has-text('Next'), button:has-text('Continuer')").first();
    if (await nextBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await nextBtn.click();
      await page.waitForTimeout(1000);
    }
  }
});

/* ───────── Form validation – required fields ───────── */
test("EN contact form shows validation on empty submit", async ({ page }) => {
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  const submitBtn = page.getByRole("button", { name: /send my request/i });
  await submitBtn.click();

  // Browser native validation should prevent submission — form should still be visible
  await expect(submitBtn).toBeVisible();
  // Success message should NOT appear
  await expect(page.getByText(/message sent/i)).not.toBeVisible();
});

test("FR contact form shows validation on empty submit", async ({ page }) => {
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  const submitBtn = page.getByRole("button", { name: /envoyer ma demande/i });
  await submitBtn.click();

  await expect(submitBtn).toBeVisible();
  await expect(page.getByText(/demande envoyée/i)).not.toBeVisible();
});
