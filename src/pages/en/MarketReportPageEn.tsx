import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-market-report.webp";

const faq = [
  { q: "How can I access the market report?", a: "Contact me — I'll send you the most recent analysis for your area." },
  { q: "What areas does the data cover?", a: "All Gatineau neighborhoods: Aylmer, Hull, Plateau, Buckingham, Gatineau centre and more." },
  { q: "Is the report free?", a: "Yes — it's a tool I offer to my clients and anyone interested in the market." },
];

const related = [
  { title: "Free Valuation", text: "How much is your property worth? Estimate within 24h.", href: "/en/home-valuation" },
  { title: "Properties", text: "Browse active listings in Gatineau.", href: "/en/properties" },
  { title: "Seller Guide", text: "Everything to sell at the best price.", href: "/en/seller-guide" },
  { title: "Invest in Plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex" },
];

const MarketReportPageEn = () => (
  <>
    <PageMeta title="Gatineau Real Estate Market Report | YGS" description="Prices, trends and sales volumes in Gatineau and Outaouais. Real estate market report by Yanis Gauthier-Sigeris." />
    <HeroSection
      overline="Market Report · Gatineau"
      title="Gatineau real estate market report"
      subtitle="Prices, trends, sales volumes — a clear reading of the Gatineau and Outaouais real estate market."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau"
      heroBgImage={heroImg}
    />
    <ContentBlock narrow>
      <SectionHeading overline="Coming soon" title="The market report is coming soon" subtitle="In the meantime, contact me to receive a personalized market analysis for your area." />
      <p className="prose-body mt-5">Every quarter, I prepare an analysis of the Gatineau real estate market — median prices, sales volume, trends by area and forecasts. Contact me to receive the next edition.</p>
    </ContentBlock>
    <InlineCTA text="Want to know the value of your property? Request a free valuation." buttonLabel="Free Valuation →" href="/en/home-valuation" />
    <FAQSection items={faq} />
    <RelatedPages title="Explore also" pages={related} background="alt" />
    <GuideInlineCTAEn guideType="seller_guide" headline="Free Seller Guide — sell at the best price" text="Pricing, preparation and strategy — everything in a guide sent to your email." ctaLabel="Get the Seller Guide" />
    <CTASection dark title="Get the next market report" text="Contact me to be on the list — you'll receive the analysis as soon as it's published." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Talk to Yanis", href: "/en/contact", variant: "outline" }]} trustLine="Zero pressure — objective data and local analysis." />
    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
  </>
);

export default MarketReportPageEn;
