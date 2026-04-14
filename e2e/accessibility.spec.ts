import { test, expect } from "../playwright-fixture";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { name: "Accueil FR", path: "/" },
  { name: "Home EN", path: "/en" },
  { name: "Contact FR", path: "/contact-yanis" },
  { name: "Contact EN", path: "/en/contact" },
  { name: "FAQ FR", path: "/faq" },
  { name: "FAQ EN", path: "/en/faq" },
  { name: "Vendeur FR", path: "/vendre-maison-gatineau" },
  { name: "Buyer EN", path: "/en/buy" },
  { name: "Blogue FR", path: "/blogue" },
  { name: "Blog EN", path: "/en/blog" },
  { name: "Aylmer FR", path: "/aylmer" },
  { name: "Évaluation FR", path: "/evaluation-gratuite-gatineau" },
];

for (const pg of pages) {
  test(`WCAG 2.1 AA — ${pg.name} (${pg.path})`, async ({ page }) => {
    await page.goto(pg.path, { waitUntil: "networkidle" });
    // Wait for Suspense content
    await page.waitForTimeout(1500);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      // Exclude third-party embeds we can't control
      .exclude("iframe")
      .analyze();

    const serious = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    if (serious.length > 0) {
      const summary = serious
        .map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} instance${v.nodes.length > 1 ? "s" : ""})`
        )
        .join("\n");
      console.log(`\n⚠️  ${pg.name} violations:\n${summary}\n`);
    }

    expect(serious, `Critical/serious WCAG violations on ${pg.name}`).toHaveLength(0);
  });
}
