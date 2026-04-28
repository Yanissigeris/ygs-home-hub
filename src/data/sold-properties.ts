import property28743871 from "@/assets/property-28743871.webp";
import property20453879 from "@/assets/property-20453879.webp";
import property15163372 from "@/assets/property-15163372.webp";
import property17113358 from "@/assets/property-17113358.webp";
import property11366995 from "@/assets/property-11366995.webp";

export interface SoldProperty {
  id: string;
  image: string;
  city: string;
  address: string;
  soldPrice: string;
  daysOnMarket?: number;
  percentOfAsking?: number;
  type: string;
}

// PLACEHOLDER DATA — replace with real Centris sold listings
export const soldProperties: SoldProperty[] = [
  {
    id: "sold-placeholder-1",
    image: property11366995,
    city: "Gatineau (Aylmer)",
    address: "Rue Placeholder",
    soldPrice: "725 000 $",
    daysOnMarket: 12,
    type: "Maison unifamiliale",
  },
  {
    id: "sold-placeholder-2",
    image: property28743871,
    city: "Gatineau (Hull)",
    address: "Rue Placeholder",
    soldPrice: "489 000 $",
    percentOfAsking: 102,
    type: "Condo",
  },
  {
    id: "sold-placeholder-3",
    image: property20453879,
    city: "Gatineau (Plateau)",
    address: "Rue Placeholder",
    soldPrice: "615 000 $",
    daysOnMarket: 8,
    type: "Maison unifamiliale",
  },
  {
    id: "sold-placeholder-4",
    image: property15163372,
    city: "Chelsea",
    address: "Chemin Placeholder",
    soldPrice: "879 000 $",
    daysOnMarket: 21,
    type: "Maison unifamiliale",
  },
  {
    id: "sold-placeholder-5",
    image: property17113358,
    city: "Gatineau (Aylmer)",
    address: "Rue Placeholder",
    soldPrice: "1 050 000 $",
    percentOfAsking: 99,
    type: "Plex",
  },
  {
    id: "sold-placeholder-6",
    image: property11366995,
    city: "Cantley",
    address: "Chemin Placeholder",
    soldPrice: "565 000 $",
    daysOnMarket: 15,
    type: "Maison unifamiliale",
  },
];
