import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import GuideRequestForm from "@/components/GuideRequestForm";
import heroImg from "@/assets/hero-seller-guide.webp";

const topics = [
  "How to set the right selling price in Gatineau",
  "Mistakes that cost thousands of dollars",
  "Preparing your property without over-investing",
  "The selling process step by step in Québec",
  "Negotiation: protecting your price with the right strategy",
  "Buy-sell coordination: avoiding getting stuck",
];

const faq = [
  { q: "When is the best time to sell in Gatineau?", a: "It depends on your personal situation, not just the market. We analyze the best timing for you together." },
  { q: "How much does a real estate broker cost?", a: "The commission is agreed upon together before we start. Everything is transparent — no surprises." },
  { q: "Should I renovate before selling?", a: "Not necessarily. I help you identify what's worth doing to maximize your price without wasting money." },
  { q: "How long does it take to sell in Gatineau?", a: "On average 30 to 60 days on the market, but it varies by neighborhood, price and season." },
];

const related = [
  { title: "Free Valuation", text: "How much is your property worth? Get an estimate within 24h.", href: "/en/home-valuation" },
  { title: "Seller Plan", text: "Get a personalized plan: pricing, preparation and marketing.", href: "/en/seller-plan" },
  { title: "When to Sell", text: "The right timing depends on your situation — here's how to see clearly.", href: "/en/when-to-sell" },
  { title: "Sell a Plex", text: "Selling an income property is different from selling a house.", href: "/en/sell-plex" },
];

const SellerGuidePageEn = () => (
  <>
    <PageMeta title="Seller Guide — Selling in Gatineau | YGS" description="Complete guide to selling your property in Gatineau. Pricing, preparation, marketing and negotiation." />
    <HeroSection overline="Seller Guide · Gatineau" title="Complete guide to selling your property in Gatineau" subtitle="Everything you need to know to sell at the best price, stress-free and without bad surprises." primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} secondaryCta={{ label: "Get my seller plan", href: "/en/seller-plan" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />

    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <ContentBlock narrow>
      <SectionHeading title="Selling takes preparation" />
      <p className="prose-body mt-5">
        The difference between a stressful sale and a successful one is preparation. This guide covers the essential steps to maximize your selling price in Gatineau — from price positioning to final negotiation.
      </p>
      <p className="prose-body mt-4">
        After nearly 9 years supporting sellers in Outaouais, I've seen what works and what costs money. This guide summarizes the most important lessons.
      </p>
    </ContentBlock>

    <InlineCTA text="Want a personalized analysis? Request your free valuation." buttonLabel="Get my valuation →" href="/en/home-valuation" />

    <ContentBlock narrow>
      <SectionHeading title="The right price is key" />
      <p className="prose-body mt-5">
        Overpricing = sitting on the market too long. Underpricing = leaving money on the table. The right price is based on recent comparable sales, the condition of your property and neighborhood dynamics.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="Prepare without overspending" />
      <p className="prose-body mt-5">
        Some investments pay off — neutral paint, decluttering, staging. Others are wasted money. I help you sort through them so you invest only where it counts.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="The selling process in Québec" />
      <p className="prose-body mt-5">
        Valuation → pricing → preparation → marketing → showings → offers → negotiation → inspection → notary → keys. Each step has its pitfalls — and its opportunities. That's why good support makes all the difference.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/seller-plan">Get my personalized seller plan</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      guideTitle="Get the Seller Guide"
      headline="Get your free seller guide"
      subtitle="Everything you need to know to sell at the best price in Gatineau — preparation, pricing, marketing and negotiation."
      submitLabel="Get the Seller Guide"
      successTitle="Thank you! Your guide is on its way."
      successText="Check your inbox — you'll receive the seller guide within the next few minutes."
    />

    <FAQSection items={faq} />

    <RelatedPages title="Related pages for sellers" pages={related} background="alt" />

    <GuideInlineCTAEn guideType="seller_guide" headline="Free Seller Guide" text="Pricing, preparation and strategy — everything in a guide sent to your email." ctaLabel="Get the Seller Guide" />

    <CTASection dark title="Ready to take action?" text="Request your free valuation or talk directly to Yanis." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Talk to Yanis", href: "/en/contact", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers and the options, you decide." />

    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
  </>
);
export default SellerGuidePageEn;
