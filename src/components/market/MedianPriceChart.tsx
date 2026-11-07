import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  MEDIAN_HISTORY,
  type MedianCategory,
  formatChange,
  formatPrice,
  quarterLabel,
} from "@/data/market-median-history";

// Brand colours (index.css): navy = --primary, previous year = navy at low contrast.
const NAVY = "hsl(226 100% 10%)";
const PREVIOUS = "hsl(226 18% 78%)";
const GRID = "hsl(226 18% 90%)";
const MUTED_TEXT = "hsl(226 30% 30%)";

type Props = { lang: "fr" | "en"; category: MedianCategory };

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const MedianPriceChart = ({ lang, category }: Props) => {
  const reducedMotion = usePrefersReducedMotion();

  const data = MEDIAN_HISTORY.map((row) => ({
    key: `${row.quarter}`,
    axis: lang === "fr" ? `T${row.quarter}` : `Q${row.quarter}`,
    previousLabel: quarterLabel(row.quarter, row.previousYear, lang),
    latestLabel: quarterLabel(row.quarter, row.latestYear, lang),
    previous: row[category].previous,
    latest: row[category].latest,
    change: formatChange(row[category].change, lang),
  }));

  const tick = (v: number) =>
    lang === "fr" ? `${Math.round(v / 1000)} k$` : `$${Math.round(v / 1000)}K`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 28, right: 4, bottom: 0, left: 0 }} barGap={4} barCategoryGap="22%">
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis
          dataKey="axis"
          tickLine={false}
          axisLine={false}
          tick={{ fill: MUTED_TEXT, fontSize: 13 }}
          dy={6}
        />
        <YAxis
          width={52}
          tickLine={false}
          axisLine={false}
          tickFormatter={tick}
          tick={{ fill: MUTED_TEXT, fontSize: 12 }}
          domain={[0, "auto"]}
        />
        <Tooltip
          cursor={{ fill: "hsl(226 15% 94%)" }}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const d = payload[0].payload as (typeof data)[number];
            return (
              <div className="rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm shadow-md">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-muted-foreground">{d.previousLabel}</span>
                  <span className="tabular-nums">{formatPrice(d.previous, lang)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between gap-6 font-semibold text-foreground">
                  <span>{d.latestLabel}</span>
                  <span className="tabular-nums">{formatPrice(d.latest, lang)}</span>
                </div>
                <div className="mt-1.5 border-t border-border pt-1.5 text-muted-foreground">
                  {lang === "fr" ? "Variation sur un an : " : "Year over year: "}
                  <span className="font-semibold text-foreground">{d.change}</span>
                </div>
              </div>
            );
          }}
        />
        <Bar dataKey="previous" fill={PREVIOUS} radius={[6, 6, 0, 0]} isAnimationActive={!reducedMotion} animationDuration={500} />
        <Bar dataKey="latest" fill={NAVY} radius={[6, 6, 0, 0]} isAnimationActive={!reducedMotion} animationDuration={500}>
          <LabelList dataKey="change" position="top" offset={8} fill={NAVY} fontSize={13} fontWeight={600} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MedianPriceChart;
