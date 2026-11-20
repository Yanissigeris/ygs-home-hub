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
  { page: "Pontiac", pageEn: "Pontiac", place: "Escarpement d'Eardley au-dessus des champs de Luskville", placeEn: "Eardley Escarpment above the fields of Luskville", artist: "Punteador", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Gatineau_Park_%E2%80%93_Eardley_Escarpment_above_the_fields_at_Luskville_in_autumn.jpg" },
  { page: "Val-des-Monts", pageEn: "Val-des-Monts", place: "Lac Rhéaume, Val-des-Monts", placeEn: "Lac Rhéaume, Val-des-Monts", artist: "John Lian", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Lac_Rheaume.jpg" },
  { page: "Gatineau centre", pageEn: "Central Gatineau", place: "Place Notre-Dame, secteur Gatineau", placeEn: "Place Notre-Dame, Gatineau sector", artist: "Jean-Philippe Bujold", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Place_Notre-Dame_2026-07-17_21-15-42.jpg" },
  { page: "Évaluation à Hull", pageEn: "Hull home valuation", place: "Rue Champlain, Vieux-Hull", placeEn: "Rue Champlain, Old Hull", artist: "Jeangagnon", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:175,_rue_Champlain.jpg" },
  { page: "Blogue", pageEn: "Blog", place: "Centre-ville de Gatineau et rivière des Outaouais", placeEn: "Downtown Gatineau and the Ottawa River", artist: "Harleyd613", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DowntownGatineauAug2022.jpg" },
  { page: "Évaluation gratuite et confirmation d'évaluation", pageEn: "Free home valuation and valuation confirmation", place: "Rue Principale, secteur d'Aylmer", placeEn: "Rue Principale, Aylmer sector", artist: "Veillg1", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Gatineau_(Qu%C3%A9bec)-Secteur_d%27Aylmer-Vue_vers_l%27est_de_la_rue_Principale-2023.jpg" },
  { page: "Témoignages", pageEn: "Testimonials", place: "Secteur d'Aylmer, Gatineau", placeEn: "Aylmer sector, Gatineau", artist: "Veillg1", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Gatineau_(secteur_Aylmer)-2023-05-26.jpg" },
  { page: "Merci", pageEn: "Thank you", place: "Lac Pink, parc de la Gatineau", placeEn: "Pink Lake, Gatineau Park", artist: "Veillg1", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Lac_Pink,_Parc_de_la_Gatineau-2019-10-13.jpg" },
  { page: "Vérifier un courtier à l'OACIQ", pageEn: "Check a broker with the OACIQ", place: "Centre-ville de Hull", placeEn: "Downtown Hull", artist: "Cossette.phil", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Centre-ville_de_Hull.jpg" },
];
