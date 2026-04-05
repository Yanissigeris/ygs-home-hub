import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { breadcrumbMap } from "@/data/breadcrumbs";

const BASE_URL = "https://yanisgauthier.com";

const BreadcrumbJsonLd = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prev = document.getElementById("ygs-breadcrumb-jsonld");
    if (prev) prev.remove();

    const config = breadcrumbMap[pathname];
    if (!config) return;

    const items = [
      ...config.trail.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
      {
        "@type": "ListItem" as const,
        position: config.trail.length + 1,
        name: config.current,
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
  }, [pathname]);

  return null;
};

export default BreadcrumbJsonLd;
