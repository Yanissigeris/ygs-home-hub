import SectorLinks from "@/components/SectorLinks";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const SectorsSection = () => (
  <SectorLinks
    overline="Gatineau et environs"
    title="Secteurs à surveiller"
    sectors={sectors}
    background="alt"
  />
);

export default SectorsSection;
