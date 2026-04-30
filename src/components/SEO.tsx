import PageMeta from "./PageMeta";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  /**
   * Kept for backward-compat with existing call sites — values are no longer
   * used because <PageMeta> derives hreflang automatically from the FR↔EN
   * route map (single source of truth, mirrors scripts/prerender.mjs).
   */
  hreflangFr?: string;
  hreflangEn?: string;
  /** Kept for backward-compat. <html lang> is derived from the pathname. */
  lang?: string;
  /** Optional OG image override. */
  ogImage?: string;
}

/**
 * Thin compatibility wrapper around <PageMeta>.
 *
 * Historically this component used react-helmet-async to write <title>,
 * <meta name=description>, <link rel=canonical> and hreflangs. <PageMeta>
 * already does all of that (and more — OG, Twitter, og:image[:w/h], dynamic
 * hreflang for blog posts) directly via the DOM. Running both at once
 * created duplicate <link rel=alternate hreflang> nodes (PageMeta calls
 * removeHreflangLinks() on every effect, then Helmet re-injected its own).
 *
 * To keep one source of truth without rewriting ~60 page imports, SEO is now
 * a transparent alias for PageMeta. Future code should import PageMeta
 * directly.
 */
export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  return <PageMeta title={title} description={description} canonical={canonical} ogImage={ogImage} />;
}
