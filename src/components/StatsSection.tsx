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

  return (
    <section ref={ref} style={{ background: "var(--gold)", padding: "2rem 0" }}>
      <div className="section-container">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ "--tw-divide-opacity": ".2" } as React.CSSProperties}>
          {stats.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center justify-center text-center py-4 md:py-2">
              {/* Ghosted background number */}
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
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";
export default StatsSection;
