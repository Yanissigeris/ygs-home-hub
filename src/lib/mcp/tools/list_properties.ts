import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

type Status = "active" | "sold" | "pending" | "rent" | "rented";
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
    address: "7 Rue du Chinook", city: "Gatineau (Hull, Plateau de la Capitale)",
    price_fr: "949 900 $", price_en: "$949,900",
    type: "Triplex", bedrooms: "2", bathrooms: "1", area: "2 157 pi² / sq ft", year_built: "1999",
    status: "sold",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/triplex-a-vendre/7-rue-du-chinook-gatineau-hull-plateau-de-la-capitale-11366995",
    description_fr: "Rare triplex isolé avec garage dans le Plateau de la Capitale, à deux pas du parc de la Gatineau.",
    description_en: "Rare detached triplex with garage in Plateau de la Capitale, steps from Gatineau Park.",
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
    address: "310 Boul. d'Europe, app. 6", city: "Gatineau (Aylmer, Plateau de la Capitale)",
    price_fr: "1 975 $/mois", price_en: "$1,975/month",
    type: "Condo, Appartement (location / rental)", bedrooms: "2", bathrooms: "1", area: "1 240 pi² / sq ft", year_built: "2009",
    status: "rented",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/condo-a-louer-outaouais/310-boul-d-europe-gatineau-aylmer-plateau-de-la-capitale-19674845",
    description_fr: "Condo lumineux de 2 chambres, plafonds de 9 pi, climatiseur mural. Dispo 1er juin 2026.",
    description_en: "Bright 2-bedroom condo, 9 ft ceilings, wall AC. Available June 1, 2026.",
  },
  {
    id: "26501194", mls: "26501194",
    address: "383 Boul. des Grives, app. 4", city: "Gatineau (Hull, Plateau de la Capitale)",
    price_fr: "294 900 $", price_en: "$294,900",
    type: "Appartement / Condominium apartment", bedrooms: "2", bathrooms: "1", area: "1 144 pi² / sq ft", year_built: "2006",
    status: "active",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-hull/383-boul-des-grives/26501194",
    description_fr: "Unité de coin au dernier étage, 2 chambres, aire ouverte avec foyer électrique, climatiseur mural et 1 144 pi² au coeur du Plateau.",
    description_en: "Top-floor corner unit with 2 bedrooms, open living area with electric fireplace, wall-mounted air conditioner and 1,144 sq ft in the heart of the Plateau.",
  },
  {
    id: "21600052", mls: "21600052",
    address: "516 Rue Notre-Dame", city: "Gatineau (Gatineau, Achbar)",
    price_fr: "364 900 $", price_en: "$364,900",
    type: "Maison de plain-pied / Bungalow", bedrooms: "3", bathrooms: "1", area: "1 187 pi² / 1,187 sq ft", year_built: "1930",
    status: "active",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-gatineau/516-rue-notre-dame/21600052",
    description_fr: "Bungalow de 1930 dans Achbar avec plusieurs rénovations majeures, 3 chambres, bois franc, poêle au bois, électroménagers inclus et sous-sol à finir.",
    description_en: "1930 bungalow in Achbar with several major renovations, 3 bedrooms, hardwood, a wood stove, all appliances included and a basement to finish.",
  },
  {
    id: "18600312", mls: "18600312",
    address: "45 Rue des Louveteaux", city: "Gatineau (Aylmer, Plateau de la Capitale)",
    price_fr: "639 900 $", price_en: "$639,900",
    type: "Maison à étages / Two-storey house", bedrooms: "4", bathrooms: "1", area: "1 725 pi² / 1,725 sq ft", year_built: "2008",
    status: "active",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/45-rue-des-louveteaux-gatineau-aylmer-plateau-de-la-capitale-18600312",
    description_fr: "Maison à étages de 4 chambres avec garage dans un secteur familial du Plateau de la Capitale. Cour clôturée avec piscine hors terre.",
    description_en: "Two-storey 4-bedroom home with a garage in a family area of the Plateau de la Capitale. Fenced backyard with an above-ground pool.",
  },
  {
    id: "15191323", mls: "15191323",
    address: "14 Imp. de la Descente", city: "Gatineau (Aylmer, Vieux Aylmer, Des Cèdres, Marina)",
    price_fr: "517 900 $", price_en: "$517,900",
    type: "Maison de plain-pied / Bungalow", bedrooms: "3", bathrooms: "2", area: "966 pi² / sq ft", year_built: "1974",
    status: "active",
    remax_url: "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/14-imp-de-la-descente-gatineau-aylmer-vieux-aylmer-des-cedres-marina-15191323",
    description_fr: "Plain-pied bien entretenu directement à la marina d'Aylmer, dans une impasse tranquille. Sous-sol aménagé avec 2e cuisine, chambre et salle de bain, pratique pour un proche qui veut son intimité.",
    description_en: "Well-maintained bungalow directly at the Aylmer marina, on a quiet dead-end street. Finished basement with a second kitchen, bedroom and bathroom, handy for a relative who wants their privacy.",
  },
  {
    id: "14821222", mls: "14821222",
    address: "236 Rue Church", city: "Gatineau (Buckingham, Buckingham Est)",
    price_fr: "448 000 $", price_en: "$448,000",
    type: "Maison de plain-pied / Bungalow", bedrooms: "3", bathrooms: "2", area: "1 148 pi² / 1,148 sq ft", year_built: "1960",
    status: "active",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-buckingham/236-rue-church/14821222",
    description_fr: "Bungalow rénové clé en main de 3 chambres et 2 salles de bains à Buckingham Est. Cuisine moderne avec grand îlot, salle familiale rétro avec coin bar, garage double largeur et grande cour avec portail pour véhicule récréatif.",
    description_en: "Turn-key renovated bungalow with 3 bedrooms and 2 bathrooms in Buckingham East. Modern kitchen with a large island, retro family room with a bar corner, double-width garage and a large yard with a gate for a recreational vehicle.",
  },
  {
    id: "12304022", mls: "12304022",
    address: "47 Rue Brook", city: "Gatineau (Aylmer, Vieux Aylmer / Des Cèdres / Marina)",
    price_fr: "399 900 $", price_en: "$399,900",
    type: "Maison à étages / Two-storey house", bedrooms: "3", bathrooms: "1 + 1 salle d'eau / 1 + 1 powder room", area: "1 425 pi² / 1,425 sq ft", year_built: "1885",
    status: "active",
    remax_url: "https://remax-direct.com/fr/nos-proprietes/gatineau-aylmer/47-rue-brook/12304022",
    description_fr: "Maison unifamiliale rénovée de 3 chambres au coeur du Vieux-Aylmer, à distance de marche de la marina et de la rue Principale.",
    description_en: "Renovated 3-bedroom single-family home in the heart of Old Aylmer, walking distance to the marina and Rue Principale.",
  },
];

export default defineTool({
  name: "list_properties",
  title: "List Yanis Gauthier-Sigeris properties",
  description:
    "List real-estate properties currently or previously represented by Yanis Gauthier-Sigeris (RE/MAX, Gatineau / Outaouais). Optionally filter by status (active, sold, rent, pending).",
  inputSchema: {
    status: z
      .enum(["active", "sold", "rent", "rented", "pending", "all"])
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
