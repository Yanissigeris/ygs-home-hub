import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Clock, TrendingUp, Home, AlertTriangle, Award, Shield } from "lucide-react";
import heroImg from "@/assets/home-interior.webp";

const factors = [
  { icon: TrendingUp, title: "The local market", text: "Market conditions in Gatineau vary by neighbourhood and season." },
  { icon: Home, title: "Your personal situation", text: "A posting or a growing family can set your timeline before the market does." },
  { icon: AlertTriangle, title: "The cost of waiting", text: "Holding out for a price peak can cost more than selling at the right time with good preparation." },
];


const faq = [
  { q: "Is spring the best time to sell?", a: "It's often the busiest season, but not necessarily the most profitable one. In fall or winter, there are usually fewer listings competing with yours, which can work in your favour." },
  { q: "Will the Gatineau market go down?", a: "Nobody can predict the market with certainty. What I can do is give you a realistic analysis based on current data." },
  { q: "How do I know if it's the right time for me?", a: "We look at your situation together. Often, the right time depends more on your plan than on general conditions." },
];

const WhenToSellPageEn = () => (
  <>
    <PageMeta title="When to Sell Your Property in Gatineau" description="The right time to sell in Gatineau depends on your situation. Market analysis, key factors and advice from an experienced broker." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="When to Sell Your Property in Gatineau" description="Market analysis to choose the right time to sell your property in Gatineau and Outaouais." url="/en/when-to-sell/" serviceType="Real Estate Market Analysis" />
    <HeroSection
      overline="When to sell · Gatineau"
      title="When is the right time to sell in Gatineau?"
      subtitle="The right time to sell depends on your situation, not just the market. A few pointers to see things more clearly."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact/" }}
      trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau"
      heroBgImage={heroImg}
    />
<CardGrid overline="Key factors" title="What influences the right timing" items={factors} columns={3} />
    <ContentBlock narrow>
      <SectionHeading title="The market peak doesn't announce itself" />
      <p className="prose-body mt-5">Many sellers wait for the market to peak, but a peak is almost impossible to spot while it's happening. What matters most is preparation: the right price and well-planned marketing.</p>
      <p className="prose-body mt-4">Since 2017 in Gatineau, I've seen sellers succeed in all market conditions, with the right plan.</p>
    </ContentBlock>
    <InlineCTA text="Start by finding out what your property is worth today. It's free." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <GuideInlineCTA lang="en" guideType="seller_guide" headline="Free Seller Guide: sell at the right time" text="Pricing and timing, explained in a free guide sent to your email." ctaLabel="Get the Seller Guide" />
    <CTASection dark title="Unsure about the timing?" text="Get a free valuation and we'll look together at whether now is the right time for you." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation/" }, { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide, get it by email" />
  </>
);

export default WhenToSellPageEn;
