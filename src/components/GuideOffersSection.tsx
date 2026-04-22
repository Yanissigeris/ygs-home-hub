import * as React from "react";
import { useState } from "react";
import GuideModal, { type GuideType } from "@/components/GuideModal";

interface GuideOffersSectionProps {
  background?: "default" | "alt";
  lang?: "fr" | "en";
}

const guidesFr = [
  { num: "01", guideType: "seller_guide" as GuideType, title: "Guide vendeur", subtitle: "Vendre au meilleur prix — prix, mise en marché, négociation.", cta: "Recevoir le guide vendeur →" },
  { num: "02", guideType: "buyer_guide" as GuideType, title: "Guide acheteur", subtitle: "Le processus d'achat au Québec, de la recherche au notaire.", cta: "Recevoir le guide acheteur →" },
  { num: "03", guideType: "investor_guide" as GuideType, title: "Guide investisseur", subtitle: "Rendement, plex et stratégie d'investissement à Gatineau.", cta: "Recevoir le guide investisseur →" },
  { num: "04", guideType: "relocation_guide" as GuideType, title: "Guide relocalisation", subtitle: "Acheter à Gatineau en venant d'Ottawa ou d'ailleurs.", cta: "Recevoir le guide relocalisation →" },
];

const guidesEn = [
  { num: "01", guideType: "seller_guide" as GuideType, title: "Seller Guide", subtitle: "Sell at the best price — pricing, marketing, negotiation.", cta: "Get the seller guide →" },
  { num: "02", guideType: "buyer_guide" as GuideType, title: "Buyer Guide", subtitle: "The Québec buying process, from search to notary.", cta: "Get the buyer guide →" },
  { num: "03", guideType: "investor_guide" as GuideType, title: "Investor Guide", subtitle: "Returns, plex analysis and investing in Gatineau.", cta: "Get the investor guide →" },
  { num: "04", guideType: "relocation_guide" as GuideType, title: "Relocation Guide", subtitle: "Buying in Gatineau from Ottawa or elsewhere.", cta: "Get the relocation guide →" },
];

const headingFr = { overline: "Guides gratuits", title: "Recevez votre guide immobilier", subtitle: "Des ressources complètes pour vous accompagner à chaque étape — gratuites, sans engagement et envoyées par courriel." };
const headingEn = { overline: "Free Guides", title: "Get your real estate guide", subtitle: "Comprehensive resources to guide you at every step — free, no commitment, delivered by email." };

const GuideOffersSection = ({ lang = "fr" }: GuideOffersSectionProps) => {
  const guides = lang === "en" ? guidesEn : guidesFr;
  const heading = lang === "en" ? headingEn : headingFr;
  const [modalGuide, setModalGuide] = useState<GuideType | null>(null);

  return (
    <>
      <section className="relative overflow-hidden section-rhythm section-gold-divider" style={{ background: "#fff" }}>
        {/* Radial gradient */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at top center, rgba(168,138,90,.05) 0%, transparent 60%)" }} aria-hidden="true" />

        <div className="section-container relative">
          {/* Header */}
          <div className="mb-8 sm:mb-12 max-w-[36rem]">
            <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{heading.overline}</p>
            <h2>{heading.title}</h2>
            <p className="mt-3" style={{ fontSize: ".92rem", color: "var(--muted)", lineHeight: 1.7 }}>{heading.subtitle}</p>
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden md:grid grid-cols-1 min-[481px]:grid-cols-2 lg:grid-cols-4">
            {guides.map((g, i) => (
              <div
                key={g.guideType}
                className="group relative flex flex-col transition-all duration-300 cursor-pointer"
                style={{
                  padding: "clamp(1.75rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem) clamp(1.5rem, 2.5vw, 2rem)",
                  background: "var(--cream)",
                  borderRight: i < guides.length - 1 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                }}
                onClick={() => setModalGuide(g.guideType)}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--parchment)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--cream)"; }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" style={{ background: "var(--gold)" }} aria-hidden="true" />
                <div className="flex items-baseline gap-3" aria-hidden="true">
                  <span className="select-none" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.25rem, 4.5vw, 3rem)", fontWeight: 300, color: "var(--ink)", lineHeight: 1, letterSpacing: "-.02em" }}>{g.num}</span>
                  <span style={{ height: 1, flex: 1, background: "var(--gold)", opacity: 0.4, transform: "translateY(-.35em)" }} />
                </div>
                <h3 className="mt-3" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 3vw, 1.35rem)", fontWeight: 600, color: "var(--ink)", letterSpacing: "-.01em" }}>{g.title}</h3>
                <p className="mt-2 flex-1" style={{ fontSize: ".82rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>{g.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 transition-all group-hover:gap-2" style={{ fontSize: ".72rem", fontWeight: 700, color: "var(--gold)", letterSpacing: ".06em", textTransform: "uppercase" as const, minHeight: 44, display: "inline-flex", alignItems: "center" }}>{g.cta}</span>
              </div>
            ))}
          </div>

          {/* Mobile: 2x2 compact grid */}
          <div className="md:hidden grid grid-cols-2" style={{ gap: 1, background: "var(--border)" }}>
            {guides.map((g) => (
              <div
                key={g.guideType}
                className="flex flex-col cursor-pointer"
                style={{ padding: "1.25rem", background: "#fff" }}
                onClick={() => setModalGuide(g.guideType)}
              >
                <span style={{ fontSize: "1.25rem", marginBottom: ".75rem" }} aria-hidden="true">{g.icon}</span>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", letterSpacing: "-.01em", lineHeight: 1.3 }}>{g.title}</h3>
                <p className="mt-1.5 line-clamp-2 flex-1" style={{ fontSize: ".78rem", fontWeight: 300, color: "var(--muted)", lineHeight: 1.6 }}>{g.subtitle}</p>
                <span className="mt-3 inline-flex items-center" style={{ fontSize: ".62rem", fontWeight: 700, color: "var(--gold)", letterSpacing: ".06em", textTransform: "uppercase" as const, lineHeight: 1.3, minHeight: 44 }}>
                  {g.cta.replace(/ →$/, "").replace(/Recevoir le guide /i, "").replace(/Get the /i, "")} →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalGuide && (
        <GuideModal open={!!modalGuide} onOpenChange={(v) => { if (!v) setModalGuide(null); }} guideType={modalGuide} lang={lang} />
      )}
    </>
  );
};

export default GuideOffersSection;
