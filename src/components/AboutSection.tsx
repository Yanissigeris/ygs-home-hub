import * as React from "react";
import { Link } from "react-router-dom";
import yanisAbout from "@/assets/yanis-about-nobg.png";

const contentFr = {
  overline: "À propos",
  quote: "« Je vous donne les chiffres et les options, vous décidez. »",
  body: "Mon rôle est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance, que ce soit à Gatineau, Aylmer, Hull ou ailleurs en Outaouais. J'accompagne acheteurs, vendeurs et investisseurs en Outaouais avec une approche claire, terrain, et une connaissance approfondie du marché local.",
  credentials: "9 ans · Club Platine · Club 100% · Temple de la renommée",
  cta: "En savoir plus",
  ctaHref: "/contact-yanis",
  imgAlt: "Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau",
};

const contentEn = {
  overline: "About",
  quote: '"I give you the numbers and the options — you decide."',
  body: "My role is to provide the right information and a clear strategy — so you can move forward with confidence when you're ready, whether in Gatineau, Aylmer, Hull or anywhere in Outaouais. I support sellers, buyers and investors across Outaouais with a clear, hands-on approach and deep knowledge of the local market.",
  credentials: "9 years · Platinum Club · 100% Club · Hall of Fame",
  cta: "Learn more",
  ctaHref: "/en/contact",
  imgAlt: "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais",
};

interface AboutSectionProps { lang?: "fr" | "en"; }

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ lang = "fr" }, ref) => {
  const c = lang === "en" ? contentEn : contentFr;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#17303B", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
      <div className="section-container relative grid gap-10 lg:grid-cols-[55%_45%] lg:items-center lg:gap-16">
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
              color: "#A88A5A",
              marginBottom: "1.5rem",
            }}
          >
            {c.overline}
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #A88A5A",
              paddingLeft: "20px",
              margin: "0 0 2rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#F7F4EE",
                lineHeight: 1.3,
              }}
            >
              {c.quote}
            </p>
          </blockquote>

          {/* Body text */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(247,244,238,0.70)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            {c.body}
          </p>

          {/* Credentials */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: "#A88A5A",
              marginBottom: "2rem",
            }}
          >
            {c.credentials}
          </p>

          {/* CTA */}
          <Link
            to={c.ctaHref}
            className="group inline-flex items-center gap-1.5"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#F7F4EE",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color .2s ease",
              minHeight: 44,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "#F7F4EE"; }}
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
                background: "#17303B",
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
