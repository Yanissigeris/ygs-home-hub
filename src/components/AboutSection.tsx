import * as React from "react";
import { Link } from "react-router-dom";
import yanisAbout from "@/assets/yanis-about-new.jpg";

const contentFr = {
  overline: "QUI EST YANIS GAUTHIER-SIGERIS? ",
  quote: "« Je vous donne les chiffres et les options, vous décidez. »",
  body: `Courtier immobilier en Outaouais, j'accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Mon objectif : vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.

Membre de l'Équipe Marty Waite depuis le début et actif en immobilier résidentiel depuis 2017, j'ai eu la chance d'être reconnu par RE/MAX — Club Platine, Club 100% et Temple de la renommée. Mais ce qui me motive, c'est de savoir que mes clients prennent des décisions éclairées.

Investisseur immobilier moi-même, je sais également analyser en profondeur les opportunités en multi-logement. Mon expérience concrète en flips immobiliers, combinée à ma formation en gestion de projet (AEC), fait de moi un allié incontournable pour tout projet immobilier.`,
  credentials: "",
  cta: "En savoir plus",
  ctaHref: "/contact-yanis",
  imgAlt: "Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau",
};

const contentEn = {
  overline: "WHY YANIS GAUTHIER-SIGERIS?",
  quote: '"I give you the numbers and the options — you decide."',
  body: `Real estate broker in Outaouais, I support sellers, buyers and investors with a simple, strategic and human approach. My goal: help you make a good decision, at the right time, with the right information.

A member of the Marty Waite Team since the beginning and active in residential real estate since 2017, I've been recognized by RE/MAX — Platinum Club, 100% Club and Hall of Fame. But what motivates me is knowing my clients make informed decisions.

A real estate investor myself, I can also analyze multi-unit opportunities in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project.`,
  credentials: "Since 2017 · Platinum Club · 100% Club · Hall of Fame",
  cta: "Learn more",
  ctaHref: "/en/contact",
  imgAlt: "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais",
};

interface AboutSectionProps { lang?: "fr" | "en"; }

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ lang = "fr" }, ref) => {
  const c = lang === "en" ? contentEn : contentFr;

  return (
    <section ref={ref} className="relative overflow-hidden section-rhythm" style={{ background: "linear-gradient(175deg, var(--ink-deep), var(--ink))", overflow: "hidden" }}>
      <style>{`
        .about-body-text::first-letter {
          font-family: var(--serif);
          font-size: 4em;
          font-weight: 500;
          color: var(--gold-warm-light);
          float: left;
          line-height: 0.9;
          padding: 0.05em 0.12em 0 0;
          margin-right: 0.04em;
        }
        @media (max-width: 640px) {
          .about-body-text::first-letter { font-size: 3.2em; }
        }
      `}</style>
      {/* Glow effect */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 40% 55%, rgba(168,138,90,0.1), transparent)", pointerEvents: "none", zIndex: 0 }} />
      <div className="section-container relative grid gap-10 lg:grid-cols-[55%_45%] lg:items-center lg:gap-16 md:min-h-[72vh]" style={{ position: "relative", zIndex: 1 }}>
        {/* ─── Left column: text ─── */}
        <div className="order-2 lg:order-1">
          {/* Overline */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold-warm-light)",
              marginBottom: "1.5rem",
            }}
          >
            {c.overline}
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid var(--gold)",
              paddingLeft: "20px",
              margin: "0 0 2rem 0",
            }}
          >
          <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--cream)",
                lineHeight: 1.3,
              }}
            >
              {c.quote}
            </p>
          </blockquote>

          {/* Body text */}
          <p
            className="about-body-text"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(247,244,238,0.70)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              whiteSpace: "pre-line",
            }}
          >
            {c.body}
          </p>

          {/* Credentials */}
          {c.credentials && (
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--gold-warm-light)",
                marginBottom: "2rem",
              }}
            >
              {c.credentials}
            </p>
          )}

          {/* CTA */}
          <Link
            to={c.ctaHref}
            className="group inline-flex items-center gap-1.5"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--cream)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color .2s ease",
              minHeight: 44,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "var(--cream)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; }}
          >
            {c.cta}{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ─── Right column: photo ─── */}
        <div className="order-1 lg:order-2 relative mx-auto max-w-[320px] lg:max-w-none">
          <div className="relative overflow-hidden" style={{ borderRadius: 0 }}>
            <img
              src={yanisAbout}
              alt={c.imgAlt + " — YGS"}
              className="aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
              decoding="async"
              width={565}
              height={800}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            {/* Warm overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "var(--ink)",
                opacity: 0.2,
                mixBlendMode: "multiply",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
