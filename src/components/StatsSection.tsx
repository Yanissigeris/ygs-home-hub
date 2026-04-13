import * as React from "react";

const statsFr = [
  { value: "9", label: "Ans\nd'exp." },
  { value: "5 ★", label: "Google\nFacebook" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

const statsEn = [
  { value: "9", label: "Years\nof exp." },
  { value: "5 ★", label: "Google\nFacebook" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

interface StatsSectionProps { lang?: "fr" | "en"; }

const StatsSection = React.forwardRef<HTMLElement, StatsSectionProps>(({ lang = "fr" }, ref) => {
  const stats = lang === "en" ? statsEn : statsFr;

  return (
    <section ref={ref} style={{ background: "var(--cream)", padding: "clamp(3.5rem, 6vw, 6rem) 0" }}>
      <div className="section-container">
        <div className="flex items-center justify-center">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div className="self-stretch w-px mx-6 sm:mx-10 lg:mx-14" style={{ background: "#D9E1E5" }} />
              )}
              <div className="flex flex-col items-center text-center">
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: s.value.length > 4 ? "clamp(1.6rem, 5vw, 3.2rem)" : "clamp(2.8rem, 8vw, 5rem)",
                    fontWeight: 300,
                    color: "var(--ink)",
                    lineHeight: 1,
                    letterSpacing: "-.02em",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-3"
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";
export default StatsSection;
