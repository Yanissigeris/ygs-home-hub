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

const PropertyCard = ({ p, strings, lang }: { p: any; strings: any; lang: string }) => {
  const statusLabel = p.status === "sold" ? strings.statusSold : strings.statusFeatured;

  return (
    <a
      href={p.remaxUrl}
      target="_blank"
      rel="noopener noreferrer"
      
      className="group flex flex-col h-full"
      style={{ background: "#fff", borderRadius: 3, overflow: "hidden" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={p.image}
          alt={`${p.type} à ${p.city} — ${p.address} — YGS Yanis Gauthier-Sigeris`}
          
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={648}
          height={486}
          onLoad={(e) => { (e.target as HTMLImageElement).parentElement!.classList.remove("img-shimmer"); }}
          onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; t.parentElement!.style.background = "var(--ink)"; t.parentElement!.classList.remove("img-shimmer"); }}
        />
      </div>

      {/* Gold top border — hover only */}
      <div className="h-px transition-colors duration-[250ms] ease-out bg-transparent group-hover:bg-[#A88A5A]" />

      {/* Card body */}
      <div className="flex flex-1 flex-col" style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        {/* Status label */}
        <p style={{ fontFamily: "var(--sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A88A5A", marginBottom: ".5rem" }}>
          {statusLabel}
        </p>

        {/* Price */}
        <p style={{ fontFamily: "var(--serif)", fontSize: "22px", fontWeight: 700, color: "#17303B", lineHeight: 1.15, marginBottom: ".5rem" }}>
          {p.price}
        </p>

        {/* Address */}
        <p className="truncate" style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 400, color: "var(--muted)", marginBottom: ".75rem" }}>
          {p.address}, {p.city}
        </p>

        {/* Stats */}
        <p style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 400, color: "var(--muted)", marginBottom: "1.25rem" }}>
          {p.bedrooms} {lang === "fr" ? "ch" : "bd"}
          <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
          {p.bathrooms} {lang === "fr" ? "sdb" : "ba"}
        </p>

        {/* View link */}
        <span className="mt-auto inline-flex items-center gap-1.5" style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 500, color: "#A88A5A" }}>
          {strings.viewProperty}{" "}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
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
            aria-hidden="true"
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
