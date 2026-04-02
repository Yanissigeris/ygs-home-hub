import * as React from "react";
import SectorLinks from "@/components/SectorLinks";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, lac Deschênes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, restaurants, culture, condos et plex, projet Zibi" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Grands terrains, prix accessibles, rivière, nature" },
  { name: "Chelsea", href: "/chelsea", detail: "Nature, parc de la Gatineau, tranquillité, communauté bilingue" },
  { name: "Cantley", href: "/cantley", detail: "Semi-rural, familles, grands terrains, calme et proximité" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, forêt, vie champêtre et accès rapide à Gatineau" },
];

const SectorsSection = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <SectorLinks overline="Gatineau et environs" title="Secteurs à surveiller" sectors={sectors} background="alt" teaserCount={3} seeAllLabel="Voir tous les quartiers" seeAllHref="/quartiers-gatineau" />
  </div>
));

SectorsSection.displayName = "SectorsSection";

export default SectorsSection;
