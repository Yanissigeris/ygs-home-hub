import * as React from "react";
import { useLocation } from "react-router-dom";
import { withTrailingSlash } from "@/lib/url-utils";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

// (og:site_name lives statically in index.html — single source of truth)
const BASE_URL = "https://yanisgauthier.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/og-default.jpg`;

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

    /* ── Open Graph (only the per-route values; constants like og:type,
         og:site_name and twitter:card live in index.html as a single source
         of truth and are never rewritten here). ── */
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: title });
    ensureMetaTag('meta[property="og:description"]', { property: "og:description", content: description });

    const locale = isEn ? "en_CA" : "fr_CA";
    const altLocale = isEn ? "fr_CA" : "en_CA";
    ensureMetaTag('meta[property="og:locale"]', { property: "og:locale", content: locale });
    ensureMetaTag('meta[property="og:locale:alternate"]', { property: "og:locale:alternate", content: altLocale });

    /* ── Canonical URL (self-referencing, normalised with trailing slash) ── */
    const normaliseCanonical = (input: string | undefined): string => {
      if (!input) return `${BASE_URL}${withTrailingSlash(pathname)}`;
      if (input.startsWith(BASE_URL)) {
        const rest = input.slice(BASE_URL.length) || "/";
        const hashIdx = rest.search(/[?#]/);
        const pathPart = hashIdx >= 0 ? rest.slice(0, hashIdx) : rest;
        const tail = hashIdx >= 0 ? rest.slice(hashIdx) : "";
        return `${BASE_URL}${withTrailingSlash(pathPart)}${tail}`;
      }
      return input;
    };
    const canonicalUrl = normaliseCanonical(canonical);
    ensureCanonicalLink().setAttribute("href", canonicalUrl);

    /* ── og:url (matches canonical) ── */
    ensureMetaTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });

    /* ── og:image ── */
    const imageUrl = ogImage || DEFAULT_OG_IMAGE;
    ensureMetaTag('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    ensureMetaTag('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    ensureMetaTag('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });

    /* ── Twitter Card (only per-route values) ── */
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    /* ── Hreflang tags are owned by LangMeta (non-blog routes) and
         BlogArticlePage (blog routes) to avoid duplicate annotations. ── */
  }, [canonical, description, ogImage, title, pathname]);

  return null;
});

PageMeta.displayName = "PageMeta";

export default PageMeta;
