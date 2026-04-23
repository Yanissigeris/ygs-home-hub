import * as React from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useParams } from "react-router-dom";
import { breadcrumbMap } from "@/data/breadcrumbs";
import { getPostBySlug } from "@/data/blog-posts";

const VisibleBreadcrumb = () => {
  const { pathname } = useLocation();
  const params = useParams<{ slug?: string }>();
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

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

  // Hide on home pages
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/en/";

  // Locate insertion point: immediately after the hero element
  React.useEffect(() => {
    if (!config || isHomePage) {
      setContainer(null);
      return;
    }

    let mountNode: HTMLDivElement | null = null;
    let cancelled = false;

    const tryMount = () => {
      if (cancelled) return;
      const hero = document.querySelector<HTMLElement>("[data-hero-dark]");
      if (!hero || !hero.parentNode) {
        // Retry once DOM settles
        requestAnimationFrame(tryMount);
        return;
      }
      // Remove any stale node
      const existing = document.getElementById("ygs-breadcrumb-mount");
      if (existing) existing.remove();

      mountNode = document.createElement("div");
      mountNode.id = "ygs-breadcrumb-mount";
      hero.parentNode.insertBefore(mountNode, hero.nextSibling);
      setContainer(mountNode);
    };

    tryMount();

    return () => {
      cancelled = true;
      if (mountNode && mountNode.parentNode) {
        mountNode.parentNode.removeChild(mountNode);
      }
      setContainer(null);
    };
  }, [pathname, config, isHomePage]);

  if (!config || isHomePage || !container) return null;

  const node = (
    <nav
      aria-label="Breadcrumb"
      className="ygs-breadcrumb-nav w-full"
      style={{ background: "transparent", padding: "12px 5%" }}
    >
      <ol
        className="flex items-center list-none flex-wrap"
        style={{ gap: 0, margin: 0, padding: 0 }}
      >
        {config.trail.map((crumb, i) => (
          <React.Fragment key={crumb.href}>
            <li className="flex items-center" style={{ whiteSpace: "nowrap" }}>
              <Link
                to={crumb.href}
                className="ygs-breadcrumb-link no-underline"
                style={{ color: "#888", fontSize: "0.75rem", fontWeight: 500 }}
              >
                {crumb.name}
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="select-none"
              style={{ margin: "0 0.5rem", color: "#aaa", fontSize: "0.75rem" }}
            >
              ›
            </li>
          </React.Fragment>
        ))}
        <li
          aria-current="page"
          style={{
            color: "#888",
            fontSize: "0.75rem",
            fontWeight: 500,
            maxWidth: "260px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {config.current}
        </li>
      </ol>

      <style>{`
        .ygs-breadcrumb-link { transition: color 0.15s ease; }
        .ygs-breadcrumb-link:hover { color: #222831 !important; }
        @media (max-width: 767px) {
          .ygs-breadcrumb-nav { padding: 10px 20px !important; }
          .ygs-breadcrumb-nav a,
          .ygs-breadcrumb-nav li[aria-current="page"],
          .ygs-breadcrumb-nav li[aria-hidden="true"] {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </nav>
  );

  return createPortal(node, container);
};

export default VisibleBreadcrumb;
