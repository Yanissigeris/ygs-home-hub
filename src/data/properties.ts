import property28743871 from "@/assets/property-28743871.webp";
import property20453879 from "@/assets/property-20453879.webp";
import property15163372 from "@/assets/property-15163372.webp";
import property17113358 from "@/assets/property-17113358.jpg";
import property11366995 from "@/assets/property-11366995.jpg";

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
    id: "11366995",
    address: "7 Rue du Chinook",
    city: "Gatineau (Hull — Plateau de la Capitale)",
    price: "949 900 $",
    type: "Triplex",
    bedrooms: "2",
    bathrooms: "1",
    area: "2 157 pi²",
    yearBuilt: "1999",
    description:
      "Rare triplex isolé avec garage dans le Plateau de la Capitale, à deux pas du parc de la Gatineau. 3 logements de 2 chambres chacun avec salle de bain et salle de lavage. Cour arrière privée sans voisins à l'arrière. Revenus sous le marché — potentiel d'optimisation intéressant.",
    image: property11366995,
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/triplex-a-vendre/7-rue-du-chinook-gatineau-hull-plateau-de-la-capitale-11366995",
    mls: "11366995",
    status: "active",
  },
  {
    id: "20453879",
    address: "154 Boul. de Lucerne, app. 104",
    city: "Gatineau (Hull)",
    price: "359 900 $",
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
  {
    id: "15163372",
    address: "32 Rue de Laperrière",
    city: "Gatineau (Limbour)",
    price: "649 900 $",
    type: "Maison à étages",
    bedrooms: "4",
    bathrooms: "2",
    powderRooms: "1",
    area: "1 639 pi²",
    lotSize: "47 271 pi²",
    yearBuilt: "1993",
    description:
      "Superbe propriété clé en main sur un vaste terrain d'un acre, adossée au golf Touraine. 4 chambres, 2 salles de bains, garage, aire ouverte cuisine/salle à manger, deux salons dont un avec foyer électrique. Sous-sol avec immense salle familiale.",
    image: property15163372,
    remaxUrl:
      "https://remax-direct.com/fr/nos-proprietes/gatineau-gatineau/32-rue-de-laperriere/15163372",
    mls: "15163372",
    status: "active",
  },
  {
    id: "17113358",
    address: "47 Rue Brook",
    city: "Gatineau (Aylmer)",
    price: "439 900 $",
    type: "Maison à étages",
    bedrooms: "3",
    bathrooms: "1",
    powderRooms: "1",
    area: "1 425 pi²",
    lotSize: "4 302 pi²",
    yearBuilt: "1885",
    description:
      "Située en plein cœur d'Aylmer, à quelques pas de la marina et de la rue Principale. 3 chambres, 1 salle de bain, 1 salle d'eau. Rénovée avec soin, clé en main, idéale pour un mode de vie pratique et vivant dans l'un des secteurs les plus prisés.",
    image: property17113358,
    remaxUrl:
      "https://remax-direct.com/fr/nos-proprietes/gatineau-aylmer/47-rue-brook/17113358",
    mls: "17113358",
    status: "active",
  },
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
    status: "sold",
  },
];
