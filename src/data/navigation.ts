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
  {
    label: "Propriétés",
    children: [
      { label: "Propriétés", href: "/proprietes" },
      { label: "Propriétés vedettes", href: "/proprietes-vedettes" },
      { label: "Nouvelles inscriptions", href: "/nouvelles-inscriptions" },
      { label: "Vendu récemment", href: "/vendu-recemment" },
    ],
  },
  {
    label: "Vendre",
    children: [
      { label: "Vendre à Gatineau", href: "/vendre-ma-maison-gatineau" },
      { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
      { label: "Plan vendeur", href: "/plan-vendeur-gatineau" },
      { label: "Guide vendeur", href: "/guide-vendeur-gatineau" },
      { label: "Quand vendre", href: "/quand-vendre-a-gatineau" },
      { label: "Vendre un plex", href: "/vendre-un-plex-a-gatineau" },
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
      { label: "Quartiers à considérer", href: "/quartiers-a-considerer-a-gatineau" },
      { label: "Militaire — relocalisation", href: "/militaire-gatineau" },
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
      { label: "Rapport marché", href: "/rapport-marche-gatineau" },
    ],
  },
  {
    label: "Quartiers",
    children: [
      { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
      { label: "Hull", href: "/hull" },
      { label: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers" },
      { label: "Gatineau centre", href: "/gatineau" },
      { label: "Vivre à Aylmer", href: "/vivre-a-aylmer" },
      { label: "Vivre à Hull", href: "/vivre-a-hull" },
      { label: "Vivre dans le Plateau", href: "/vivre-dans-le-plateau" },
    ],
  },
  {
    label: "Ressources",
    children: [
      { label: "Ressources", href: "/ressources" },
      { label: "Guide vendeur", href: "/guide-vendeur-gatineau" },
      { label: "Guide acheteur", href: "/guide-acheteur-gatineau" },
      { label: "Guide relocalisation", href: "/guide-relocalisation-gatineau" },
      { label: "Guide militaire", href: "/guide-militaire-gatineau" },
      { label: "Premier achat", href: "/premier-achat-gatineau" },
    ],
  },
  { label: "À propos", href: "/contact-yanis" },
];

export const footerColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À propos / Contact", href: "/contact-yanis" },
      { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Vendre à Gatineau", href: "/vendre-ma-maison-gatineau" },
      { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
      { label: "Acheter à Gatineau", href: "/acheter-a-gatineau" },
      { label: "Plex / Investissement", href: "/investir-plex-gatineau" },
    ],
  },
  {
    title: "Relocalisation",
    links: [
      { label: "Ottawa → Gatineau", href: "/relocalisation-ottawa-gatineau" },
      { label: "Montréal → Gatineau", href: "/relocalisation-montreal-gatineau" },
      { label: "Militaire à Gatineau", href: "/militaire-gatineau" },
      { label: "Relocalisation militaire", href: "/relocalisation-militaire-gatineau" },
    ],
  },
  {
    title: "Quartiers",
    links: [
      { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
      { label: "Hull", href: "/hull" },
      { label: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers" },
      { label: "Ressources", href: "/ressources" },
    ],
  },
];
