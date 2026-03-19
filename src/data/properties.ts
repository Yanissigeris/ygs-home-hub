import property28743871 from "@/assets/property-28743871.webp";
import property20453879 from "@/assets/property-20453879.webp";

export interface Property {
  id: string;
  address: string;
  city: string;
  price: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  powderRooms?: string;
  area: string;
  lotSize?: string;
  yearBuilt?: string;
  description: string;
  image: string;
  remaxUrl: string;
  mls: string;
  status: "active" | "sold" | "pending";
}

export const properties: Property[] = [
  {
    id: "28743871",
    address: "10 Rue Laviolette",
    city: "Cantley",
    price: "559 800 $",
    type: "Split level - Paliers multiples",
    bedrooms: "3",
    bathrooms: "1",
    powderRooms: "1",
    area: "1 042 pi²",
    lotSize: "45 793 pi²",
    yearBuilt: "1995",
    description:
      "Un vrai coin de nature à quelques minutes de la ville : terrain boisé de 45 793 pi², sans voisins arrière, offrant intimité, calme et un mode de vie axé sur le plein air. Maison modernisée de 3 chambres, concept aire ouverte, garage et stationnement pour plusieurs véhicules.",
    image: property28743871,
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/10-rue-laviolette-cantley-cantley-28743871",
    mls: "28743871",
    status: "active",
  },
  {
    id: "20453879",
    address: "154 Boul. de Lucerne, app. 104",
    city: "Gatineau (Hull)",
    price: "369 900 $",
    type: "Condo — Appartement",
    bedrooms: "2",
    bathrooms: "1",
    area: "1 037 pi²",
    yearBuilt: "2004",
    description:
      "Condo rez-de-chaussée sans escaliers, idéal pour accessibilité. Cuisine accueillante, planchers bois franc et céramique, grande salle de bain avec douche et bain séparés. Grand balcon, 2 stationnements extérieurs. Près du Parc Moussette et des sentiers riverains.",
    image: property20453879,
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/condo-for-sale/154-boul-de-lucerne-gatineau-hull-manoir-des-trembles-20453879",
    mls: "20453879",
    status: "active",
  },
];
