import * as React from "react";

const statsFr = [
  { value: "~9 ans", label: "Ans d'expérience en Outaouais", ghost: "9" },
  { value: "5 ★", label: "Avis Google + Facebook", ghost: "5" },
  { value: "Hall of Fame", label: "RE/MAX", ghost: "H" },
];

const statsEn = [
  { value: "~9 yrs", label: "Years of experience in Outaouais", ghost: "9" },
  { value: "5 ★", label: "Google + Facebook reviews", ghost: "5" },
  { value: "Hall of Fame", label: "RE/MAX", ghost: "H" },
];

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
              <span
                className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
                style={{ fontFamily: "var(--serif)", fontSize: "6rem", fontWeight: 700, color: "rgba(255,255,255,.06)", lineHeight: 1 }}
                aria-hidden="true"
              >{s.ghost}</span>
              <span className="relative" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#fff", letterSpacing: "-.03em", lineHeight: 1.1 }}>
                {s.value}
              </span>
              <span className="relative mt-1" style={{ fontSize: ".65rem", fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll with snap */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "0 1.25rem",
            }}
          >
            <style>{`.stats-scroll::-webkit-scrollbar{display:none}`}</style>
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center text-center shrink-0 stats-scroll"
                style={{
                  flex: "0 0 75vw",
                  scrollSnapAlign: "start",
                  padding: "2rem 1.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,.15)" : "none",
                }}
              >
                <span
                  className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
                  style={{ fontFamily: "var(--serif)", fontSize: "6rem", fontWeight: 700, color: "rgba(255,255,255,.06)", lineHeight: 1 }}
                  aria-hidden="true"
                >{s.ghost}</span>
                <span className="relative" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem, 9vw, 3rem)", fontWeight: 600, color: "#fff", letterSpacing: "-.03em", lineHeight: 1.1 }}>
                  {s.value}
                </span>
                <span className="relative mt-1" style={{ fontSize: ".68rem", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {stats.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIdx === i ? 16 : 6,
                  height: 6,
                  background: activeIdx === i ? "#fff" : "rgba(255,255,255,.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";
export default StatsSection;
