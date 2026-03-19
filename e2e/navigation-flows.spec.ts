import { test, expect } from "../playwright-fixture";

test("EN homepage loads and has correct H1", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("FR homepage loads and has correct H1", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("Language switch navigates FR → EN", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Click the EN label in the language switch
  await page.locator("a[title='Switch to English']").click();

  // Should now be on /en
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("Language switch navigates EN → FR", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.locator("a[title='Passer en français']").click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("CTA button in header links to valuation page (EN)", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Click header CTA (desktop)
  await page.locator("header").getByRole("link", { name: /free valuation/i }).first().click();

  await expect(page).toHaveURL(/\/en\/home-valuation/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("Footer links navigate correctly (EN)", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Click a footer link
  const footerLink = page.locator("footer").getByRole("link", { name: /contact/i }).first();
  await footerLink.scrollIntoViewIfNeeded();
  await footerLink.click();

  await expect(page).toHaveURL(/\/en\/contact/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("404 page renders for unknown routes", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByText(/not found|introuvable|404/i)).toBeVisible();
});
