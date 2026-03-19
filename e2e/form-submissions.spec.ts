import { test, expect } from "../playwright-fixture";

test("EN contact form shows success after submission", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByRole("button", { name: "Send my request" }).click();

  await expect(page.getByRole("heading", { name: /demande envoyée|request sent/i })).toBeVisible();
});

test("EN valuation form shows success after submission", async ({ page }) => {
  await page.goto("/en/home-valuation");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Property address").fill("123 Test St, Gatineau");
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test@example.com");

  await page.getByRole("button", { name: "Get my free valuation" }).click();

  await expect(page.getByText("Request sent", { exact: false })).toBeVisible();
});

test("FR contact form shows success after submission", async ({ page }) => {
  await page.goto("/contact-yanis");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Nom").fill("Test Utilisateur");
  await page.getByLabel("Courriel").fill("test@example.com");

  await page.getByRole("button", { name: "Envoyer ma demande" }).click();

  await expect(page.getByRole("heading", { name: /demande envoyée/i })).toBeVisible();
});

test("FR valuation form shows success after submission", async ({ page }) => {
  await page.goto("/evaluation-gratuite-gatineau");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.locator("#adresse").fill("123 rue Test, Gatineau");
  await page.locator("#nom").fill("Test Utilisateur");
  await page.locator("#courriel").fill("test@example.com");

  await page.getByRole("button", { name: /évaluation gratuite/i }).click();

  await expect(page.getByText("Demande envoyée", { exact: false })).toBeVisible();
});
