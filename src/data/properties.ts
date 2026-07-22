import property28743871 from "@/assets/property-28743871.webp";
import property20453879 from "@/assets/property-20453879.webp";
import property15163372 from "@/assets/property-15163372.webp";

import property11366995 from "@/assets/property-11366995.webp";
import property19674845 from "@/assets/property-19674845.webp";
import property28167244 from "@/assets/property-28167244.webp";
import property14073975 from "@/assets/property-14073975.webp";
import property19326119 from "@/assets/property-19326119.webp";

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
  status: "active" | "sold" | "pending" | "rent";
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
    status: "sold",
  },
  {
    id: "20453879",
    address: "154 Boul. de Lucerne, app. 104",
    city: "Gatineau (Hull)",
    price: "344 900 $",
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
    status: "sold",
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
  {
    id: "19674845",
    address: "310 Boul. d'Europe, app. 6",
    city: "Gatineau (Aylmer — Plateau de la Capitale)",
    price: "1 975 $/mois",
    type: "Condo — Appartement (location)",
    bedrooms: "2",
    bathrooms: "1",
    area: "1 240 pi²",
    yearBuilt: "2009",
    description:
      "Condo lumineux de 2 chambres au Plateau de la Capitale. Plafonds de 9 pieds, électros inclus, climatiseur mural, 1 stationnement, remise et patio privés. Disponible le 1er juin 2026.",
    image: property19674845,
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/condo-a-louer-outaouais/310-boul-d-europe-gatineau-aylmer-plateau-de-la-capitale-19674845",
    mls: "19674845",
    status: "rent",
  },
  {
    id: "28167244",
    address: "1535 Rue Atmec",
    city: "Gatineau (Gatineau — Des Fleurs / Rémi Berthiaume / Cheval Blanc)",
    price: "499 900 $",
    type: "Maison à étages (jumelée)",
    bedrooms: "3",
    bathrooms: "1",
    powderRooms: "1",
    area: "1 355 pi²",
    lotSize: "2 906 pi²",
    yearBuilt: "2012",
    description:
      "Jumelé de 2012 dans un secteur familial de Gatineau. Aire ouverte lumineuse avec îlot et électroménagers inox, 3 chambres dont la principale avec walk-in, salle de bain avec douche et bain séparés. Sous-sol entièrement aménagé. Terrain clôturé avec piscine hors terre au sel, remise et stationnement asphalté pour 5 voitures. Climatiseur mural, échangeur d'air et aspirateur central inclus. À 2 min de l'autoroute 50, 20 min d'Ottawa.",
    image: property28167244,
    remaxUrl:
      "https://remax-direct.com/fr/nos-proprietes/gatineau-gatineau/1535-rue-atmec/28167244",
    mls: "28167244",
    status: "active",
  },
  {
    id: "14073975",
    address: "14 Rue de la Cime",
    city: "Gatineau (Hull — Richelieu / Hautes-Plaines / Dôme)",
    price: "1 079 900 $",
    type: "Triplex",
    bedrooms: "3",
    bathrooms: "1",
    area: "617,70 m² (terrain)",
    yearBuilt: "2003",
    description:
      "Superbe triplex offrant un excellent potentiel d'investissement avec un revenu locatif annuel d'environ 60 600 $. Soigneusement entretenu, il comprend 2 logements de 2 chambres et 1 logement de 3 chambres. Situé dans un cul-de-sac du secteur prisé des Hautes-Plaines, sans voisin à l'arrière, à quelques minutes du parc de la Gatineau. Inclus : 3 lave-vaisselle, 3 climatiseurs muraux et 3 échangeurs d'air.",
    image: property14073975,
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/triplex-a-vendre/14-rue-de-la-cime-gatineau-hull-richelieu-hautes-plaines-dome-14073975",
    mls: "14073975",
    status: "active",
  },
];
