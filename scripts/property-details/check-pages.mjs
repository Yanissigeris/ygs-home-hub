// Vérifie des pages de propriétés (aperçu Netlify ou site en ligne) à 390 px :
// statut HTTP, débordement horizontal, sections repliables et calculatrice.
// Prend aussi une capture cellulaire et ordinateur de la première page.
// Usage : node scripts/property-details/check-pages.mjs <url-de-base> <slug> [slug ...]
//   ex. node scripts/property-details/check-pages.mjs https://deploy-preview-140--jocular-melomakarona-3cbd0c.netlify.app 45-rue-des-louveteaux
import puppeteer from "puppeteer";

const [base, ...slugs] = process.argv.slice(2);
if (!base || !slugs.length) {
  console.error("Usage : node scripts/property-details/check-pages.mjs <url-de-base> <slug> [slug ...]");
  process.exit(1);
}
const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();
let bad = 0;
for (const [i, slug] of slugs.entries()) {
  for (const path of [`/proprietes/${slug}/`, `/en/properties/${slug}/`]) {
    await page.setViewport({ width: 390, height: 844 });
    const res = await page.goto(base + path, { waitUntil: "networkidle2", timeout: 90000 });
    const r = await page.evaluate(() => ({
      wide: [...document.querySelectorAll("main section *")].filter((el) => el.getBoundingClientRect().width > 392).length,
      sections: document.querySelectorAll("main details").length,
      calculator: Boolean(document.getElementById("calculatrice")),
      title: document.title,
    }));
    const ok = res.status() === 200 && r.wide === 0 && r.sections > 0;
    if (!ok) bad++;
    console.log(`${ok ? "OK " : "KO "} ${res.status()} ${path} ${JSON.stringify(r)}`);
    if (i === 0 && path.startsWith("/proprietes/")) {
      await page.evaluate(() => {
        const b = [...document.querySelectorAll("button")].find((x) => /Tout refuser|Reject all/i.test(x.innerText));
        b?.click();
      });
      await new Promise((r) => setTimeout(r, 1200));
      await page.screenshot({ path: `capture-${slug}-cellulaire.png`, fullPage: true });
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(base + path, { waitUntil: "networkidle2", timeout: 90000 });
      await page.screenshot({ path: `capture-${slug}-ordi.png`, fullPage: true });
    }
  }
}
await browser.close();
console.log(bad ? `${bad} page(s) à corriger` : "Tout est OK");
process.exit(bad ? 1 : 0);
