import * as React from "react";
import { Link } from "react-router-dom";
import yanisAbout from "@/assets/yanis-about-nobg.png";
import yanisAboutSm from "@/assets/yanis-about-nobg.png";

const contentFr = {
  overline: "Pourquoi YGS",
  title: "Un accompagnement simple, stratégique et humain",
  p1: "Mon rôle est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance, que ce soit à Gatineau, Aylmer, Hull ou ailleurs en Outaouais.",
  p2: "J'accompagne acheteurs, vendeurs et investisseurs en Outaouais avec une approche claire, terrain, et une connaissance approfondie du marché local — prix par quartier, tendances, potentiel de revente et réalités du terrain.",
  p3: "Avec plus de 9 ans d'expérience comme courtier immobilier en Outaouais au sein de l'équipe Marty Waite chez ReMax, j'offre à mes clients un accompagnement solide, stratégique et rassurant du début à la fin. Investisseur immobilier moi-même, je sais aussi analyser en profondeur les opportunités en multilogement à Gatineau et dans la région. Mon expérience terrain en flips immobiliers, combinée à ma formation en gestion de projets, fait de moi un allié incontournable pour tout projet immobilier en Outaouais.",
  pills: ["Près de 9 ans d'expérience", "Club Platine · Club 100% · Temple de la renommée", "Approche axée sur la confiance"],
  cta: "En savoir plus",
  ctaHref: "/contact-yanis",
  imgAlt: "Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau",
  badge1: "Club Platine · Club 100%",
  badge2: "Temple de la renommée",
  quote: "« Je vous donne les chiffres et les options, vous décidez. »",
  attribution: "— Yanis Gauthier-Sigeris, Courtier immobilier résidentiel",
};

const contentEn = {
  overline: "Why YGS",
  title: "Simple, strategic and human guidance",
  p1: "My role is to provide the right information and a clear strategy — so you can move forward with confidence when you're ready, whether in Gatineau, Aylmer, Hull or anywhere in Outaouais.",
  p2: "I support sellers, buyers and investors across Outaouais with a clear, hands-on approach and deep knowledge of the local market — prices by neighborhood, trends, resale potential and on-the-ground realities.",
  p3: "With nearly 9 years of experience as a real estate broker in Outaouais with Team Marty Waite from ReMax, I offer my clients solid, strategic and reassuring support from start to finish. A real estate investor myself, I can also analyze multi-unit opportunities in Gatineau and area in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project in Outaouais.",
  pills: ["Nearly 9 years of experience", "Platinum Club · 100% Club · Hall of Fame", "Trust-centered approach"],
  cta: "Learn more",
  ctaHref: "/en/contact",
  imgAlt: "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais",
  badge1: "Platinum Club · 100% Club",
  badge2: "Hall of Fame",
  quote: '"I give you the numbers and the options — you decide."',
  attribution: "— Yanis Gauthier-Sigeris, Residential Real Estate Broker",
};

interface AboutSectionProps { lang?: "fr" | "en"; }

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ lang = "fr" }, ref) => {
  const c = lang === "en" ? contentEn : contentFr;
  const [expanded, setExpanded] = React.useState(false);
  const readMore = lang === "en" ? "Read more ↓" : "Lire la suite ↓";
  const readLess = lang === "en" ? "Read less ↑" : "Lire moins ↑";
  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--ink)", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
      {/* Ghosted YGS watermark */}
      <span
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ fontFamily: "var(--serif)", fontSize: "22rem", fontWeight: 700, color: "rgba(255,255,255,.04)", lineHeight: 1 }}
        aria-hidden="true"
      >YGS</span>

      <div className="section-container relative grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-[6rem]">
        {/* Photo column */}
        <div className="relative">
          {/* Mobile: centered, max 280px */}
          <div className="mx-auto max-w-[280px] md:max-w-none" style={{ borderRadius: 2, overflow: "hidden", position: "relative", background: "linear-gradient(160deg, hsl(200 42% 16% / .15) 0%, hsl(36 38% 50% / .15) 100%)" }}>
            <img
              src={yanisAbout}
              srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`}
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 90vw, 40vw"
              alt={c.imgAlt + " — YGS Yanis Gauthier-Sigeris"}
              className="aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
              decoding="async"
              width={565}
              height={800}
              onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; }}
            />
            {/* Bottom scrim for badge legibility — desktop only */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 hidden md:block" style={{ background: "linear-gradient(to top, rgba(23,48,59,.6), transparent)" }} aria-hidden="true" />
            {/* Credential badges — overlaid on desktop, below on mobile */}
            <div className="hidden md:flex absolute bottom-0 left-0 right-0 justify-center gap-1.5 sm:gap-2 p-3 sm:p-4">
              {[c.badge1, c.badge2].map((badge) => (
                <span
                  key={badge}
                  className="whitespace-nowrap text-center"
                  style={{
                    background: "var(--gold)",
                    color: "#fff",
                    fontSize: "clamp(.5rem, 1.8vw, .65rem)",
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    padding: ".4rem .65rem",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(168,138,90,.3)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {/* Mobile badges below photo */}
          <div className="flex md:hidden flex-wrap justify-center gap-2 mt-3">
            {[c.badge1, c.badge2].map((badge) => (
              <span
                key={badge}
                className="whitespace-nowrap text-center"
                style={{
                  background: "var(--gold)",
                  color: "#fff",
                  fontSize: ".55rem",
                  fontWeight: 700,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  padding: ".3rem .65rem",
                  borderRadius: 2,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="px-0 md:px-0">
          {/* Eyebrow */}
          <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{c.overline}</p>
          <h2 style={{ color: "#F7F4EE" }}>{c.title}</h2>
          {/* Gold divider */}
          <div style={{ width: 48, height: 1, background: "var(--gold)", marginTop: "1.25rem", marginBottom: "1.5rem" }} aria-hidden="true" />

          <p style={{ fontSize: ".92rem", fontWeight: 300, color: "rgba(255,255,255,.6)", lineHeight: 1.85, marginBottom: "1rem" }}>{c.p1}</p>
          {/* Desktop: always show p2/p3 */}
          <p className="hidden md:block" style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,.55)", lineHeight: 1.8, marginBottom: "1rem" }}>{c.p2}</p>
          <p className="hidden md:block" style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>{c.p3}</p>
          {/* Mobile: collapsible */}
          <div className="md:hidden">
            <div style={{ maxHeight: expanded ? 500 : 0, overflow: "hidden", transition: "max-height .4s ease" }}>
              <p style={{ fontSize: ".92rem", fontWeight: 300, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: "1rem" }}>{c.p2}</p>
              <p style={{ fontSize: ".92rem", fontWeight: 300, color: "rgba(255,255,255,.55)", lineHeight: 1.85 }}>{c.p3}</p>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ background: "none", border: "none", color: "var(--gold)", fontSize: ".82rem", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", padding: ".5rem 0", cursor: "pointer" }}
            >
              {expanded ? readLess : readMore}
            </button>
          </div>

          {/* Credential pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {c.pills.map((pill) => (
              <span
                key={pill}
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: 20,
                  fontSize: ".72rem",
                  fontWeight: 500,
                  padding: ".3rem .75rem",
                  color: "rgba(255,255,255,.7)",
                }}
              >
                ✓ {pill}
              </span>
            ))}
          </div>

          {/* CTA button — full width on mobile */}
          <div className="mt-6">
            <Link
              to={c.ctaHref}
              className="inline-flex items-center justify-center transition-all duration-200 w-full md:w-auto"
              style={{
                background: "transparent",
                color: "#A88A5A",
                border: "1.5px solid #A88A5A",
                borderRadius: 999,
                fontSize: ".82rem",
                fontWeight: 600,
                letterSpacing: ".04em",
                padding: ".7rem 1.6rem",
                minHeight: 44,
                transition: "all .2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#A88A5A"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#A88A5A"; }}
              aria-label={lang === "en" ? "Learn more about Yanis Gauthier-Sigeris" : "En savoir plus sur Yanis Gauthier-Sigeris"}
            >
              {c.cta} →
            </Link>
          </div>

          {/* Signature block */}
          <div className="mt-8" style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: "1.5rem" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 3vw, 1.4rem)", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,.7)", lineHeight: 1.5 }}>
              {c.quote}
            </p>
            <p className="mt-2" style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
              {c.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
