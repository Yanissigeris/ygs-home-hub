import * as React from "react";

const items = [
  "Club 100% OR, RE/MAX Québec, 2020, 2022-2025",
  "Hall of Fame, RE/MAX, LLC, 2024",
  "Club Platine, RE/MAX Québec, 2021",
  "Club 100%, RE/MAX Québec, 2019",
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
const defaultVars = {
  "--stats-bg": "var(--ink-mid)",
  "--stats-bg-gradient":
    "linear-gradient(180deg, var(--ink-mid) 0%, var(--ink-mid-deep) 50%, var(--ink-mid) 100%)",
  "--stats-text": "var(--white)",
  "--stats-text-shadow":
    "0 1px 3px rgba(0,0,0,.7), 0 0 1px rgba(0,0,0,.5)",
  "--stats-gold": "var(--gold-bright)",
  "--stats-gold-glow":
    "0 0 10px rgba(212,175,111,.85), 0 0 4px rgba(212,175,111,.6)",
  "--stats-border": "rgba(168,138,90,.35)",
  "--stats-border-bottom": "rgba(168,138,90,.25)",
  "--stats-padding-y": "1.25rem",
  "--stats-font-size": ".9rem",
  "--stats-font-size-sm": "1rem",
  "--stats-bullet-size": "13px",
  "--stats-item-gap": "clamp(1.75rem, 4vw, 2.75rem)",
  "--stats-inset-shadow":
    "inset 0 1px 0 rgba(255,255,255,.06), inset 0 -1px 0 rgba(0,0,0,.3)",
} as React.CSSProperties;

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
      {/* Mobile: static 2x2 grid */}
      <div
        className="sm:hidden px-4"
        role="list"
        aria-label="Distinctions RE/MAX"
      >
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { title: "Club 100% OR", meta: "RE/MAX Québec · 2020, 2022–2025" },
            { title: "Hall of Fame", meta: "RE/MAX, LLC · 2024" },
            { title: "Club Platine", meta: "RE/MAX Québec · 2021" },
            { title: "Club 100%", meta: "RE/MAX Québec · 2019" },
          ].map((it, i) => (
            <div
              key={i}
              role="listitem"
              className="flex items-start gap-2"
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(168,138,90,.22)",
                padding: "10px 12px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: "9px",
                  color: "var(--stats-gold)",
                  textShadow: "0 0 6px rgba(212,175,111,.6)",
                  lineHeight: 1.6,
                }}
              >
                ●
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="font-bold uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".12em",
                    color: "var(--stats-text)",
                    lineHeight: 1.3,
                  }}
                >
                  {it.title}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "var(--stats-gold)",
                    marginTop: "2px",
                    lineHeight: 1.35,
                    opacity: 0.92,
                  }}
                >
                  {it.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/tablet: animated marquee */}
      <div
        className="relative group hidden sm:block"
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
