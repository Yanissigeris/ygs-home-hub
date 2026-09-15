import * as React from "react";
import { Star } from "lucide-react";

const statsFr = [
  { value: "~9 ans", label: "Ans d'expérience en Outaouais" },
  { value: "5", stars: true, label: "Avis Google + Facebook" },
  { value: "Hall of Fame 2024", label: "RE/MAX, LLC" },
];

const statsEn = [
  { value: "~9 yrs", label: "Years of experience in Outaouais" },
  { value: "5", stars: true, label: "Google + Facebook reviews" },
  { value: "Hall of Fame 2024", label: "RE/MAX, LLC" },
];

const Stars = ({ lang }: { lang: "fr" | "en" }) => (
  <span
    role="img"
    aria-label={lang === "en" ? "5 out of 5 stars" : "5 étoiles sur 5"}
    className="relative inline-flex items-center gap-0.5 ml-1.5"
    style={{ color: "var(--white)" }}
  >
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} strokeWidth={1.5} fill="currentColor" />
    ))}
  </span>
);

interface StatsSectionProps { lang?: "fr" | "en"; }

const StatsSection = React.forwardRef<HTMLElement, StatsSectionProps>(({ lang = "fr" }, ref) => {
  const stats = lang === "en" ? statsEn : statsFr;
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.scrollWidth / stats.length;
      setActiveIdx(Math.round(scrollLeft / itemWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [stats.length]);

  return (
    <section ref={ref} style={{ background: "var(--gold)", padding: "clamp(2rem, 4vw, 4rem) 0" }}>
      <div className="section-container">
        {/* Desktop: 3 cols with vertical dividers */}
        <div className="hidden md:grid md:grid-cols-3 md:divide-x" style={{ "--tw-divide-opacity": ".2" } as React.CSSProperties}>
          {stats.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center justify-center text-center py-2">
              <span className="relative" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "var(--white)", letterSpacing: "-.03em", lineHeight: 1.1 }}>
                {s.value}
                {"stars" in s && s.stars ? <Stars lang={lang} /> : null}
              </span>
              <span className="relative mt-1" style={{ fontSize: ".65rem", fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: all 3 visible in a row */}
        <div className="md:hidden grid grid-cols-3 divide-x" style={{ "--tw-divide-opacity": ".2" } as React.CSSProperties}>
          {stats.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center justify-center text-center py-2 px-1">
              <span className="relative" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.25rem, 5.5vw, 1.6rem)", fontWeight: 600, color: "var(--white)", letterSpacing: "-.03em", lineHeight: 1.1 }}>
                {s.value}
                {"stars" in s && s.stars ? <Stars lang={lang} /> : null}
              </span>
              <span className="relative mt-1" style={{ fontSize: ".58rem", fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";
export default StatsSection;
