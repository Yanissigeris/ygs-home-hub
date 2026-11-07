import * as React from "react";
import { Link } from "react-router-dom";
import yanisAbout from "@/assets/yanis-about-new.jpg?w=400;640;900&format=avif;webp&as=picture";

const contentFr = {
  overline: "QUI EST YANIS GAUTHIER-SIGERIS? ",
  quote: "«\u00A0Je vous donne les chiffres et les options, vous décidez.\u00A0»",
  body: `Je suis courtier immobilier résidentiel depuis 2017, avec plus de 300 transactions en Outaouais, surtout à Aylmer et à Hull. Mes clients sont autant des vendeurs et des acheteurs que des investisseurs.

Avant de parler de prix, je vous montre les ventes comparables de votre secteur. Vous voyez les mêmes chiffres que moi, puis c'est vous qui choisissez.

Comme investisseur, j'ai rénové et revendu des propriétés, et j'ai une AEC en gestion de projet. Quand vous regardez un plex ou une maison à rénover, je sais lire les loyers et estimer les travaux.

Je fais partie de l'Équipe Marty Waite chez RE/MAX Direct depuis mes débuts. RE/MAX m'a reconnu au Club 100 %, au Club Platine et au Hall of Fame (2024).`,
  credentials: "Depuis 2017 · Club Platine · Club 100% · Hall of Fame",
  cta: "En savoir plus",
  ctaHref: "/contact-yanis/",
  imgAlt: "Yanis Gauthier-Sigeris, Courtier immobilier, Gatineau",
};

const contentEn = {
  overline: "WHY YANIS GAUTHIER-SIGERIS?",
  quote: '"I give you the numbers and the options, you decide."',
  body: `I've been a residential real estate broker since 2017, with more than 300 transactions in the Outaouais, mostly in Aylmer and Hull. I work with sellers and buyers as much as with investors, and I've worked with military families since 2017.

Before we talk price, I show you the comparable sales in your area. You see the same numbers I do, then you choose.

As an investor, I've renovated and resold properties, and I have a college diploma (AEC) in project management. If you're looking at a plex or a house that needs work, I can read the rents and estimate the renovation costs.

I've been with the Marty Waite Team at RE/MAX Direct since day one. RE/MAX has recognized me with the 100% Club, the Platinum Club and the Hall of Fame (2024).`,
  credentials: "Since 2017 · Platinum Club · 100% Club · Hall of Fame",
  cta: "Learn more",
  ctaHref: "/en/contact/",
  imgAlt: "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais",
};

interface AboutSectionProps { lang?: "fr" | "en"; }

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ lang = "fr" }, ref) => {
  const c = lang === "en" ? contentEn : contentFr;

  return (
    <section ref={ref} className="relative overflow-hidden section-rhythm" style={{ background: "linear-gradient(175deg, var(--ink-deep), var(--ink))", overflow: "hidden" }}>
      {/* Glow effect */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 40% 55%, rgba(247,244,238,0.05), transparent)", pointerEvents: "none", zIndex: 0 }} />
      <div className="section-container relative grid gap-10 lg:grid-cols-[55%_45%] lg:items-center lg:gap-16 md:min-h-[72vh]" style={{ position: "relative", zIndex: 1 }}>
        {/* ─── Left column: text ─── */}
        <div className="order-2 lg:order-1">

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "2px solid var(--ink)",
              paddingLeft: "20px",
              margin: "0 0 2rem 0",
            }}
          >
          <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
                fontWeight: 400,
                fontStyle: "normal",
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
              fontSize: "clamp(16px, 1.05vw, 17px)",
              fontWeight: 400,
              color: "rgba(247,244,238,0.92)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              whiteSpace: "pre-line",
            }}
          >
            {c.body}
          </p>


          {/* CTA */}
          <Link
            to={c.ctaHref}
            className="group inline-flex items-center gap-1.5"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "15px",
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
            <picture>
              {yanisAbout.sources.avif && (
                <source
                  type="image/avif"
                  srcSet={yanisAbout.sources.avif}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 565px"
                />
              )}
              {yanisAbout.sources.webp && (
                <source
                  type="image/webp"
                  srcSet={yanisAbout.sources.webp}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 565px"
                />
              )}
              <img
                src={yanisAbout.img.src}
                alt={c.imgAlt + ", YGS"}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width={565}
                height={800}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </picture>
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
