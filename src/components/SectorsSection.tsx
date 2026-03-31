import * as React from "react";
import SectorLinks from "@/components/SectorLinks";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, lac Deschênes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, restaurants, culture, condos et plex, projet Zibi" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Grands terrains, prix accessibles, rivière, nature" },
];

const SectorsSection = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <SectorLinks overline="Gatineau et environs" title="Secteurs à surveiller" sectors={sectors} background="alt" />
  </div>
));

SectorsSection.displayName = "SectorsSection";

export default SectorsSection;
