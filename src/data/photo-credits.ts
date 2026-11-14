/**
 * Crédits des photos sous licence libre (Wikimedia Commons) utilisées en haut
 * des pages. Les licences CC BY et CC BY-SA exigent de nommer l'auteur : les
 * crédits sont regroupés sur /credits-photos/ (lien dans le pied de page)
 * plutôt qu'affichés sous chaque photo. Les photos du blogue sont ajoutées
 * automatiquement depuis blog-posts.ts.
 */
export interface PhotoCredit {
  page: string;
  pageEn: string;
  place: string;
  placeEn: string;
  artist: string;
  license: string;
  href: string;
}

export const heroPhotoCredits: PhotoCredit[] = [
  { page: "Aylmer", pageEn: "Aylmer", place: "Marina d'Aylmer, Gatineau", placeEn: "Aylmer marina, Gatineau", artist: "Veillg1", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Gatineau_(Qu%C3%A9bec)-Marina_d%27Aylmer-Vue_du_bout_des_jet%C3%A9es_et_de_la_rivi%C3%A8re_des_Outaouais-2023-05-26.jpg" },
  { page: "Buckingham et Masson-Angers", pageEn: "Buckingham", place: "Rivière du Lièvre, Buckingham", placeEn: "Rivière du Lièvre, Buckingham", artist: "Sorcier du Lac", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Rivi%C3%A8re_du_Li%C3%A8vre,_Buckingham,_Qu%C3%A9bec_2024-20-14_16-20-19.jpg" },
  { page: "Cantley", pageEn: "Cantley", place: "Maison Tiberius-Wright, Cantley", placeEn: "Tiberius Wright house, Cantley", artist: "Wesdarou", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Tiberius_Wright_house_2016-01.jpg" },
  { page: "Chelsea", pageEn: "Chelsea", place: "Belvédère Étienne-Brûlé, parc de la Gatineau", placeEn: "Étienne Brûlé Lookout, Gatineau Park", artist: "cjuneau", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Etienne_Br%C3%BBl%C3%A9_Lookout,_Gatineau_Park_(10396087056).jpg" },
  { page: "Courtier immobilier en Outaouais", pageEn: "Outaouais real estate agent", place: "Promenade de la Gatineau, parc de la Gatineau", placeEn: "Gatineau Parkway, Gatineau Park", artist: "cjuneau", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Ridge_Road,_Gatineau_Park_(7985502539).jpg" },
  { page: "Blogue", pageEn: "Blog", place: "Centre-ville de Gatineau et rivière des Outaouais", placeEn: "Downtown Gatineau and the Ottawa River", artist: "Harleyd613", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DowntownGatineauAug2022.jpg" },
];
