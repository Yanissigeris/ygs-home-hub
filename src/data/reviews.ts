export interface Review {
  id: string;
  name: string;
  location?: string;
  category: "seller" | "buyer" | "relocation" | "military" | "plex";
  short: string;
  full: string;
  rating: 5;
}

export const reviews: Review[] = [
  // — Sellers —
  {
    id: "s1",
    name: "Abdoulaye.",
    location: "Gatineau",
    category: "seller",
    short: "Un grand merci Yanis Sigeris pour ton accompagnement pour la vente de notre duplex. Tu as était d’un grand support tout le long et on a obtenu un bon prix dans un court délais.",
    full: "Un grand merci Yanis Sigeris pour ton accompagnement pour la vente de notre duplex. Tu as était d’un grand support tout le long et on a obtenu un bon prix dans un court délais.",
    rating: 5,
  },
  {
    id: "s2",
    name: "Bruno.",
    location: "Gatineau",
    category: "seller",
    short: "Très bon service et vente rapide 👍 Poli et dis les vrais affaires",
    full: "Très bon service et vente rapide 👍 Poli et dis les vrais affaires",
    rating: 5,
  },
  {
    id: "s3",
    name: "Nathalie B.",
    location: "Aylmer",
    category: "seller",
    short: "La coordination vente-achat était stressante, mais Yanis a tout orchestré parfaitement.",
    full: "On devait vendre et acheter en même temps — un cauchemar logistique. Yanis a coordonné les deux transactions, géré les délais et gardé tout le monde calme. À aucun moment on s'est sentis perdus ou pressés. Un vrai pro.",
    rating: 5,
  },

  // — Buyers —
  {
    id: "b1",
    name: "Geneviève et Salah.",
    location: "Aylmer",
    category: "buyer",
    short: " Sérieux, je suis trop contente d’avoir trouvé Yanis!! Il a fait en sorte que notre première achat de maison se fasse le plus smooth possible malgré le stresse et les petits problèmes que moi et mon mari ont à rencontrer! Il nous a bien conseillé et je le recommande à vraiment tout le monde! Merci encore Yanis!!",
    full: " Sérieux, je suis trop contente d’avoir trouvé Yanis!! Il a fait en sorte que notre première achat de maison se fasse le plus smooth possible malgré le stresse et les petits problèmes que moi et mon mari ont à rencontrer! Il nous a bien conseillé et je le recommande à vraiment tout le monde! Merci encore Yanis!!",
    rating: 5,
  },
  {
    id: "b2",
    name: "Isabelle.",
    location: "Aylmer",
    category: "buyer",
    short: "Je recommande fortement Yanis comme agent, nous avons faite affaire avec lui pour l'achat de notre premiere maison et wow quel service exceptionnel et a l'ecoute de nos besoins!! Merci pour tout Yanis!!.",
    full: "Je recommande fortement Yanis comme agent, nous avons faite affaire avec lui pour l'achat de notre premiere maison et wow quel service exceptionnel et a l'ecoute de nos besoins!! Merci pour tout Yanis!!.",
    rating: 5,
  },
  {
    id: "b3",
    name: "Émilie G.",
    location: "Hull",
    category: "buyer",
    short: "Négociation solide et conseils honnêtes — Yanis m'a fait économiser des milliers.",
    full: "Yanis m'a conseillé de ne PAS surenchérir sur une propriété qui avait des enjeux cachés. Il a ensuite trouvé une meilleure option et négocié un prix excellent. C'est rare un courtier qui vous dit de ne pas acheter quand ce n'est pas la bonne affaire.",
    rating: 5,
  },

  // — Relocation —
  {
    id: "r1",
    name: "Alexandre.",
    location: "Aylmer/Gatineau",
    category: "relocation",
    short: "Excellente disponibilité, patient et honnête. Je le recommande fortement pour vendre ou pour acheter\n.",
    full: "Excellente disponibilité, patient et honnête. Je le recommande fortement pour vendre ou pour acheter\n.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Catherine M.",
    location: "Montréal → Gatineau",
    category: "relocation",
    short: "Yanis m'a trouvé le quartier parfait en une semaine — sa connaissance locale est inégalée.",
    full: "Je déménageais de Montréal et je ne connaissais pas du tout Gatineau. Yanis m'a fait un tour complet des secteurs, m'a présenté les avantages et les inconvénients de chacun, et m'a trouvé exactement ce que je cherchais en une semaine. Service exceptionnel.",
    rating: 5,
  },

  // — Military —
  {
    id: "m1",
    name: "Cpl. Patrick H.",
    location: "Petawawa → Gatineau",
    category: "military",
    short: "Mutation rapide — Yanis a tout géré à distance. On a acheté avant même d'arriver.",
    full: "Avec une mutation à court préavis, on n'avait pas le temps de chercher sur place. Yanis a organisé des visites virtuelles, répondu à toutes nos questions sur les secteurs proches de la base, et finalisé l'achat avant notre arrivée. Impressionnant.",
    rating: 5,
  },
  {
    id: "m2",
    name: "Sgt. Amélie D.",
    location: "Valcartier → Gatineau",
    category: "military",
    short: "Yanis comprend les réalités militaires. Vente et achat coordonnés sans stress.",
    full: "Troisième mutation en 6 ans — on connaît le stress. Yanis a été de loin le meilleur courtier qu'on a eu. Il a compris notre réalité, coordonné la vente et l'achat simultanément, et tout s'est fait dans les délais. Un vrai professionnel.",
    rating: 5,
  },

  // — Plex / Investors —
  {
    id: "p1",
    name: "Alain P.",
    location: "Hull",
    category: "plex",
    short: "Analyse complète et honnête — Yanis m'a empêché de faire un mauvais investissement.",
    full: "Je regardais un duplex qui semblait une bonne affaire. Yanis a fait une analyse détaillée et m'a montré que les revenus réels ne justifiaient pas le prix demandé. On a trouvé un bien meilleur investissement deux semaines plus tard. Sa rigueur m'a fait économiser gros.",
    rating: 5,
  },
  {
    id: "p2",
    name: "Stéphane et Julie R.",
    location: "Gatineau",
    category: "plex",
    short: "Vente de notre triplex au meilleur prix grâce à une stratégie de mise en marché précise.",
    full: "On pensait que vendre un plex occupé serait compliqué. Yanis a géré la coordination avec les locataires, la documentation et les visites avec professionnalisme. Le résultat a dépassé nos attentes — meilleur prix que ce qu'on espérait.",
    rating: 5,
  },
];

export const getReviewsByCategory = (category: Review["category"]) =>
  reviews.filter((r) => r.category === category);

export const getReviewsById = (ids: string[]) =>
  ids.map((id) => reviews.find((r) => r.id === id)!).filter(Boolean);
