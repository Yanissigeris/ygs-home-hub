import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Clock, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-seller.webp";

const tips = [
  { icon: Clock, title: "Tight timeline? No problem", text: "I adapt the selling strategy to your posting schedule." },
  { icon: DollarSign, title: "Best price, fast", text: "Strategic pricing and marketing to sell quickly without sacrificing value." },
  { icon: CheckCircle2, title: "Buy-sell coordination", text: "If you're buying too, we coordinate both transactions seamlessly." },
];
const faq = [
  { q: "Can I sell quickly during a posting?", a: "Yes — with the right pricing and marketing strategy, we can move fast without leaving money on the table." },
];

const MilitarySellerPageEn = () => (
  <>
    <PageMeta title="Military Seller — Sell During a Posting | YGS" description="Selling during a military posting? Fast, strategic support to sell at the right price on your timeline." />
    <HeroSection overline="Military · Selling" title="Sell during your posting — quickly and strategically" subtitle="Tight timeline? I adapt the strategy to get you the best price without delays." primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} secondaryCta={{ label: "Book a call", href: "/en/contact" }} heroBgImage={heroImg} />
    <CardGrid overline="How I help" title="Selling during a military posting" items={tips} />
    <FAQSection items={faq} />
    <GuideInlineCTAEn guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything for your real estate posting transition." ctaLabel="Get the guide" />
    <CTASection dark title="Need to sell fast?" text="Let's discuss your timeline and build the right strategy." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a call", href: "/en/contact", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="relocation_guide" label="Free Military Guide — get it by email" />
  </>
);
export default MilitarySellerPageEn;
