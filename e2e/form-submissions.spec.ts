import { test, expect } from "../playwright-fixture";

test("EN contact form shows success after submission", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Fill required fields
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Phone").fill("613-555-1234");

  // Submit
  await page.getByRole("button", { name: "Send my request" }).click();

  // Success message should appear
  await expect(page.getByText("Thank you")).toBeVisible();
});

test("EN valuation form shows success after submission", async ({ page }) => {
  await page.goto("/en/home-valuation");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Property address").fill("123 Test St, Gatineau");
  await page.getByLabel("Name").fill("Test User");
  await page.getByLabel("Email").fill("test@example.com");

  await page.getByRole("button", { name: "Get my free valuation" }).click();

  await expect(page.getByText("Request sent")).toBeVisible();
});

test("FR contact form shows success after submission", async ({ page }) => {
  await page.goto("/contact-yanis");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Nom").fill("Test Utilisateur");
  await page.getByLabel("Courriel").fill("test@example.com");

  await page.getByRole("button", { name: /envoyer/i }).click();

  await expect(page.getByText("Merci")).toBeVisible();
});

test("FR valuation form shows success after submission", async ({ page }) => {
  await page.goto("/evaluation-gratuite-gatineau");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByLabel("Adresse de la propriété").fill("123 rue Test, Gatineau");
  await page.getByLabel("Nom").fill("Test Utilisateur");
  await page.getByLabel("Courriel").fill("test@example.com");

  await page.getByRole("button", { name: /obtenir/i }).click();

  await expect(page.getByText("Merci")).toBeVisible();
});
