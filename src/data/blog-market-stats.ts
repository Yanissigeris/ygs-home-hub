/**
 * Centralized quarterly market stats for the Blog hero and ticker.
 * Update only `CURRENT_QUARTER_KEY` and the matching entry to keep
 * /blogue and /en/blog automatically in sync.
 */

export type BlogHeroStat = { value: string; label: string };
export type BlogQuarterStats = {
  quarter: { fr: string; en: string };
  hero: { fr: BlogHeroStat[]; en: BlogHeroStat[] };
  ticker: { fr: string[]; en: string[] };
  source: { fr: string; en: string };
};

export const BLOG_MARKET_STATS: Record<string, BlogQuarterStats> = {
  "2026-Q2": {
    quarter: { fr: "T2 2026", en: "Q2 2026" },
    hero: {
      fr: [
        { value: "+7 %", label: "Prix médian plex" },
        { value: "32 j", label: "Délai moyen plex" },
        { value: "599 600 $", label: "Plex · T2 2026" },
      ],
      en: [
        { value: "+7%", label: "Median plex price" },
        { value: "32 d", label: "Avg. plex days" },
        { value: "$599,600", label: "Plex · Q2 2026" },
      ],
    },
    ticker: {
      fr: [
        "T2 2026",
        "Plex +7 %",
        "Délai plex 32 jours",
        "Médian plex 599 600 $",
        "Unifamiliale 523 500 $",
        "Inscriptions +30 %",
        "Source : Chambre immobilière de l'Outaouais",
      ],
      en: [
        "Q2 2026",
        "Plex +7%",
        "Plex days 32",
        "Median plex $599,600",
        "Single-family $523,500",
        "Listings +30%",
        "Source: Outaouais Real Estate Board",
      ],
    },
    source: {
      fr: "Source : Chambre immobilière de l'Outaouais / APCIQ, T2 2026",
      en: "Source: Outaouais Real Estate Board / QPAREB, Q2 2026",
    },
  },
  "2026-Q3": {
    quarter: { fr: "T3 2026", en: "Q3 2026" },
    hero: {
      fr: [
        { value: "+2 %", label: "Prix médian plex" },
        { value: "38 j", label: "Délai moyen plex" },
        { value: "617 500 $", label: "Plex · T3 2026" },
      ],
      en: [
        { value: "+2%", label: "Median plex price" },
        { value: "38 d", label: "Avg. plex days" },
        { value: "$617,500", label: "Plex · Q3 2026" },
      ],
    },
    ticker: {
      fr: [
        "T3 2026",
        "Plex +2 %",
        "Délai plex 38 jours",
        "Médian plex 617 500 $",
        "Unifamiliale 480 000 $",
        "Inscriptions +42 %",
        "Source : Chambre immobilière de l'Outaouais",
      ],
      en: [
        "Q3 2026",
        "Plex +2%",
        "Plex days 38",
        "Median plex $617,500",
        "Single-family $480,000",
        "Listings +42%",
        "Source: Outaouais Real Estate Board",
      ],
    },
    source: {
      fr: "Source : Chambre immobilière de l'Outaouais / APCIQ, T3 2026",
      en: "Source: Outaouais Real Estate Board / QPAREB, Q3 2026",
    },
  },
};

export const CURRENT_QUARTER_KEY = "2026-Q3";

export const currentBlogStats = (): BlogQuarterStats => {
  if (BLOG_MARKET_STATS[CURRENT_QUARTER_KEY]) {
    return BLOG_MARKET_STATS[CURRENT_QUARTER_KEY];
  }
  const fallbackKey = Object.keys(BLOG_MARKET_STATS).sort().pop();
  if (!fallbackKey) {
    throw new Error("No blog market stats available.");
  }
  return BLOG_MARKET_STATS[fallbackKey];
};
