import * as React from "react";
import { Link } from "react-router-dom";
import cardVendreImg from "@/assets/service-vendre.webp";
import cardAcheterImg from "@/assets/service-acheter.webp";
import cardPlexImg from "@/assets/service-plex.webp";
import lifestyleBgImg from "@/assets/service-vendre.webp";
import { setAvatarIntent, type AvatarIntent } from "@/lib/avatar";
import { trackEvent } from "@/lib/analytics";

interface Pathway {
  num: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  imageSm: string;
  imageAlt: string;
  badge: string | null;
  intent: AvatarIntent;
}

const pathwaysFr: Pathway[] = [
  {
    num: "01",
    title: "Plex & investissement",
    text: "Rendement réel, valeur marchande et timing — les vrais chiffres avant de prendre une décision.",
    cta: "Calculer mon rendement",
    href: "/investir-plex-gatineau",
    image: cardPlexImg,
    imageSm: cardPlexImg,
    imageAlt: "Investissement plex à Gatineau — immeuble à revenus",
    badge: "Priorité investisseurs",
    intent: "investir",
  },
  {
    num: "02",
    title: "Vendre ma propriété en Outaouais",
    text: "Évaluation réaliste, stratégie de prix et mise en marché ciblée pour maximiser votre résultat.",
    cta: "Estimer ma propriété",
    href: "/vendre-ma-maison-gatineau",
    image: cardVendreImg,
    imageSm: cardVendreImg,
    imageAlt: "Vendre sa maison à Gatineau — salon résidentiel moderne",
    badge: null,
    intent: "vendre",
  },
  {
    num: "03",
    title: "Acheter à Gatineau",
    text: "Les bons secteurs, le bon budget et un accompagnement terrain pour acheter avec confiance.",
    cta: "Voir les propriétés",
    href: "/acheter-a-gatineau",
    image: cardAcheterImg,
    imageSm: cardAcheterImg,
    imageAlt: "Acheter une propriété à Gatineau — rue résidentielle",
    badge: null,
    intent: "acheter",
  },
];

const pathwaysEn: Pathway[] = [
  {
    num: "01",
    title: "Plex & Investment",
    text: "Returns, market value and timing — the real numbers before the decision.",
    cta: "Get an analysis",
    href: "/en/plex",
    image: cardPlexImg,
    imageSm: cardPlexImg,
    imageAlt: "Invest in a plex in Gatineau — multi-unit building",
    badge: "Investors first",
    intent: "investir",
  },
  {
    num: "02",
    title: "Sell my property",
    text: "Realistic valuation, pricing strategy and targeted marketing to maximize your result.",
    cta: "Get a free valuation",
    href: "/en/sell",
    image: cardVendreImg,
    imageSm: cardVendreImg,
    imageAlt: "Sell a home in Gatineau — bright residential interior",
    badge: null,
    intent: "vendre",
  },
  {
    num: "03",
    title: "Buy in Gatineau",
    text: "The right neighborhoods, the right budget and hands-on guidance to buy with confidence.",
    cta: "Explore buying",
    href: "/en/buy",
    image: cardAcheterImg,
    imageSm: cardAcheterImg,
    imageAlt: "Buy a property in Gatineau — residential neighborhood",
    badge: null,
    intent: "acheter",
  },
];

const headingFr = {
  overline: "Choisissez votre prochaine étape",
  titleFirst: "Où en êtes-vous dans",
  titleAccent: "votre projet?",
  subtitle: "Trois chemins selon votre situation. Choisissez celui qui vous correspond — vous serez accompagné de A à Z.",
};

const headingEn = {
  overline: "Choose your next step",
  titleFirst: "Where are you in",
  titleAccent: "your project?",
  subtitle: "Three paths depending on your situation. Choose the one that fits — you'll be guided from A to Z.",
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
        className="section-pathway section-rhythm section-gold-divider relative overflow-hidden md:py-24"
        style={{ background: "#F5F1EA" }}
      >
        {/* Desktop: photo lifestyle as a floating frame, asymmetric on all sides */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute"
          style={{
            top: "80px",
            right: "4%",
            width: "50%",
            height: "calc(100% - 160px)",
            backgroundImage: `url(${lifestyleBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow:
              "0 20px 60px rgba(23,48,59,0.30), 0 8px 20px rgba(23,48,59,0.15)",
            zIndex: 1,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,241,234,0.15) 0%, rgba(23,48,59,0.10) 100%)",
            }}
          />
        </div>

        {/* Mobile: photo full-width band on top */}
        <div
          aria-hidden="true"
          className="md:hidden w-full h-[200px] mb-8"
          style={{
            backgroundImage: `url(${lifestyleBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="section-container relative z-10">
          {/* Editorial header on cream */}
          <div className="max-w-[580px]">
            <p className="label-overline mb-3" style={{ color: "#A88A5A" }}>
              {heading.overline}
            </p>
            <h2 style={{ color: "#17303B" }}>
              {heading.titleFirst}{" "}
              <span style={{ color: "#A88A5A", fontStyle: "italic" }}>
                {heading.titleAccent}
              </span>
            </h2>
            <p
              className="prose-body mt-4"
              style={{ color: "rgba(23,48,59,0.7)", maxWidth: 520 }}
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
              boxShadow: "0 30px 80px rgba(23,48,59,0.35)",
              background: "linear-gradient(175deg, #0c1f28, #17303B)",
            }}
          >
            {/* Gold top filet */}
            <div aria-hidden="true" style={{ height: 2, background: "#A88A5A" }} />

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
                className="group flex flex-col transition-all duration-300 relative overflow-hidden p-[1.5rem] md:p-[1.75rem_1.5rem]"
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
                    "0 4px 0 #A88A5A, 0 24px 48px rgba(168,138,90,0.12)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = "#BFA476";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = "#F5F1EA";
                }}
              >
                {p.badge && (
                  <span
                    style={{
                      fontSize: "0.56rem",
                      color: "#A88A5A",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                      display: "block",
                    }}
                  >
                    — {p.badge}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(2.25rem, 4vw, 2.75rem)",
                    lineHeight: 1,
                    color: "#A88A5A",
                    opacity: 0.7,
                    marginBottom: "0.75rem",
                    display: "block",
                  }}
                >
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                    fontWeight: 600,
                    color: "#F5F1EA",
                    letterSpacing: "-.01em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="flex-1"
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,241,234,0.55)",
                    lineHeight: 1.55,
                  }}
                >
                  {p.text}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 transition-all group-hover:gap-3"
                  style={{
                    fontSize: ".72rem",
                    fontWeight: 600,
                    color: "#A88A5A",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(168,138,90,.3)",
                    paddingBottom: 2,
                    alignSelf: "flex-start",
                    minHeight: 44,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {p.cta} →
                </span>
              </Link>
            ))}
          </div>
          </div>
        </div>
      </section>
    );
  }
);

PathwaySection.displayName = "PathwaySection";
export default PathwaySection;
