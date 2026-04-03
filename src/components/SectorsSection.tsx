import * as React from "react";
import SectorLinks from "@/components/SectorLinks";

const sectorsFr = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, lac Deschênes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, restaurants, culture, condos et plex, projet Zibi" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Grands terrains, prix accessibles, rivière, nature" },
  { name: "Chelsea", href: "/chelsea", detail: "Nature, parc de la Gatineau, tranquillité, communauté bilingue" },
  { name: "Cantley", href: "/cantley", detail: "Semi-rural, familles, grands terrains, calme et proximité" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, forêt, vie champêtre et accès rapide à Gatineau" },
];

const sectorsEn = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Lake Deschênes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, restaurants, culture, condos and plex, Zibi project" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Larger lots, affordable prices, river, nature" },
  { name: "Chelsea", href: "/en/chelsea", detail: "Nature, Gatineau Park, serenity, bilingual community" },
  { name: "Cantley", href: "/en/cantley", detail: "Semi-rural, families, large lots, peaceful and close to the city" },
  { name: "Val-des-Monts", href: "/en/val-des-monts", detail: "Lakes, forest, country living with quick access to Gatineau" },
];

const configFr = { overline: "Gatineau et environs", title: "Secteurs à surveiller", seeAllLabel: "Voir tous les quartiers", seeAllHref: "/quartiers-gatineau" };
const configEn = { overline: "Gatineau and area", title: "Neighborhoods to watch", seeAllLabel: "All neighborhoods", seeAllHref: "/en/neighborhoods" };

interface SectorsSectionProps { lang?: "fr" | "en"; }

const SectorsSection = React.forwardRef<HTMLDivElement, SectorsSectionProps>(({ lang = "fr" }, ref) => {
  const sectors = lang === "en" ? sectorsEn : sectorsFr;
  const cfg = lang === "en" ? configEn : configFr;

  return (
    <div ref={ref}>
      <SectorLinks overline={cfg.overline} title={cfg.title} sectors={sectors} background="alt" teaserCount={3} seeAllLabel={cfg.seeAllLabel} seeAllHref={cfg.seeAllHref} />
    </div>
  );
});

SectorsSection.displayName = "SectorsSection";

export default SectorsSection;
