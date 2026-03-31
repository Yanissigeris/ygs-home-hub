import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://yanisgauthier.com";

interface Crumb {
  name: string;
  href: string;
}

/** Route → breadcrumb trail (excluding current page). Current page name is derived from the last entry's name. */
const breadcrumbMap: Record<string, { trail: Crumb[]; current: string }> = {
  // ── FR: Seller funnel ──
  "/vendre-ma-maison-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Vendre" },
  "/evaluation-gratuite-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Évaluation gratuite" },
  "/plan-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Plan vendeur" },
  "/guide-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Guide vendeur" },
  "/quand-vendre-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Quand vendre" },
  "/vendre-un-plex-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Vendre un plex" },

  // ── FR: Buyer funnel ──
  "/acheter-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Acheter" },
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
  "/investir-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Investir en plex" },
  "/analyse-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Plex", href: "/investir-plex-gatineau" }], current: "Analyse plex" },

  // ── FR: Neighborhoods ──
  "/quartiers-a-considerer-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Quartiers" },
  "/plateau-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau / Aylmer" },
  "/hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Hull" },
  "/buckingham-masson-angers": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Buckingham / Masson-Angers" },
  "/gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Gatineau centre" },
  "/aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Aylmer" },
  "/plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau" },
  "/chelsea": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Chelsea" },
  "/cantley": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Cantley" },
  "/val-des-monts": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Val-des-Monts" },
  "/masson-angers": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Masson-Angers" },
  "/buckingham": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Buckingham" },
  "/gatineau-centre": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Gatineau centre" },
  "/pontiac": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Pontiac" },
  "/cote-dazur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Côte-d'Azur" },
  "/limbour": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Limbour" },
  "/vivre-a-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Aylmer", href: "/aylmer" }], current: "Vivre à Aylmer" },
  "/vivre-a-hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Hull", href: "/hull" }], current: "Vivre à Hull" },
  "/vivre-dans-le-plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Plateau", href: "/plateau" }], current: "Vivre dans le Plateau" },

  // ── FR: Resources & other ──
  "/ressources": { trail: [{ name: "Accueil", href: "/" }], current: "Ressources" },
  "/rapport-marche-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Rapport de marché" },
  "/faq": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "FAQ" },
  "/temoignages": { trail: [{ name: "Accueil", href: "/" }], current: "Témoignages" },
  "/proprietes": { trail: [{ name: "Accueil", href: "/" }], current: "Propriétés" },
  "/contact-yanis": { trail: [{ name: "Accueil", href: "/" }], current: "Contact" },

  // ── EN: Seller funnel ──
  "/en/sell": { trail: [{ name: "Home", href: "/en" }], current: "Sell" },
  "/en/home-valuation": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Free Valuation" },
  "/en/seller-plan": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Plan" },
  "/en/seller-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Guide" },
  "/en/when-to-sell": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "When to Sell" },
  "/en/sell-plex": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Sell a Plex" },

  // ── EN: Buyer funnel ──
  "/en/buy": { trail: [{ name: "Home", href: "/en" }], current: "Buy" },
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
  "/en/plex": { trail: [{ name: "Home", href: "/en" }], current: "Plex Investment" },
  "/en/plex-analysis": { trail: [{ name: "Home", href: "/en" }, { name: "Plex", href: "/en/plex" }], current: "Plex Analysis" },

  // ── EN: Neighborhoods ──
  "/en/neighborhoods": { trail: [{ name: "Home", href: "/en" }], current: "Neighborhoods" },
  "/en/plateau-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Plateau / Aylmer" },
  "/en/hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Hull" },
  "/en/buckingham": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Buckingham" },
  "/en/gatineau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Gatineau Centre" },
  "/en/aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Aylmer" },
  "/en/plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Plateau" },
  "/en/chelsea": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Chelsea" },
  "/en/cantley": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Cantley" },
  "/en/val-des-monts": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Val-des-Monts" },
  "/en/masson-angers": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Masson-Angers" },
  "/en/gatineau-centre": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Gatineau Centre" },
  "/en/pontiac": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Pontiac" },
  "/en/cote-dazur": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Côte-d'Azur" },
  "/en/limbour": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Limbour" },
  "/en/living-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Aylmer", href: "/en/aylmer" }], current: "Living in Aylmer" },
  "/en/living-hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Hull", href: "/en/hull" }], current: "Living in Hull" },
  "/en/living-plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Plateau", href: "/en/plateau" }], current: "Living in the Plateau" },

  // ── EN: Resources & other ──
  "/en/resources": { trail: [{ name: "Home", href: "/en" }], current: "Resources" },
  "/en/market-report": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Market Report" },
  "/en/faq": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "FAQ" },
  "/en/testimonials": { trail: [{ name: "Home", href: "/en" }], current: "Testimonials" },
  "/en/properties": { trail: [{ name: "Home", href: "/en" }], current: "Properties" },
  "/en/contact": { trail: [{ name: "Home", href: "/en" }], current: "Contact" },
};

/**
 * Auto-injects BreadcrumbList JSON-LD based on current route.
 * Place once in SiteLayout — no per-page wiring needed.
 */
const BreadcrumbJsonLd = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remove previous
    const prev = document.getElementById("ygs-breadcrumb-jsonld");
    if (prev) prev.remove();

    const config = breadcrumbMap[pathname];
    if (!config) return; // Homepage or unknown — no breadcrumb

    const items = [
      ...config.trail.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
      {
        "@type": "ListItem" as const,
        position: config.trail.length + 1,
        name: config.current,
        item: `${BASE_URL}${pathname}`,
      },
    ];

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "ygs-breadcrumb-jsonld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [pathname]);

  return null;
};

export default BreadcrumbJsonLd;
