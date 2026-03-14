import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";
import plateauImg from "@/assets/plateau-aylmer-lifestyle.jpg";
import riverImg from "@/assets/gatineau-river-view.jpg";

const reasons = [
  "Plus d'espace à un prix encore accessible comparé à Ottawa",
  "Quartier familial — parcs, écoles, services de proximité",
  "Accès pratique vers Ottawa par les ponts",
  "Maisons plus récentes avec bon rapport qualité-prix",
  "Qualité de vie appréciée des familles et jeunes professionnels",
];

const sellerReasons = [
  "Aller vers plus grand ou plus de terrain",
  "Se rapprocher d'un secteur plus calme ou mieux adapté",
  "Profiter des conditions actuelles du marché",
  "Réduire la taille après le départ des enfants",
];

const NeighborhoodPage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre dans le Plateau / Aylmer"
      subtitle="Vie de famille, commodités, accès à Ottawa et qualité de vie — ce qu'il faut savoir pour acheter ou vendre dans le secteur."
      primaryCta={{ label: "Me faire guider", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      backgroundImage={riverImg}
    />

    <section className="section-padding bg-background">
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            overline="Le secteur"
            title="Pourquoi les gens aiment le Plateau / Aylmer"
            subtitle="Familles, jeunes professionnels, acheteurs relocalisés d'Ottawa — le secteur attire pour ses maisons récentes, ses services et son mode de vie pratique."
          />
          <div className="mt-5 space-y-2">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} className="shrink-0 text-accent" />
                <span className="text-[0.8125rem] text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
        <ImagePlaceholder label="Photo de secteur à ajouter" />
      </div>
    </section>

    {/* Seller angle */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-2xl">
        <SectionHeading
          overline="Vendeurs du secteur"
          title="Vous habitez déjà le Plateau / Aylmer?"
          subtitle="C'est peut-être le bon moment de voir ce que votre propriété vaut dans le marché actuel."
        />
        <div className="mt-5 space-y-2">
          {sellerReasons.map((r) => (
            <div key={r} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} className="shrink-0 text-accent" />
              <span className="text-[0.8125rem] text-muted-foreground">{r}</span>
            </div>
          ))}
        </div>
        <Button className="mt-6" asChild>
          <Link to="/evaluation-gratuite-gatineau">Voir combien vaut ma propriété</Link>
        </Button>
      </div>
    </section>

    <CTASection
      dark
      title="Acheteur ou vendeur dans le Plateau / Aylmer?"
      text="Je peux vous aider à y voir clair — que ce soit pour acheter dans le secteur ou connaître la valeur de votre propriété."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Me faire guider", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default NeighborhoodPage;
