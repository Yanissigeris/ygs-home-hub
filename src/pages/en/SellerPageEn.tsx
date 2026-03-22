import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, AlertTriangle, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-seller.webp";

const painPoints = [
  { icon: CheckCircle2, title: "Is now the right time to sell?", text: "You don't want to miss the window, but you also don't want to sell without a plan." },
  { icon: CheckCircle2, title: "How much is my property really worth?", text: "A realistic price based on recent sales — not an inflated number to win your listing." },
  { icon: CheckCircle2, title: "Should I renovate first?", text: "Some investments pay off. Others don't. We'll sort through them together." },
  { icon: CheckCircle2, title: "How do I sell without getting stuck?", text: "Coordinating a sale and purchase requires a plan from the start." },
];
const fears = [
  { icon: AlertTriangle, title: "Underpricing", text: "Leaving thousands on the table due to lack of information on recent sales." },
  { icon: AlertTriangle, title: "Overpricing", text: "Sitting on the market too long and ending up lowering the price under pressure." },
  { icon: AlertTriangle, title: "Poor preparation", text: "Facing stressful negotiations without a clear strategy from day one." },
];
const steps = [
  { num: "01", title: "Analysis & positioning", desc: "Comparable sales, market conditions, your property's strengths. We set a realistic and strategic price." },
  { num: "02", title: "Personalized seller plan", desc: "Preparation, worthwhile improvements, visibility plan and marketing timeline." },
  { num: "03", title: "Full support", desc: "Marketing, showings, negotiation, coordination through to the notary. No surprises." },
];
const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Platinum Club · Hall of Fame" },
  { icon: Shield, label: "Full transparency, zero surprises" },
];
const nextSteps = [
  { title: "Free home valuation", text: "Know the value of your property — it's free, confidential and no commitment.", href: "/en/home-valuation", cta: "Get my valuation", highlight: true },
  { title: "Seller plan", text: "Pricing, preparation, marketing — a clear plan adapted to your property and situation.", href: "/en/sell", cta: "Get my plan" },
  { title: "Talk to Yanis", text: "A call to clarify your options — no pitch, just answers.", href: "/en/contact", cta: "Book a call" },
];
const faq = [
  { q: "When is the best time to sell?", a: "It depends on your situation, not just the market. In nearly 9 years in Outaouais, I've seen sellers succeed in all conditions — with the right plan." },
  { q: "Do I need to renovate before selling?", a: "Not necessarily. I'll help you identify what's worth doing to maximize your price without wasting money." },
  { q: "How much does a broker cost?", a: "The commission is agreed upon together before we start. Everything is transparent from the start." },
  { q: "What if I need to buy at the same time?", a: "That's common. We plan the coordination from the start to avoid getting stuck." },
];

const SellerPageEn = () => (
  <>
    <PageMeta title="Sell Your Home in Gatineau | YGS" description="Sell your property in Gatineau at the best price. Marketing strategy, personalized support and proven results by Yanis Gauthier-Sigeris." />
    <HeroSection overline="For sellers · Gatineau and area" title="Sell your property in Gatineau with a tailored strategy" subtitle="You don't have to decide everything today. What you need most is a clear plan — pricing, preparation, marketing, negotiation." primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }} secondaryCta={{ label: "Get my seller plan", href: "/en/sell" }} trustLine="Clear strategy. Full transparency. Informed decisions." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <CardGrid overline="Your questions" title="You're probably asking yourself these questions" items={painPoints} variant="icon-inline" />
    <InlineCTA text="First step: know the value of your property — it's free and no commitment." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <CardGrid title="What sellers want to avoid" items={fears} columns={3} background="alt" variant="icon-top" />
    <ContentBlock narrow>
      <SectionHeading overline="Before selling" title="You don't need to decide everything today" />
      <p className="prose-body mt-5">Before selling, many homeowners mainly want to understand their value, their timing and their options. The goal isn't to rush you. The goal is to build a clear plan.</p>
      <p className="prose-body mt-4">After nearly 9 years helping sellers in Outaouais, I know that the key to a good sale is preparation. Real value, price positioning, strategic improvements, marketing to attract the right buyers.</p>
    </ContentBlock>
    <ProcessSteps steps={steps} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Every seller has a different situation. Choose the step that fits yours." steps={nextSteps} />
    <GuideInlineCTAEn guideType="seller_guide" headline="Thinking about selling? Get the complete guide." text="Everything you need to know to sell at the best price in Gatineau — in a clear guide sent to your email." ctaLabel="Get the Seller Guide" />
    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
    <ReviewSection overline="Seller testimonials" title="They sold with confidence" reviews={getReviewsByCategory("seller").slice(0, 2)} columns={2} background="alt" />
    <CTASection dark title="Want to know what to do in your situation?" text="I'll give you the numbers, the options and a strategy adapted to your situation." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation" }, { label: "Get my seller plan", href: "/en/sell", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
  </>
);

export default SellerPageEn;
