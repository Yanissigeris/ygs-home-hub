import type { NavItem, NavChild, NavColumn } from "./navigation";

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
    columns: [
      {
        title: "Buy",
        links: [
          { label: "Buy in Gatineau", href: "/en/buy" },
          { label: "Buyer Consultation", href: "/en/buyer-consultation" },
          { label: "Buyer Guide", href: "/en/buyer-guide" },
          { label: "First-Time Buyer", href: "/en/first-time-buyer" },
          { label: "Buy from Ottawa", href: "/en/buy-from-ottawa" },
        ],
      },
      {
        title: "Plex / Investment",
        links: [
          { label: "Plex / Investment", href: "/en/plex" },
          { label: "Plex Analysis", href: "/en/plex-analysis" },
          { label: "Sell a Plex", href: "/en/sell-plex" },
        ],
      },
      {
        title: "Relocation",
        links: [
          { label: "Ottawa → Gatineau", href: "/en/relocation" },
          { label: "Montréal → Gatineau", href: "/en/montreal-relocation" },
          { label: "Relocation Guide", href: "/en/relocation-guide" },
          { label: "Military — Posting", href: "/en/military" },
          { label: "Military — Relocation", href: "/en/military-relocation" },
          { label: "Military — Buying", href: "/en/military-buyer" },
          { label: "Military — Selling", href: "/en/military-seller" },
        ],
      },
    ],
  },
  {
    label: "Neighborhoods",
    children: [
      { label: "All Neighborhoods", href: "/en/neighborhoods" },
      { label: "Aylmer", href: "/en/aylmer" },
      { label: "Hull", href: "/en/hull" },
      { label: "Plateau", href: "/en/plateau" },
      { label: "Gatineau Centre", href: "/en/gatineau" },
      { label: "Chelsea", href: "/en/chelsea" },
      { label: "Cantley", href: "/en/cantley" },
      { label: "Buckingham", href: "/en/buckingham" },
      { label: "Pontiac", href: "/en/pontiac" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About / Contact", href: "/en/contact" },
      { label: "Blog", href: "/en/blog" },
      { label: "Testimonials", href: "/en/testimonials" },
      { label: "FAQ", href: "/en/faq" },
    ],
  },
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
      { label: "Aylmer", href: "/en/aylmer" },
      { label: "Hull", href: "/en/hull" },
      { label: "Chelsea", href: "/en/chelsea" },
      { label: "Cantley", href: "/en/cantley" },
      { label: "Gatineau Centre", href: "/en/gatineau" },
      { label: "Pontiac", href: "/en/pontiac" },
      { label: "All Neighborhoods", href: "/en/neighborhoods" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Guides", href: "/en/resources" },
      { label: "Blog", href: "/en/blog" },
      { label: "Market Report", href: "/en/market-report" },
      { label: "FAQ", href: "/en/faq" },
      { label: "How Much Does a Realtor Cost?", href: "/en/how-much-does-a-realtor-cost-in-quebec" },
      { label: "Realtor Commission Quebec", href: "/en/realtor-commission-quebec" },
      { label: "How to Choose a Realtor", href: "/en/how-to-choose-a-realtor" },
      { label: "Verify a Broker (OACIQ)", href: "/en/oaciq-find-a-broker" },
      { label: "Realtor vs Selling by Owner", href: "/en/realtor-vs-selling-by-owner-quebec" },
      { label: "Testimonials", href: "/en/testimonials" },
      { label: "About / Contact", href: "/en/contact" },
    ],
  },
];

export const footerPopularLinksEn = [
  { label: "Outaouais Real Estate Agent", href: "/en/outaouais-real-estate-agent" },
  { label: "Realtor Gatineau", href: "/en/gatineau" },
  { label: "Real Estate Agent Aylmer", href: "/en/aylmer" },
  { label: "Realtor Hull", href: "/en/hull" },
  { label: "Realtor Chelsea", href: "/en/chelsea" },
  { label: "Home Valuation Gatineau", href: "/en/home-valuation" },
  { label: "Sell My House Gatineau", href: "/en/sell" },
  { label: "Buy in Gatineau", href: "/en/buy" },
];
