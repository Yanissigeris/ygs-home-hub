import SectionHeading from "@/components/SectionHeading";
import GuideOfferBlock from "@/components/GuideOfferBlock";

interface GuideOffersSectionProps {
  background?: "default" | "alt";
}

const GuideOffersSection = ({ background = "default" }: GuideOffersSectionProps) => (
  <section className={`section-padding ${background === "alt" ? "bg-secondary/20" : ""}`}>
    <div className="section-container max-w-[56rem]">
      <SectionHeading
        overline="Guides gratuits"
        title="Recevez votre guide immobilier"
        subtitle="Des ressources complètes pour vous accompagner à chaque étape — gratuites, sans engagement et envoyées par courriel."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <GuideOfferBlock
          guideType="seller_guide"
          title="Guide vendeur"
          subtitle="Prix, préparation, mise en marché et négociation — tout pour vendre au meilleur prix à Gatineau."
        />
        <GuideOfferBlock
          guideType="buyer_guide"
          title="Guide acheteur"
          subtitle="Le processus d'achat au Québec expliqué simplement, de la recherche au notaire."
        />
      </div>
    </div>
  </section>
);

export default GuideOffersSection;
