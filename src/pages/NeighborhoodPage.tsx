import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "plus d'espace que dans un condo ou une maison en rangée",
  "un quartier familial",
  "un accès pratique vers Ottawa",
  "des parcs, services et écoles à proximité",
];

const NeighborhoodPage = () => (
  <>
    <HeroSection
      title="Vivre dans le Plateau / Aylmer"
      subtitle="Un secteur recherché pour son équilibre entre vie de famille, commodités, accès à Ottawa et qualité de vie."
      primaryCta={{ label: "Me faire guider dans le secteur", href: "/contact-yanis" }}
      secondaryCta={{ label: "Voir combien vaut ma propriété", href: "/evaluation-gratuite-gatineau" }}
    />

    <section className="section-padding bg-background">
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Pourquoi les gens aiment le secteur"
            subtitle="Le Plateau / Aylmer attire beaucoup de familles, jeunes professionnels et acheteurs relocalisés grâce aux maisons plus récentes, aux services à proximité et à un mode de vie pratique."
          />
        </div>
        <ImagePlaceholder label="Photo du secteur Plateau / Aylmer" />
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Ce secteur peut bien convenir si vous cherchez…" />
        <div className="mt-8 space-y-3">
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          title="Vous possédez déjà dans le Plateau?"
          subtitle="Plusieurs propriétaires du Plateau songent à vendre pour aller vers plus grand, plus calme ou avec plus de terrain."
        />
      </div>
    </section>

    <CTASection
      title="Prochaine étape"
      buttons={[
        { label: "Voir combien vaut ma propriété", href: "/evaluation-gratuite-gatineau" },
        { label: "Me faire guider dans le secteur", href: "/contact-yanis", variant: "outline" },
      ]}
    />
  </>
);

export default NeighborhoodPage;
