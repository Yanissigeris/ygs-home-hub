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

/*
 * Geographic layout (viewBox 0 0 820 520):
 * - Ottawa River runs along the south edge (west→east)
 * - Lac Deschênes widens in the west (Aylmer)
 * - Hull juts south as a peninsula toward Ottawa
 * - Chelsea / Cantley / Val-des-Monts extend north into the Gatineau Hills
 * - Buckingham / Masson-Angers are the eastern sectors
 */
const sectors: Sector[] = [
  {
    id: "chelsea",
    name: "Chelsea",
    href: "/chelsea",
    hrefEn: "/en/chelsea",
    profile: "Nature, Parc de la Gatineau, tranquillité bilingue",
    profileEn: "Nature, Gatineau Park, bilingual serenity",
    path: "M120,20 C140,18 175,15 210,22 C230,28 248,42 260,60 L275,95 C278,108 276,125 268,142 L255,168 C248,178 238,186 226,192 L195,205 C180,208 162,206 148,198 L118,178 C105,168 96,154 92,138 L82,105 C78,88 80,68 88,52 L105,32 Z",
    labelX: 178,
    labelY: 112,
  },
  {
    id: "cantley",
    name: "Cantley",
    href: "/cantley",
    hrefEn: "/en/cantley",
    profile: "Semi-rural, familles, grands terrains boisés",
    profileEn: "Semi-rural, families, large wooded lots",
    path: "M275,22 C305,16 340,14 372,20 C395,26 415,40 428,58 L445,90 C450,108 448,128 440,148 L425,180 C418,195 405,206 388,212 L348,225 C332,228 315,225 300,218 L270,200 C258,190 250,178 248,162 L255,128 C258,115 264,102 275,92 Z",
    labelX: 355,
    labelY: 122,
  },
  {
    id: "val-des-monts",
    name: "Val-des-Monts",
    href: "/val-des-monts",
    hrefEn: "/en/val-des-monts",
    profile: "Lacs, forêt, vie champêtre à proximité de la ville",
    profileEn: "Lakes, forest, country living near the city",
    path: "M448,18 C485,12 528,14 565,24 C592,32 615,48 630,70 L648,108 C655,130 652,155 642,178 L625,210 C615,228 598,240 578,248 L538,260 C518,264 498,258 480,248 L450,228 C438,218 430,204 428,188 L425,148 C424,128 430,108 442,92 L448,58 Z",
    labelX: 540,
    labelY: 142,
  },
  {
    id: "aylmer",
    name: "Aylmer",
    href: "/aylmer",
    hrefEn: "/en/aylmer",
    profile: "Lac Deschênes, familles, bilingue, maisons récentes",
    profileEn: "Lake Deschênes, families, bilingual, newer homes",
    path: "M18,215 C28,198 48,185 72,178 L108,170 C125,168 142,172 158,180 L192,200 C205,210 215,222 220,238 L228,268 C232,285 228,302 218,318 L200,342 C188,355 172,362 155,365 L108,368 C88,368 70,360 55,348 L30,322 C18,308 12,290 14,272 L16,240 Z",
    labelX: 125,
    labelY: 270,
  },
  {
    id: "hull",
    name: "Hull",
    href: "/hull",
    hrefEn: "/en/hull",
    profile: "Urbain, culture, condos, projet Zibi et tramway",
    profileEn: "Urban, culture, condos, Zibi project and tramway",
    path: "M220,238 C228,218 240,202 258,192 L285,210 C298,220 305,235 308,252 L312,285 C314,305 308,325 296,340 L275,362 C262,375 245,382 228,385 L200,385 C185,382 172,372 165,358 L155,335 C148,318 150,300 158,285 L178,258 Z",
    labelX: 245,
    labelY: 300,
  },
  {
    id: "plateau",
    name: "Plateau",
    href: "/plateau",
    hrefEn: "/en/plateau",
    profile: "Quartier familial prisé, parcs, écoles, vie de banlieue",
    profileEn: "Popular family area, parks, schools, suburban living",
    path: "M308,205 C322,198 338,196 355,200 L388,212 C402,220 412,232 418,248 L428,278 C432,298 428,318 418,335 L402,358 C390,372 375,380 358,382 L325,385 C308,384 292,378 280,368 L268,350 C258,335 255,318 258,300 L265,268 C270,248 282,232 298,220 Z",
    labelX: 348,
    labelY: 290,
  },
  {
    id: "gatineau-centre",
    name: "Gatineau Centre",
    href: "/gatineau",
    hrefEn: "/en/gatineau",
    profile: "Centre-ville, services, plex et condos abordables",
    profileEn: "City core, services, affordable plexes and condos",
    path: "M418,248 C428,232 442,220 460,215 L495,228 C512,235 525,248 532,265 L542,298 C546,318 542,340 532,358 L518,378 C505,392 488,400 470,402 L438,402 C420,400 405,392 392,380 L378,362 C368,348 365,330 368,312 L375,280 C380,262 392,248 408,240 Z",
    labelX: 462,
    labelY: 318,
  },
  {
    id: "masson-angers",
    name: "Masson-Angers",
    href: "/masson-angers",
    hrefEn: "/en/buckingham",
    profile: "Développement résidentiel, accès nature, prix compétitifs",
    profileEn: "Residential growth, nature access, competitive prices",
    path: "M542,248 C555,235 572,228 590,225 L625,230 C642,235 655,246 665,262 L678,292 C685,312 682,335 672,355 L658,378 C645,392 628,400 610,402 L575,405 C558,404 542,396 530,385 L518,365 C508,348 505,328 508,308 L515,278 C520,260 530,248 542,240 Z",
    labelX: 598,
    labelY: 322,
  },
  {
    id: "buckingham",
    name: "Buckingham",
    href: "/buckingham-masson-angers",
    hrefEn: "/en/buckingham",
    profile: "Ville historique, grands terrains, prix accessibles",
    profileEn: "Historical town, large lots, affordable prices",
    path: "M668,218 C688,210 712,208 735,215 C752,222 765,235 772,252 L782,285 C788,308 785,332 775,352 L762,378 C748,395 730,405 710,408 L672,410 C652,408 635,400 622,388 L608,368 C598,350 595,330 598,310 L608,278 C615,255 630,238 650,228 Z",
    labelX: 695,
    labelY: 312,
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
    viewBox="0 0 820 480"
    className="w-full"
    style={{ maxHeight: 700 }}
    aria-label="Carte interactive des secteurs de Gatineau et l'Outaouais"
    role="img"
  >
    {/* Ottawa River — wide in west (Lac Deschênes), narrowing east */}
    <path
      d="M0,410 C20,395 50,385 80,380 Q140,372 200,378 C240,382 260,392 280,398 Q320,408 360,405 C400,400 440,412 480,415 Q540,420 600,412 C640,406 680,415 720,418 Q760,422 800,415 L820,412 L820,480 L0,480 Z"
      fill="#17303B"
      opacity={0.1}
    />
    {/* Subtle river label */}
    <text x={410} y={452} textAnchor="middle" fill="#17303B" fontSize={9} fontWeight={400} letterSpacing="0.18em" opacity={0.2} style={{ fontFamily: "var(--sans)", textTransform: "uppercase" as const }}>
      Rivière des Outaouais — Ottawa River
    </text>
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
            fillOpacity={isActive ? 0.75 : 0.25}
            stroke="#A88A5A"
            strokeWidth={isActive ? 1.5 : 0.8}
            strokeOpacity={isActive ? 0.9 : 0.35}
            style={{ transition: "fill-opacity .3s ease, stroke-opacity .3s ease, stroke-width .3s ease" }}
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