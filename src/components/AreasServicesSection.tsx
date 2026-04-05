import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface AreaLink {
  name: string;
  href: string;
  detail: string;
}

interface ServiceLink {
  label: string;
  href: string;
  detail: string;
}

interface AreasServicesSectionProps {
  lang?: "fr" | "en";
}

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

const configFr = {
  overline: "Secteurs et services",
  title: "Où j'interviens et comment je peux vous aider",
  subtitle: "Courtier immobilier actif dans toute la région de Gatineau et l'Outaouais — vente, achat, évaluation, investissement et relocalisation.",
  areasHeading: "Secteurs desservis",
  servicesHeading: "Services offerts",
  allNeighborhoods: "Voir tous les quartiers",
  allNeighborhoodsHref: "/quartiers-gatineau",
};

const configEn = {
  overline: "Areas & services",
  title: "Where I work and how I can help",
  subtitle: "Real estate broker serving the Gatineau and Outaouais region — selling, buying, valuation, investment and relocation.",
  areasHeading: "Areas served",
  servicesHeading: "Services offered",
  allNeighborhoods: "All neighborhoods",
  allNeighborhoodsHref: "/en/neighborhoods",
};

const ease = [0.22, 1, 0.36, 1] as const;

const AreasServicesSection = ({ lang = "fr" }: AreasServicesSectionProps) => {
  const areas = lang === "en" ? areasEn : areasFr;
  const services = lang === "en" ? servicesEn : servicesFr;
  const cfg = lang === "en" ? configEn : configFr;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[60rem]">
        {/* Section intro */}
        <motion.div
          className="text-center mb-6 sm:mb-12 max-w-[44rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionHeading overline={cfg.overline} title={cfg.title} subtitle={cfg.subtitle} centered />
        </motion.div>

        {/* Two-column grid: areas left, services right */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Areas block */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">
              <MapPin size={13} className="inline-block mr-1.5 -mt-0.5 text-accent" />
              {cfg.areasHeading}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {areas.map((area, i) => (
                <motion.div
                  key={area.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease }}
                >
                  <Link
                    to={area.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-4 py-3 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {area.name}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">
                        {area.detail}
                      </p>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 text-center lg:text-left">
              <Link to={cfg.allNeighborhoodsHref} className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary hover:underline">
                {cfg.allNeighborhoods} <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Services block */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">
              {cfg.servicesHeading}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease }}
                >
                  <Link
                    to={svc.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-4 py-3 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {svc.label}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">
                        {svc.detail}
                      </p>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServicesSection;
