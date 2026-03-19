import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-relocation-guide.jpg";

const topics = ["Gatineau neighborhoods compared — pros and cons","Understanding prices by area","The Québec buying process step by step","Taxes, schools and community services","Tips for a smooth transition from Ottawa or Montréal"];

const RelocationGuidePageEn = () => (
  <>
    <PageMeta title="Relocation Guide — Moving to Gatineau | YGS" description="Complete relocation guide for moving to Gatineau. Neighborhoods, prices, process and schools." />
    <HeroSection overline="Relocation Guide · Gatineau" title="Complete guide to relocating to Gatineau" subtitle="Everything you need to know to settle in Gatineau — neighborhoods, prices, process and practical tips." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }} heroBgImage={heroImg} />
    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />
    <GuideInlineCTAEn guideType="relocation_guide" headline="Free Relocation Guide" text="Neighborhoods, prices, process — everything in one guide sent to your email." ctaLabel="Get the Relocation Guide" />
    <CTASection dark title="Planning your move?" text="Let's discuss your relocation — no commitment, just honest advice." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="relocation_guide" label="Free Relocation Guide — get it by email" />
  </>
);
export default RelocationGuidePageEn;
