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
    name: "Marie-Claude D.",
    location: "Aylmer",
    category: "seller",
    short: "Yanis a vendu notre maison en 12 jours, au-dessus du prix demandé. Stratégie impeccable.",
    full: "On hésitait à vendre depuis un an. Yanis nous a donné une lecture claire du marché, un plan de mise en marché précis et des conseils de préparation qui ont fait la différence. Résultat: vendu en 12 jours, au-dessus du prix demandé. Aucune surprise, aucune pression — exactement ce qu'il avait promis.",
    rating: 5,
  },
  {
    id: "s2",
    name: "Jean-François L.",
    location: "Hull",
    category: "seller",
    short: "Zéro pression, zéro surprise. Yanis nous a guidés du début à la fin avec professionnalisme.",
    full: "On avait eu une mauvaise expérience avec un autre courtier. Yanis a été transparent dès le premier appel. Son évaluation était réaliste, son plan clair, et il a géré les négociations avec calme et stratégie. On le recommande sans hésiter.",
    rating: 5,
  },
  {
    id: "s3",
    name: "Nathalie B.",
    location: "Plateau",
    category: "seller",
    short: "La coordination vente-achat était stressante, mais Yanis a tout orchestré parfaitement.",
    full: "On devait vendre et acheter en même temps — un cauchemar logistique. Yanis a coordonné les deux transactions, géré les délais et gardé tout le monde calme. À aucun moment on s'est sentis perdus ou pressés. Un vrai pro.",
    rating: 5,
  },

  // — Buyers —
  {
    id: "b1",
    name: "Sophie et Marc T.",
    location: "Plateau",
    category: "buyer",
    short: "Premier achat — Yanis nous a tout expliqué simplement, sans jamais nous presser.",
    full: "C'était notre premier achat et on avait mille questions. Yanis a pris le temps de tout nous expliquer — le processus, les secteurs, les pièges à éviter. On a trouvé notre maison en 3 semaines et on s'est sentis accompagnés du début à la fin.",
    rating: 5,
  },
  {
    id: "b2",
    name: "David R.",
    location: "Aylmer",
    category: "buyer",
    short: "Yanis connaît chaque rue de Gatineau. Son expertise locale a fait toute la différence.",
    full: "Je cherchais dans trois secteurs différents et Yanis m'a aidé à comparer objectivement — prix, potentiel, qualité de vie. Sa connaissance du terrain est impressionnante. J'ai acheté exactement ce que je cherchais, au bon prix.",
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
    name: "James & Sarah W.",
    location: "Ottawa → Aylmer",
    category: "relocation",
    short: "Moving from Ottawa was seamless. Yanis explained everything about the Quebec process.",
    full: "We were nervous about buying in Quebec — different language, different process, different taxes. Yanis walked us through everything in English, found us a great neighborhood for our family, and made the whole transition smooth. We couldn't have done it without him.",
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
