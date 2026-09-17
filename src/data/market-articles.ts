/**
 * Market-update articles surfaced on the seller, valuation, plex and market
 * report hubs ("Dernières données du marché" block, rendered with
 * <RelatedPages>). Keeping this list by hand is deliberate: it avoids pulling
 * the 170 KB blog-posts module into service pages, and it is the checklist to
 * update when a new quarterly/monthly market article is published.
 *
 * Newest first. `audiences` decides where an article is shown.
 */
export type MarketAudience = "seller" | "investor" | "market";

export interface MarketArticle {
  slug: string;
  slugEn: string;
  title: string;
  titleEn: string;
  text: string;
  textEn: string;
  /** ISO date, used for ordering only */
  date: string;
  audiences: MarketAudience[];
}

export const marketArticles: MarketArticle[] = [
  {
    slug: "inventaire-gatineau-2026-30-pourcent-inscriptions",
    slugEn: "gatineau-inventory-2026-30-percent-listings",
    title: "Inscriptions +30\u00A0% à Gatineau\u00A0: l'impact sur votre prix",
    titleEn: "Gatineau listings up 30%: what it means for your price",
    text: "T2 2026\u00A0: 2\u00A0007 propriétés à vendre, ce que la montée de l'inventaire change pour votre stratégie de prix.",
    textEn: "Q2 2026: 2,007 homes for sale. What rising inventory changes for your pricing strategy.",
    date: "2026-07-24",
    audiences: ["seller", "investor", "market"],
  },
  {
    slug: "marche-immobilier-gatineau-avril-2026",
    slugEn: "gatineau-real-estate-market-april-2026",
    title: "Marché immobilier Gatineau avril 2026\u00A0: trois vitesses opposées",
    titleEn: "Gatineau real estate market, April 2026: three opposing speeds",
    text: "Plex vendus en 30 jours, condos qui s'accumulent\u00A0: la divergence par type de propriété.",
    textEn: "Plexes selling in 30 days while condos pile up: the divergence by property type.",
    date: "2026-05-14",
    audiences: ["seller", "investor", "market"],
  },
  {
    slug: "3-erreurs-prix-vendeur-gatineau-2026",
    slugEn: "3-pricing-mistakes-gatineau-sellers-2026",
    title: "Les 3 erreurs de prix qui coûtent 15\u00A0000\u00A0$ aux vendeurs",
    titleEn: "The 3 pricing mistakes costing Gatineau sellers $15,000",
    text: "Chiffres 2026 à l'appui\u00A0: les réflexes de prix qui font perdre des semaines et des milliers de dollars.",
    textEn: "With 2026 numbers: the pricing reflexes that cost sellers weeks and thousands of dollars.",
    date: "2026-05-06",
    audiences: ["seller", "market"],
  },
  {
    slug: "vendre-gatineau-printemps-2026-marche-reequilibre",
    slugEn: "sell-gatineau-spring-2026-market-rebalancing",
    title: "Le marché de Gatineau se rééquilibre",
    titleEn: "The Gatineau market is rebalancing",
    text: "Printemps 2026\u00A0: ce qu'un marché plus équilibré change pour un vendeur.",
    textEn: "Spring 2026: what a more balanced market changes for a seller.",
    date: "2026-04-19",
    audiences: ["seller", "market"],
  },
  {
    slug: "plex-gatineau-mars-2026",
    slugEn: "plex-gatineau-march-2026",
    title: "Plex à Gatineau en mars 2026\u00A0: le marché qui résiste à tout",
    titleEn: "Plex in Gatineau, March 2026: the market that holds strong",
    text: "Ventes +19\u00A0%, délai de 23 jours\u00A0: les chiffres du segment plex.",
    textEn: "Sales up 19%, 23 days on market: the plex segment in numbers.",
    date: "2026-04-18",
    audiences: ["investor", "market"],
  },
];

/** Pages for <RelatedPages>: newest articles for an audience, canonical hrefs. */
export function marketArticlePages(lang: "fr" | "en", audience: MarketAudience, limit = 4) {
  return marketArticles
    .filter((a) => a.audiences.includes(audience))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
    .map((a) =>
      lang === "fr"
        ? { title: a.title, text: a.text, href: `/blogue/${a.slug}/` }
        : { title: a.titleEn, text: a.textEn, href: `/en/blog/${a.slugEn}/` },
    );
}

export const marketBlockCopy = {
  fr: { overline: "Dernières données du marché", title: "Ce que dit le marché en ce moment" },
  en: { overline: "Latest market data", title: "What the market is saying right now" },
};
