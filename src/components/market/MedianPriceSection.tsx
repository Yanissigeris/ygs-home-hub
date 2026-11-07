import { Suspense, lazy, useState } from "react";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import {
  MEDIAN_HISTORY,
  MEDIAN_HISTORY_SOURCE_RANGE,
  type MedianCategory,
  formatChange,
  formatPrice,
  quarterLabel,
} from "@/data/market-median-history";

// recharts lives in its own "charts" chunk (vite.config.ts) and only loads here.
const MedianPriceChart = lazy(() => import("./MedianPriceChart"));

const copy = {
  fr: {
    title: "Prix médian à Gatineau, comparé à l'an passé",
    intro:
      "Chaque trimestre est comparé au même trimestre de l'année précédente. Les prix montent souvent au printemps et redescendent à l'automne, alors comparer deux trimestres qui se suivent donnerait une fausse impression.",
    categories: { single: "Unifamiliale", plex: "Plex (2 à 5 logements)" },
    toggleLabel: "Type de propriété",
    previous: "Année précédente",
    latest: "Année la plus récente",
    chartLabel: (cat: string) =>
      `Graphique du prix médian ${cat.toLowerCase()} par trimestre, comparé au même trimestre de l'année précédente`,
    tableToggle: "Voir les chiffres",
    colQuarter: "Trimestre",
    colPrevious: "Un an plus tôt",
    colLatest: "Prix médian",
    colChange: "Variation",
    source: `Source : APCIQ par le système Centris, région métropolitaine de Gatineau, baromètres ${MEDIAN_HISTORY_SOURCE_RANGE.fr}. Les variations sont celles publiées par l'APCIQ.`,
    plexNote:
      "Depuis le T3 2025, les plex comptent entre 88 et 107 ventes par trimestre. Avec si peu de ventes, le prix médian bouge davantage d'un trimestre à l'autre.",
    loading: "Chargement du graphique",
  },
  en: {
    title: "Gatineau median price, compared with last year",
    intro:
      "Each quarter is compared with the same quarter one year earlier. Prices often rise in spring and ease in the fall, so comparing two back-to-back quarters would give the wrong picture.",
    categories: { single: "Single-family", plex: "Plex (2 to 5 units)" },
    toggleLabel: "Property type",
    previous: "Previous year",
    latest: "Most recent year",
    chartLabel: (cat: string) =>
      `Chart of the ${cat.toLowerCase()} median price by quarter, compared with the same quarter one year earlier`,
    tableToggle: "See the numbers",
    colQuarter: "Quarter",
    colPrevious: "One year earlier",
    colLatest: "Median price",
    colChange: "Change",
    source: `Source: QPAREB via the Centris system, Gatineau metropolitan area, quarterly barometers ${MEDIAN_HISTORY_SOURCE_RANGE.en}. Changes are as published by QPAREB.`,
    plexNote:
      "Plexes have had between 88 and 107 sales per quarter since Q3 2025. With so few sales, the median price moves more from one quarter to the next.",
    loading: "Loading chart",
  },
} as const;

type Props = { lang?: "fr" | "en" };

const MedianPriceSection = ({ lang = "fr" }: Props) => {
  const t = copy[lang];
  const [category, setCategory] = useState<MedianCategory>("single");
  const categoryName = t.categories[category];

  return (
    <ContentBlock>
      <div className="mx-auto max-w-[52rem]">
        <SectionHeading title={t.title} subtitle={t.intro} />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label={t.toggleLabel} className="inline-flex rounded-full border border-border bg-white p-1">
            {(["single", "plex"] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  category === c ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {t.categories[c]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-5 text-sm text-muted-foreground" aria-hidden="true">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ background: "hsl(226 18% 78%)" }} />
              {t.previous}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-primary" />
              {t.latest}
            </span>
          </div>
        </div>

        <figure className="mt-6">
          <div role="img" aria-label={t.chartLabel(categoryName)} className="h-[300px] w-full sm:h-[360px]">
            <Suspense fallback={<div className="h-full w-full rounded-2xl bg-muted/60" aria-label={t.loading} />}>
              <MedianPriceChart lang={lang} category={category} />
            </Suspense>
          </div>

          <figcaption className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <p>{t.source}</p>
            {category === "plex" && <p>{t.plexNote}</p>}
          </figcaption>
        </figure>

        <details className="mt-6 rounded-2xl border border-border bg-white">
          <summary className="cursor-pointer select-none px-5 py-4 text-sm font-medium text-accent">
            {t.tableToggle}
          </summary>
          <div className="overflow-x-auto px-5 pb-5">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <caption className="sr-only">{categoryName}</caption>
              <thead className="text-muted-foreground">
                <tr className="border-b border-border">
                  <th scope="col" className="py-2 pr-4 font-medium">{t.colQuarter}</th>
                  <th scope="col" className="py-2 pr-4 text-right font-medium">{t.colPrevious}</th>
                  <th scope="col" className="py-2 pr-4 text-right font-medium">{t.colLatest}</th>
                  <th scope="col" className="py-2 text-right font-medium">{t.colChange}</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {MEDIAN_HISTORY.map((row) => (
                  <tr key={row.quarter} className="border-b border-border last:border-0">
                    <th scope="row" className="py-2.5 pr-4 font-medium">{quarterLabel(row.quarter, row.latestYear, lang)}</th>
                    <td className="py-2.5 pr-4 text-right text-muted-foreground">{formatPrice(row[category].previous, lang)}</td>
                    <td className="py-2.5 pr-4 text-right font-semibold">{formatPrice(row[category].latest, lang)}</td>
                    <td className="py-2.5 text-right">{formatChange(row[category].change, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </ContentBlock>
  );
};

export default MedianPriceSection;
