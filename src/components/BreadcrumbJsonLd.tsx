import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { breadcrumbMap } from "@/data/breadcrumbs";
import { getPostBySlug } from "@/data/blog-posts";

const BASE_URL = "https://yanisgauthier.com";

const BreadcrumbJsonLd = () => {
  const { pathname } = useLocation();
  const params = useParams<{ slug?: string }>();

  useEffect(() => {
    const prev = document.getElementById("ygs-breadcrumb-jsonld");
    if (prev) prev.remove();

    // Try static map first
    let config = breadcrumbMap[pathname];

    // Dynamic blog article breadcrumbs
    if (!config && params.slug) {
      const isFr = pathname.startsWith("/blogue/");
      const isEn = pathname.startsWith("/en/blog/");
      if (isFr || isEn) {
        const post = getPostBySlug(params.slug);
        if (post) {
          config = isFr
            ? { trail: [{ name: "Accueil", href: "/" }, { name: "Blogue", href: "/blogue" }], current: post.title }
            : { trail: [{ name: "Home", href: "/en" }, { name: "Blog", href: "/en/blog" }], current: post.titleEn };
        }
      }
    }

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
  }, [pathname, params.slug]);

  return null;
};

export default BreadcrumbJsonLd;
