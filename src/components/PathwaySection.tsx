import * as React from "react";
import { Link } from "react-router-dom";
import plexPhoto from "@/assets/pathway-plex-maisons-de-ville.webp?w=160;240;400;640&format=avif;webp&as=picture";
import buyPhoto from "@/assets/pathway-acheter-cuisine.webp?w=160;240;400;640&format=avif;webp&as=picture";
import lifestyleBg from "@/assets/pathway-vendre-bungalow.webp?w=480;760;960;1122&format=avif;webp&as=picture";
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

    const [sell, ...others] = pathways;
    const select = (p: Pathway) => {
      setAvatarIntent(p.intent);
      trackEvent("avatar_router_select", { avatar: p.intent });
    };
    const Photo = ({ sizes, className }: { sizes: string; className: string }) => (
      <picture>
        {lifestyleBg.sources.avif && <source type="image/avif" srcSet={lifestyleBg.sources.avif} sizes={sizes} />}
        {lifestyleBg.sources.webp && <source type="image/webp" srcSet={lifestyleBg.sources.webp} sizes={sizes} />}
        <img
          src={lifestyleBg.img.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1122}
          height={1402}
          className={className}
        />
      </picture>
    );

    const calc = (
      <p className="text-[0.9375rem]" style={{ color: "rgba(0,14,53,0.72)" }}>
        {heading.calcLead}{" "}
        <Link
          to={heading.calcHref}
          onClick={() => trackEvent("home_welcome_tax_link", { lang: heading.calcHref.startsWith("/en") ? "en" : "fr" })}
          className="inline-flex min-h-[44px] items-center font-semibold underline decoration-[rgba(0,14,53,0.35)] underline-offset-4 hover:decoration-[var(--ink)]"
          style={{ color: "var(--ink)" }}
        >
          {heading.calcLabel}{" "}→
        </Link>
      </p>
    );

    const pill = (label: string) => (
      <span
        className="inline-flex items-center gap-2 transition-[gap] duration-300 [@media(hover:hover)]:group-hover:gap-3"
        style={{
          minHeight: 52,
          padding: "0 1.75rem",
          borderRadius: 999,
          background: "var(--action)",
          color: "var(--on-action)",
          fontSize: ".95rem",
          fontWeight: 600,
        }}
      >
        {label}{" "}→
      </span>
    );

    const display = { fontFamily: "var(--display)", fontWeight: 600, color: "var(--ink)" } as const;

    /* Photo bord à bord, bloc Vendre qui la chevauche, photos de propriétés pour Plex et Acheter */
    const thumbs: Record<string, typeof plexPhoto> = { investir: plexPhoto, acheter: buyPhoto };
    const thumbAlt: Record<string, string> =
      lang === "en"
        ? { investir: "Row of townhouses seen from above", acheter: "Kitchen with island and bar stools" }
        : { investir: "Rangée de maisons de ville vue du ciel", acheter: "Cuisine avec îlot et tabourets" };

    return (
      <section ref={ref} className="section-pathway relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]" style={{ background: "var(--cream-deep)" }}>
        <div className="relative h-[300px] md:h-[440px] lg:h-auto overflow-hidden">
          <Photo sizes="(min-width: 1024px) 960px, 100vw" className="absolute inset-0 h-full w-full object-cover object-[50%_62%] lg:object-[38%_center]" />
        </div>

        <div className="relative px-5 sm:px-6 md:px-14 lg:pl-0 lg:pr-16 xl:pr-24 pb-16 md:pb-24 lg:py-28">
          <div className="lg:pl-20 xl:pl-24" style={{ maxWidth: 680 }}>
            <div className="pt-12 md:pt-16 lg:pt-0">
              <h2 style={{ color: "var(--ink)", maxWidth: 520 }}>
                {heading.titleFirst} {heading.titleAccent}
              </h2>
              <p className="mt-5" style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "rgba(0,14,53,0.62)", maxWidth: 440 }}>
                {heading.subtitle}
              </p>
            </div>
          </div>

          {/* Bloc marine : déborde sur la photo à gauche (ordinateur) */}
          <div style={{ maxWidth: 780 }}>
          <Link
            to={sell.href}
            onClick={() => select(sell)}
            className="group relative z-10 mt-10 md:mt-14 block p-8 md:p-11 lg:-ml-28 xl:-ml-32"
            style={{
              background: "var(--ink)",
              borderRadius: 20,
              boxShadow: "0 40px 80px -20px rgba(0,14,53,0.45)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:items-end gap-8">
              <div>
                <h3 style={{ ...display, color: "var(--cream)", fontSize: "clamp(1.85rem, 2.9vw, 2.6rem)", lineHeight: 1.02, letterSpacing: "-0.04em", maxWidth: 440 }}>
                  {sell.title}
                </h3>
                <p className="mt-5" style={{ fontSize: "1.03rem", lineHeight: 1.6, color: "rgba(245,241,234,0.74)", maxWidth: 400 }}>
                  {sell.text}
                </p>
              </div>
              <div className="md:pb-1">{pill(sell.cta)}</div>
            </div>
          </Link>
          </div>

          <div className="lg:pl-20 xl:pl-24" style={{ maxWidth: 780 }}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {others.map((p) => {
                const t = thumbs[p.intent];
                return (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={() => select(p)}
                    className="group grid grid-cols-[80px_minmax(0,1fr)] sm:grid-cols-1 gap-4 sm:gap-0 overflow-hidden p-3 sm:p-0"
                    style={{ background: "var(--white)", borderRadius: 20, border: "1px solid rgba(0,14,53,0.07)" }}
                  >
                    <div className="relative h-[80px] sm:h-[150px] overflow-hidden rounded-[14px] sm:rounded-none">
                      <picture>
                        {t.sources.avif && <source type="image/avif" srcSet={t.sources.avif} sizes="(min-width: 640px) 320px, 110px" />}
                        {t.sources.webp && <source type="image/webp" srcSet={t.sources.webp} sizes="(min-width: 640px) 320px, 110px" />}
                        <img
                          src={t.img.src}
                          alt={thumbAlt[p.intent]}
                          loading="lazy"
                          decoding="async"
                          width={640}
                          height={480}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] [@media(hover:hover)]:group-hover:scale-[1.04] motion-reduce:transition-none"
                        />
                      </picture>
                    </div>
                    <div className="sm:p-6 self-center sm:self-auto">
                      <h3
                        className="transition-colors duration-300 [@media(hover:hover)]:group-hover:text-[var(--action)]"
                        style={{ ...display, fontSize: "1.2rem", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-2 hidden sm:block" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(0,14,53,0.62)" }}>{p.text}</p>
                      <span className="mt-1 sm:mt-3 inline-flex items-center gap-2 whitespace-nowrap font-semibold text-[.875rem] sm:text-[.9375rem]" style={{ minHeight: 40, color: "var(--action)" }}>
                        {p.cta}
                        <span aria-hidden="true" className="transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">{calc}</div>
          </div>
        </div>
      </section>
    );
  }
);

PathwaySection.displayName = "PathwaySection";
export default PathwaySection;
