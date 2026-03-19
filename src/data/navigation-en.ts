import type { NavItem, NavChild } from "./navigation";

export const mainNavEn: NavItem[] = [
  { label: "Home", href: "/en" },
  { label: "Properties", href: "/en/properties" },
  {
    label: "Sell",
    children: [
      { label: "Sell in Gatineau", href: "/en/sell" },
      { label: "Free Home Valuation", href: "/en/home-valuation" },
      { label: "Seller Plan", href: "/en/seller-plan" },
      { label: "Seller Guide", href: "/en/seller-guide" },
      { label: "When to Sell", href: "/en/when-to-sell" },
    ],
  },
  {
    label: "Buy",
    children: [
      { label: "Buy in Gatineau", href: "/en/buy" },
      { label: "Buyer Consultation", href: "/en/buyer-consultation" },
      { label: "Buyer Guide", href: "/en/buyer-guide" },
      { label: "First-Time Buyer", href: "/en/first-time-buyer" },
      { label: "Buy from Ottawa", href: "/en/buy-from-ottawa" },
    ],
  },
  {
    label: "Relocation",
    children: [
      { label: "Ottawa → Gatineau", href: "/en/relocation" },
      { label: "Montréal → Gatineau", href: "/en/montreal-relocation" },
      { label: "Relocation Guide", href: "/en/relocation-guide" },
      { label: "Military — Posting", href: "/en/military" },
      { label: "Military — Relocation", href: "/en/military-relocation" },
      { label: "Military — Buying", href: "/en/military-buyer" },
      { label: "Military — Selling", href: "/en/military-seller" },
    ],
  },
  {
    label: "Plex",
    children: [
      { label: "Plex / Investment", href: "/en/plex" },
      { label: "Plex Analysis", href: "/en/plex-analysis" },
      { label: "Sell a Plex", href: "/en/sell-plex" },
    ],
  },
  {
    label: "Neighborhoods",
    children: [
      { label: "All Neighborhoods", href: "/en/neighborhoods" },
      { label: "Plateau / Aylmer", href: "/en/plateau-aylmer" },
      { label: "Hull", href: "/en/hull" },
      { label: "Buckingham / Masson-Angers", href: "/en/buckingham" },
    ],
  },
  { label: "About", href: "/en/contact" },
];

export const footerColumnsEn = [
  {
    title: "Services",
    links: [
      { label: "Sell in Gatineau", href: "/en/sell" },
      { label: "Buy in Gatineau", href: "/en/buy" },
      { label: "Free Home Valuation", href: "/en/home-valuation" },
      { label: "Plex / Investment", href: "/en/plex" },
    ],
  },
  {
    title: "Relocation",
    links: [
      { label: "Ottawa → Gatineau", href: "/en/relocation" },
      { label: "Military Relocation", href: "/en/military" },
      { label: "Military Guide", href: "/en/military-guide" },
      { label: "Relocation Guide", href: "/en/relocation-guide" },
    ],
  },
  {
    title: "Neighborhoods",
    links: [
      { label: "Plateau / Aylmer", href: "/en/plateau-aylmer" },
      { label: "Hull", href: "/en/hull" },
      { label: "Buckingham / Masson-Angers", href: "/en/buckingham" },
      { label: "All Neighborhoods", href: "/en/neighborhoods" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Guides", href: "/en/resources" },
      { label: "Market Report", href: "/en/market-report" },
      { label: "FAQ", href: "/en/faq" },
      { label: "Testimonials", href: "/en/testimonials" },
      { label: "About / Contact", href: "/en/contact" },
    ],
  },
];
