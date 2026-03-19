import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-military-guide.webp";

const topics = ["Understanding the Gatineau market as a military member","Best neighborhoods near military bases","Coordinating buy-sell during a posting","IRP/BGRS program navigation tips","Schools, services and bilingual community resources"];

const MilitaryGuidePageEn = () => (
  <>
    <PageMeta title="Military Real Estate Guide — Gatineau | YGS" description="Complete guide for military members relocating to Gatineau. Neighborhoods, process and support for CAF postings." />
    <HeroSection overline="Military Guide · Gatineau" title="Military real estate guide for Gatineau" subtitle="Everything you need to know for your real estate posting — neighborhoods, process, coordination and support." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Military overview", href: "/en/military" }} heroBgImage={heroImg} />
    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />
    <GuideInlineCTAEn guideType="relocation_guide" headline="Get the Military Relocation Guide" text="Neighborhoods, process and tips — everything in one guide." ctaLabel="Get the guide" />
    <CTASection dark title="Ready to plan your posting?" text="Let's talk about your situation and timeline." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Military overview", href: "/en/military", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="relocation_guide" label="Free Military Guide — get it by email" />
  </>
);
export default MilitaryGuidePageEn;
