import { chromium } from "@playwright/test";
(async () => {
  const browser = await chromium.launch({ executablePath: "/bin/chromium" });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto("https://ygs-home-hub.lovable.app/");
  await page.waitForTimeout(1500);
  // set cookie via card click path: simpler — set cookie directly
  await ctx.addCookies([{ name: "ygs_avatar_intent", value: "investir", domain: "ygs-home-hub.lovable.app", path: "/" }]);
  await page.goto("https://ygs-home-hub.lovable.app/blogue");
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
  await page.waitForTimeout(1500);
  const fixedDivs = await page.locator("div.fixed").count();
  const allFixed = await page.locator("div.fixed").evaluateAll((els) =>
    els.map((el) => ({
      cls: el.className,
      style: (el as HTMLElement).getAttribute("style")?.slice(0, 120),
      text: (el.textContent || "").slice(0, 120),
      hidden: window.getComputedStyle(el).display === "none",
    })),
  );
  console.log("fixed count:", fixedDivs);
  console.log(JSON.stringify(allFixed, null, 2));
  const cookies = await ctx.cookies();
  console.log("cookies:", cookies.filter(c => c.name.startsWith("ygs")));
  await browser.close();
})();
