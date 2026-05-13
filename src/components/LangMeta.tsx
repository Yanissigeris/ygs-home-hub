import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { withTrailingSlash, stripTrailingSlash } from "@/lib/url-utils";

const frToEn: Record<string, string> = {
  "/": "/en",
  "/proprietes": "/en/properties",
  "/vendre-ma-maison-gatineau": "/en/sell",
  "/evaluation-gratuite-gatineau": "/en/home-valuation",
  "/guide-vendeur-gatineau": "/en/seller-guide",
  "/acheter-a-gatineau": "/en/buy",
  "/consultation-acheteur": "/en/buyer-consultation",
  "/guide-acheteur-gatineau": "/en/buyer-guide",
  "/premier-achat-gatineau": "/en/first-time-buyer",
  "/acheter-a-gatineau-depuis-ottawa": "/en/buy-from-ottawa",
  "/relocalisation-ottawa-gatineau": "/en/relocation",
  "/guide-relocalisation-gatineau": "/en/relocation-guide",
  "/militaire-gatineau": "/en/military",
  "/acheter-comme-militaire-gatineau": "/en/military-buyer",
  "/vendre-lors-dune-mutation-gatineau": "/en/military-seller",
  "/guide-militaire-gatineau": "/en/military-guide",
  "/investir-plex-gatineau": "/en/plex",
  "/analyse-plex-gatineau": "/en/plex-analysis",
  "/quartiers-a-considerer-a-gatineau": "/en/neighborhoods",
  "/plateau-aylmer": "/en/plateau-aylmer",
  "/hull": "/en/hull",
  "/buckingham-masson-angers": "/en/buckingham",
  "/ressources": "/en/resources",
  "/blogue": "/en/blog",
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
  "/merci": "/en/thank-you",
  "/merci-evaluation": "/en/thank-you-valuation",
  "/plan-vendeur-gatineau": "/en/seller-plan",
  "/quand-vendre-a-gatineau": "/en/when-to-sell",
  "/vendre-un-plex-a-gatineau": "/en/sell-plex",
  "/relocalisation-montreal-gatineau": "/en/montreal-relocation",
  "/rapport-marche-gatineau": "/en/market-report",
  "/vivre-a-aylmer": "/en/living-aylmer",
  "/vivre-a-hull": "/en/living-hull",
  "/vivre-dans-le-plateau": "/en/living-plateau",
  "/gatineau": "/en/gatineau",
  "/aylmer": "/en/aylmer",
  "/plateau": "/en/plateau",
  "/relocalisation-militaire-gatineau": "/en/military-relocation",
  "/chelsea": "/en/chelsea",
  "/cantley": "/en/cantley",
  "/val-des-monts": "/en/val-des-monts",
  "/masson-angers": "/en/masson-angers",
  "/pontiac": "/en/pontiac",
  "/cote-dazur-gatineau": "/en/cote-dazur",
  "/limbour": "/en/limbour",
  "/courtier-immobilier-outaouais": "/en/outaouais-real-estate-agent",
  "/vendre-maison-hull": "/en/sell-house-hull",
  "/vendre-maison-aylmer": "/en/sell-house-aylmer",
  "/evaluation-maison-hull": "/en/home-valuation-hull",
  "/evaluation-maison-aylmer": "/en/home-valuation-aylmer",
  "/combien-coute-un-courtier-immobilier-au-quebec": "/en/how-much-does-a-realtor-cost-in-quebec",
  "/comment-choisir-un-courtier-immobilier": "/en/how-to-choose-a-realtor",
  "/verifier-un-courtier-immobilier-oaciq": "/en/oaciq-find-a-broker",
  "/frais-de-courtage-immobilier-quebec": "/en/realtor-commission-quebec",
  "/courtier-immobilier-ou-vendre-soi-meme": "/en/realtor-vs-selling-by-owner-quebec",
  "/politique-de-confidentialite": "/en/privacy-policy",
  "/conditions-utilisation": "/en/terms",
};

const enToFr = Object.fromEntries(Object.entries(frToEn).map(([k, v]) => [v, k]));

const DOMAIN = "https://yanisgauthier.com";

const HREFLANG_VALUES = ["fr-CA", "en-CA", "x-default"];

const removeHreflangs = () => {
  HREFLANG_VALUES.forEach((value) => {
    document.head
      .querySelectorAll(`link[rel="alternate"][hreflang="${value}"]`)
      .forEach((el) => el.remove());
  });
};

/**
 * Sets <html lang> and injects hreflang <link> tags on every route change.
 *
 * Skips routes that manage their own hreflangs (e.g. blog article pages map
 * slug → slugEn) and unmappable routes (e.g. NotFound, admin) to avoid
 * pointing to a wrong/redirected URL.
 */
const LangMeta = () => {
  const lang = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en-CA" : "fr-CA";

    // Skip self-managed routes — blog article pages inject their own
    // slug-aware hreflangs in BlogArticlePage.
    const isBlogArticle =
      /^\/blogue\/[^/]+/.test(pathname) || /^\/en\/blog\/[^/]+/.test(pathname);
    if (isBlogArticle) {
      return;
    }

    // Resolve canonical FR/EN paths via the static map.
    let frPath: string | undefined;
    let enPath: string | undefined;
    const lookupKey = stripTrailingSlash(pathname);
    if (lang === "en") {
      enPath = pathname;
      frPath = enToFr[lookupKey];
    } else {
      frPath = pathname;
      enPath = frToEn[lookupKey];
    }

    // If we don't have BOTH sides, skip rather than emit broken/redirecting
    // hreflangs (e.g. NotFound, /admin/image-gen, untranslated routes).
    if (!frPath || !enPath) {
      removeHreflangs();
      return;
    }

    const frUrl = `${DOMAIN}${withTrailingSlash(frPath)}`;
    const enUrl = `${DOMAIN}${withTrailingSlash(enPath)}`;

    const setHreflang = (hreflang: string, href: string) => {
      const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let link = document.head.querySelector<HTMLLinkElement>(selector);
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setHreflang("fr-CA", frUrl);
    setHreflang("en-CA", enUrl);
    setHreflang("x-default", frUrl);
  }, [lang, pathname]);

  return null;
};

export default LangMeta;
