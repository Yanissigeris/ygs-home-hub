import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import ProcessSteps from "@/components/ProcessSteps";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, Building2, TrendingUp, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-plex.webp";

const clientTypes = [
  { icon: Building2, title: "Plex owners", text: "Sell, refinance or hold? We analyze your situation based on your rents and expenses.", cta: "Get an analysis", href: "/en/plex-analysis/" },
  { icon: TrendingUp, title: "Investor buyers", text: "Market value, rental potential, risks and buying strategy: the numbers before the decision.", cta: "Request an analysis", href: "/en/plex-analysis/" },
];
const questions = [
  { icon: CheckCircle2, title: "Should I keep or sell?", text: "Your current return, compared with your long-term goals." },
  { icon: CheckCircle2, title: "Does the asking price make sense?", text: "Rents shown in the leases, expenses backed by invoices and the rental potential of the area." },
  { icon: CheckCircle2, title: "What's the true return?", text: "Expenses, vacancy, upcoming repairs, growth potential in Gatineau." },
  { icon: CheckCircle2, title: "What risks to watch for?", text: "Roof, plumbing, electrical, foundation: some repairs change the equation, especially in Hull's older buildings." },
  { icon: CheckCircle2, title: "How do I sell my plex well?", text: "A well-positioned price and marketing that reaches Outaouais investors." },
];
const steps = [
  { num: "01", title: "Number analysis", desc: "Income, expenses, market value and rental potential: we start with the facts." },
  { num: "02", title: "Recommendation", desc: "Hold, sell, refinance or buy: the option that suits your situation." },
  { num: "03", title: "Execution and support", desc: "From decision to transaction, complete and transparent support." },
];
const nextSteps = [
  { title: "Free plex analysis", text: "Value, income, expenses and potential: an objective reading of your situation.", href: "/en/plex-analysis/", cta: "Get my analysis", highlight: true },
  { title: "Property valuation", text: "Know the current market value of your plex, free and confidential.", href: "/en/home-valuation/", cta: "Get my valuation" },
  { title: "Talk to Yanis", text: "A conversation about your investor situation, with no commitment.", href: "/en/contact/", cta: "Contact me" },
];
const faq = [
  { q: "How do you evaluate a plex's value?", a: "We combine recent sales of comparable plexes with the income approach: net operating income, capitalization rate and the area's gross rent multiplier (GRM). Building condition and rental potential then adjust the value. I have analyzed plexes in the Outaouais since 2017, in Hull, Gatineau-centre and other areas." },
  { q: "Is it still profitable to buy a plex in Gatineau?", a: "It depends on the area, price, revenues, expenses, building condition and your strategy. A property-specific analysis helps assess the situation." },
  { q: "How do you sell an occupied plex?", a: "It can be done. A sale does not end the leases: the buyer takes them over as they are. Tenants must receive 24 hours' notice before a showing. We prepare the leases and the income and expense statement ahead of time for buyers." },
  { q: "Refinance or sell?", a: "We compare both scenarios with current rates and your area's market value to see what makes more sense." },
];

const PlexPageEn = () => (
  <>
    <PageMeta title="Invest in a Plex in Gatineau" ogImage="https://yanisgauthier.com/og/og-plex.jpg" description="Duplex, triplex and income properties in Gatineau. Return analysis, investment strategy and support by a specialized broker." />
    <ServiceJsonLd name="Plex Investment Analysis in Gatineau" description="Analysis and support service for buying, selling or evaluating plexes and income properties in Gatineau and the Outaouais." url="/en/plex/" serviceType="Real Estate Investment Analysis" />
    <HeroSection overline="Plex and investment · Gatineau" title="Plex in Gatineau: buy, sell or analyze" subtitle="You need to look beyond the listed price. Revenues, expenses, building condition, potential: every factor counts in the decision." primaryCta={{ label: "Free Plex Analysis", href: "/en/plex-analysis/" }} secondaryCta={{ label: "Value of my plex", href: "/en/home-valuation/" }} trustLine="Clear strategy." heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Analysis" title="What to analyze before investing in a plex in the Outaouais" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Conditions vary by area and property type. Before buying, review the rents in place, expenses, vacancy, building condition and the property's specific potential.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        A return analysis should account for rents in place, maintenance costs, anticipated capital expenditures and your long-term strategy. It shows how the building compares with your goals.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I am a real estate investor myself. My role is not to convince you to buy. I give you a frank analysis so you can make a fully informed decision.
      </p>
      <p className="prose-body mt-4 p-4 rounded-md" style={{ background: "rgba(168,138,90,.08)", border: "1px solid rgba(168,138,90,.15)" }}>
        A rent adjustment depends on the applicable criteria and the building's circumstances. The TAL publishes the percentages used for this calculation each year, and its tool helps set the adjustment. The landlord and tenant remain free to agree. <a className="underline underline-offset-4" href="https://www.tal.gouv.qc.ca/en/renewal-of-the-lease-and-fixing-of-rent/applicable-percentages-to-the-criteria-for-the-fixing-of-rent" target="_blank" rel="noopener noreferrer">Review the TAL criteria</a>.
      </p>
      <div className="mt-6">
        <Button asChild><Link to="/en/contact/">Analyze a plex with me →</Link></Button>
      </div>
    </ContentBlock>

<LinkedCardGrid overline="For you" title="I help two types of clients" items={clientTypes} />
    <InlineCTA text="Own a plex? Start by knowing its current value." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <CardGrid overline="Analysis" title="The real questions behind a plex" items={questions} variant="icon-inline" background="alt" />
    <ProcessSteps steps={steps} />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the option that fits your investor situation." steps={nextSteps} background="alt" />
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Investing in Gatineau? Get the complete guide." text="Returns, plex analysis, acquisition strategy and pitfalls to avoid: a guide to investing in Gatineau, sent by email." ctaLabel="Get the Investor Guide" />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide, get it by email" />
    <ReviewSection overline="Investor testimonials" title="Informed decisions, real results" reviews={getReviewsByCategory("plex").slice(0, 2)} columns={2} />
    <CTASection dark title="Get a clear reading of your situation" text="Whether you are thinking of selling or buying, we look at your numbers together to see more clearly." buttons={[{ label: "Free Plex Analysis", href: "/en/plex-analysis/" }, { label: "Free Valuation", href: "/en/home-valuation/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages overline={marketBlockCopy.en.overline} title={marketBlockCopy.en.title} pages={marketArticlePages("en", "investor")} />
    <FAQSection items={faq} />
  </>
);

export default PlexPageEn;
