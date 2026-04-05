import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
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
  { icon: Building2, title: "Valuing a plex correctly", text: "A plex's value depends on revenues, expenses and potential — not just comparables." },
  { icon: TrendingUp, title: "Maximizing the sale price", text: "Optimizing rents and presentation before selling can make a big difference." },
  { icon: DollarSign, title: "Understanding taxes", text: "Capital gains, depreciation recapture — there are tax implications to plan for." },
  { icon: Users, title: "Managing tenants", text: "The transition with tenants during the sale requires a clear plan." },
];

const steps = [
  { num: "01", title: "Profitability analysis", desc: "Revenues, expenses, vacancy, optimization potential — we establish the real value of your plex." },
  { num: "02", title: "Strategic positioning", desc: "Optimal price, improvements to consider and strategy to attract the right investor-buyers." },
  { num: "03", title: "Marketing and sale", desc: "Targeted visibility, negotiation and full coordination through to the notary." },
];


const faq = [
  { q: "How do you value a plex?", a: "We use the income approach (gross revenue multiplier) and comparable sales. The building condition, current rents and optimization potential also matter." },
  { q: "When is the right time to sell a plex?", a: "It depends on your goals — resale, refinancing, relocation. We analyze your situation to determine the best timing." },
  { q: "What happens to the tenants when I sell?", a: "Leases transfer to the new owner. The law protects tenants — we manage the transition smoothly." },
];

const SellPlexPageEn = () => (
  <>
    <PageMeta title="Sell a Plex in Gatineau" description="Sell your duplex, triplex or revenue property in Gatineau. Precise valuation, marketing strategy and specialized support." />
    <HeroSection
      overline="Sell a Plex · Gatineau"
      title="Sell your plex in Gatineau"
      subtitle="Duplex, triplex or more — I help you maximize your price with a strategy tailored to revenue properties."
      primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Get an analysis", href: "/en/plex-analysis" }}
      trustLine="Plex specialist. "
      heroBgImage={heroImg}
    />
<CardGrid overline="The challenges" title="Selling a plex is different from selling a house" items={challenges} />
    <InlineCTA text="First step: know the value of your plex — it's free." buttonLabel="Free Valuation →" href="/en/home-valuation" />
    <ProcessSteps steps={steps} background="alt" />
    <ContentBlock narrow>
      <SectionHeading title="Maximize without overcomplicating" />
      <p className="prose-body mt-5">Many plex owners underestimate their building's value — or don't know how to maximize it before selling. My role is to give you a clear picture of your situation and a strategy to get the best price.</p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/plex-analysis">Get my plex analysis</Link>
      </Button>
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Free Investor Guide — maximize your plex" text="Returns, taxes and selling strategy — in a guide sent to your email." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Ready to explore your options?" text="Request an analysis of your plex — value, revenues and recommendation." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Free Plex Analysis", href: "/en/plex-analysis", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);

export default SellPlexPageEn;
