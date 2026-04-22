import * as React from "react";
import { Link } from "react-router-dom";

interface AreaLink { name: string; href: string; detail: string; }
interface ServiceLink { label: string; href: string; detail: string; }
interface AreasServicesSectionProps { lang?: "fr" | "en"; }

const areasFr: AreaLink[] = [
  { name: "Gatineau (centre)", href: "/gatineau", detail: "Centre-ville, services, plex" },
  { name: "Aylmer / Plateau", href: "/plateau-aylmer", detail: "Lac, familles, bilingue, maisons récentes" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, condos, projet Zibi" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Grands terrains, prix accessibles, nature" },
  { name: "Chelsea", href: "/chelsea", detail: "Parc de la Gatineau, tranquillité, bilingue" },
  { name: "Cantley", href: "/cantley", detail: "Semi-rural, familles, grands terrains" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, forêt, vie champêtre" },
  { name: "Outaouais (hub régional)", href: "/courtier-immobilier-outaouais", detail: "Vue d'ensemble de la région" },
];

const areasEn: AreaLink[] = [
  { name: "Gatineau (centre)", href: "/en/gatineau", detail: "City core, services, plex" },
  { name: "Aylmer / Plateau", href: "/en/plateau-aylmer", detail: "Lake, families, bilingual, newer homes" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, condos, Zibi project" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Larger lots, affordable, nature" },
  { name: "Chelsea", href: "/en/chelsea", detail: "Gatineau Park, serenity, bilingual" },
  { name: "Cantley", href: "/en/cantley", detail: "Semi-rural, families, large lots" },
  { name: "Val-des-Monts", href: "/en/val-des-monts", detail: "Lakes, forest, country living" },
  { name: "Outaouais (regional hub)", href: "/en/outaouais-real-estate-agent", detail: "Full regional overview" },
];

const servicesFr: ServiceLink[] = [
  { label: "Vendre ma propriété", href: "/vendre-ma-maison-gatineau", detail: "Stratégie et accompagnement" },
  { label: "Acheter une maison", href: "/acheter-a-gatineau", detail: "Recherche, négociation, conseils" },
  { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", detail: "Valeur marchande, sans engagement" },
  { label: "Premier achat", href: "/premier-achat-gatineau", detail: "Guide et accompagnement dédié" },
  { label: "Investissement plex", href: "/investir-plex-gatineau", detail: "Analyse, rendement, stratégie" },
  { label: "Relocalisation", href: "/relocalisation-ottawa-gatineau", detail: "Ottawa → Gatineau, Montréal, militaires" },
];

const servicesEn: ServiceLink[] = [
  { label: "Sell your property", href: "/en/sell", detail: "Strategy and full support" },
  { label: "Buy a home", href: "/en/buy", detail: "Search, negotiation, guidance" },
  { label: "Free home valuation", href: "/en/home-valuation", detail: "Market value, no obligation" },
  { label: "First-time buyer", href: "/en/first-time-buyer", detail: "Dedicated guidance and support" },
  { label: "Plex investment", href: "/en/plex", detail: "Analysis, returns, strategy" },
  { label: "Relocation", href: "/en/relocation", detail: "Ottawa → Gatineau, Montréal, military" },
];

const cfgFr = {
  overline: "Secteurs et services",
  title: "Où j'interviens et comment je peux vous aider",
  subtitle: "Courtier immobilier actif dans toute la région de Gatineau et l'Outaouais — vente, achat, évaluation, investissement et relocalisation.",
  areasHeading: "Secteurs desservis",
  servicesHeading: "Services offerts",
  allNeighborhoods: "Voir tous les quartiers",
  allNeighborhoodsHref: "/quartiers-gatineau",
};

const cfgEn = {
  overline: "Areas & services",
  title: "Where I work and how I can help",
  subtitle: "Real estate broker serving the Gatineau and Outaouais region — selling, buying, valuation, investment and relocation.",
  areasHeading: "Areas served",
  servicesHeading: "Services offered",
  allNeighborhoods: "All neighborhoods",
  allNeighborhoodsHref: "/en/neighborhoods",
};

/* Row component */
const TableRow = ({ name, detail, href }: { name: string; detail: string; href: string }) => (
  <Link
    to={href}
    className="group flex items-center justify-between gap-3 transition-colors"
    style={{ padding: "clamp(1rem, 2vw, 1.15rem) clamp(1.25rem, 2vw, 1.75rem)", borderBottom: "1px solid rgba(255,255,255,0.04)", minHeight: 52 }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,138,90,0.05)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = ""; }}
  >
    <div className="min-w-0">
      <p style={{ fontSize: ".88rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "-.01em" }} className="truncate">{name}</p>
      <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.28)" }} className="truncate">{detail}</p>
    </div>
    <span className="shrink-0 transition-all duration-200 group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.1)", fontSize: ".75rem" }}>
      <span className="group-hover:hidden">→</span>
      <span className="hidden group-hover:inline" style={{ color: "#A88A5A" }}>→</span>
    </span>
  </Link>
);

const AreasServicesSection = ({ lang = "fr" }: AreasServicesSectionProps) => {
  const areas = lang === "en" ? areasEn : areasFr;
  const services = lang === "en" ? servicesEn : servicesFr;
  const cfg = lang === "en" ? cfgEn : cfgFr;
  const [activeTab, setActiveTab] = React.useState<"areas" | "services">("areas");

  return (
    <section className="section-rhythm section-gold-divider" style={{ background: "linear-gradient(175deg, #0c1f28, #17303B)" }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-[44rem] mx-auto">
          <p className="label-overline mb-2 justify-center" style={{ color: "#BFA476" }}>{cfg.overline}</p>
          <h2 style={{ color: "#F5F1EA" }}>{cfg.title}</h2>
          <p className="mt-3" style={{ fontSize: ".88rem", color: "rgba(245,241,234,0.35)", lineHeight: 1.7 }}>{cfg.subtitle}</p>
        </div>

        {/* Desktop: 2-column bordered table */}
        <div
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 3 }}
        >
          <div className="lg:border-r" style={{ borderRight: "none" }}>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "clamp(1rem, 2vw, 1.2rem) clamp(1.25rem, 2vw, 1.75rem)" }}>
              <p style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(245,241,234,0.25)" }}>
                <span style={{ color: "var(--gold)", marginRight: 8 }}>●</span>{cfg.areasHeading}
              </p>
            </div>
            {areas.map((a) => <TableRow key={a.href} name={a.name} detail={a.detail} href={a.href} />)}
            <Link to={cfg.allNeighborhoodsHref} className="flex items-center justify-between transition-colors" style={{ padding: "clamp(1rem, 2vw, 1.15rem) clamp(1.25rem, 2vw, 1.75rem)", background: "var(--gold3)", minHeight: 44 }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,138,90,.18)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold3)"; }}>
              <span style={{ fontSize: ".82rem", fontWeight: 600, color: "var(--gold)" }}>{cfg.allNeighborhoods} →</span>
            </Link>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "clamp(1rem, 2vw, 1.2rem) clamp(1.25rem, 2vw, 1.75rem)" }}>
              <p style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(245,241,234,0.25)" }}>
                <span style={{ color: "var(--gold)", marginRight: 8 }}>●</span>{cfg.servicesHeading}
              </p>
            </div>
            {services.map((s) => <TableRow key={s.href} name={s.label} detail={s.detail} href={s.href} />)}
          </div>
        </div>

        {/* Mobile: tab switcher */}
        <div className="md:hidden overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 3 }}>
          {/* Tab bar */}
          <div className="flex" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <button
              onClick={() => setActiveTab("areas")}
              className="flex-1 transition-colors"
              style={{
                padding: ".75rem",
                fontSize: ".8rem",
                fontWeight: 600,
                color: activeTab === "areas" ? "#F5F1EA" : "rgba(245,241,234,0.4)",
                borderBottom: activeTab === "areas" ? "2px solid var(--gold)" : "2px solid transparent",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {cfg.areasHeading}
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className="flex-1 transition-colors"
              style={{
                padding: ".75rem",
                fontSize: ".8rem",
                fontWeight: 600,
                color: activeTab === "services" ? "#F5F1EA" : "rgba(245,241,234,0.4)",
                borderBottom: activeTab === "services" ? "2px solid var(--gold)" : "2px solid transparent",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {cfg.servicesHeading}
            </button>
          </div>

          {/* Tab panels */}
          <div style={{ transition: "opacity .2s ease" }}>
            {activeTab === "areas" && (
              <div>
                {areas.map((a) => <TableRow key={a.href} name={a.name} detail={a.detail} href={a.href} />)}
                <Link to={cfg.allNeighborhoodsHref} className="flex items-center justify-between transition-colors" style={{ padding: "1rem 1.25rem", background: "var(--gold3)", minHeight: 44 }}>
                  <span style={{ fontSize: ".82rem", fontWeight: 600, color: "var(--gold)" }}>{cfg.allNeighborhoods} →</span>
                </Link>
              </div>
            )}
            {activeTab === "services" && (
              <div>
                {services.map((s) => <TableRow key={s.href} name={s.label} detail={s.detail} href={s.href} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServicesSection;
