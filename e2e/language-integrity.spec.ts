import { test, expect } from "../playwright-fixture";

const frenchMarkers = [
  "questions fréquentes", "le processus", "comment ça fonctionne",
  "à vendre", "voir la fiche", "courtier", "découvrez", "obtenez",
  "réservez", "envoyer", "soumettre", "courriel", "bienvenue",
  "secteur", "en savoir plus", "mise en marché", "zéro pression",
  "votre maison", "sans engagement", "gratuit et sans", "première étape",
  "prochaine étape", "remplissez le formulaire", "prénom", "téléphone",
  "quartiers", "rendement", "accompagner", "personnalisé",
  "stratégie", "négociation", "notaire", "confidentiel",
  "prochaines minutes", "sans obligation", "immobilier",
];

const englishMarkers = [
  "how it works", "the process", "frequently asked questions",
  "for sale", "view listing", "get started", "book a call",
  "your home", "no obligation", "free and without", "first step",
  "next step", "fill out the form", "first name", "phone number",
  "neighborhoods", "return on investment", "personalized",
  "negotiation", "confidential", "real estate",
  "submit", "send", "email address", "welcome",
  "learn more", "zero pressure", "no bad surprises",
  "schedule", "download", "strategy",
];

const enPages = [
  "/en", "/en/sell", "/en/buy", "/en/buyer-guide", "/en/contact",
  "/en/neighborhoods", "/en/plateau-aylmer", "/en/buckingham",
  "/en/military", "/en/military-guide", "/en/military-buyer", "/en/military-seller",
  "/en/relocation", "/en/relocation-guide", "/en/buy-from-ottawa",
  "/en/plex", "/en/plex-analysis", "/en/first-time-buyer",
  "/en/buyer-consultation", "/en/seller-guide", "/en/hull",
  "/en/properties", "/en/faq", "/en/resources", "/en/testimonials",
  "/en/home-valuation", "/en/thank-you",
  "/en/when-to-sell", "/en/seller-plan", "/en/sell-plex",
  "/en/montreal-relocation", "/en/market-report",
  "/en/living-aylmer", "/en/living-hull", "/en/living-plateau",
  "/en/gatineau", "/en/aylmer", "/en/plateau", "/en/military-relocation",
];

const frPages = [
  "/", "/vendre-ma-maison-gatineau", "/acheter-a-gatineau", "/proprietes",
  "/militaire-gatineau", "/relocalisation-ottawa-gatineau",
  "/investir-plex-gatineau", "/quartiers-gatineau",
  "/guide-vendeur-gatineau", "/guide-acheteur-gatineau",
  "/evaluation-gratuite-gatineau", "/contact", "/faq",
  "/ressources", "/temoignages", "/premier-achat-gatineau",
];

// Split EN pages into chunks to stay within 30s timeout
const enChunks = [enPages.slice(0, 7), enPages.slice(7, 14), enPages.slice(14, 21), enPages.slice(21, 28), enPages.slice(28, 33), enPages.slice(33)];

enChunks.forEach((chunk, ci) => {
  test(`EN pages have no French text (batch ${ci + 1})`, async ({ page }) => {
    for (const url of chunk) {
      await page.goto(url);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const text = await page.evaluate(() => document.body.innerText.toLowerCase());
      const found = frenchMarkers.filter((w) => text.includes(w));
      expect(found, `French found on ${url}: ${found.join(", ")}`).toHaveLength(0);
    }
  });
});

// Split FR pages into chunks
const frChunks = [frPages.slice(0, 8), frPages.slice(8)];

frChunks.forEach((chunk, ci) => {
  test(`FR pages have no English text (batch ${ci + 1})`, async ({ page }) => {
    for (const url of chunk) {
      await page.goto(url);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const text = await page.evaluate(() => document.body.innerText.toLowerCase());
      const found = englishMarkers.filter((w) => text.includes(w));
      expect(found, `English found on ${url}: ${found.join(", ")}`).toHaveLength(0);
    }
  });
});
