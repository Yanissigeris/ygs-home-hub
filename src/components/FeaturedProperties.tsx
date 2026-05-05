import * as React from "react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";
import { propertyImages } from "@/data/property-images";

interface FeaturedPropertiesProps {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    overline: "PROPRIÉTÉS EN VEDETTE",
    title: "Mes propriétés",
    viewAll: "Voir toutes les propriétés",
    viewAllHref: "/proprietes",
    viewProperty: "Voir la propriété",
    statusNew: "Nouveau",
    statusSold: "Vendu",
    statusFeatured: "En vedette",
  },
  en: {
    overline: "FEATURED PROPERTIES",
    title: "My Properties",
    viewAll: "View all properties",
    viewAllHref: "/en/properties",
    viewProperty: "View property",
    statusNew: "New",
    statusSold: "Sold",
    statusFeatured: "Featured",
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
      style={{ background: "var(--white)", borderRadius: 3, overflow: "hidden", transition: "transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.5s cubic-bezier(.16,1,.3,1)" }}
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
                alt={`${p.type} à ${p.city} — ${p.address} — YGS Yanis Gauthier-Sigeris`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={648}
                height={486}
                style={{ filter: "saturate(0.88)", transition: "transform 0.7s cubic-bezier(.16,1,.3,1), filter 0.5s" }}
              />
            );
          }
          // Cards display ~648px on desktop, ~half-viewport on tablet, full-width on mobile
          const sizes = "(max-width: 480px) 90vw, (max-width: 1024px) 50vw, 648px";
          return (
            <picture>
              <source
                type="image/avif"
                srcSet={`${set.avif480} 480w, ${set.avif800} 800w`}
                sizes={sizes}
              />
              <source
                type="image/webp"
                srcSet={`${set.webp480} 480w, ${set.webp800} 800w`}
                sizes={sizes}
              />
              <img
                src={set.webp800}
                alt={`${p.type} à ${p.city} — ${p.address} — YGS Yanis Gauthier-Sigeris`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={648}
                height={486}
                style={{ filter: "saturate(0.88)", transition: "transform 0.7s cubic-bezier(.16,1,.3,1), filter 0.5s" }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "saturate(1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "saturate(0.88)"; }}
                onLoad={(e) => { (e.target as HTMLImageElement).parentElement!.parentElement!.classList.remove("img-shimmer"); }}
                onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; const wrap = t.parentElement!.parentElement!; wrap.style.background = "var(--ink)"; wrap.classList.remove("img-shimmer"); }}
              />
            </picture>
          );
        })()}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: p.status === "sold" ? "var(--gold)" : "var(--ink)",
            color: "var(--white)",
            padding: "4px 10px",
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            zIndex: 2,
            boxShadow: "0 2px 8px rgba(23,48,59,0.25)",
          }}
        >
          {p.status === "sold" ? strings.statusSold : strings.statusFeatured}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.8), transparent)" }} />
      </div>

      {/* Gold top border — always visible, intensifies on hover */}
      <div className="h-[2px] transition-colors duration-300 ease-out bg-[rgba(168,138,90,0.2)] group-hover:bg-[var(--gold)]" />

      {/* Card body */}
      <div className="flex flex-1 flex-col" style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        {/* Price */}
        <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.15, marginBottom: ".5rem" }}>
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
          {p.status === "sold" && (
            <>
              <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>{lang === "fr" ? "Vendu" : "Sold"}</span>
            </>
          )}
        </p>

        {/* View link */}
        <span className="mt-auto inline-flex items-center gap-1.5" style={{ fontFamily: "var(--sans)", fontSize: "13px", fontWeight: 500, color: "var(--gold)" }}>
          {p.status === "sold"
            ? (lang === "fr" ? "Voir la fiche" : "View listing")
            : strings.viewProperty}{" "}
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
      "20453879", // Condo Hull (active, accessible 359 900 $)
      "17113358", // Maison Aylmer (active, 424 900 $)
      "15163372", // Maison Limbour (active, 649 900 $)
      "28743871", // Split Cantley (vendu, 559 800 $)
    ];
    const featured = strategicOrder
      .map((id) => allProps.find((p) => p.id === id))
      .filter((p): p is PropertyLike => p !== undefined);

    if (featured.length === 0) return null;

    return (
      <section ref={ref} className="section-rhythm section-gold-divider" style={{ background: "var(--cream-light)" }}>
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
