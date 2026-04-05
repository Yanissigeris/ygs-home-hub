import * as React from "react";
import { Link } from "react-router-dom";
import cardVendreImg from "@/assets/service-vendre.jpg";
import cardAcheterImg from "@/assets/service-acheter.webp";
import cardPlexImg from "@/assets/service-plex.webp";

const pathwaysFr = [
  { num: "01", title: "Vendre ma propriété en Outaouais", text: "Évaluation réaliste, stratégie de prix et mise en marché ciblée pour maximiser votre résultat.", cta: "Voir le plan vendeur", href: "/vendre-ma-maison-gatineau", image: cardVendreImg, imageSm: cardVendreImg, imageAlt: "Vendre sa maison à Gatineau — salon résidentiel moderne" },
  { num: "02", title: "Acheter à Gatineau", text: "Les bons secteurs, le bon budget et un accompagnement terrain pour acheter avec confiance.", cta: "Explorer l'achat", href: "/acheter-a-gatineau", image: cardAcheterImg, imageSm: cardAcheterImg, imageAlt: "Acheter une propriété à Gatineau — rue résidentielle" },
  { num: "03", title: "Plex & investissement", text: "Rendement, valeur marchande et timing — les vrais chiffres avant la décision.", cta: "Recevoir une analyse", href: "/investir-plex-gatineau", image: cardPlexImg, imageSm: cardPlexImg, imageAlt: "Investissement plex à Gatineau — immeuble à revenus" },
];

const pathwaysEn = [
  { num: "01", title: "Sell my property", text: "Realistic valuation, pricing strategy and targeted marketing to maximize your result.", cta: "See the seller plan", href: "/en/sell", image: cardVendreImg, imageSm: cardVendreImg, imageAlt: "Sell a home in Gatineau — bright residential interior" },
  { num: "02", title: "Buy in Gatineau", text: "The right neighborhoods, the right budget and hands-on guidance to buy with confidence.", cta: "Explore buying", href: "/en/buy", image: cardAcheterImg, imageSm: cardAcheterImg, imageAlt: "Buy a property in Gatineau — residential neighborhood" },
  { num: "03", title: "Plex & Investment", text: "Returns, market value and timing — the real numbers before the decision.", cta: "Get an analysis", href: "/en/plex", image: cardPlexImg, imageSm: cardPlexImg, imageAlt: "Invest in a plex in Gatineau — multi-unit building" },
];

const headingFr = { overline: "Choisissez votre prochaine étape", title: "Où en êtes-vous dans votre projet?" };
const headingEn = { overline: "Choose your next step", title: "Where are you in your project?" };

interface PathwaySectionProps { lang?: "fr" | "en"; }

const PathwaySection = React.forwardRef<HTMLElement, PathwaySectionProps>(({ lang = "fr" }, ref) => {
  const pathways = lang === "en" ? pathwaysEn : pathwaysFr;
  const heading = lang === "en" ? headingEn : headingFr;

  return (
    <section ref={ref} className="section-pathway" style={{ padding: "clamp(3rem, 6vw, 7rem) 0" }}>
      <div className="section-container">
        {/* Section header */}
        <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="label-overline mb-2">{heading.overline}</p>
            <h2>{heading.title}</h2>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[0.75rem] md:gap-0 overflow-hidden"
          style={{ border: "1px solid var(--border)", borderRadius: 3 }}
        >
          {pathways.map((p, i) => (
            <Link
              key={p.href}
              to={p.href}
              className="group flex flex-col transition-all duration-300 relative overflow-hidden"
              style={{
                borderBottom: i < pathways.length - 1 ? "1px solid var(--border)" : "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.zIndex = "2"; e.currentTarget.style.boxShadow = "0 30px 80px rgba(23,48,59,.15)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.zIndex = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
            >
              {/* Image — 3:2 on mobile, 16:9 on desktop */}
              <div className="relative overflow-hidden aspect-[3/2] md:aspect-[16/9] img-shimmer">
                <img
                  src={p.image}
                  alt={p.imageAlt + " — YGS Yanis Gauthier-Sigeris"}
                  className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={648}
                  height={486}
                  onLoad={(e) => { (e.target as HTMLImageElement).parentElement!.classList.remove("img-shimmer"); }}
                  onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; t.parentElement!.style.background = "var(--ink)"; t.parentElement!.classList.remove("img-shimmer"); }}
                />
                <span
                  className="absolute top-4 left-4"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "rgba(255,255,255,.6)" }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-[1.25rem] md:p-[2rem]">
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 600, color: "var(--ink)", letterSpacing: "-.01em", marginBottom: ".5rem" }}>
                  {p.title}
                </h3>
                <p className="flex-1 pathway-desc" style={{ fontSize: ".9rem", color: "var(--muted)", lineHeight: 1.78 }}>
                  {p.text}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-2 transition-all group-hover:gap-3"
                  style={{
                    fontSize: ".78rem",
                    fontWeight: 600,
                    color: "var(--gold)",
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

PathwaySection.displayName = "PathwaySection";
export default PathwaySection;
