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
      <section ref={ref} style={{ background: "var(--cream)", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
        <div className="section-container">
          {/* Header */}
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

          {/* Grid */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <a
                key={p.id}
                href={p.remaxUrl}
                target="_blank"
                rel="noopener noreferrer"
                itemScope
                itemType="https://schema.org/Product"
                className="group flex flex-col transition-all duration-[350ms] ease-out"
                style={{
                  background: "var(--white, #fff)",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(23,48,59,.1)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={p.image}
                    alt={`${p.address}, ${p.city}`}
                    itemProp="image"
                    className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    width={648}
                    height={486}
                  />
                  {/* Status badge */}
                  <span
                    className="absolute"
                    style={{
                      top: "1rem",
                      left: "1rem",
                      background: "var(--gold)",
                      color: "#fff",
                      borderRadius: 20,
                      fontSize: ".62rem",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: ".25rem .75rem",
                    }}
                  >
                    {p.status === "sold"
                      ? strings.statusSold
                      : strings.statusFeatured}
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.5rem" }}>
                  <p
                    itemProp="name"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      letterSpacing: "-.02em",
                      marginBottom: ".5rem",
                    }}
                  >
                    {p.price}
                  </p>
                  <p style={{ fontSize: ".78rem", color: "var(--muted)" }}>
                    {p.type} · {p.bedrooms} {lang === "fr" ? "ch" : "bd"} · {p.bathrooms} {lang === "fr" ? "sdb" : "ba"}
                  </p>
                  <p
                    style={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginTop: ".35rem",
                    }}
                  >
                    {p.address}, {p.city}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 transition-all group-hover:gap-3"
                    style={{
                      marginTop: "1.25rem",
                      fontSize: ".75rem",
                      fontWeight: 600,
                      color: "var(--gold)",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(168,138,90,.3)",
                      paddingBottom: 2,
                    }}
                  >
                    {strings.viewProperty} →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile link */}
          <div className="mt-5 text-center sm:hidden">
            <Link to={strings.viewAllHref} style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--gold)" }}>
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
