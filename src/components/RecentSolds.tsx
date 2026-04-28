import * as React from "react";
import { soldProperties, type SoldProperty } from "@/data/sold-properties";

interface RecentSoldsProps {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    overline: "VENTES RÉCENTES",
    title: "Le marché en mouvement",
    subtitle:
      "300+ transactions complétées en Outaouais — voici quelques ventes des derniers mois.",
    statusSold: "VENDU",
    daysLabel: (n: number) => `Vendu en ${n} jours`,
    askingLabel: (p: number) => `${p}% du prix demandé`,
    viewLabel: "Voir la fiche",
    bedShort: "ch",
    bathShort: "sdb",
  },
  en: {
    overline: "RECENT SALES",
    title: "The market in motion",
    subtitle:
      "300+ completed transactions in Outaouais — here are a few recent sales.",
    statusSold: "SOLD",
    daysLabel: (n: number) => `Sold in ${n} days`,
    askingLabel: (p: number) => `${p}% of asking price`,
    viewLabel: "View listing",
    bedShort: "bd",
    bathShort: "ba",
  },
};

const SoldCard = ({ p, strings }: { p: SoldProperty; strings: typeof t.fr }) => {
  const performanceLine =
    typeof p.daysOnMarket === "number"
      ? strings.daysLabel(p.daysOnMarket)
      : typeof p.percentOfAsking === "number"
      ? strings.askingLabel(p.percentOfAsking)
      : null;

  return (
    <article
      className="group flex flex-col h-full"
      style={{
        background: "#fff",
        borderRadius: 3,
        overflow: "hidden",
        transition:
          "transform 0.5s cubic-bezier(.16,1,.3,1), box-shadow 0.5s cubic-bezier(.16,1,.3,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 4px 0 #A88A5A, 0 24px 48px rgba(168,138,90,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={p.image}
          alt={`${p.type} vendu à ${p.city} — YGS Yanis Gauthier-Sigeris`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={648}
          height={486}
          style={{ filter: "saturate(0.88)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.8), transparent)",
          }}
        />
      </div>

      {/* Gold top border */}
      <div className="h-[2px] transition-colors duration-300 ease-out bg-[rgba(168,138,90,0.2)] group-hover:bg-[#A88A5A]" />

      {/* Card body */}
      <div
        className="flex flex-1 flex-col"
        style={{ padding: "1.25rem 1.25rem 1.5rem" }}
      >
        {/* Sold badge */}
        <span
          style={{
            background: "var(--ink)",
            color: "#fff",
            padding: "3px 8px",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "inline-block",
            alignSelf: "flex-start",
            marginBottom: ".75rem",
          }}
        >
          {strings.statusSold}
        </span>

        {/* Sold price */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
            color: "#17303B",
            lineHeight: 1.15,
            marginBottom: ".35rem",
          }}
        >
          {p.soldPrice}
        </p>

        {/* Performance line */}
        {performanceLine && (
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--gold)",
              marginBottom: ".5rem",
            }}
          >
            {performanceLine}
          </p>
        )}

        {/* Address */}
        <p
          className="truncate"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 400,
            color: "var(--muted)",
            marginBottom: "1.25rem",
          }}
        >
          {p.address}, {p.city}
        </p>

        {/* Inactive view link */}
        <span
          className="mt-auto inline-flex items-center gap-1.5"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#A88A5A",
            opacity: 0.7,
          }}
          aria-hidden="true"
        >
          {strings.viewLabel}{" "}
          <span aria-hidden>→</span>
        </span>
      </div>
    </article>
  );
};

const RecentSolds = React.forwardRef<HTMLElement, RecentSoldsProps>(
  ({ lang = "fr" }, ref) => {
    const strings = t[lang];
    const items = soldProperties.slice(0, 6);

    if (items.length === 0) return null;

    return (
      <section
        ref={ref}
        className="section-rhythm section-gold-divider"
        style={{ background: "var(--cream)" }}
      >
        <div className="section-container">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>
              {strings.overline}
            </p>
            <h2>{strings.title}</h2>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".95rem",
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              {strings.subtitle}
            </p>
          </div>

          {/* Desktop grid */}
          <div
            className={`hidden md:grid gap-5 md:grid-cols-2 ${
              items.length >= 3 ? "lg:grid-cols-3" : ""
            }`}
          >
            {items.map((p) => (
              <SoldCard key={p.id} p={p} strings={strings} />
            ))}
          </div>

          {/* Mobile horizontal scroll */}
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
            {items.map((p) => (
              <div
                key={p.id}
                className="shrink-0"
                style={{ flex: "0 0 82vw", scrollSnapAlign: "start" }}
              >
                <SoldCard p={p} strings={strings} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

RecentSolds.displayName = "RecentSolds";
export default RecentSolds;
