import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Clock, TrendingUp, Home, AlertTriangle, Award, Shield } from "lucide-react";
import heroImg from "@/assets/home-interior.webp";

const factors = [
  { icon: TrendingUp, title: "The local market", text: "Market conditions in Gatineau vary by neighborhood and season." },
  { icon: Home, title: "Your personal situation", text: "Posting, retirement, growing family — your timing depends on your life, not just the market." },
  { icon: AlertTriangle, title: "Timing traps", text: "Waiting for the 'perfect moment' can cost more than selling at the right time with the right strategy." },
];

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Platinum Club · Hall of Fame" },
  { icon: Shield, label: "Objective market analysis" },
];

const faq = [
  { q: "Is spring really the best time to sell?", a: "It's often the busiest season, but not always the most profitable. Less competition in fall or winter can work in your favor." },
  { q: "Will the Gatineau market go down?", a: "Nobody can predict the market with certainty. What I can do is give you a realistic analysis based on current data." },
  { q: "How do I know if it's the right time for me?", a: "We look at your situation together — not just the market. Often, the right time depends more on your plan than on general conditions." },
];

const WhenToSellPageEn = () => (
  <>
    <PageMeta title="When to Sell Your Property in Gatineau | YGS" description="The best time to sell in Gatineau depends on your situation. Market analysis, key factors and advice from an experienced broker." />
    <HeroSection
      overline="When to sell · Gatineau"
      title="When is the right time to sell in Gatineau?"
      subtitle="The best time to sell depends on your situation, not just the market. Here's how to see things more clearly."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau"
      heroBgImage={heroImg}
    />
    <TrustMiniStrip items={trustItems} />
    <CardGrid overline="Key factors" title="What influences the right timing" items={factors} columns={3} />
    <ContentBlock narrow>
      <SectionHeading title="There's no perfect timing" />
      <p className="prose-body mt-5">Many sellers wait for the "perfect moment" — but that moment never truly arrives. What makes the difference is preparation: the right price, the right marketing and a solid strategy.</p>
      <p className="prose-body mt-4">In nearly 9 years in Gatineau, I've seen sellers succeed in all market conditions — with the right plan.</p>
    </ContentBlock>
    <InlineCTA text="Start by knowing the current value of your property — it's free." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <GuideInlineCTAEn guideType="seller_guide" headline="Free Seller Guide — sell at the right time" text="Pricing, preparation, timing — everything in a guide sent to your email." ctaLabel="Get the Seller Guide" />
    <CTASection dark title="Unsure about the timing?" text="Get a free valuation — let's look together at whether now is the right time for you." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation" }, { label: "Talk to Yanis", href: "/en/contact", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
  </>
);

export default WhenToSellPageEn;
