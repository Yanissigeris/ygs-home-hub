import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GuideOfferBlock from "@/components/GuideOfferBlock";

interface GuideOffersSectionProps {
  background?: "default" | "alt";
  lang?: "fr" | "en";
}

const guidesFr = [
  { guideType: "seller_guide" as const, title: "Guide vendeur", subtitle: "Vendre au meilleur prix — prix, mise en marché, négociation." },
  { guideType: "buyer_guide" as const, title: "Guide acheteur", subtitle: "Le processus d'achat au Québec, de la recherche au notaire." },
  { guideType: "investor_guide" as const, title: "Guide investisseur", subtitle: "Rendement, plex et stratégie d'investissement à Gatineau." },
  { guideType: "relocation_guide" as const, title: "Guide relocalisation", subtitle: "Acheter à Gatineau en venant d'Ottawa ou d'ailleurs." },
];

const guidesEn = [
  { guideType: "seller_guide" as const, title: "Seller Guide", subtitle: "Sell at the best price — pricing, marketing, negotiation." },
  { guideType: "buyer_guide" as const, title: "Buyer Guide", subtitle: "The Québec buying process, from search to notary." },
  { guideType: "investor_guide" as const, title: "Investor Guide", subtitle: "Returns, plex analysis and investing in Gatineau." },
  { guideType: "relocation_guide" as const, title: "Relocation Guide", subtitle: "Buying in Gatineau from Ottawa or elsewhere." },
];

const headingFr = { overline: "Guides gratuits", title: "Recevez votre guide immobilier", subtitle: "Des ressources complètes pour vous accompagner à chaque étape — gratuites, sans engagement et envoyées par courriel." };
const headingEn = { overline: "Free Guides", title: "Get your real estate guide", subtitle: "Comprehensive resources to guide you at every step — free, no commitment, delivered by email." };

const GuideOffersSection = ({ background = "default", lang = "fr" }: GuideOffersSectionProps) => {
  const guides = lang === "en" ? guidesEn : guidesFr;
  const heading = lang === "en" ? headingEn : headingFr;

  return (
    <section className={`section-padding ${background === "alt" ? "bg-secondary/20" : ""}`}>
      <div className="section-container max-w-[72rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline={heading.overline} title={heading.title} subtitle={heading.subtitle} centered />
        </motion.div>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.guideType}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GuideOfferBlock {...guide} lang={lang} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideOffersSection;
