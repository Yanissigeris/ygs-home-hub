import * as React from "react";
import { useLocation } from "react-router-dom";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE = "YGS — Yanis Gauthier-Sigeris";
const BASE_URL = "https://ygs-home-hub.lovable.app";

/** FR→EN path mapping (single source of truth, mirrors LanguageSwitch) */
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
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
  "/merci": "/en/thank-you",
  "/merci-evaluation": "/en/thank-you-valuation",
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

const PageMeta = React.forwardRef<HTMLSpanElement, PageMetaProps>(({ title, description, canonical }, _ref) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.title = `${title} | ${SITE}`;

    ensureMetaTag('meta[name="description"]', { name: "description", content: description });
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
    ensureMetaTag('meta[property="og:description"]', { property: "og:description", content: description });

    if (canonical) {
      ensureCanonicalLink().setAttribute("href", canonical);
    }

    // Hreflang tags
    removeHreflangLinks();

    const isEn = pathname.startsWith("/en");
    const frPath = isEn ? (enToFr[pathname] ?? null) : pathname;
    const enPath = isEn ? pathname : (frToEn[pathname] ?? null);

    if (frPath && enPath) {
      ensureHreflangLink("fr-CA").setAttribute("href", `${BASE_URL}${frPath}`);
      ensureHreflangLink("en-CA").setAttribute("href", `${BASE_URL}${enPath}`);
      ensureHreflangLink("x-default").setAttribute("href", `${BASE_URL}${frPath}`);
    }

    return () => { removeHreflangLinks(); };
  }, [canonical, description, title, pathname]);

  return null;
});

PageMeta.displayName = "PageMeta";

export default PageMeta;
