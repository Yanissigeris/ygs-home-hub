import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
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
import heroImg from "@/assets/hero-vendre-gatineau.webp";

const painPoints = [
  { icon: CheckCircle2, title: "Is now the right time to sell?", text: "The Gatineau market is evolving. You don't want to miss the window, but you also don't want to sell without a plan." },
  { icon: CheckCircle2, title: "How much is my property worth?", text: "A realistic price based on recent sales in your Outaouais neighbourhood." },
  { icon: CheckCircle2, title: "Should I renovate first?", text: "Some investments pay off in the local market. Others don't. We'll sort through them together." },
  { icon: CheckCircle2, title: "How do I sell without getting stuck?", text: "Coordinating a sale and purchase in Gatineau requires a plan from the start, especially if you're staying in the area." },
];
const fears = [
  { icon: AlertTriangle, title: "Underpricing", text: "Leaving thousands on the table due to lack of information on recent sales." },
  { icon: AlertTriangle, title: "Overpricing", text: "Sitting on the market too long and ending up lowering the price under pressure." },
  { icon: AlertTriangle, title: "Poor preparation", text: "Facing stressful negotiations without a clear strategy from day one." },
];
const steps = [
  { num: "01", title: "Analysis & positioning", desc: "I start from comparable sales in your neighbourhood and Outaouais market conditions, then factor in your property's strengths. The suggested price is backed by those sales." },
  { num: "02", title: "Personalized seller plan", desc: "The improvements worth making and the prep work, then a visibility plan aimed at buyers in Gatineau and Ottawa." },
  { num: "03", title: "Through to the notary", desc: "I handle showings and negotiation, then coordinate the file with the notary." },
];
const nextSteps = [
  { title: "Free home valuation", text: "Knowing your property's value is free, with no commitment. Your request stays confidential.", href: "/en/home-valuation/", cta: "Get my valuation", highlight: true },
  { title: "Seller plan", text: "A clear plan, from pricing to marketing, built around your property and your situation.", href: "/en/seller-plan/", cta: "Get my plan" },
  { title: "Talk to Yanis", text: "A call to clarify your options and answer your questions.", href: "/en/contact/", cta: "Book a call" },
];
const faq = [
  { q: "When is the best time to sell?", a: "It depends first on your situation. Since 2017 in the Outaouais, I've seen sellers succeed in all kinds of conditions with the right plan." },
  { q: "Do I need to renovate before selling?", a: "Not necessarily. I'll help you spot what's worth doing to get a better price without wasting money." },
  { q: "How much does a real estate broker cost in Gatineau?", a: "The commission is agreed upon together before we start. You know the amount and the terms before you sign anything." },
  { q: "What if I need to buy at the same time?", a: "That's common. We plan the coordination from the start to avoid getting stuck." },
  { q: "How long does it take to sell a house in Gatineau?", a: "The timeline depends on pricing, area, property type, preparation and market conditions when the property is listed." },
  { q: "Why work with a broker to sell in Gatineau?", a: "A local broker knows the comparables and active buyers in your area, in Aylmer, Hull or elsewhere in the Outaouais. They also know which strategies work there." },
  { q: "How is my home value calculated?", a: "I start from recent comparable sales on your street and in your neighbourhood, then adjust for the property's condition and local market conditions." },
  { q: "Do I need home staging to sell?", a: "Not always, but in some cases it speeds up the sale and improves the price. I advise on a case-by-case basis depending on your property." },
  { q: "What costs should I expect when selling my house?", a: "Broker commission, notary fees, certificate of location, and sometimes minor repairs. I give you the full picture before we start." },
  { q: "Can I sell my house to an Ottawa buyer?", a: "Yes. Depending on the property and its target audience, the marketing can also reach buyers in Ottawa." },
];

const SellerPageEn = () => (
  <>
    <PageMeta title="Sell Your Home in Gatineau" description="Sell your property in Gatineau at the right price, with a clear marketing strategy and personal support from Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Home Selling Service in Gatineau" description="Full-service home selling in Gatineau and Outaouais: valuation, pricing strategy, marketing and support from listing to closing." url="/en/sell/" serviceType="Real Estate Listing Service" />
    <HeroSection overline="For sellers · Gatineau and area" title="Sell your property in Gatineau with a local strategy" subtitle="You don't have to decide everything today. What you need first is a clear plan: pricing, preparation, marketing and negotiation." primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation/" }} secondaryCta={{ label: "Get my seller plan", href: "/en/seller-plan/" }} trustLine="Clear strategy." heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Local strategy" title="Adapting your sale to your local market" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Selling conditions vary by area, property type and price range. Reviewing recent comparable sales helps establish a strategy suited to your property when it enters the market.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Listing price, presentation and marketing strategy influence buyer interest. A local analysis helps position the property according to its features and the competition at the time of sale.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        That's why my approach starts from the reality of the market in your area, not from a number designed to make you feel good.
      </p>
      <div className="mt-6">
        <Button asChild><Link to="/en/home-valuation/">Free Home Valuation →</Link></Button>
      </div>
    </ContentBlock>

<CardGrid overline="Your questions" title="You're probably asking yourself these questions" items={painPoints} variant="icon-inline" />
    <InlineCTA text="First step: find out what your property is worth. It's free, with no commitment." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <CardGrid title="What sellers want to avoid" items={fears} columns={3} background="alt" variant="icon-top" />
    <ContentBlock narrow>
      <SectionHeading overline="Before selling" title="Know where you stand first" />
      <p className="prose-body mt-5">Before selling, many Outaouais homeowners mainly want to know what their property is worth and which options fit their timing. The goal is to build a clear plan for your neighbourhood, at your pace, whether in Aylmer, Hull, the Plateau or Buckingham.</p>
      <p className="prose-body mt-4">I've been helping sellers across the Outaouais since 2017, and I know a good sale takes preparation. It all begins with a value based on local comparables. Then come the price and the improvements that pay off, followed by marketing aimed at the right buyers, including those from Ottawa looking to cross the river.</p>
    </ContentBlock>
    <ProcessSteps steps={steps} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Every seller has a different situation. Choose the step that fits yours." steps={nextSteps} />
    <GuideInlineCTA lang="en" guideType="seller_guide" headline="Thinking about selling? Get the seller guide." text="Everything you need to know to sell at the right price in Gatineau, in a clear guide sent to your email." ctaLabel="Get the Seller Guide" />
    <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide, get it by email" />
    <ReviewSection overline="Seller testimonials" title="What my sellers say" reviews={getReviewsByCategory("seller").slice(0, 2)} columns={2} background="alt" />
    <CTASection dark title="Want to know what to do in your situation?" text="A free valuation or a seller plan, depending on where you are." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation/" }, { label: "Get my seller plan", href: "/en/seller-plan/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages overline={marketBlockCopy.en.overline} title={marketBlockCopy.en.title} pages={marketArticlePages("en", "seller")} />
    <FAQSection items={faq} />
  </>
);

export default SellerPageEn;
