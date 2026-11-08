import * as React from "react";
import { Link } from "react-router-dom";
import lifestyleBg from "@/assets/pathway-lifestyle-bg.webp?w=480;720;900;1280&format=avif;webp&as=picture";
import { setAvatarIntent, type AvatarIntent } from "@/lib/avatar";
import { trackEvent } from "@/lib/analytics";

interface Pathway {
  num: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  badge: string | null;
  intent: AvatarIntent;
}

const pathwaysFr: Pathway[] = [
  {
    num: "01",
    title: "Vendre ma propriété en Outaouais",
    text: "Un prix appuyé sur les ventes de votre secteur, puis une mise en marché pensée pour les bons acheteurs.",
    cta: "Évaluation gratuite",
    href: "/evaluation-gratuite-gatineau/",
    badge: null,
    intent: "vendre",
  },
  {
    num: "02",
    title: "Plex & investissement",
    text: "Les loyers et la valeur marchande, chiffrés avant que vous preniez une décision.",
    cta: "Demander une analyse plex",
    href: "/analyse-plex-gatineau/",
    badge: null,
    intent: "investir",
  },
  {
    num: "03",
    title: "Acheter à Gatineau",
    text: "Le secteur qui vous convient et un budget réaliste, avec des visites bien préparées.",
    cta: "Voir les propriétés",
    href: "/proprietes/",
    badge: null,
    intent: "acheter",
  },
];

const pathwaysEn: Pathway[] = [
  {
    num: "01",
    title: "Sell my property",
    text: "A price backed by sales in your area, then marketing aimed at the right buyers.",
    cta: "Free Home Valuation",
    href: "/en/home-valuation/",
    badge: null,
    intent: "vendre",
  },
  {
    num: "02",
    title: "Plex & Investment",
    text: "Rents and market value, in numbers, before you make a decision.",
    cta: "Request a plex analysis",
    href: "/en/plex-analysis/",
    badge: null,
    intent: "investir",
  },
  {
    num: "03",
    title: "Buy in Gatineau",
    text: "The right neighbourhoods, the right budget and hands-on guidance to buy with confidence.",
    cta: "View properties",
    href: "/en/properties/",
    badge: null,
    intent: "acheter",
  },
];

const headingFr = {
  overline: "Choisissez votre prochaine étape",
  titleFirst: "Où en êtes-vous dans",
  titleAccent: "votre projet?",
  subtitle: "Trois chemins selon votre situation. Choisissez le vôtre, on part de là.",
  calcLead: "Vous achetez?",
  calcLabel: "Calculez votre taxe de bienvenue",
  calcHref: "/acheter-a-gatineau/#calculateurs",
};

const headingEn = {
  overline: "Choose your next step",
  titleFirst: "Where are you in",
  titleAccent: "your project?",
  subtitle: "Three paths depending on your situation. Choose the one that fits, you'll be guided from A to Z.",
  calcLead: "Buying?",
  calcLabel: "Estimate your welcome tax",
  calcHref: "/en/buy/#calculators",
};

interface PathwaySectionProps {
  lang?: "fr" | "en";
}

const PathwaySection = React.forwardRef<HTMLElement, PathwaySectionProps>(
  ({ lang = "fr" }, ref) => {
    const pathways = lang === "en" ? pathwaysEn : pathwaysFr;
    const heading = lang === "en" ? headingEn : headingFr;

    return (
      <section
        ref={ref}
        className="section-pathway section-rhythm relative overflow-hidden md:py-24"
        style={{ background: "var(--cream-deep)" }}
      >
        {/* Desktop: photo lifestyle as a floating frame, asymmetric on all sides */}
        <div
          aria-hidden="true"
          role="presentation"
          className="hidden md:block absolute overflow-hidden"
          style={{
            top: "80px",
            right: "4%",
            width: "50%",
            height: "calc(100% - 160px)",
            boxShadow:
              "0 20px 60px rgba(0,14,53,0.30), 0 8px 20px rgba(0,14,53,0.15)",
            zIndex: 1,
          }}
        >
          <picture>
            {lifestyleBg.sources.avif && (
              <source type="image/avif" srcSet={lifestyleBg.sources.avif} sizes="(min-width: 1280px) 640px, 50vw" />
            )}
            {lifestyleBg.sources.webp && (
              <source type="image/webp" srcSet={lifestyleBg.sources.webp} sizes="(min-width: 1280px) 640px, 50vw" />
            )}
            <img
              src={lifestyleBg.img.src}
              alt=""
              loading="lazy"
              decoding="async"
              width={1280}
              height={714}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,241,234,0.15) 0%, rgba(0,14,53,0.10) 100%)",
            }}
          />
        </div>

        {/* Mobile: photo full-width band on top */}
        <div
          aria-hidden="true"
          role="presentation"
          className="md:hidden w-full h-[200px] mb-8 relative overflow-hidden"
        >
          <picture>
            {lifestyleBg.sources.avif && (
              <source type="image/avif" srcSet={lifestyleBg.sources.avif} sizes="100vw" />
            )}
            {lifestyleBg.sources.webp && (
              <source type="image/webp" srcSet={lifestyleBg.sources.webp} sizes="100vw" />
            )}
            <img
              src={lifestyleBg.img.src}
              alt=""
              loading="lazy"
              decoding="async"
              width={720}
              height={402}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="section-container relative z-10">
          {/* Editorial header on cream */}
          <div className="max-w-[580px]">
            <h2 style={{ color: "var(--ink)" }}>
              {heading.titleFirst}{" "}
              <span style={{ color: "var(--ink)", fontStyle: "normal" }}>
                {heading.titleAccent}
              </span>
            </h2>
            <p
              className="prose-body mt-4"
              style={{ color: "rgba(0,14,53,0.7)", maxWidth: 520 }}
            >
              {heading.subtitle}
            </p>
          </div>

          {/* Floating cards block with deep shadow */}
          <div
            className="relative z-10 mt-10 md:mt-14 md:w-[62%]"
            style={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,14,53,0.35)",
              background: "linear-gradient(175deg, var(--ink-deep), var(--ink))",
            }}
          >

          <div
            className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-[0.75rem] md:gap-px overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >

            {pathways.map((p, i) => (
              <Link
                key={p.href}
                to={p.href}
                onClick={() => {
                  setAvatarIntent(p.intent);
                  trackEvent("avatar_router_select", { avatar: p.intent });
                }}
                className="group flex flex-col transition-[color,background-color,box-shadow,transform] duration-300 relative overflow-hidden p-[1.5rem] md:p-[1.75rem_1.5rem]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRight:
                    i < pathways.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  minHeight: "270px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.zIndex = "2";
                  e.currentTarget.style.boxShadow =
                    "0 4px 0 var(--gold), 0 24px 48px var(--gold3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = "var(--gold-warm-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = "var(--cream-deep)";
                }}
              >
                {p.badge && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--gold2)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                      display: "block",
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "normal",
                    fontSize: "clamp(1.25rem, 1.6vw, 1.375rem)",
                    fontWeight: 600,
                    color: "var(--cream-deep)",
                    letterSpacing: "-.01em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="flex-1"
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(245,241,234,0.78)",
                    lineHeight: 1.55,
                  }}
                >
                  {p.text}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 transition-[gap] group-hover:gap-3"
                  style={{
                    fontSize: ".78rem",
                    fontWeight: 600,
                    color: "var(--gold-bright)",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(138,168,255,.4)",
                    paddingBottom: 2,
                    alignSelf: "flex-start",
                    minHeight: 44,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {p.cta}{"\u00A0"}→
                </span>
              </Link>
            ))}
          </div>
          </div>

          <p className="relative z-10 mt-5 text-[0.9375rem]" style={{ color: "rgba(0,14,53,0.72)" }}>
            {heading.calcLead}{" "}
            <Link
              to={heading.calcHref}
              onClick={() => trackEvent("home_welcome_tax_link", { lang: heading.calcHref.startsWith("/en") ? "en" : "fr" })}
              className="inline-flex min-h-[44px] items-center font-semibold underline decoration-[rgba(0,14,53,0.35)] underline-offset-4 hover:decoration-[var(--ink)]"
              style={{ color: "var(--ink)" }}
            >
              {heading.calcLabel}{"\u00A0"}→
            </Link>
          </p>
        </div>
      </section>
    );
  }
);

PathwaySection.displayName = "PathwaySection";
export default PathwaySection;
