import * as React from "react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";
import { propertyImages } from "@/data/property-images";
import { formatSector } from "@/lib/format-sector";


interface FeaturedPropertiesProps {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    overline: "PROPRIÉTÉS EN VEDETTE",
    title: "Mes propriétés",
    viewAll: "Voir toutes les propriétés",
    viewAllHref: "/proprietes/",
    viewProperty: "Voir la propriété",
    statusNew: "Nouveau",
    statusSold: "Vendu",
    statusFeatured: "En vedette",
    askingPrice: "Prix demandé",
  },
  en: {
    overline: "FEATURED PROPERTIES",
    title: "My Properties",
    viewAll: "View all properties",
    viewAllHref: "/en/properties/",
    viewProperty: "View property",
    statusNew: "New",
    statusSold: "Sold",
    statusFeatured: "Featured",
    askingPrice: "Asking price",
  },
};

type PropertyLike = (typeof properties)[number];
type Strings = (typeof t)["fr"];



const PropertyCard = ({ p, strings, lang }: { p: PropertyLike; strings: Strings; lang: string }) => {
  

  return (
    <a
      href={p.remaxUrl}
      target="_blank"
      rel="noopener noreferrer"
      
      className="group flex flex-col h-full"
      style={{ background: "var(--white)", borderRadius: 20, overflow: "hidden", transition: "transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.5s cubic-bezier(.16,1,.3,1)" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 4px 0 var(--gold), 0 24px 48px var(--gold3)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {(() => {
          const set = propertyImages[p.id as string];
          // Fallback to legacy single image if id not in map
          if (!set) {
            return (
              <img
                src={p.image}
alt={`${p.type} à ${p.city}, ${p.address}, YGS Yanis Gauthier-Sigeris`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={648}
                height={486}
                style={{ transition: "transform 0.7s cubic-bezier(.16,1,.3,1)" }}
              />
            );
          }
          // Largeur utile mesurée (nov. 2026), recadrage object-cover compris : ~380 px mobile, ~385 px tablette, ~425 px ordinateur
          const sizes = "(max-width: 480px) 95vw, (max-width: 1023px) 50vw, 430px";
          return (
            <picture>
              <source type="image/avif" srcSet={set.avifSrcSet} sizes={sizes} />
              <source type="image/webp" srcSet={set.webpSrcSet} sizes={sizes} />
              <img
                src={set.fallback}
                alt={`${p.type} à ${p.city}, ${p.address}, YGS Yanis Gauthier-Sigeris`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={648}
                height={486}
                style={{ transition: "transform 0.7s cubic-bezier(.16,1,.3,1)" }}
                onLoad={(e) => { (e.target as HTMLImageElement).parentElement!.parentElement!.classList.remove("img-shimmer"); }}
                onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; const wrap = t.parentElement!.parentElement!; wrap.style.background = "var(--ink)"; wrap.classList.remove("img-shimmer"); }}
              />
            </picture>
          );
        })()}
        {/* One badge style for every status; a small dot carries the difference. */}
        <span
          className="featured-badge inline-flex items-center gap-1.5"
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "rgba(247,244,238,0.94)",
            color: "var(--ink)",
            padding: "6px 11px 6px 10px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            zIndex: 2,
            borderRadius: 999,
            boxShadow: "0 2px 8px rgba(0,14,53,0.18)",
          }}
        >
          <span
            aria-hidden="true"
            style={{ width: 6, height: 6, borderRadius: 999, background: p.status === "sold" ? "rgba(0,14,53,0.45)" : "var(--action)" }}
          />
          {p.status === "sold" ? strings.statusSold : strings.statusFeatured}
        </span>
      </div>

      {/* Accent line, shown on hover only */}
      <div className="h-[2px] transition-colors duration-300 ease-out bg-transparent group-hover:bg-[var(--gold)]" />

      {/* Card body */}
      <div className="flex flex-1 flex-col" style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        {/* Sold cards show the listing price, so say so. */}
        {p.status === "sold" && (
          <p style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5475", marginBottom: ".25rem" }}>
            {strings.askingPrice}
          </p>
        )}
        {/* Price */}
        <p style={{ fontFamily: "var(--display)", fontSize: "clamp(1.375rem, 2.5vw, 1.625rem)", fontWeight: 600, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.1, marginBottom: ".5rem" }}>
          {p.price}
        </p>

        {/* Address */}
        <p style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 400, color: "var(--muted)", marginBottom: ".75rem" }}>
          {p.address}, {formatSector(p.city)}
        </p>

        {/* Stats */}
        <p style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 400, color: "var(--muted)", marginBottom: "1.25rem" }}>
          {p.bedrooms === "—" ? (
            <>{lang === "fr" ? "Terrain" : "Land"}</>
          ) : (
            <>
              {p.bedrooms} {lang === "fr" ? "ch" : "bd"}
              <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
              {p.bathrooms} {lang === "fr" ? "sdb" : "ba"}
            </>
          )}
        </p>

        {/* View link */}
        <span className="mt-auto inline-flex items-center gap-1.5" style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 500, color: "var(--gold-text)" }}>
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
    // Ordre stratégique pour la home : flagship vendu en ouverture (signal
    // volume + prix), 3 actives variées par prix/secteur, vendu en clôture.
    const strategicOrder = [
      "11366995", // Triplex Hull/Plateau (vendu, flagship 949 900 $)
      "17464620", // Triplex 14 rue de la Cime (actif, 1 029 900 $)
      "26501194", // Condo 383 boul. des Grives (actif, 294 900 $)
      "19326119", // Quadruplex 71 rue Lessard (actif, 1 029 900 $)
      "16828271", // Maison 312 rue Le Gallois (vendu, 649 900 $)
      "15163372", // Maison Limbour (vendu, 649 900 $)
    ];
    const featured = strategicOrder
      .map((id) => allProps.find((p) => p.id === id))
      .filter((p): p is PropertyLike => p !== undefined);

    if (featured.length === 0) return null;

    const desktopList = featured.slice(0, 6);

    // Mobile: show 3 cards — 2 active + 1 sold (flagship)
    const actives = featured.filter((p) => p.status === "active").slice(0, 2);
    const sold = featured.find((p) => p.status === "sold");
    const mobileList = [...actives, ...(sold ? [sold] : [])];

    return (
      <section ref={ref} className="section-rhythm" style={{ background: "var(--cream-light)" }}>
        <div className="section-container">

          {/* Header — stack vertically on mobile */}
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              
              <h2>{strings.title}</h2>
            </div>
            <Link
              to={strings.viewAllHref}
              className="hidden sm:inline-flex items-center gap-2 transition-[gap] hover:gap-3 shrink-0"
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
            className={`hidden md:grid gap-5 md:grid-cols-2 ${
              desktopList.length === 4 ? "lg:grid-cols-2" :
              desktopList.length >= 3 ? "lg:grid-cols-3" : ""
            }`}
            style={desktopList.length < 3 ? { maxWidth: 900, marginInline: "auto" } : undefined}
          >
            {desktopList.map((p) => (
              <PropertyCard key={p.id} p={p} strings={strings} lang={lang} />
            ))}
          </div>

          {/* Mobile: horizontal scroll with skeleton loading */}
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
            {mobileList.map((p) => (
              <div key={p.id} className="shrink-0" style={{ flex: "0 0 82vw", scrollSnapAlign: "start" }}>
                <PropertyCard p={p} strings={strings} lang={lang} />
              </div>
            ))}
          </div>

          {/* Mobile link — centered below */}
          <div className="mt-5 text-center sm:hidden">
            <Link to={strings.viewAllHref} className="inline-block" style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--gold-text)", minHeight: 44, lineHeight: "44px" }}>
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
