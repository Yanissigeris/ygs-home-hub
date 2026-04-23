import * as React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Home } from "lucide-react";
import { breadcrumbMap } from "@/data/breadcrumbs";
import { getPostBySlug } from "@/data/blog-posts";

const VisibleBreadcrumb = () => {
  const { pathname } = useLocation();
  const params = useParams<{ slug?: string }>();

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

  if (!config) return null;

  const isHome = (name: string) => name === "Accueil" || name === "Home";

  const allItems = [...config.trail, { name: config.current, href: pathname }];
  const parentItem = allItems.length >= 2 ? allItems[allItems.length - 2] : null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b relative"
      style={{
        backgroundColor: "var(--cream, #F7F4EE)",
        borderBottomColor: "var(--border, #e5e0d8)",
        marginTop: "var(--header-h, 70px)",
        zIndex: 51,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1240px",
          padding: "0 2.5rem",
        }}
      >
        {/* ── Desktop breadcrumb ── */}
        <ol
          className="hidden md:flex items-center list-none flex-nowrap overflow-hidden"
          style={{ padding: "0.6rem 0", gap: 0 }}
        >
          {config.trail.map((crumb, i) => (
            <React.Fragment key={crumb.href}>
              <li className="flex items-center shrink-0" style={{ whiteSpace: "nowrap" }}>
                <Link
                  to={crumb.href}
                  className="flex items-center gap-1 no-underline transition-colors"
                  style={{
                    color: "var(--muted, #647580)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold, #C4A265)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted, #647580)")}
                >
                  {i === 0 && isHome(crumb.name) && <Home size={12} className="shrink-0" />}
                  <span>{crumb.name}</span>
                </Link>
              </li>
              <li
                aria-hidden="true"
                className="shrink-0 select-none"
                style={{
                  margin: "0 0.5rem",
                  color: "var(--border, #e5e0d8)",
                  fontSize: "0.65rem",
                }}
              >
                ›
              </li>
            </React.Fragment>
          ))}
          <li
            className="shrink-0"
            aria-current="page"
            style={{
              color: "var(--ink, #17303B)",
              fontSize: "0.72rem",
              fontWeight: 600,
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {config.current}
          </li>
        </ol>

        {/* ── Mobile breadcrumb: "‹ Parent" back link ── */}
        {parentItem && (
          <div
            className="flex md:hidden items-center"
            style={{ padding: "0.5rem 0" }}
          >
            <Link
              to={parentItem.href}
              className="flex items-center gap-1 no-underline"
              style={{
                color: "var(--muted, #647580)",
                fontSize: "0.72rem",
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: "0.8rem" }}>‹</span>
              <span>{parentItem.name}</span>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        nav[aria-label="Breadcrumb"] { margin-top: 70px; }
        @media (max-width: 767px) {
          nav[aria-label="Breadcrumb"] { margin-top: 56px; }
          nav[aria-label="Breadcrumb"] > div {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default VisibleBreadcrumb;
