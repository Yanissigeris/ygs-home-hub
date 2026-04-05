export interface Crumb {
  name: string;
  href: string;
}

export interface BreadcrumbConfig {
  trail: Crumb[];
  current: string;
}

/** Single source of truth for all breadcrumb trails. */
export const breadcrumbMap: Record<string, BreadcrumbConfig> = {
  // ── FR: Seller funnel ──
  "/vendre-ma-maison-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Vendre ma propriété" },
  "/evaluation-gratuite-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Évaluation gratuite" },
  "/plan-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Plan vendeur" },
  "/guide-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Guide vendeur" },
  "/quand-vendre-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Quand vendre" },
  "/vendre-un-plex-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Vendre un plex" },
  "/vendre-maison-hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }, { name: "Hull", href: "/hull" }], current: "Vendre à Hull" },
  "/vendre-maison-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }, { name: "Aylmer", href: "/aylmer" }], current: "Vendre à Aylmer" },
  "/evaluation-maison-hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }, { name: "Hull", href: "/hull" }], current: "Évaluation Hull" },
  "/evaluation-maison-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }, { name: "Aylmer", href: "/aylmer" }], current: "Évaluation Aylmer" },

  // ── FR: Buyer funnel ──
  "/acheter-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Acheter à Gatineau" },
  "/consultation-acheteur": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Consultation acheteur" },
  "/guide-acheteur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Guide acheteur" },
  "/premier-achat-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Premier achat" },
  "/acheter-a-gatineau-depuis-ottawa": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Acheter depuis Ottawa" },

  // ── FR: Relocation ──
  "/relocalisation-ottawa-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Relocalisation" },
  "/relocalisation-montreal-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Relocalisation", href: "/relocalisation-ottawa-gatineau" }], current: "Depuis Montréal" },
  "/guide-relocalisation-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Relocalisation", href: "/relocalisation-ottawa-gatineau" }], current: "Guide relocalisation" },

  // ── FR: Military ──
  "/militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Militaire" },
  "/relocalisation-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Relocalisation militaire" },
  "/acheter-comme-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Acheter" },
  "/vendre-lors-dune-mutation-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Vendre" },
  "/guide-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Guide militaire" },

  // ── FR: Plex ──
  "/investir-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Plex & investissement" },
  "/analyse-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Plex", href: "/investir-plex-gatineau" }], current: "Analyse plex" },

  // ── FR: Neighborhoods ──
  "/quartiers-a-considerer-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Quartiers" },
  "/plateau-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau / Aylmer" },
  "/hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Hull" },
  "/buckingham-masson-angers": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Buckingham / Masson-Angers" },
  "/gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Gatineau (centre)" },
  "/aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Aylmer" },
  "/plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau" },
  "/chelsea": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Chelsea" },
  "/cantley": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Cantley" },
  "/val-des-monts": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Val-des-Monts" },
  "/masson-angers": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Masson-Angers" },
  "/buckingham": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Buckingham" },
  "/gatineau-centre": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Gatineau (centre)" },
  "/pontiac": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Pontiac" },
  "/cote-dazur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Côte-d'Azur" },
  "/limbour": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Limbour" },
  "/vivre-a-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Aylmer", href: "/aylmer" }], current: "Vivre à Aylmer" },
  "/vivre-a-hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Hull", href: "/hull" }], current: "Vivre à Hull" },
  "/vivre-dans-le-plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Plateau", href: "/plateau" }], current: "Vivre dans le Plateau" },
  "/courtier-immobilier-outaouais": { trail: [{ name: "Accueil", href: "/" }], current: "Courtier Outaouais" },

  // ── FR: Resources & other ──
  "/ressources": { trail: [{ name: "Accueil", href: "/" }], current: "Ressources" },
  "/rapport-marche-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Rapport de marché" },
  "/faq": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Questions fréquentes" },
  "/temoignages": { trail: [{ name: "Accueil", href: "/" }], current: "Témoignages" },
  "/proprietes": { trail: [{ name: "Accueil", href: "/" }], current: "Propriétés" },
  "/contact-yanis": { trail: [{ name: "Accueil", href: "/" }], current: "Contact" },
  "/blogue": { trail: [{ name: "Accueil", href: "/" }], current: "Blogue" },

  // ── FR: Courtier articles ──
  "/combien-coute-un-courtier-immobilier-au-quebec": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Coût d'un courtier" },
  "/comment-choisir-un-courtier-immobilier": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Choisir un courtier" },
  "/verifier-un-courtier-immobilier-oaciq": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Vérifier un courtier (OACIQ)" },
  "/frais-de-courtage-immobilier-quebec": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Frais de courtage" },
  "/courtier-immobilier-ou-vendre-soi-meme": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Courtier ou vendre seul" },

  // ══════════════════════════════════════════
  // EN routes
  // ══════════════════════════════════════════

  // ── EN: Seller funnel ──
  "/en/sell": { trail: [{ name: "Home", href: "/en" }], current: "Sell My Property" },
  "/en/home-valuation": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Free Valuation" },
  "/en/seller-plan": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Plan" },
  "/en/seller-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Guide" },
  "/en/when-to-sell": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "When to Sell" },
  "/en/sell-plex": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Sell a Plex" },
  "/en/sell-house-hull": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }, { name: "Hull", href: "/en/hull" }], current: "Sell in Hull" },
  "/en/sell-house-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }, { name: "Aylmer", href: "/en/aylmer" }], current: "Sell in Aylmer" },
  "/en/home-valuation-hull": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }, { name: "Hull", href: "/en/hull" }], current: "Valuation Hull" },
  "/en/home-valuation-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }, { name: "Aylmer", href: "/en/aylmer" }], current: "Valuation Aylmer" },

  // ── EN: Buyer funnel ──
  "/en/buy": { trail: [{ name: "Home", href: "/en" }], current: "Buy in Gatineau" },
  "/en/buyer-consultation": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buyer Consultation" },
  "/en/buyer-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buyer Guide" },
  "/en/first-time-buyer": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "First-Time Buyer" },
  "/en/buy-from-ottawa": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buy from Ottawa" },

  // ── EN: Relocation ──
  "/en/relocation": { trail: [{ name: "Home", href: "/en" }], current: "Relocation" },
  "/en/montreal-relocation": { trail: [{ name: "Home", href: "/en" }, { name: "Relocation", href: "/en/relocation" }], current: "From Montréal" },
  "/en/relocation-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Relocation", href: "/en/relocation" }], current: "Relocation Guide" },

  // ── EN: Military ──
  "/en/military": { trail: [{ name: "Home", href: "/en" }], current: "Military" },
  "/en/military-relocation": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Military Relocation" },
  "/en/military-buyer": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Buy" },
  "/en/military-seller": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Sell" },
  "/en/military-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Military Guide" },

  // ── EN: Plex ──
  "/en/plex": { trail: [{ name: "Home", href: "/en" }], current: "Plex & Investment" },
  "/en/plex-analysis": { trail: [{ name: "Home", href: "/en" }, { name: "Plex", href: "/en/plex" }], current: "Plex Analysis" },

  // ── EN: Neighborhoods ──
  "/en/neighborhoods": { trail: [{ name: "Home", href: "/en" }], current: "Neighbourhoods" },
  "/en/plateau-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Plateau / Aylmer" },
  "/en/hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Hull" },
  "/en/buckingham": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Buckingham" },
  "/en/gatineau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Gatineau Centre" },
  "/en/aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Aylmer" },
  "/en/plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Plateau" },
  "/en/chelsea": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Chelsea" },
  "/en/cantley": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Cantley" },
  "/en/val-des-monts": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Val-des-Monts" },
  "/en/masson-angers": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Masson-Angers" },
  "/en/gatineau-centre": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Gatineau Centre" },
  "/en/pontiac": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Pontiac" },
  "/en/cote-dazur": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Côte-d'Azur" },
  "/en/limbour": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }], current: "Limbour" },
  "/en/living-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }, { name: "Aylmer", href: "/en/aylmer" }], current: "Living in Aylmer" },
  "/en/living-hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }, { name: "Hull", href: "/en/hull" }], current: "Living in Hull" },
  "/en/living-plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighbourhoods", href: "/en/neighborhoods" }, { name: "Plateau", href: "/en/plateau" }], current: "Living in the Plateau" },
  "/en/outaouais-real-estate-agent": { trail: [{ name: "Home", href: "/en" }], current: "Outaouais Agent" },

  // ── EN: Resources & other ──
  "/en/resources": { trail: [{ name: "Home", href: "/en" }], current: "Resources" },
  "/en/market-report": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Market Report" },
  "/en/faq": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "FAQ" },
  "/en/testimonials": { trail: [{ name: "Home", href: "/en" }], current: "Testimonials" },
  "/en/properties": { trail: [{ name: "Home", href: "/en" }], current: "Properties" },
  "/en/contact": { trail: [{ name: "Home", href: "/en" }], current: "Contact" },
  "/en/blog": { trail: [{ name: "Home", href: "/en" }], current: "Blog" },

  // ── EN: Courtier articles ──
  "/en/how-much-does-a-realtor-cost-in-quebec": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Realtor Cost" },
  "/en/realtor-commission-quebec": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Commission Fees" },
  "/en/how-to-choose-a-realtor": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Choose a Realtor" },
  "/en/oaciq-find-a-broker": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Find a Broker (OACIQ)" },
  "/en/realtor-vs-selling-by-owner-quebec": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Realtor vs. FSBO" },
};
