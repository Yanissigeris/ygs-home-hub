import * as React from "react";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";

interface CTASectionProps {
  overline?: string;
  title: string;
  text?: string;
  buttons: { label: string; href: string; variant?: "default" | "outline" | "accent" }[];
  trustLine?: string;
  dark?: boolean;
}

const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  ({ overline, title, text, buttons, trustLine, dark }, ref) => (
    <section
      ref={ref}
      className={`relative overflow-hidden section-rhythm${dark ? "" : " section-gold-divider"}`}
      style={{
        background: dark ? "var(--ink)" : "var(--cream)",
        textAlign: "center",
      }}
    >
      {/* Decorative radial gradient — desktop only */}
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{ background: "radial-gradient(circle 700px at center, rgba(168,138,90,.1), transparent)" }}
          aria-hidden="true"
        />
      )}

      <div className="section-container relative px-[1.25rem] sm:px-6 md:px-8">
        {overline && (
          <p className="label-overline mb-3 justify-center" style={{ color: dark ? "var(--gold)" : undefined }}>{overline}</p>
        )}
        <h2 className="mx-auto max-w-lg" style={{ color: dark ? "#fff" : "var(--ink)", fontSize: "clamp(2rem, 8vw, 3.6rem)" }}>{title}</h2>
        {text && (
          <p className="mx-auto mt-4 max-w-md" style={{ fontSize: ".92rem", lineHeight: 1.6, color: dark ? "rgba(255,255,255,.5)" : "var(--muted)" }}>
            {text}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3">
          {buttons.map((btn) => {
            const isOutline = btn.variant === "outline";
            return (
              <Link
                key={btn.label}
                to={btn.href}
                className="inline-flex items-center justify-center transition-all duration-200 w-full sm:w-auto text-center"
                style={
                  dark
                    ? isOutline
                      ? { border: "1.5px solid rgba(255,255,255,.25)", color: "rgba(255,255,255,.8)", borderRadius: 999, padding: ".9rem 1.5rem", fontSize: ".84rem", fontWeight: 600, letterSpacing: ".025em", minHeight: 44, background: "transparent", transition: "all .2s ease" }
                      : { border: "1.5px solid #A88A5A", color: "#A88A5A", borderRadius: 999, padding: ".9rem 1.5rem", fontSize: ".84rem", fontWeight: 600, letterSpacing: ".025em", minHeight: 44, background: "transparent", transition: "all .2s ease" }
                    : isOutline
                      ? { border: "1.5px solid var(--border)", color: "var(--ink)", borderRadius: 999, padding: ".9rem 1.5rem", fontSize: ".84rem", fontWeight: 600, letterSpacing: ".025em", minHeight: 44, background: "transparent", transition: "all .2s ease" }
                      : { border: "1.5px solid #A88A5A", color: "#A88A5A", borderRadius: 999, padding: ".9rem 1.5rem", fontSize: ".84rem", fontWeight: 600, letterSpacing: ".025em", minHeight: 44, background: "transparent", transition: "all .2s ease" }
                }
                onMouseEnter={(e) => {
                  if (!isOutline) { e.currentTarget.style.background = "#A88A5A"; e.currentTarget.style.color = "#fff"; }
                  if (isOutline && dark) { e.currentTarget.style.borderColor = "rgba(255,255,255,.55)"; e.currentTarget.style.color = "#fff"; }
                }}
                onMouseLeave={(e) => {
                  if (!isOutline) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#A88A5A"; }
                  if (isOutline && dark) { e.currentTarget.style.borderColor = "rgba(255,255,255,.25)"; e.currentTarget.style.color = "rgba(255,255,255,.8)"; }
                }}
                onClick={() => trackCTAClick(btn.label, "cta-section")}
                aria-label={btn.label}
              >
                {btn.label === "Obtenir ma valeur" ? "Évaluation gratuite" : btn.label}
                {!isOutline && " →"}
              </Link>
            );
          })}
        </div>

        {/* Mobile phone link */}
        {dark && (
          <div className="mt-4 md:hidden">
            <a href="tel:+18192103044" style={{ color: "rgba(255,255,255,.45)", fontSize: ".78rem" }}>
              📞 819-210-3044
            </a>
          </div>
        )}

        {trustLine && (
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-10" style={{ borderTop: dark ? "1px solid rgba(255,255,255,.07)" : "1px solid var(--border)" }}>
            <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1rem, 3vw, 1.2rem)", fontWeight: 300, color: dark ? "rgba(255,255,255,.3)" : "var(--muted)" }}>
              « {trustLine} »
            </p>
          </div>
        )}
      </div>
    </section>
  ),
);

CTASection.displayName = "CTASection";
export default CTASection;
