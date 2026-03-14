import SectorLinks from "@/components/SectorLinks";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
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
