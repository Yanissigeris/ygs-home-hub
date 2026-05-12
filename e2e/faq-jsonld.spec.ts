import { test, expect } from "../playwright-fixture";

test("FR /faq has prerendered FAQ JSON-LD", async ({ page }) => {
  await page.goto("/faq/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const script = page.locator("script#ygs-faq-jsonld-pre");
  await expect(script).toBeAttached();
  const content = await script.evaluate((el) => el.textContent || "");
  expect(content).toContain('"@type":"FAQPage"');
});

test("EN /en/faq has prerendered FAQ JSON-LD", async ({ page }) => {
  await page.goto("/en/faq/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const script = page.locator("script#ygs-faq-jsonld-pre");
  await expect(script).toBeAttached();
  const content = await script.evaluate((el) => el.textContent || "");
  expect(content).toContain('"@type":"FAQPage"');
});
