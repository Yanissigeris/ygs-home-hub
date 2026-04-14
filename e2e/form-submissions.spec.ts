import { test, expect } from "../playwright-fixture";

async function mockEdgeFunction(page: import("@playwright/test").Page) {
  await page.route("**/functions/v1/send-email", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) })
  );
}

/* ───────── EN Contact ───────── */
test("EN contact form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  const nameInput = page.locator("#name");
  await nameInput.waitFor({ state: "visible", timeout: 15000 });
  await nameInput.fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /send my request/i }).click();
  await expect(page.getByText(/message sent/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── EN Valuation ───────── */
test("EN valuation form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/en/home-valuation", { waitUntil: "domcontentloaded" });
  const addr = page.locator("#address");
  await addr.waitFor({ state: "visible", timeout: 15000 });
  await addr.fill("123 Test St, Gatineau");
  await page.locator("#name").fill("Test User");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: /free valuation/i }).click();
  await expect(page.getByText(/request sent|thank you/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── FR Contact ───────── */
test("FR contact form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  const nom = page.locator("#nom");
  await nom.waitFor({ state: "visible", timeout: 15000 });
  await nom.fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /envoyer ma demande/i }).click();
  await expect(page.getByText(/demande envoyée/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── FR Valuation ───────── */
test("FR valuation form shows success after submission", async ({ page }) => {
  await mockEdgeFunction(page);
  await page.goto("/evaluation-gratuite-gatineau", { waitUntil: "domcontentloaded" });
  const addr = page.locator("#adresse");
  await addr.waitFor({ state: "visible", timeout: 15000 });
  await addr.fill("123 rue Test, Gatineau");
  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");
  await page.getByRole("button", { name: /évaluation gratuite/i }).click();
  await expect(page.getByText(/demande envoyée|merci/i)).toBeVisible({ timeout: 10000 });
});

/* ───────── Validation – required fields ───────── */
test("EN contact form shows validation on empty submit", async ({ page }) => {
  await page.goto("/en/contact", { waitUntil: "domcontentloaded" });
  const btn = page.getByRole("button", { name: /send my request/i });
  await btn.waitFor({ state: "visible", timeout: 15000 });
  await btn.click();
  await expect(btn).toBeVisible();
  await expect(page.getByText(/message sent/i)).not.toBeVisible();
});

test("FR contact form shows validation on empty submit", async ({ page }) => {
  await page.goto("/contact-yanis", { waitUntil: "domcontentloaded" });
  const btn = page.getByRole("button", { name: /envoyer ma demande/i });
  await btn.waitFor({ state: "visible", timeout: 15000 });
  await btn.click();
  await expect(btn).toBeVisible();
  await expect(page.getByText(/demande envoyée/i)).not.toBeVisible();
});
