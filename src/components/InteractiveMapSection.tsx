import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Sector data ── */
interface Sector {
  id: string;
  name: string;
  href: string;
  hrefEn: string;
  profile: string;
  profileEn: string;
  /** SVG path for the sector shape */
  path: string;
  /** Label position (cx, cy) */
  labelX: number;
  labelY: number;
}

const sectors: Sector[] = [
  {
    id: "chelsea",
    name: "Chelsea",
    href: "/chelsea",
    hrefEn: "/en/chelsea",
    profile: "Nature, Parc de la Gatineau, tranquillité bilingue",
    profileEn: "Nature, Gatineau Park, bilingual serenity",
    path: "M220,30 L340,30 L360,80 L380,140 L340,180 L280,190 L220,160 L200,100 Z",
    labelX: 280,
    labelY: 105,
  },
  {
    id: "cantley",
    name: "Cantley",
    href: "/cantley",
    hrefEn: "/en/cantley",
    profile: "Semi-rural, familles, grands terrains boisés",
    profileEn: "Semi-rural, families, large wooded lots",
    path: "M380,40 L500,30 L520,100 L510,180 L440,200 L380,140 L360,80 Z",
    labelX: 440,
    labelY: 110,
  },
  {
    id: "val-des-monts",
    name: "Val-des-Monts",
    href: "/val-des-monts",
    hrefEn: "/en/val-des-monts",
    profile: "Lacs, forêt, vie champêtre à proximité de la ville",
    profileEn: "Lakes, forest, country living near the city",
    path: "M520,30 L660,50 L670,160 L620,200 L510,180 L520,100 Z",
    labelX: 590,
    labelY: 115,
  },
  {
    id: "aylmer",
    name: "Aylmer",
    href: "/aylmer",
    hrefEn: "/en/aylmer",
    profile: "Lac Deschênes, familles, bilingue, maisons récentes",
    profileEn: "Lake Deschênes, families, bilingual, newer homes",
    path: "M60,180 L220,160 L280,190 L260,260 L200,290 L100,280 L50,240 Z",
    labelX: 165,
    labelY: 225,
  },
  {
    id: "hull",
    name: "Hull",
    href: "/hull",
    hrefEn: "/en/hull",
    profile: "Urbain, culture, condos, projet Zibi et tramway",
    profileEn: "Urban, culture, condos, Zibi project and tramway",
    path: "M280,190 L340,180 L380,220 L370,290 L310,310 L260,260 Z",
    labelX: 320,
    labelY: 245,
  },
  {
    id: "plateau",
    name: "Plateau",
    href: "/plateau",
    hrefEn: "/en/plateau",
    profile: "Quartier familial prisé, parcs, écoles, vie de banlieue",
    profileEn: "Popular family area, parks, schools, suburban living",
    path: "M340,180 L440,200 L460,260 L420,300 L370,290 L380,220 Z",
    labelX: 400,
    labelY: 240,
  },
  {
    id: "gatineau-centre",
    name: "Gatineau Centre",
    href: "/gatineau",
    hrefEn: "/en/gatineau",
    profile: "Centre-ville, services, plex et condos abordables",
    profileEn: "City core, services, affordable plexes and condos",
    path: "M440,200 L510,180 L540,230 L530,300 L470,320 L420,300 L460,260 Z",
    labelX: 475,
    labelY: 255,
  },
  {
    id: "masson-angers",
    name: "Masson-Angers",
    href: "/masson-angers",
    hrefEn: "/en/buckingham",
    profile: "Développement résidentiel, accès nature, prix compétitifs",
    profileEn: "Residential growth, nature access, competitive prices",
    path: "M540,230 L620,200 L650,250 L640,320 L580,340 L530,300 Z",
    labelX: 585,
    labelY: 275,
  },
  {
    id: "buckingham",
    name: "Buckingham",
    href: "/buckingham-masson-angers",
    hrefEn: "/en/buckingham",
    profile: "Ville historique, grands terrains, prix accessibles",
    profileEn: "Historical town, large lots, affordable prices",
    path: "M620,200 L670,160 L720,180 L730,270 L680,310 L640,320 L650,250 Z",
    labelX: 680,
    labelY: 245,
  },
];

/* ── SVG Map (desktop) ── */
const SectorMap = ({
  activeSector,
  onHover,
}: {
  activeSector: string | null;
  onHover: (id: string | null) => void;
}) => (
  <svg
    viewBox="0 0 780 380"
    className="w-full"
    style={{ maxHeight: 700 }}
    aria-label="Carte interactive des secteurs de Gatineau et l'Outaouais"
    role="img"
  >
    {/* Water / river hint at bottom */}
    <path
      d="M0,340 Q100,320 200,330 Q350,350 500,335 Q650,320 780,340 L780,380 L0,380 Z"
      fill="#17303B"
      opacity={0.08}
    />
    {sectors.map((s) => {
      const isActive = activeSector === s.id;
      return (
        <g
          key={s.id}
          onMouseEnter={() => onHover(s.id)}
          onMouseLeave={() => onHover(null)}
          className="cursor-pointer"
          role="button"
          aria-label={s.name}
          tabIndex={0}
          onFocus={() => onHover(s.id)}
          onBlur={() => onHover(null)}
        >
          <path
            d={s.path}
            fill="#17303B"
            fillOpacity={isActive ? 0.8 : 0.3}
            stroke="#A88A5A"
            strokeWidth={1}
            strokeOpacity={isActive ? 0.8 : 0.4}
            style={{ transition: "fill-opacity .25s ease, stroke-opacity .25s ease" }}
          />
          <text
            x={s.labelX}
            y={s.labelY}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#F7F4EE"
            fontSize={11}
            fontWeight={600}
            letterSpacing="0.06em"
            style={{
              textTransform: "uppercase" as const,
              fontFamily: "var(--sans)",
              opacity: isActive ? 1 : 0.7,
              transition: "opacity .25s ease",
              pointerEvents: "none",
            }}
          >
            {s.name}
          </text>
        </g>
      );
    })}
  </svg>
);

/* ── Info panel ── */
const InfoPanel = ({
  sector,
  lang,
}: {
  sector: Sector | null;
  lang: "fr" | "en";
}) => {
  const isFr = lang === "fr";

  return (
    <div
      className="flex flex-col justify-center"
      style={{
        minHeight: 220,
        padding: "2rem 2.5rem",
        opacity: sector ? 1 : 0,
        transform: sector ? "translateX(0)" : "translateX(12px)",
        transition: "opacity .25s ease, transform .25s ease",
      }}
    >
      {sector && (
        <>
          <p
            className="label-overline mb-2"
            style={{ color: "var(--gold)", fontSize: ".6rem" }}
          >
            {isFr ? "Secteur" : "Sector"}
          </p>
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 300,
              color: "var(--ink)",
              letterSpacing: "-.01em",
              lineHeight: 1.2,
            }}
          >
            {sector.name}
          </h3>
          <p
            className="mt-3"
            style={{
              fontSize: ".88rem",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--ink)" }}>
              {isFr ? "Profil type" : "Profile"}
              {" : "}
            </span>
            {isFr ? sector.profile : sector.profileEn}
          </p>
          <div className="mt-6">
            <Link
              to={isFr ? sector.href : sector.hrefEn}
              className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
              style={{
                height: 42,
                padding: "0 1.6rem",
                background: "transparent",
                color: "#A88A5A",
                fontSize: ".82rem",
                fontWeight: 600,
                letterSpacing: ".03em",
                borderRadius: 999,
                border: "1.5px solid #A88A5A",
                transition: "all .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#A88A5A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#A88A5A";
              }}
            >
              {isFr ? "Explorer ce secteur →" : "Explore this sector →"}
            </Link>
          </div>
        </>
      )}
      {!sector && (
        <p
          style={{
            fontSize: ".88rem",
            color: "var(--muted)",
            fontStyle: "italic",
          }}
        >
          {isFr
            ? "Survolez un secteur sur la carte pour voir ses détails."
            : "Hover over a sector on the map to see details."}
        </p>
      )}
    </div>
  );
};

/* ── Mobile row ── */
const MobileSectorRow = ({
  sector,
  lang,
}: {
  sector: Sector;
  lang: "fr" | "en";
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const isFr = lang === "fr";

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex w-full items-center justify-between text-left transition-colors"
        style={{
          padding: "1rem 1.25rem",
          minHeight: 52,
          background: expanded ? "rgba(168,138,90,.06)" : "transparent",
        }}
      >
        <span
          style={{
            fontSize: ".88rem",
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {sector.name}
        </span>
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            color: "var(--muted)",
            opacity: 0.5,
            transform: expanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform .2s ease",
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: expanded ? 200 : 0,
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .25s ease, opacity .2s ease",
        }}
      >
        <div style={{ padding: "0 1.25rem 1.25rem" }}>
          <p
            style={{
              fontSize: ".82rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: ".75rem",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--ink)" }}>
              {isFr ? "Profil" : "Profile"}
              {" : "}
            </span>
            {isFr ? sector.profile : sector.profileEn}
          </p>
          <Link
            to={isFr ? sector.href : sector.hrefEn}
            className="inline-flex items-center text-[.82rem] font-semibold transition-colors"
            style={{ color: "#A88A5A" }}
          >
            {isFr ? "Explorer →" : "Explore →"}
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Main section ── */
const InteractiveMapSection = () => {
  const lang = useLanguage();
  const [activeSector, setActiveSector] = React.useState<string | null>(null);
  const activeSectorData =
    sectors.find((s) => s.id === activeSector) ?? null;

  const isFr = lang === "fr";

  return (
    <section
      style={{
        padding: "clamp(3.5rem, 6vw, 7rem) 0",
        background: "var(--cream)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-[44rem] mx-auto">
          <p className="label-overline mb-2 justify-center">
            {isFr ? "Secteurs desservis" : "Areas served"}
          </p>
          <h2>{isFr ? "Où j'interviens" : "Where I work"}</h2>
          <p
            className="mt-3"
            style={{
              fontSize: ".88rem",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            {isFr
              ? "Cliquez sur un secteur pour découvrir le quartier en détail."
              : "Click on a sector to discover the neighborhood in detail."}
          </p>
        </div>

        {/* Desktop: map + panel */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr 340px",
            border: "1px solid var(--border)",
            borderRadius: 3,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <div
            style={{
              padding: "2rem",
              borderRight: "1px solid var(--border)",
            }}
          >
            <SectorMap
              activeSector={activeSector}
              onHover={setActiveSector}
            />
          </div>
          <InfoPanel sector={activeSectorData} lang={lang} />
        </div>

        {/* Mobile: expandable list */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            borderRadius: 3,
            background: "#fff",
          }}
        >
          {sectors.map((s) => (
            <MobileSectorRow key={s.id} sector={s} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;