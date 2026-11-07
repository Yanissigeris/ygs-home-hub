/**
 * Quarterly median prices, Région métropolitaine de Gatineau.
 * Source: APCIQ (QPAREB) baromètre résidentiel, Centris system, page 1
 * "Par catégories de propriétés". Each figure was read from the PDF at
 * https://com.apciq.ca/sam/pdf/bar/{year}/{year}0{quarter}-bar-gatineau.pdf
 * and cross-checked against the year-over-year change printed one year later.
 *
 * `change` is the year-over-year variation exactly as printed by APCIQ in the
 * report of the most recent quarter (do not recompute: APCIQ revises older data).
 *
 * To add a quarter: append a row, keep 4 rows (latest 4 quarters), update
 * MEDIAN_HISTORY_SOURCE_RANGE.
 */

export type MedianCategory = "single" | "plex";

export type MedianRow = {
  /** Quarter number of the latest year (1 to 4). */
  quarter: 1 | 2 | 3 | 4;
  previousYear: number;
  latestYear: number;
  single: { previous: number; latest: number; change: number };
  plex: { previous: number; latest: number; change: number };
};

export const MEDIAN_HISTORY: MedianRow[] = [
  {
    quarter: 4,
    previousYear: 2024,
    latestYear: 2025,
    single: { previous: 465000, latest: 485000, change: 4 },
    plex: { previous: 570000, latest: 621000, change: 9 },
  },
  {
    quarter: 1,
    previousYear: 2025,
    latestYear: 2026,
    single: { previous: 495000, latest: 489950, change: -1 },
    plex: { previous: 551500, latest: 551500, change: 0 },
  },
  {
    quarter: 2,
    previousYear: 2025,
    latestYear: 2026,
    single: { previous: 511000, latest: 523500, change: 2 },
    plex: { previous: 567000, latest: 599600, change: 7 },
  },
  {
    quarter: 3,
    previousYear: 2025,
    latestYear: 2026,
    single: { previous: 495000, latest: 480000, change: -3 },
    plex: { previous: 604500, latest: 617500, change: 2 },
  },
];

export const MEDIAN_HISTORY_SOURCE_RANGE = { fr: "T4 2024 à T3 2026", en: "Q4 2024 to Q3 2026" };

export const formatPrice = (value: number, lang: "fr" | "en") =>
  lang === "fr"
    ? `${new Intl.NumberFormat("fr-CA").format(value)} $`
    : `$${new Intl.NumberFormat("en-CA").format(value)}`;

export const formatChange = (change: number, lang: "fr" | "en") => {
  const sign = change > 0 ? "+" : change < 0 ? "−" : "";
  return lang === "fr" ? `${sign}${Math.abs(change)} %` : `${sign}${Math.abs(change)}%`;
};

export const quarterLabel = (quarter: number, year: number, lang: "fr" | "en") =>
  lang === "fr" ? `T${quarter} ${year}` : `Q${quarter} ${year}`;
