import { test, expect } from "../playwright-fixture";

async function mockSupabase(page: import("@playwright/test").Page) {
  await page.route("**/functions/v1/send-email", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) })
  );
  await page.route("**/rest/v1/**", (route) => {
    if (route.request().method() === "POST") {
      return route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify([{}]) });
    }
    return route.continue();
  });
}

/* ── FR Contact ── */
test("FR contact form — submit shows success", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /envoyer ma demande/i }).click();
  await expect(page.getByText(/demande envoyée/i)).toBeVisible({ timeout: 15000 });
});

test("FR contact form — validates required fields", async ({ page }) => {
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  const btn = page.getByRole("button", { name: /envoyer ma demande/i });
  await btn.click();
  await expect(page.getByText(/demande envoyée/i)).not.toBeVisible({ timeout: 3000 });
});

/* ── EN Contact ── */
test("EN contact form — submit shows success", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /send my request/i }).click();
  await expect(page.getByText(/message sent/i)).toBeVisible({ timeout: 15000 });
});

test("EN contact form — validates required fields", async ({ page }) => {
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  const btn = page.getByRole("button", { name: /send my request/i });
  await btn.click();
  await expect(page.getByText(/message sent/i)).not.toBeVisible({ timeout: 3000 });
});

/* ── FR Valuation ── */
test("FR valuation form — submit shows success", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/evaluation-gratuite-gatineau", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator("#adresse").fill("123 rue Test, Gatineau");
  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /évaluation gratuite/i }).click();
  await expect(page.getByText(/demande envoyée/i)).toBeVisible({ timeout: 15000 });
});

/* ── EN Valuation ── */
test("EN valuation form — submit shows success", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/en/home-valuation", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator("#address").fill("123 Test St, Gatineau");
  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /free valuation/i }).click();
  await expect(page.getByText(/request sent/i)).toBeVisible({ timeout: 15000 });
});
