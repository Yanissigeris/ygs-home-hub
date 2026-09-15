import * as React from "react";
import { Link } from "react-router-dom";

interface AwardsStripProps {
  lang?: "fr" | "en";
}

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
 *  --stats-text        → strip text color
 *  --stats-text-shadow → strip text shadow
 *  --stats-gold        → accent color
 *  --stats-border      → top/bottom border color
 *  --stats-padding-y   → vertical padding
 *  --stats-font-size       → mobile font size
 *  --stats-font-size-sm    → ≥sm font size
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
  "--stats-border": "rgba(168,138,90,.35)",
  "--stats-border-bottom": "rgba(168,138,90,.25)",
  "--stats-padding-y": "1.25rem",
  "--stats-font-size": ".9rem",
  "--stats-font-size-sm": "1rem",
  "--stats-item-gap": "clamp(1.25rem, 3vw, 2.25rem)",
  "--stats-inset-shadow":
    "inset 0 1px 0 rgba(255,255,255,.06), inset 0 -1px 0 rgba(0,0,0,.3)",
} as React.CSSProperties;

const AwardsStrip = React.forwardRef<HTMLElement, AwardsStripProps>(
  ({ lang = "fr" }, ref) => {
    const isEn = lang === "en";
    const entries: Array<{ label: string; href?: string }> = isEn
      ? [
          { label: "Since 2017" },
          { label: "300+ transactions" },
          { label: "5.0 on Google and Facebook", href: "/en/testimonials" },
          { label: "RE/MAX, LLC Hall of Fame 2024" },
        ]
      : [
          { label: "Depuis 2017" },
          { label: "300+ transactions" },
          { label: "5,0 sur Google et Facebook", href: "/temoignages" },
          { label: "Hall of Fame RE/MAX, LLC, 2024" },
        ];

    const itemStyle: React.CSSProperties = {
      fontSize: "var(--stats-font-size)",
      color: "var(--stats-text)",
      textShadow: "var(--stats-text-shadow)",
    };

    const renderLabel = (entry: { label: string; href?: string }) =>
      entry.href ? (
        <Link
          to={entry.href}
          className="hover:underline"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {entry.label}
        </Link>
      ) : (
        <>{entry.label}</>
      );

    return (
      <section
        ref={ref}
        className="overflow-hidden awards-strip"
        style={{
          ...defaultVars,
          background: "var(--stats-bg-gradient, var(--stats-bg))",
          borderTop: "1px solid var(--stats-border)",
          borderBottom: "1px solid var(--stats-border-bottom)",
          padding: "var(--stats-padding-y) 0",
          boxShadow: "var(--stats-inset-shadow)",
        }}
      >
        {/* Mobile: compact static 2x2 grid */}
        <div
          className="sm:hidden px-4"
          role="list"
          aria-label={isEn ? "RE/MAX distinctions" : "Distinctions RE/MAX"}
          style={{ margin: "-0.35rem 0" }}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {entries.map((entry, i) => (
              <div
                key={i}
                role="listitem"
                className="flex items-center"
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(168,138,90,.22)",
                  padding: "7px 10px",
                  minHeight: "38px",
                }}
              >
                <div
                  className="flex-1 min-w-0 leading-tight font-bold uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".08em",
                    color: "var(--stats-text)",
                  }}
                >
                  {renderLabel(entry)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/tablet: static centered row with 1px separators */}
        <div className="relative hidden sm:block">
          <div className="flex items-center justify-center flex-wrap">
            {entries.map((entry, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: 1,
                      height: "1.1em",
                      background: "rgba(255,255,255,.18)",
                      marginLeft: "var(--stats-item-gap)",
                      marginRight: "var(--stats-item-gap)",
                    }}
                  />
                )}
                <span
                  className="inline-flex items-center font-bold uppercase tracking-[.14em]"
                  style={itemStyle}
                >
                  {renderLabel(entry)}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 640px) {
            .awards-strip span.inline-flex {
              font-size: var(--stats-font-size-sm) !important;
            }
          }
        `}</style>
      </section>
    );
  }
);

AwardsStrip.displayName = "AwardsStrip";
export default AwardsStrip;
