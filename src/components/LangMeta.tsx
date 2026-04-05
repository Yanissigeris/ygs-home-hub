import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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
  "/hull": "/en/hull",
  "/buckingham-masson-angers": "/en/buckingham",
  "/ressources": "/en/resources",
  "/blogue": "/en/blog",
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
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
};

const enToFr = Object.fromEntries(Object.entries(frToEn).map(([k, v]) => [v, k]));

const DOMAIN = "https://yanisgauthier.com";

/**
 * Sets <html lang> and injects hreflang <link> tags on every route change.
 */
const LangMeta = () => {
  const lang = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Set html lang
    document.documentElement.lang = lang === "en" ? "en-CA" : "fr-CA";

    // 2. Compute FR and EN URLs
    let frPath: string;
    let enPath: string;
    if (lang === "en") {
      enPath = pathname;
      frPath = enToFr[pathname] ?? "/";
    } else {
      frPath = pathname;
      enPath = frToEn[pathname] ?? "/en";
    }

    const frUrl = `${DOMAIN}${frPath}`;
    const enUrl = `${DOMAIN}${enPath}`;

    // 3. Inject/update hreflang links
    const setHreflang = (hreflang: string, href: string) => {
      const id = `hreflang-${hreflang}`;
      let link = document.getElementById(id) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.id = id;
        link.rel = "alternate";
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setHreflang("fr-CA", frUrl);
    setHreflang("en-CA", enUrl);
    setHreflang("x-default", frUrl);

    return () => {
      // cleanup on unmount (won't normally fire in SPA but good practice)
    };
  }, [lang, pathname]);

  return null;
};

export default LangMeta;
