export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Propriétés", href: "/proprietes" },
  {
    label: "Vendre",
    children: [
      { label: "Vendre à Gatineau", href: "/vendre-ma-maison-gatineau" },
      { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
      { label: "Plan vendeur", href: "/plan-vendeur-gatineau" },
      { label: "Guide vendeur", href: "/guide-vendeur-gatineau" },
      { label: "Quand vendre", href: "/quand-vendre-a-gatineau" },
    ],
  },
  {
    label: "Acheter",
    children: [
      { label: "Acheter à Gatineau", href: "/acheter-a-gatineau" },
      { label: "Consultation acheteur", href: "/consultation-acheteur" },
      { label: "Guide acheteur", href: "/guide-acheteur-gatineau" },
      { label: "Premier achat", href: "/premier-achat-gatineau" },
      { label: "Acheter depuis Ottawa", href: "/acheter-a-gatineau-depuis-ottawa" },
    ],
  },
  {
    label: "Relocalisation",
    children: [
      { label: "Ottawa → Gatineau", href: "/relocalisation-ottawa-gatineau" },
      { label: "Montréal → Gatineau", href: "/relocalisation-montreal-gatineau" },
      { label: "Guide relocalisation", href: "/guide-relocalisation-gatineau" },
      { label: "Militaire — mutation", href: "/militaire-gatineau" },
      { label: "Militaire — achat", href: "/acheter-comme-militaire-gatineau" },
      { label: "Militaire — vente", href: "/vendre-lors-dune-mutation-gatineau" },
    ],
  },
  {
    label: "Plex",
    children: [
      { label: "Plex / Investissement", href: "/investir-plex-gatineau" },
      { label: "Analyse plex", href: "/analyse-plex-gatineau" },
      { label: "Vendre un plex", href: "/vendre-un-plex-a-gatineau" },
    ],
  },
  {
    label: "Quartiers",
    children: [
      { label: "Tous les quartiers", href: "/quartiers-a-considerer-a-gatineau" },
      { label: "Aylmer", href: "/aylmer" },
      { label: "Hull", href: "/hull" },
      { label: "Plateau", href: "/plateau" },
      { label: "Gatineau centre", href: "/gatineau" },
      { label: "Chelsea", href: "/chelsea" },
      { label: "Cantley", href: "/cantley" },
      { label: "Buckingham", href: "/buckingham-masson-angers" },
      { label: "Pontiac", href: "/pontiac" },
    ],
  },
  { label: "Blogue", href: "/blogue" },
  { label: "À propos", href: "/contact-yanis" },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Vendre à Gatineau", href: "/vendre-ma-maison-gatineau" },
      { label: "Acheter à Gatineau", href: "/acheter-a-gatineau" },
      { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
      { label: "Plex / Investissement", href: "/investir-plex-gatineau" },
    ],
  },
  {
    title: "Relocalisation",
    links: [
      { label: "Ottawa → Gatineau", href: "/relocalisation-ottawa-gatineau" },
      { label: "Montréal → Gatineau", href: "/relocalisation-montreal-gatineau" },
      { label: "Militaire à Gatineau", href: "/militaire-gatineau" },
      { label: "Guide militaire", href: "/guide-militaire-gatineau" },
      { label: "Guide relocalisation", href: "/guide-relocalisation-gatineau" },
    ],
  },
  {
    title: "Quartiers",
    links: [
      { label: "Aylmer", href: "/aylmer" },
      { label: "Hull", href: "/hull" },
      { label: "Chelsea", href: "/chelsea" },
      { label: "Cantley", href: "/cantley" },
      { label: "Gatineau centre", href: "/gatineau" },
      { label: "Pontiac", href: "/pontiac" },
      { label: "Tous les quartiers", href: "/quartiers-a-considerer-a-gatineau" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Guides gratuits", href: "/ressources" },
      { label: "Blogue", href: "/blogue" },
      { label: "Rapport marché", href: "/rapport-marche-gatineau" },
      { label: "FAQ", href: "/faq" },
      { label: "À propos / Contact", href: "/contact-yanis" },
    ],
  },
];

export const footerPopularLinks = [
  { label: "Courtier immobilier Outaouais", href: "/courtier-immobilier-outaouais" },
  { label: "Courtier immobilier Gatineau", href: "/gatineau" },
  { label: "Courtier immobilier Aylmer", href: "/aylmer" },
  { label: "Courtier immobilier Hull", href: "/hull" },
  { label: "Courtier immobilier Chelsea", href: "/chelsea" },
  { label: "Courtier immobilier Cantley", href: "/cantley" },
  { label: "Évaluation maison Gatineau", href: "/evaluation-gratuite-gatineau" },
  { label: "Vendre maison Gatineau", href: "/vendre-ma-maison-gatineau" },
  { label: "Acheter à Gatineau", href: "/acheter-a-gatineau" },
];
