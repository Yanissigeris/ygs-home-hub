import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import FAQSection from "@/components/FAQSection";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-seller-guide.webp";

const topics = ["Pricing your property accurately","Preparing your home for maximum impact","The marketing plan that attracts the right buyers","Negotiation strategies that protect your interests","The notary process and what to expect"];
const faq = [
  { q: "When is the best time to sell?", a: "It depends on your situation, not just the market. With the right plan, sellers succeed in all conditions." },
  { q: "How much does it cost to sell?", a: "Commission is agreed upon before we start. Everything is transparent — no hidden fees." },
];

const SellerGuidePageEn = () => (
  <>
    <PageMeta title="Seller Guide — Selling in Gatineau | YGS" description="Complete guide to selling your property in Gatineau. Pricing, preparation, marketing and negotiation." />
    <HeroSection overline="Seller Guide · Gatineau" title="Complete guide to selling in Gatineau" subtitle="Everything you need to know to sell at the best price — preparation, pricing, marketing and negotiation." primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />
    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />
    <FAQSection items={faq} />
    <GuideInlineCTAEn guideType="seller_guide" headline="Free Seller Guide" text="Pricing, preparation and strategy — everything in a guide sent to your email." ctaLabel="Get the Seller Guide" />
    <CTASection dark title="Ready to sell?" text="Start with a free valuation — know the real value of your property." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Talk to Yanis", href: "/en/contact", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers, you decide." />
    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
  </>
);
export default SellerGuidePageEn;
