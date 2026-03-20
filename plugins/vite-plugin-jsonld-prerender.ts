/**
 * Custom Vite plugin that generates per-route static HTML files with
 * pre-injected JSON-LD structured data at build time.
 *
 * This ensures Googlebot can read structured data without executing JS.
 * Each route gets its own dist/[path]/index.html with:
 *   - BreadcrumbList schema
 *   - Neighborhood RealEstateAgent schema (where applicable)
 *   - FAQPage schema (where applicable)
 */
import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

/* ─── Types ─── */
interface Crumb { name: string; href: string }
interface BreadcrumbConfig { trail: Crumb[]; current: string }

const BASE_URL = "https://ygs-home-hub.lovable.app";

/* ─── Breadcrumb map (mirrors src/components/BreadcrumbJsonLd.tsx) ─── */
const breadcrumbMap: Record<string, BreadcrumbConfig> = {
  // FR: Seller
  "/vendre-ma-maison-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Vendre" },
  "/evaluation-gratuite-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Évaluation gratuite" },
  "/plan-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Plan vendeur" },
  "/guide-vendeur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Guide vendeur" },
  "/quand-vendre-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Quand vendre" },
  "/vendre-un-plex-a-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Vendre", href: "/vendre-ma-maison-gatineau" }], current: "Vendre un plex" },
  // FR: Buyer
  "/acheter-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Acheter" },
  "/consultation-acheteur": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Consultation acheteur" },
  "/guide-acheteur-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Guide acheteur" },
  "/premier-achat-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Premier achat" },
  "/acheter-a-gatineau-depuis-ottawa": { trail: [{ name: "Accueil", href: "/" }, { name: "Acheter", href: "/acheter-a-gatineau" }], current: "Acheter depuis Ottawa" },
  // FR: Relocation
  "/relocalisation-ottawa-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Relocalisation" },
  "/relocalisation-montreal-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Relocalisation", href: "/relocalisation-ottawa-gatineau" }], current: "Depuis Montréal" },
  "/guide-relocalisation-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Relocalisation", href: "/relocalisation-ottawa-gatineau" }], current: "Guide relocalisation" },
  // FR: Military
  "/militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Militaire" },
  "/relocalisation-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Relocalisation militaire" },
  "/acheter-comme-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Acheter" },
  "/vendre-lors-dune-mutation-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Vendre" },
  "/guide-militaire-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Militaire", href: "/militaire-gatineau" }], current: "Guide militaire" },
  // FR: Plex
  "/investir-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Investir en plex" },
  "/analyse-plex-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Plex", href: "/investir-plex-gatineau" }], current: "Analyse plex" },
  // FR: Neighborhoods
  "/quartiers-a-considerer-a-gatineau": { trail: [{ name: "Accueil", href: "/" }], current: "Quartiers" },
  "/plateau-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau / Aylmer" },
  "/hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Hull" },
  "/buckingham-masson-angers": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Buckingham / Masson-Angers" },
  "/gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Gatineau centre" },
  "/aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Aylmer" },
  "/plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }], current: "Plateau" },
  "/vivre-a-aylmer": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Aylmer", href: "/aylmer" }], current: "Vivre à Aylmer" },
  "/vivre-a-hull": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Hull", href: "/hull" }], current: "Vivre à Hull" },
  "/vivre-dans-le-plateau": { trail: [{ name: "Accueil", href: "/" }, { name: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" }, { name: "Plateau", href: "/plateau" }], current: "Vivre dans le Plateau" },
  // FR: Resources & other
  "/ressources": { trail: [{ name: "Accueil", href: "/" }], current: "Ressources" },
  "/rapport-marche-gatineau": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "Rapport de marché" },
  "/faq": { trail: [{ name: "Accueil", href: "/" }, { name: "Ressources", href: "/ressources" }], current: "FAQ" },
  "/temoignages": { trail: [{ name: "Accueil", href: "/" }], current: "Témoignages" },
  "/proprietes": { trail: [{ name: "Accueil", href: "/" }], current: "Propriétés" },
  "/contact-yanis": { trail: [{ name: "Accueil", href: "/" }], current: "Contact" },
  // EN: Seller
  "/en/sell": { trail: [{ name: "Home", href: "/en" }], current: "Sell" },
  "/en/home-valuation": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Free Valuation" },
  "/en/seller-plan": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Plan" },
  "/en/seller-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Seller Guide" },
  "/en/when-to-sell": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "When to Sell" },
  "/en/sell-plex": { trail: [{ name: "Home", href: "/en" }, { name: "Sell", href: "/en/sell" }], current: "Sell a Plex" },
  // EN: Buyer
  "/en/buy": { trail: [{ name: "Home", href: "/en" }], current: "Buy" },
  "/en/buyer-consultation": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buyer Consultation" },
  "/en/buyer-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buyer Guide" },
  "/en/first-time-buyer": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "First-Time Buyer" },
  "/en/buy-from-ottawa": { trail: [{ name: "Home", href: "/en" }, { name: "Buy", href: "/en/buy" }], current: "Buy from Ottawa" },
  // EN: Relocation
  "/en/relocation": { trail: [{ name: "Home", href: "/en" }], current: "Relocation" },
  "/en/montreal-relocation": { trail: [{ name: "Home", href: "/en" }, { name: "Relocation", href: "/en/relocation" }], current: "From Montréal" },
  "/en/relocation-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Relocation", href: "/en/relocation" }], current: "Relocation Guide" },
  // EN: Military
  "/en/military": { trail: [{ name: "Home", href: "/en" }], current: "Military" },
  "/en/military-relocation": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Military Relocation" },
  "/en/military-buyer": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Buy" },
  "/en/military-seller": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Sell" },
  "/en/military-guide": { trail: [{ name: "Home", href: "/en" }, { name: "Military", href: "/en/military" }], current: "Military Guide" },
  // EN: Plex
  "/en/plex": { trail: [{ name: "Home", href: "/en" }], current: "Plex Investment" },
  "/en/plex-analysis": { trail: [{ name: "Home", href: "/en" }, { name: "Plex", href: "/en/plex" }], current: "Plex Analysis" },
  // EN: Neighborhoods
  "/en/neighborhoods": { trail: [{ name: "Home", href: "/en" }], current: "Neighborhoods" },
  "/en/plateau-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Plateau / Aylmer" },
  "/en/hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Hull" },
  "/en/buckingham": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Buckingham" },
  "/en/gatineau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Gatineau Centre" },
  "/en/aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Aylmer" },
  "/en/plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }], current: "Plateau" },
  "/en/living-aylmer": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Aylmer", href: "/en/aylmer" }], current: "Living in Aylmer" },
  "/en/living-hull": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Hull", href: "/en/hull" }], current: "Living in Hull" },
  "/en/living-plateau": { trail: [{ name: "Home", href: "/en" }, { name: "Neighborhoods", href: "/en/neighborhoods" }, { name: "Plateau", href: "/en/plateau" }], current: "Living in the Plateau" },
  // EN: Resources & other
  "/en/resources": { trail: [{ name: "Home", href: "/en" }], current: "Resources" },
  "/en/market-report": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "Market Report" },
  "/en/faq": { trail: [{ name: "Home", href: "/en" }, { name: "Resources", href: "/en/resources" }], current: "FAQ" },
  "/en/testimonials": { trail: [{ name: "Home", href: "/en" }], current: "Testimonials" },
  "/en/properties": { trail: [{ name: "Home", href: "/en" }], current: "Properties" },
  "/en/contact": { trail: [{ name: "Home", href: "/en" }], current: "Contact" },
};

/* ─── Neighborhood schemas ─── */
interface NeighborhoodData { name: string; description: string; lat: number; lng: number }
const neighborhoodSchemas: Record<string, NeighborhoodData> = {
  "/aylmer": { name: "Aylmer", description: "Courtier immobilier spécialisé dans le secteur Aylmer à Gatineau.", lat: 45.3945, lng: -75.8480 },
  "/hull": { name: "Hull", description: "Courtier immobilier spécialisé dans le secteur Hull à Gatineau.", lat: 45.4283, lng: -75.7140 },
  "/plateau": { name: "Plateau", description: "Courtier immobilier spécialisé dans le Plateau à Gatineau.", lat: 45.4590, lng: -75.7420 },
  "/gatineau": { name: "Gatineau", description: "Courtier immobilier spécialisé dans le secteur Gatineau centre.", lat: 45.4765, lng: -75.7013 },
  "/buckingham-masson-angers": { name: "Buckingham / Masson-Angers", description: "Courtier immobilier spécialisé dans le secteur Buckingham et Masson-Angers.", lat: 45.5850, lng: -75.4220 },
  "/plateau-aylmer": { name: "Plateau / Aylmer", description: "Courtier immobilier pour le Plateau et Aylmer à Gatineau.", lat: 45.3945, lng: -75.8480 },
  "/vivre-a-aylmer": { name: "Aylmer", description: "Vivre à Aylmer — guide du quartier.", lat: 45.3945, lng: -75.8480 },
  "/vivre-a-hull": { name: "Hull", description: "Vivre à Hull — guide du quartier.", lat: 45.4283, lng: -75.7140 },
  "/vivre-dans-le-plateau": { name: "Plateau", description: "Vivre dans le Plateau — guide du quartier.", lat: 45.4590, lng: -75.7420 },
  "/en/aylmer": { name: "Aylmer", description: "Real estate agent specializing in Aylmer, Gatineau.", lat: 45.3945, lng: -75.8480 },
  "/en/hull": { name: "Hull", description: "Real estate agent specializing in Hull, Gatineau.", lat: 45.4283, lng: -75.7140 },
  "/en/plateau": { name: "Plateau", description: "Real estate agent specializing in the Plateau, Gatineau.", lat: 45.4590, lng: -75.7420 },
  "/en/gatineau": { name: "Gatineau", description: "Real estate agent specializing in Gatineau Centre.", lat: 45.4765, lng: -75.7013 },
  "/en/buckingham": { name: "Buckingham", description: "Real estate agent specializing in Buckingham, Gatineau.", lat: 45.5850, lng: -75.4220 },
  "/en/plateau-aylmer": { name: "Plateau / Aylmer", description: "Real estate agent for Plateau and Aylmer in Gatineau.", lat: 45.3945, lng: -75.8480 },
  "/en/living-aylmer": { name: "Aylmer", description: "Living in Aylmer — neighbourhood guide.", lat: 45.3945, lng: -75.8480 },
  "/en/living-hull": { name: "Hull", description: "Living in Hull — neighbourhood guide.", lat: 45.4283, lng: -75.7140 },
  "/en/living-plateau": { name: "Plateau", description: "Living in the Plateau — neighbourhood guide.", lat: 45.4590, lng: -75.7420 },
};

/* ─── Schema generators ─── */
function buildBreadcrumbSchema(route: string, config: BreadcrumbConfig): object {
  const items = [
    ...config.trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
    {
      "@type": "ListItem",
      position: config.trail.length + 1,
      name: config.current,
      item: `${BASE_URL}${route}`,
    },
  ];
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

function buildNeighborhoodSchema(route: string, data: NeighborhoodData): object {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Yanis Gauthier-Sigeris — Courtier immobilier ${data.name}`,
    description: data.description,
    url: `${BASE_URL}${route}`,
    telephone: "+1-819-962-4834",
    email: "yanis@ygsimmo.ca",
    image: `${BASE_URL}/og-image.png`,
    address: { "@type": "PostalAddress", addressLocality: data.name, addressRegion: "QC", addressCountry: "CA" },
    geo: { "@type": "GeoCoordinates", latitude: data.lat, longitude: data.lng },
    areaServed: { "@type": "Place", name: data.name, geo: { "@type": "GeoCoordinates", latitude: data.lat, longitude: data.lng } },
    knowsLanguage: ["fr", "en"],
    parentOrganization: { "@type": "Organization", name: "RE/MAX Direct" },
  };
}

/* ─── Plugin ─── */
export function jsonldPrerenderPlugin(): Plugin {
  return {
    name: "vite-plugin-jsonld-prerender",
    apply: "build",
    closeBundle: {
      sequential: true,
      async handler() {
        const distDir = path.resolve(process.cwd(), "dist");
        const indexPath = path.join(distDir, "index.html");

        if (!fs.existsSync(indexPath)) {
          console.warn("[jsonld-prerender] dist/index.html not found — skipping.");
          return;
        }

        const baseHtml = fs.readFileSync(indexPath, "utf-8");

        // Collect all routes that need prerendering
        const allRoutes = new Set<string>([
          ...Object.keys(breadcrumbMap),
          ...Object.keys(neighborhoodSchemas),
        ]);

        let generated = 0;

        for (const route of allRoutes) {
          const schemas: string[] = [];

          // Breadcrumb
          const bc = breadcrumbMap[route];
          if (bc) {
            schemas.push(
              `<script type="application/ld+json" id="ygs-breadcrumb-jsonld">${JSON.stringify(buildBreadcrumbSchema(route, bc))}</script>`
            );
          }

          // Neighborhood
          const nh = neighborhoodSchemas[route];
          if (nh) {
            schemas.push(
              `<script type="application/ld+json" id="ygs-neighborhood-jsonld">${JSON.stringify(buildNeighborhoodSchema(route, nh))}</script>`
            );
          }

          if (schemas.length === 0) continue;

          // Inject schemas before </head>
          const html = baseHtml.replace("</head>", `${schemas.join("\n")}\n</head>`);

          // Write to dist/[route]/index.html
          const routeDir = path.join(distDir, route.replace(/^\//, ""));
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
          generated++;
        }

        console.log(`[jsonld-prerender] Generated ${generated} pre-rendered HTML files with JSON-LD.`);
      },
    },
  };
}
