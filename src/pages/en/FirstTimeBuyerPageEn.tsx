import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, DollarSign, Home, Shield } from "lucide-react";
import heroImg from "@/assets/hero-first-buyer.webp";

const tips = [
  { icon: DollarSign, title: "Down payment basics", text: "5% minimum for your first home. We'll review what you need and what programs may help." },
  { icon: Home, title: "Finding the right property", text: "Budget, neighborhood, property type — we define your criteria together." },
  { icon: Shield, title: "Step-by-step support", text: "From pre-approval to notary, I guide you through every step without pressure." },
  { icon: CheckCircle2, title: "Avoiding costly mistakes", text: "The right inspection, the right offer, the right conditions — we protect your interests." },
];
const faq = [
  { q: "How much do I need to save?", a: "5% minimum for a primary residence, plus notary fees (~$1,500), welcome tax and inspection." },
  { q: "Is it better to buy in Gatineau?", a: "Prices are generally more affordable than Ottawa. We compare your options together." },
];

const FirstTimeBuyerPageEn = () => (
  <>
    <PageMeta title="First-Time Buyer — Gatineau | YGS" description="First-time buyer in Gatineau? Budget, process and step-by-step guidance to buy your first home with confidence." />
    <HeroSection overline="First-Time Buyer · Gatineau" title="Buying your first home in Gatineau" subtitle="Budget, process and support — everything you need to buy your first property with confidence." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Buyer Guide", href: "/en/buyer-guide" }} heroBgImage={heroImg} />
    <CardGrid overline="For you" title="First-time buyer essentials" items={tips} />
    <FAQSection items={faq} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide for first-time buyers" text="The buying process explained simply — from budget to notary." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Ready to buy your first home?" text="Let's clarify your budget, criteria and options." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "Buyer Guide", href: "/en/buyer-guide", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default FirstTimeBuyerPageEn;
