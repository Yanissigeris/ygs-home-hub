import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-vendre.webp";

const painPoints = [
  { icon: CheckCircle2, title: "Is now the right time to sell?", text: "The Gatineau market is evolving. You don't want to miss the window, but you also don't want to sell without a plan." },
  { icon: CheckCircle2, title: "How much is my property really worth?", text: "A realistic price based on recent sales in your Outaouais neighborhood — not an inflated number to win your listing." },
  { icon: CheckCircle2, title: "Should I renovate first?", text: "Some investments pay off in the local market. Others don't. We'll sort through them together." },
  { icon: CheckCircle2, title: "How do I sell without getting stuck?", text: "Coordinating a sale and purchase in Gatineau requires a plan from the start — especially if you're staying in the area." },
];
const fears = [
  { icon: AlertTriangle, title: "Underpricing", text: "Leaving thousands on the table due to lack of information on recent sales." },
  { icon: AlertTriangle, title: "Overpricing", text: "Sitting on the market too long and ending up lowering the price under pressure." },
  { icon: AlertTriangle, title: "Poor preparation", text: "Facing stressful negotiations without a clear strategy from day one." },
];
const steps = [
  { num: "01", title: "Analysis & positioning", desc: "Comparable sales in your neighborhood, Outaouais market conditions, your property's strengths. We set a realistic and strategic price." },
  { num: "02", title: "Personalized seller plan", desc: "Preparation, worthwhile improvements, targeted visibility plan to attract buyers from Gatineau and Ottawa." },
  { num: "03", title: "Full support", desc: "Marketing, showings, negotiation, coordination through to the notary. No surprises." },
];
const nextSteps = [
  { title: "Free home valuation", text: "Know the value of your property — it's free, confidential and no commitment.", href: "/en/home-valuation", cta: "Get my valuation", highlight: true },
  { title: "Seller plan", text: "Pricing, preparation, marketing — a clear plan adapted to your property and situation.", href: "/en/sell", cta: "Get my plan" },
  { title: "Talk to Yanis", text: "A call to clarify your options — no pitch, just answers.", href: "/en/contact", cta: "Book a call" },
];
const faq = [
  { q: "When is the best time to sell?", a: "It depends on your situation, not just the market. In nearly 9 years in Outaouais, I've seen sellers succeed in all conditions — with the right plan." },
  { q: "Do I need to renovate before selling?", a: "Not necessarily. I'll help you identify what's worth doing to maximize your price without wasting money." },
  { q: "How much does a real estate broker cost in Gatineau?", a: "The commission is agreed upon together before we start. Everything is transparent from the start." },
  { q: "What if I need to buy at the same time?", a: "That's common. We plan the coordination from the start to avoid getting stuck." },
  { q: "How long does it take to sell a house in Gatineau?", a: "On average, a well-positioned property sells within a few weeks in Outaouais. The timeline depends on pricing, area and preparation." },
  { q: "Why work with a broker to sell in Gatineau?", a: "A local broker knows the comparables, active buyers and strategies that work in your area — Aylmer, Hull, Plateau or elsewhere in Outaouais." },
  { q: "How is my home value calculated?", a: "I use recent comparable sales on your street and in your neighborhood, property condition and current local market conditions." },
  { q: "Do I need home staging to sell?", a: "Not always, but in some cases it speeds up the sale and improves the price. I advise on a case-by-case basis depending on your property." },
  { q: "What costs should I expect when selling my house?", a: "Broker commission, notary fees, location certificate, and sometimes minor repairs. I give you the full picture before we start." },
  { q: "Can I sell my house to an Ottawa buyer?", a: "Absolutely — many Ottawa buyers look in Outaouais for better prices and quality of life. My marketing targets both markets." },
];

const SellerPageEn = () => (
  <>
    <PageMeta title="Sell Your Home in Gatineau" description="Sell your property in Gatineau at the best price. Marketing strategy, personalized support and proven results by Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Home Selling Service in Gatineau" description="Full-service home selling in Gatineau and Outaouais — valuation, pricing strategy, marketing and support from listing to closing." url="/en/sell" serviceType="Real Estate Listing Service" />
    <HeroSection overline="For sellers · Gatineau and area" title="Sell your property in Gatineau with a tailored strategy" subtitle="You don't have to decide everything today. What you need most is a clear plan — pricing, preparation, marketing, negotiation." primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }} secondaryCta={{ label: "Get my seller plan", href: "/en/sell" }} trustLine="Clear strategy. Full transparency. Informed decisions." heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="2026 Context" title="The 2026 selling market in Outaouais" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        In 2026, the Outaouais real estate market is stabilizing after several very active years. Well-positioned sellers still find buyers — but the context has changed. Available inventory has increased compared to 2022-2024, which means buyers now have more choice and more time to decide.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        The direct consequence for you: listing price, presentation, and marketing strategy now have a much bigger impact on your final result than two years ago. A well-positioned property sells quickly. An overpriced property sits on the market — and that delay sends a negative signal to buyers.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        That's exactly why my approach always starts with the reality of the market in your specific area — not a number designed to make you feel good.
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Sources: Gatineau Real Estate Board (CIO), CMHC — Housing Market Outlook 2026.</p>
      <div className="mt-6">
        <Button asChild><Link to="/en/home-valuation">Free Home Valuation →</Link></Button>
      </div>
    </ContentBlock>

<CardGrid overline="Your questions" title="You're probably asking yourself these questions" items={painPoints} variant="icon-inline" />
    <InlineCTA text="First step: know the value of your property — it's free and no commitment." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <CardGrid title="What sellers want to avoid" items={fears} columns={3} background="alt" variant="icon-top" />
    <ContentBlock narrow>
      <SectionHeading overline="Before selling" title="You don't need to decide everything today" />
      <p className="prose-body mt-5">Before selling, many Outaouais homeowners mainly want to understand their value, their timing and their options. The goal isn't to rush you. The goal is to build a clear plan adapted to your neighborhood — whether in Aylmer, Hull, the Plateau or Buckingham.</p>
      <p className="prose-body mt-4">After nearly 9 years helping sellers across Outaouais, I know that the key to a good sale is preparation. Real value based on local comparables, price positioning, strategic improvements, and marketing to attract the right buyers — including those from Ottawa looking to cross the river.</p>
    </ContentBlock>
    <ProcessSteps steps={steps} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Every seller has a different situation. Choose the step that fits yours." steps={nextSteps} />
    <GuideInlineCTA lang="en" guideType="seller_guide" headline="Thinking about selling? Get the complete guide." text="Everything you need to know to sell at the best price in Gatineau — in a clear guide sent to your email." ctaLabel="Get the Seller Guide" />
    <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide — get it by email" />
    <ReviewSection overline="Seller testimonials" title="They sold with confidence" reviews={getReviewsByCategory("seller").slice(0, 2)} columns={2} background="alt" />
    <CTASection dark title="Want to know what to do in your situation?" text="I'll give you the numbers, the options and a strategy adapted to your situation." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation" }, { label: "Get my seller plan", href: "/en/sell", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
  </>
);

export default SellerPageEn;
