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
    image:
      "https://mediaserver.remax-quebec.com/media/pub/10/6/28743871_1.jpg",
    remaxUrl:
      "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/10-rue-laviolette-cantley-cantley-28743871",
    mls: "28743871",
    status: "active",
  },
];
