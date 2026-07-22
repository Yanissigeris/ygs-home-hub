import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

type Status = "active" | "sold" | "pending" | "rent";
interface Listing {
  id: string;
  mls: string;
  address: string;
  city: string;
  price_fr: string;
  price_en: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  year_built?: string;
  status: Status;
  remax_url: string;
  description_fr: string;
  description_en: string;
}

const listings: Listing[] = [
  {
    id: "11366995", mls: "11366995",
    address: "7 Rue du Chinook", city: "Gatineau (Hull — Plateau de la Capitale)",
    price_fr: "949 900 $", price_en: "$949,900",
    type: "Triplex", bedrooms: "2", bathrooms: "1", area: "2 157 pi² / sq ft", year_built: "1999",
    status: "sold",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/triplex-a-vendre/7-rue-du-chinook-gatineau-hull-plateau-de-la-capitale-11366995",
    description_fr: "Rare triplex isolé avec garage dans le Plateau de la Capitale, à deux pas du parc de la Gatineau.",
    description_en: "Rare detached triplex with garage in Plateau de la Capitale, steps from Gatineau Park.",
  },
  {
    id: "20453879", mls: "20453879",
    address: "154 Boul. de Lucerne, app. 104", city: "Gatineau (Hull)",
    price_fr: "344 900 $", price_en: "$344,900",
    type: "Condo — Appartement", bedrooms: "2", bathrooms: "1", area: "1 037 pi² / sq ft", year_built: "2004",
    status: "active",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/condo-for-sale/154-boul-de-lucerne-gatineau-hull-manoir-des-trembles-20453879",
    description_fr: "Condo rez-de-chaussée sans escaliers, idéal pour accessibilité. Grand balcon, 2 stationnements.",
    description_en: "Ground-floor condo, no stairs — great for accessibility. Large balcony, 2 parking spots.",
  },
  {
    id: "15163372", mls: "15163372",
    address: "32 Rue de Laperrière", city: "Gatineau (Limbour)",
    price_fr: "649 900 $", price_en: "$649,900",
    type: "Maison à étages", bedrooms: "4", bathrooms: "2", area: "1 639 pi² / sq ft", year_built: "1993",
    status: "sold",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-gatineau/32-rue-de-laperriere/15163372",
    description_fr: "Propriété clé en main sur un terrain d'un acre, adossée au golf Touraine.",
    description_en: "Turn-key home on a one-acre lot backing onto Touraine Golf.",
  },
  {
    id: "28743871", mls: "28743871",
    address: "10 Rue Laviolette", city: "Cantley",
    price_fr: "559 800 $", price_en: "$559,800",
    type: "Split level", bedrooms: "3", bathrooms: "1", area: "1 042 pi² / sq ft", year_built: "1995",
    status: "sold",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/10-rue-laviolette-cantley-cantley-28743871",
    description_fr: "Terrain boisé de 45 793 pi², sans voisins arrière. Maison modernisée de 3 chambres avec garage.",
    description_en: "Wooded 45,793 sq ft lot, no rear neighbours. Updated 3-bedroom home with garage.",
  },
  {
    id: "19674845", mls: "19674845",
    address: "310 Boul. d'Europe, app. 6", city: "Gatineau (Aylmer — Plateau de la Capitale)",
    price_fr: "1 975 $/mois", price_en: "$1,975/month",
    type: "Condo — Appartement (location / rental)", bedrooms: "2", bathrooms: "1", area: "1 240 pi² / sq ft", year_built: "2009",
    status: "rent",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/condo-a-louer-outaouais/310-boul-d-europe-gatineau-aylmer-plateau-de-la-capitale-19674845",
    description_fr: "Condo lumineux de 2 chambres, plafonds de 9 pi, climatiseur mural. Dispo 1er juin 2026.",
    description_en: "Bright 2-bedroom condo, 9 ft ceilings, wall AC. Available June 1, 2026.",
  },
  {
    id: "28167244", mls: "28167244",
    address: "1535 Rue Atmec", city: "Gatineau (Des Fleurs / Rémi Berthiaume / Cheval Blanc)",
    price_fr: "499 900 $", price_en: "$499,900",
    type: "Maison à étages (jumelée) / Semi-detached", bedrooms: "3", bathrooms: "1", area: "1 355 pi² / sq ft", year_built: "2012",
    status: "active",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-gatineau/1535-rue-atmec/28167244",
    description_fr: "Jumelé 2012, aire ouverte, 3 ch., sous-sol aménagé, piscine hors terre au sel, 2 min de l'A-50.",
    description_en: "2012 semi-detached, open concept, 3 bed, finished basement, salt above-ground pool, 2 min from Hwy 50.",
  },
];

export default defineTool({
  name: "list_properties",
  title: "List Yanis Gauthier-Sigeris properties",
  description:
    "List real-estate properties currently or previously represented by Yanis Gauthier-Sigeris (RE/MAX, Gatineau / Outaouais). Optionally filter by status (active, sold, rent, pending).",
  inputSchema: {
    status: z
      .enum(["active", "sold", "rent", "pending", "all"])
      .optional()
      .describe("Filter by listing status. Defaults to 'all'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status }) => {
    const filter = status && status !== "all" ? status : null;
    const rows = filter ? listings.filter((l) => l.status === filter) : listings;
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { count: rows.length, listings: rows },
    };
  },
});
