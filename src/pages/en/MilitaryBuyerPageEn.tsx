import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Home, Shield } from "lucide-react";
import heroImg from "@/assets/hero-military-buyer.webp";

const tips = [
  { icon: CheckCircle2, title: "Virtual visits available", text: "Buy remotely before your arrival — I adapt to your schedule." },
  { icon: Home, title: "Neighborhood guidance", text: "Base proximity, schools, services — we find the right fit for your family." },
  { icon: Shield, title: "Full support", text: "From search to notary, I handle coordination so you can focus on your posting." },
];
const faq = [
  { q: "Can I buy before arriving in Gatineau?", a: "Absolutely. Virtual visits and remote offers are common for military buyers." },
  { q: "Which neighborhoods are close to the base?", a: "Depends on your base. I recommend the best areas based on your commute and priorities." },
];

const MilitaryBuyerPageEn = () => (
  <>
    <PageMeta title="Military Buyer — Buy in Gatineau | YGS" description="Military posting to Gatineau? Find the right property with specialized support for CAF members." />
    <HeroSection overline="Military · Buying" title="Buy in Gatineau during your posting" subtitle="Find the right neighborhood and property for your family — virtual visits available, timeline-adapted support." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Military Guide", href: "/en/military-guide" }} heroBgImage={heroImg} />
    <CardGrid overline="How I help" title="Buying as a military member" items={tips} />
    <FAQSection items={faq} />
    <GuideInlineCTAEn guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything for your real estate posting to Gatineau." ctaLabel="Get the guide" />
    <CTASection dark title="Ready to find your property?" text="Let's discuss your posting, timeline and criteria." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Military Guide", href: "/en/military-guide", variant: "outline" }]} trustLine="Zero pressure — I adapt to your schedule." />
    <StickyGuideBannerEn guideType="relocation_guide" label="Free Military Guide — get it by email" />
  </>
);
export default MilitaryBuyerPageEn;
