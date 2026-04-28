import { test } from "../playwright-fixture";
test("probe", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await ctx.addCookies([{ name: "ygs_avatar_intent", value: "investir", domain: "ygs-home-hub.lovable.app", path: "/" }]);
  await page.goto("https://ygs-home-hub.lovable.app/blogue");
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
  await page.waitForTimeout(1500);
  const data = await page.locator("div.fixed").evaluateAll((els) =>
    els.map((el) => ({
      cls: el.className.slice(0, 200),
      text: (el.textContent || "").slice(0, 150),
      transform: window.getComputedStyle(el).transform,
      display: window.getComputedStyle(el).display,
    })),
  );
  console.log("FIXED_COUNT", data.length);
  console.log("DATA", JSON.stringify(data, null, 2));
  // also check cookie visible to JS
  const c = await page.evaluate(() => document.cookie);
  console.log("DOC_COOKIE", c);
});
