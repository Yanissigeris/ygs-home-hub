import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Building2, TrendingUp, DollarSign, Users, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-sell-plex.webp";

const challenges = [
  { icon: Building2, title: "Valuing a plex correctly", text: "A plex's value is mostly calculated from its income and expenses. Comparables round out the analysis." },
  { icon: TrendingUp, title: "Getting the right price", text: "A clean presentation and well-documented leases before you sell can influence the price you get." },
  { icon: DollarSign, title: "Understanding taxes", text: "Capital gains and depreciation recapture: these tax implications need planning before the sale." },
  { icon: Users, title: "Managing tenants", text: "The transition with tenants during the sale requires a clear plan." },
];

const steps = [
  { num: "01", title: "Profitability analysis", desc: "Income, expenses, vacancy and the building's potential: we establish the value of your plex." },
  { num: "02", title: "Positioning", desc: "The asking price and the improvements to consider, with a strategy to attract investor-buyers." },
  { num: "03", title: "Marketing and sale", desc: "Targeted visibility, negotiation and full coordination through to the notary." },
];


const faq = [
  { q: "How do you value a plex?", a: "We use the income approach (gross revenue multiplier) and comparable sales. The building's condition and potential also matter, along with current rents." },
  { q: "When is the right time to sell a plex?", a: "It depends on your goals, for example reinvesting elsewhere or lightening your management load. We also compare a sale with refinancing before choosing the timing." },
  { q: "What happens to the tenants when I sell?", a: "Leases transfer with the building and bind the new owner. The law protects tenants, and I coordinate the transition with them." },
];

const SellPlexPageEn = () => (
  <>
    <PageMeta title="Sell a Plex in Gatineau" description="Sell your duplex, triplex or revenue property in Gatineau. Precise valuation, marketing strategy and specialized support." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Sell a Plex in Gatineau" description="Specialized sale of duplexes, triplexes and revenue properties in Gatineau. Precise valuation and adapted marketing strategy." url="/en/sell-plex/" serviceType="Multi-Family Property Listing Service" />
    <HeroSection
      overline="Sell a Plex · Gatineau"
      title="Sell your plex in Gatineau"
      subtitle="Duplex, triplex or more: I help you sell at the right price, with a strategy built for income properties."
      primaryCta={{ label: "Free Valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Get an analysis", href: "/en/plex-analysis/" }}
      trustLine="Plex specialist."
      heroBgImage={heroImg}
    />
<CardGrid overline="The challenges" title="Selling a plex is different from selling a house" items={challenges} />
    <InlineCTA text="First step: find out what your plex is worth. It's free." buttonLabel="Free Valuation →" href="/en/home-valuation/" />
    <ProcessSteps steps={steps} background="alt" />
    <ContentBlock narrow>
      <SectionHeading title="Sell well without overcomplicating it" />
      <p className="prose-body mt-5">Many plex owners underestimate their building's value, or don't know how to showcase it before selling. My role is to give you a clear picture of your situation and a strategy to get the right price.</p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/plex-analysis/">Get my plex analysis</Link>
      </Button>
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Free Investor Guide for plex owners" text="Plex returns and taxes, explained in a guide sent to your email." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Ready to look at your options?" text="Request an analysis of your plex: its value based on its income, with my recommendation." buttons={[{ label: "Free Valuation", href: "/en/home-valuation/" }, { label: "Free Plex Analysis", href: "/en/plex-analysis/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide, get it by email" />
  </>
);

export default SellPlexPageEn;
