import * as React from "react";
import { useState } from "react";
import GuideModal, { type GuideType } from "@/components/GuideModal";
import { ArrowRight } from "lucide-react";

interface GuideOffersSectionProps {
  background?: "default" | "alt";
  lang?: "fr" | "en";
}

const guidesFr = [
  { num: "01", guideType: "seller_guide" as GuideType, title: "Guide vendeur", subtitle: "Vendre au meilleur prix\u00a0: prix, mise en marché, négociation.", cta: "Recevoir le guide" },
  { num: "02", guideType: "buyer_guide" as GuideType, title: "Guide acheteur", subtitle: "Le processus d'achat au Québec, de la recherche au notaire.", cta: "Recevoir le guide" },
  { num: "03", guideType: "investor_guide" as GuideType, title: "Guide investisseur", subtitle: "Rendement, plex et stratégie d'investissement à Gatineau.", cta: "Recevoir le guide" },
  { num: "04", guideType: "relocation_guide" as GuideType, title: "Guide relocalisation", subtitle: "Acheter à Gatineau en venant d'Ottawa ou d'ailleurs.", cta: "Recevoir le guide" },
];

const guidesEn = [
  { num: "01", guideType: "seller_guide" as GuideType, title: "Seller Guide", subtitle: "Sell at the best price: pricing, marketing, negotiation.", cta: "Get the guide" },
  { num: "02", guideType: "buyer_guide" as GuideType, title: "Buyer Guide", subtitle: "The Québec buying process, from search to notary.", cta: "Get the guide" },
  { num: "03", guideType: "investor_guide" as GuideType, title: "Investor Guide", subtitle: "Returns, plex analysis and investing in Gatineau.", cta: "Get the guide" },
  { num: "04", guideType: "relocation_guide" as GuideType, title: "Relocation Guide", subtitle: "Buying in Gatineau from Ottawa or elsewhere.", cta: "Get the guide" },
];

const headingFr = { overline: "Guides gratuits", title: "Recevez votre guide immobilier", subtitle: "Un guide gratuit pour chaque étape, envoyé par courriel, sans engagement." };
const headingEn = { overline: "Free Guides", title: "Get your real estate guide", subtitle: "Free guides for each step of your project, sent by email, no commitment." };

const GuideOffersSection = ({ lang = "fr" }: GuideOffersSectionProps) => {
  const guides = lang === "en" ? guidesEn : guidesFr;
  const heading = lang === "en" ? headingEn : headingFr;
  const [modalGuide, setModalGuide] = useState<GuideType | null>(null);

  return (
    <>
      <section className="section-rhythm" style={{ background: "var(--white)" }}>
        <div className="section-container">
          {/* Header */}
          <div className="mb-8 sm:mb-12 max-w-[36rem]">
            <h2>{heading.title}</h2>
            <p className="mt-3" style={{ fontSize: ".92rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>{heading.subtitle}</p>
          </div>

          {/* One set of guide covers: swipe row on phones, 4 columns on desktop.
              Same box language as the CardGrid sections (navy lead, white boxes). */}
          <div className="cardgrid-track -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:gap-5">
            {guides.map((g, i) => {
              const lead = i === 0;
              return (
                <button
                  key={g.guideType}
                  type="button"
                  className={`group flex w-[72%] max-w-[17rem] shrink-0 snap-start flex-col rounded-[1.25rem] p-6 text-left transition-[transform,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--action)] focus-visible:ring-offset-2 md:w-auto md:max-w-none md:shrink lg:min-h-[19rem] lg:rounded-[1.5rem] lg:p-8 [@media(hover:hover)]:hover:-translate-y-0.5 ${
                    lead
                      ? "bg-[var(--ink)]"
                      : "border border-[rgba(0,14,53,0.09)] bg-[var(--cream)] shadow-[0_1px_2px_rgba(0,14,53,0.04),0_18px_40px_-24px_rgba(0,14,53,0.28)]"
                  }`}
                  onClick={() => setModalGuide(g.guideType)}
                >
                  <h3
                    className="[font-family:var(--display)] text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.03em] lg:text-[1.75rem]"
                    style={{ color: lead ? "var(--cream)" : "var(--ink)" }}
                  >
                    {g.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 text-[0.9375rem] leading-[1.6]"
                    style={{ color: lead ? "rgba(247,244,238,0.78)" : "#4A5475" }}
                  >
                    {g.subtitle}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-[0.875rem] font-semibold"
                    style={{ color: lead ? "var(--cream)" : "var(--gold-text)" }}
                  >
                    {g.cta}
                    <ArrowRight size={14} className="transition-transform [@media(hover:hover)]:group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </span>
                </button>
              );
            })}
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
