import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Plus d'espace que dans un condo ou une maison en rangée, souvent à un prix encore accessible",
  "Un quartier familial avec des parcs, des écoles et des services de proximité",
  "Un accès pratique vers Ottawa par les ponts — populaire pour les travailleurs sur les deux rives",
  "Des maisons plus récentes avec un bon rapport qualité-prix par rapport à d'autres secteurs",
  "Une qualité de vie appréciée par les familles, les jeunes professionnels et les acheteurs relocalisés",
];

const sellerReasons = [
  "Aller vers plus grand ou un terrain avec plus de possibilités",
  "Se rapprocher d'un secteur plus calme ou plus rural",
  "Profiter d'un bon moment sur le marché pour maximiser la valeur",
  "Réduire la taille de la maison après le départ des enfants",
  "Changer de style de vie ou de région",
];

const NeighborhoodPage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre dans le Plateau / Aylmer"
      subtitle="Un secteur recherché pour son équilibre entre vie de famille, commodités, accès à Ottawa et qualité de vie. Voici ce qu'il faut savoir, que vous cherchiez à acheter ou à vendre dans le coin."
      primaryCta={{ label: "Me faire guider dans le secteur", href: "/contact-yanis" }}
      secondaryCta={{ label: "Voir combien vaut ma propriété", href: "/evaluation-gratuite-gatineau" }}
    />

    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            overline="Le secteur"
            title="Pourquoi les gens aiment le Plateau / Aylmer"
            subtitle="Le Plateau et Aylmer attirent beaucoup de familles, jeunes professionnels et acheteurs relocalisés d'Ottawa. Le secteur offre des maisons plus récentes, des services à proximité et un mode de vie pratique — sans être trop loin de tout."
          />
        </div>
        <ImagePlaceholder label="Photo du secteur Plateau / Aylmer — à ajouter" />
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <SectionHeading
          overline="Pour qui"
          title="Ce secteur peut bien convenir si vous cherchez…"
        />
        <div className="mt-8 space-y-3">
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-[0.9375rem] text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <ImagePlaceholder label="Photo lifestyle Plateau / Aylmer — à ajouter" className="order-2 lg:order-1" />
        <div className="order-1 lg:order-2">
          <SectionHeading
            overline="Vendeurs du secteur"
            title="Vous habitez déjà le Plateau?"
            subtitle="C'est peut-être le bon moment de voir ce que votre propriété vaut dans le marché actuel. Plusieurs propriétaires du secteur songent à passer à la prochaine étape:"
          />
          <div className="mt-6 space-y-3">
            {sellerReasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-[0.875rem] text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTASection
      overline="Prochaine étape"
      title="Acheteur ou vendeur dans le Plateau / Aylmer?"
      text="Que vous cherchiez à acheter dans le secteur ou à connaître la valeur de votre propriété, je peux vous aider à y voir clair."
      buttons={[
        { label: "Voir combien vaut ma propriété", href: "/evaluation-gratuite-gatineau" },
        { label: "Me faire guider dans le secteur", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default NeighborhoodPage;
