import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { breadcrumbMap } from "@/data/breadcrumbs";

const BASE_URL = "https://yanisgauthier.com";

type BreadcrumbConfig = { trail: Array<{ name: string; href: string }>; current: string };

const writeJsonLd = (pathname: string, config: BreadcrumbConfig) => {
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
};

const BreadcrumbJsonLd = () => {
  const { pathname } = useLocation();
  const params = useParams<{ slug?: string }>();

  useEffect(() => {
    const prev = document.getElementById("ygs-breadcrumb-jsonld");
    if (prev) prev.remove();

    // Static map covers ~140 routes — synchronous, no extra fetch.
    const config = breadcrumbMap[pathname];
    if (config) {
      writeJsonLd(pathname, config);
      return () => { document.getElementById("ygs-breadcrumb-jsonld")?.remove(); };
    }

    // Blog article — lazy-load blog data only when on a blog URL.
    // Keeps ~106 KB of blog markdown out of every other page's bundle.
    if (!params.slug) return;
    const isFr = pathname.startsWith("/blogue/");
    const isEn = pathname.startsWith("/en/blog/");
    if (!isFr && !isEn) return;

    let cancelled = false;
    import("@/data/blog-posts").then(({ getPostBySlug }) => {
      if (cancelled) return;
      const post = getPostBySlug(params.slug!);
      if (!post) return;
      const dyn: BreadcrumbConfig = isFr
        ? { trail: [{ name: "Accueil", href: "/" }, { name: "Blogue", href: "/blogue/" }], current: post.title }
        : { trail: [{ name: "Home", href: "/en/" }, { name: "Blog", href: "/en/blog/" }], current: post.titleEn };
      writeJsonLd(pathname, dyn);
    });

    return () => {
      cancelled = true;
      document.getElementById("ygs-breadcrumb-jsonld")?.remove();
    };
  }, [pathname, params.slug]);

  return null;
};

export default BreadcrumbJsonLd;
