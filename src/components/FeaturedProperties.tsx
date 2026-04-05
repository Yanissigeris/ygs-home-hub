import * as React from "react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";

interface FeaturedPropertiesProps {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    overline: "PROPRIÉTÉS EN VEDETTE",
    title: "Propriétés récentes",
    viewAll: "Voir toutes les propriétés",
    viewAllHref: "/proprietes",
    viewProperty: "Voir la propriété",
    statusNew: "Nouveau",
    statusSold: "Vendu",
    statusFeatured: "En vedette",
  },
  en: {
    overline: "FEATURED PROPERTIES",
    title: "Recent Properties",
    viewAll: "View all properties",
    viewAllHref: "/en/properties",
    viewProperty: "View property",
    statusNew: "New",
    statusSold: "Sold",
    statusFeatured: "Featured",
  },
};

const FeaturedProperties = React.forwardRef<HTMLElement, FeaturedPropertiesProps>(
  ({ lang = "fr" }, ref) => {
    const strings = t[lang];
    const allProps = lang === "en" ? propertiesEn : properties;
    const featured = allProps.filter((p) => p.status === "active").slice(0, 3);

    if (featured.length === 0) return null;

    return (
      <section ref={ref} style={{ background: "var(--cream)", padding: `clamp(3.5rem, 6vw, 7rem) 0 ${featured.length < 3 ? "4rem" : "clamp(3.5rem, 6vw, 7rem)"}` }}>
        <div className="section-container">
          {/* Header — stack vertically on mobile */}
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{strings.overline}</p>
              <h2>{strings.title}</h2>
            </div>
            <Link
              to={strings.viewAllHref}
              className="hidden sm:inline-flex items-center gap-2 transition-all hover:gap-3 shrink-0"
              style={{
                fontSize: ".8rem",
                fontWeight: 600,
                color: "var(--muted)",
                borderBottom: "2px solid var(--gold)",
                paddingBottom: 2,
              }}
            >
              {strings.viewAll} →
            </Link>
          </div>

          {/* Desktop grid */}
          <div
            className={`hidden md:grid gap-5 md:grid-cols-2 ${featured.length >= 3 ? "lg:grid-cols-3" : ""}`}
            style={featured.length < 3 ? { maxWidth: 900, marginInline: "auto" } : undefined}
          >
            {featured.map((p) => (
              <PropertyCard key={p.id} p={p} strings={strings} lang={lang} />
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div
            className="flex md:hidden overflow-x-auto overflow-y-hidden"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              gap: "1rem",
              padding: "0 1.25rem 1rem",
            }}
          >
            {featured.map((p) => (
              <div key={p.id} className="shrink-0" style={{ flex: "0 0 82vw", scrollSnapAlign: "start" }}>
                <PropertyCard p={p} strings={strings} lang={lang} />
              </div>
            ))}
          </div>

          {/* Mobile link — centered below */}
          <div className="mt-5 text-center sm:hidden">
            <Link to={strings.viewAllHref} className="inline-block" style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--gold)", minHeight: 44, lineHeight: "44px" }}>
              {strings.viewAll} →
            </Link>
          </div>
        </div>
      </section>
    );
  },
);

FeaturedProperties.displayName = "FeaturedProperties";
export default FeaturedProperties;
