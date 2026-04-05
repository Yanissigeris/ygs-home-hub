import * as React from "react";
import { Link } from "react-router-dom";

interface FAQTeaserProps {
  overline?: string;
  title?: string;
  items: { q: string; a: string }[];
  linkLabel?: string;
  linkHref?: string;
}

const HomeFAQTeaser = React.forwardRef<HTMLElement, FAQTeaserProps>(
  ({ overline = "FAQ", title = "Questions fréquentes", items, linkLabel = "Voir toutes les questions", linkHref = "/faq" }, ref) => {
    const [openIndex, setOpenIndex] = React.useState(0);

    return (
      <section ref={ref} style={{ background: "var(--cream)", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-[6rem]">
            {/* Left sidebar — sticky on desktop */}
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <p className="label-overline mb-2">{overline}</p>
              <h2>{title}</h2>
              <div style={{ width: 48, height: 1, background: "var(--gold)", marginTop: "1.2rem", marginBottom: "1.5rem" }} aria-hidden="true" />
              <p style={{ fontSize: ".92rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.7 }}>
                Voici les réponses aux questions que j'entends le plus souvent.
              </p>
              <Link
                to={linkHref}
                className="mt-6 inline-flex items-center justify-center transition-all duration-200"
                style={{ background: "var(--gold)", color: "#fff", borderRadius: 3, fontSize: ".82rem", fontWeight: 600, padding: ".65rem 1.4rem" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(168,138,90,.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                {linkLabel} →
              </Link>
            </div>

            {/* Right — accordion */}
            <div className="flex flex-col gap-2">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 3 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between text-left transition-colors"
                      style={{ padding: "1.4rem 1.5rem", fontSize: ".93rem", fontWeight: 600, color: "var(--ink)" }}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{item.q}</span>
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200"
                        style={{
                          border: isOpen ? "1px solid var(--gold)" : "1px solid var(--border)",
                          background: isOpen ? "var(--gold)" : "transparent",
                          color: isOpen ? "#fff" : "var(--muted)",
                          transform: isOpen ? "rotate(180deg)" : "",
                          fontSize: ".75rem",
                        }}
                      >
                        ▾
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-[350ms]"
                      style={{ maxHeight: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}
                    >
                      <div style={{ padding: "0 1.5rem 1.5rem", fontSize: ".88rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.85 }}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* "See all" link — right aligned */}
              <div className="mt-2 text-right">
                <Link to={linkHref} style={{ fontSize: ".78rem", fontWeight: 600, color: "var(--gold)", letterSpacing: ".04em" }}>
                  {linkLabel} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

HomeFAQTeaser.displayName = "HomeFAQTeaser";
export default HomeFAQTeaser;
