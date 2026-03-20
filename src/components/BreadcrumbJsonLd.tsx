import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbJsonLdProps {
  /** Trail of breadcrumb items (excluding current page — that's added automatically) */
  trail: BreadcrumbItem[];
  /** Current page name (last item, no link) */
  current: string;
}

const BASE_URL = "https://ygs-home-hub.lovable.app";

/**
 * Injects BreadcrumbList JSON-LD for Google rich breadcrumb display.
 * Automatically appends the current page as the final item.
 */
const BreadcrumbJsonLd = ({ trail, current }: BreadcrumbJsonLdProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const items = [
      ...trail.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
      {
        "@type": "ListItem" as const,
        position: trail.length + 1,
        name: current,
        item: `${BASE_URL}${pathname}`,
      },
    ];

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "ygs-breadcrumb-jsonld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [trail, current, pathname]);

  return null;
};

export default BreadcrumbJsonLd;
