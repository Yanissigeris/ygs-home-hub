import * as React from "react";
import { useLocation } from "react-router-dom";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SITE = "YGS";
const BASE_URL = "https://yanisgauthier.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/og-default.jpg`;

/** FR→EN path mapping — single source of truth, mirrors LanguageSwitch */
const frToEn: Record<string, string> = {
  "/": "/en",
  "/proprietes": "/en/properties",
  "/vendre-ma-maison-gatineau": "/en/sell",
  "/evaluation-gratuite-gatineau": "/en/home-valuation",
  "/plan-vendeur-gatineau": "/en/seller-plan",
  "/guide-vendeur-gatineau": "/en/seller-guide",
  "/quand-vendre-a-gatineau": "/en/when-to-sell",
  "/vendre-un-plex-a-gatineau": "/en/sell-plex",
  "/acheter-a-gatineau": "/en/buy",
  "/consultation-acheteur": "/en/buyer-consultation",
  "/guide-acheteur-gatineau": "/en/buyer-guide",
  "/premier-achat-gatineau": "/en/first-time-buyer",
  "/acheter-a-gatineau-depuis-ottawa": "/en/buy-from-ottawa",
  "/relocalisation-ottawa-gatineau": "/en/relocation",
  "/relocalisation-montreal-gatineau": "/en/montreal-relocation",
  "/guide-relocalisation-gatineau": "/en/relocation-guide",
  "/quartiers-a-considerer-a-gatineau": "/en/neighborhoods",
  "/militaire-gatineau": "/en/military",
  "/relocalisation-militaire-gatineau": "/en/military-relocation",
  "/acheter-comme-militaire-gatineau": "/en/military-buyer",
  "/vendre-lors-dune-mutation-gatineau": "/en/military-seller",
  "/guide-militaire-gatineau": "/en/military-guide",
  "/investir-plex-gatineau": "/en/plex",
  "/analyse-plex-gatineau": "/en/plex-analysis",
  "/rapport-marche-gatineau": "/en/market-report",
  "/plateau-aylmer": "/en/plateau-aylmer",
  "/hull": "/en/hull",
  "/buckingham-masson-angers": "/en/buckingham",
  "/gatineau": "/en/gatineau",
  "/aylmer": "/en/aylmer",
  "/plateau": "/en/plateau",
  "/ressources": "/en/resources",
  "/vivre-a-aylmer": "/en/living-aylmer",
  "/vivre-a-hull": "/en/living-hull",
  "/vivre-dans-le-plateau": "/en/living-plateau",
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
  "/merci": "/en/thank-you",
  "/merci-evaluation": "/en/thank-you-valuation",
  "/blogue": "/en/blog",
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

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
  return element;
};

const ensureCanonicalLink = () => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  return element;
};

const ensureHreflangLink = (lang: string): HTMLLinkElement => {
  const selector = `link[rel="alternate"][hreflang="${lang}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", lang);
    document.head.appendChild(element);
  }
  return element;
};

const removeHreflangLinks = () => {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
};

const PageMeta = React.forwardRef<HTMLSpanElement, PageMetaProps>(({ title, description, canonical, ogImage }, _ref) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    /* ── Title ── */
    document.title = title;

    /* ── html lang attribute ── */
    const isEn = pathname.startsWith("/en");
    document.documentElement.lang = isEn ? "en" : "fr";

    /* ── Meta description ── */
    ensureMetaTag('meta[name="description"]', { name: "description", content: description });

    /* ── Open Graph ── */
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
    ensureMetaTag('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMetaTag('meta[property="og:site_name"]', { property: "og:site_name", content: SITE });
    ensureMetaTag('meta[property="og:type"]', { property: "og:type", content: "website" });

    const locale = isEn ? "en_CA" : "fr_CA";
    const altLocale = isEn ? "fr_CA" : "en_CA";
    ensureMetaTag('meta[property="og:locale"]', { property: "og:locale", content: locale });
    ensureMetaTag('meta[property="og:locale:alternate"]', { property: "og:locale:alternate", content: altLocale });

    /* ── Canonical URL (self-referencing) ── */
    const canonicalUrl = canonical || `${BASE_URL}${pathname}`;
    ensureCanonicalLink().setAttribute("href", canonicalUrl);

    /* ── og:url (matches canonical) ── */
    ensureMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });

    /* ── og:image ── */
    const imageUrl = ogImage || DEFAULT_OG_IMAGE;
    ensureMetaTag('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    ensureMetaTag('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    ensureMetaTag('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });

    /* ── Twitter Card ── */
    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    /* ── Hreflang tags ── */
    removeHreflangLinks();

    /* Handle dynamic blog article routes */
    let frPath: string | null = isEn ? (enToFr[pathname] ?? null) : pathname;
    let enPath: string | null = isEn ? pathname : (frToEn[pathname] ?? null);

    const frBlogMatch = pathname.match(/^\/blogue\/(.+)$/);
    const enBlogMatch = pathname.match(/^\/en\/blog\/(.+)$/);
    if (frBlogMatch) {
      frPath = pathname;
      enPath = null;
    }
    if (enBlogMatch) {
      enPath = pathname;
      frPath = null;
    }

    if (frPath && enPath) {
      ensureHreflangLink("fr-CA").setAttribute("href", `${BASE_URL}${frPath}`);
      ensureHreflangLink("en-CA").setAttribute("href", `${BASE_URL}${enPath}`);
      ensureHreflangLink("x-default").setAttribute("href", `${BASE_URL}${frPath}`);
    }

    return () => { removeHreflangLinks(); };
  }, [canonical, description, ogImage, title, pathname]);

  return null;
});

PageMeta.displayName = "PageMeta";

export default PageMeta;
