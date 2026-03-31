import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GuideOfferBlock from "@/components/GuideOfferBlock";

interface GuideOffersSectionProps {
  background?: "default" | "alt";
}

const guides = [
  { guideType: "seller_guide" as const, title: "Guide vendeur", subtitle: "Prix, préparation, mise en marché et négociation — tout pour vendre au meilleur prix." },
  { guideType: "buyer_guide" as const, title: "Guide acheteur", subtitle: "Le processus d'achat au Québec expliqué simplement, de la recherche au notaire." },
  { guideType: "investor_guide" as const, title: "Guide investisseur", subtitle: "Rendement, analyse de plex et stratégie d'acquisition pour investir à Gatineau." },
  { guideType: "relocation_guide" as const, title: "Guide relocalisation", subtitle: "Un guide clair pour mieux comprendre un achat à Gatineau en venant d'Ottawa ou d'ailleurs." },
];

const GuideOffersSection = ({ background = "default" }: GuideOffersSectionProps) => (
  <section className={`section-padding ${background === "alt" ? "bg-secondary/20" : ""}`}>
    <div className="section-container max-w-[72rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          overline="Guides gratuits"
          title="Recevez votre guide immobilier"
          subtitle="Des ressources complètes pour vous accompagner à chaque étape — gratuites, sans engagement et envoyées par courriel."
          centered
        />
      </motion.div>
      <div className="mt-7 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((guide, i) => (
          <motion.div
            key={guide.guideType}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GuideOfferBlock {...guide} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GuideOffersSection;
