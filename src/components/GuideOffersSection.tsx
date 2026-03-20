import SectionHeading from"@/components/SectionHeading";
import GuideOfferBlock from"@/components/GuideOfferBlock";

interface GuideOffersSectionProps {
 background?:"default" |"alt";
}

const GuideOffersSection = ({ background ="default" }: GuideOffersSectionProps) => (
 <section className={`section-padding ${background ==="alt" ?"bg-secondary/20" :""}`}>
 <div className="section-container max-w-[72rem]">
 <SectionHeading
 overline="Guides gratuits"
 title="Recevez votre guide immobilier"
 subtitle="Des ressources complètes pour vous accompagner à chaque étape — gratuites, sans engagement et envoyées par courriel."
 centered
 />
 <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 <GuideOfferBlock
 guideType="seller_guide"
 title="Guide vendeur"
 subtitle="Prix, préparation, mise en marché et négociation — tout pour vendre au meilleur prix."
 />
 <GuideOfferBlock
 guideType="buyer_guide"
 title="Guide acheteur"
 subtitle="Le processus d'achat au Québec expliqué simplement, de la recherche au notaire."
 />
 <GuideOfferBlock
 guideType="investor_guide"
 title="Guide investisseur"
 subtitle="Rendement, analyse de plex et stratégie d'acquisition pour investir à Gatineau."
 />
 <GuideOfferBlock
 guideType="relocation_guide"
 title="Guide relocalisation"
 subtitle="Un guide clair pour mieux comprendre un achat à Gatineau en venant d'Ottawa ou d'ailleurs."
 />
 </div>
 </div>
 </section>
);

export default GuideOffersSection;
