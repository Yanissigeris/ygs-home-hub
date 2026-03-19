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
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <GuideOfferBlockEn guideType="seller_guide" title="Seller Guide" subtitle="Pricing, preparation, marketing and negotiation — everything to sell at the best price." />
        <GuideOfferBlockEn guideType="buyer_guide" title="Buyer Guide" subtitle="The buying process in Québec explained simply, from search to notary." />
        <GuideOfferBlockEn guideType="investor_guide" title="Investor Guide" subtitle="Returns, plex analysis and acquisition strategy for investing in Gatineau." />
        <GuideOfferBlockEn guideType="relocation_guide" title="Relocation Guide" subtitle="A clear guide to understanding a purchase in Gatineau from Ottawa or elsewhere." />
      </div>
    </div>
  </section>
);

export default GuideOffersSectionEn;
