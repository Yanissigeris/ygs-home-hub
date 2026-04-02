import SectionHeading from "@/components/SectionHeading";
import GuideOfferBlockEn from "@/components/en/GuideOfferBlockEn";

interface Props { background?: "default" | "alt"; }

const GuideOffersSectionEn = ({ background = "default" }: Props) => (
  <section className={`section-padding ${background === "alt" ? "bg-secondary/20" : ""}`}>
    <div className="section-container max-w-[72rem]">
      <SectionHeading
        overline="Free Guides"
        title="Get your real estate guide"
        subtitle="Comprehensive resources to guide you at every step — free, no commitment, delivered by email."
        centered
      />
      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GuideOfferBlockEn guideType="seller_guide" title="Seller Guide" subtitle="Sell at the best price — pricing, marketing, negotiation." />
        <GuideOfferBlockEn guideType="buyer_guide" title="Buyer Guide" subtitle="The Québec buying process, from search to notary." />
        <GuideOfferBlockEn guideType="investor_guide" title="Investor Guide" subtitle="Returns, plex analysis and investing in Gatineau." />
        <GuideOfferBlockEn guideType="relocation_guide" title="Relocation Guide" subtitle="Buying in Gatineau from Ottawa or elsewhere." />
      </div>
    </div>
  </section>
);

export default GuideOffersSectionEn;
