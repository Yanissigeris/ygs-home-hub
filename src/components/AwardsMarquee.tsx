import * as React from "react";

const items = [
  "Hall of Fame RE/MAX",
  "Club Platine RE/MAX",
  "Club 100% RE/MAX",
  "Gatineau · Aylmer · Hull",
  "Service bilingue FR/EN",
  "Équipe Marty Waite",
  "Près de 9 ans d'expérience",
  "5★ Google + Facebook",
];

/**
 * WCAG contrast (verified):
 *  - Text #FFFFFF on #0E2630 → 15.69:1 (AAA, seuil ≥7:1)
 *  - Text #FFFFFF on #112E3A → 14.23:1 (AAA)
 *  - Gold #D4AF6F on #0E2630 → 7.59:1 (AAA, décoratif)
 *  - Gold #D4AF6F on #112E3A → 6.89:1 (AA large +)
 * Conforme mobile + basse luminosité. Toutes valeurs configurables ci-dessous.
 *
 * Configurable CSS variables (set on the section or any ancestor):
 *  --stats-bg          → solid background fallback
 *  --stats-bg-gradient → full background (overrides --stats-bg if set)
 *  --stats-text        → marquee text color
 *  --stats-text-shadow → marquee text shadow
 *  --stats-gold        → bullet/dot color
 *  --stats-gold-glow   → bullet glow shadow
 *  --stats-border      → top/bottom border color
 *  --stats-padding-y   → vertical padding
 *  --stats-font-size       → mobile font size
 *  --stats-font-size-sm    → ≥sm font size
 *  --stats-bullet-size     → bullet size
 *  --stats-item-gap        → horizontal spacing between items
 */
const defaultVars: React.CSSProperties = {
  ["--stats-bg" as any]: "#0E2630",
  ["--stats-bg-gradient" as any]:
    "linear-gradient(180deg, #0E2630 0%, #112E3A 50%, #0E2630 100%)",
  ["--stats-text" as any]: "#FFFFFF",
  ["--stats-text-shadow" as any]:
    "0 1px 3px rgba(0,0,0,.7), 0 0 1px rgba(0,0,0,.5)",
  ["--stats-gold" as any]: "#D4AF6F",
  ["--stats-gold-glow" as any]:
    "0 0 10px rgba(212,175,111,.85), 0 0 4px rgba(212,175,111,.6)",
  ["--stats-border" as any]: "rgba(168,138,90,.35)",
  ["--stats-border-bottom" as any]: "rgba(168,138,90,.25)",
  ["--stats-padding-y" as any]: "1.25rem",
  ["--stats-font-size" as any]: ".9rem",
  ["--stats-font-size-sm" as any]: "1rem",
  ["--stats-bullet-size" as any]: "13px",
  ["--stats-item-gap" as any]: "clamp(1.75rem, 4vw, 2.75rem)",
  ["--stats-inset-shadow" as any]:
    "inset 0 1px 0 rgba(255,255,255,.06), inset 0 -1px 0 rgba(0,0,0,.3)",
};

const AwardsMarquee = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="overflow-hidden awards-marquee"
      style={{
        ...defaultVars,
        background: "var(--stats-bg-gradient, var(--stats-bg))",
        borderTop: "1px solid var(--stats-border)",
        borderBottom: "1px solid var(--stats-border-bottom)",
        padding: "var(--stats-padding-y) 0",
        boxShadow: "var(--stats-inset-shadow)",
      }}
    >
      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div
          className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap"
          style={{ animationDuration: "var(--marquee-speed, 15s)" }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center font-bold uppercase tracking-[.14em]"
              style={{
                fontSize: "var(--stats-font-size)",
                color: "var(--stats-text)",
                marginLeft: "var(--stats-item-gap)",
                marginRight: "var(--stats-item-gap)",
                textShadow: "var(--stats-text-shadow)",
              }}
            >
              <span
                className="mr-4"
                style={{
                  fontSize: "var(--stats-bullet-size)",
                  color: "var(--stats-gold)",
                  textShadow: "var(--stats-gold-glow)",
                }}
                aria-hidden="true"
              >
                ●
              </span>
              {item}
            </span>
          ))}
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              aria-hidden="true"
              className="inline-flex items-center font-bold uppercase tracking-[.14em]"
              style={{
                fontSize: "var(--stats-font-size)",
                color: "var(--stats-text)",
                marginLeft: "var(--stats-item-gap)",
                marginRight: "var(--stats-item-gap)",
                textShadow: "var(--stats-text-shadow)",
              }}
            >
              <span
                className="mr-4"
                style={{
                  fontSize: "var(--stats-bullet-size)",
                  color: "var(--stats-gold)",
                  textShadow: "var(--stats-gold-glow)",
                }}
                aria-hidden="true"
              >
                ●
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .awards-marquee span.inline-flex {
            font-size: var(--stats-font-size-sm) !important;
          }
        }
      `}</style>
    </section>
  );
});

AwardsMarquee.displayName = "AwardsMarquee";
export default AwardsMarquee;
