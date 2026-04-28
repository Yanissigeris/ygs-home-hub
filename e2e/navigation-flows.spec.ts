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
  // The LanguageSwitch renders FR|EN with title attr
  const switchLink = page.locator("[title='Switch to English']").first();
  await switchLink.waitFor({ state: "attached", timeout: 15000 });
  await switchLink.click({ force: true });
  await expect(page).toHaveURL(/\/en/, { timeout: 15000 });
});

test("Language switch navigates EN → FR", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const switchLink = page.locator("[title='Passer en français']").first();
  await switchLink.waitFor({ state: "attached", timeout: 15000 });
  await switchLink.click({ force: true });
  await expect(page).toHaveURL(/^\/$|^\/(?!en)/, { timeout: 15000 });
});

test("CTA button in header links to valuation page (EN)", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  // Use href selector directly — the CTA is an <a> inside <header>
  const cta = page.locator("a[href='/en/home-valuation']").first();
  await cta.waitFor({ state: "attached", timeout: 15000 });
  await cta.click({ force: true });
  await expect(page).toHaveURL(/\/en\/home-valuation/, { timeout: 15000 });
});

test("Footer links navigate correctly (EN)", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  // Scroll to bottom to ensure footer is in DOM
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  const footerLink = page.locator("a[href='/en/contact']").first();
  await footerLink.waitFor({ state: "attached", timeout: 15000 });
  await footerLink.click({ force: true });
  await expect(page).toHaveURL(/\/en\/contact/, { timeout: 15000 });
});

test("404 page renders for unknown routes", async ({ page }) => {
  await page.goto("/this-page-does-not-exist", { waitUntil: "domcontentloaded" });
  // Wait for React to render — NotFound uses React.lazy
  await expect(page.getByText(/introuvable|not found|404/i)).toBeVisible({ timeout: 20000 });
});

test("Hull page primary CTA goes to local Hull valuation", async ({ page }) => {
  await page.goto("/hull", { waitUntil: "domcontentloaded" });
  const cta = page.locator('a[href="/evaluation-maison-hull"]').first();
  await expect(cta).toBeVisible({ timeout: 15000 });
});

test("Aylmer page primary CTA goes to local Aylmer valuation", async ({ page }) => {
  await page.goto("/aylmer", { waitUntil: "domcontentloaded" });
  const cta = page.locator('a[href="/evaluation-maison-aylmer"]').first();
  await expect(cta).toBeVisible({ timeout: 15000 });
});

test("FR valuation hub surfaces Hull and Aylmer local valuations", async ({ page }) => {
  await page.goto("/evaluation-gratuite-gatineau", { waitUntil: "domcontentloaded" });
  await expect(page.locator('a[href="/evaluation-maison-hull"]').first()).toBeVisible({ timeout: 15000 });
  await expect(page.locator('a[href="/evaluation-maison-aylmer"]').first()).toBeVisible({ timeout: 15000 });
});
