import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
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
  { icon: Building2, title: "Plex owners", text: "Sell, refinance or hold? We analyze your situation with real numbers — not assumptions.", cta: "Get an analysis", href: "/en/plex-analysis/" },
  { icon: TrendingUp, title: "Investor buyers", text: "Real value, rental potential, risks and buying strategy — the numbers before the decision.", cta: "Request an analysis", href: "/en/plex-analysis/" },
];
const questions = [
  { icon: CheckCircle2, title: "Should I keep or sell?", text: "Current returns, Outaouais market conditions and long-term strategy." },
  { icon: CheckCircle2, title: "Does the asking price make sense?", text: "Real revenues, real expenses, rental potential in the area — not just the listed price." },
  { icon: CheckCircle2, title: "What's the true return?", text: "Expenses, vacancy, upcoming repairs, growth potential in Gatineau." },
  { icon: CheckCircle2, title: "What risks to watch for?", text: "Roof, plumbing, electrical, foundation — some costs change the equation, especially in Hull's older buildings." },
  { icon: CheckCircle2, title: "How to maximize sale price?", text: "Price positioning and targeted marketing make a difference on a plex in Outaouais." },
];
const steps = [
  { num: "01", title: "Number analysis", desc: "Revenues, expenses, market value and rental potential — we start with the facts." },
  { num: "02", title: "Strategic recommendation", desc: "Hold, sell, refinance or buy — the best option for your situation." },
  { num: "03", title: "Execution and support", desc: "From decision to transaction, complete and transparent support." },
];
const nextSteps = [
  { title: "Free plex analysis", text: "Value, revenues, expenses, potential — an objective reading of your situation.", href: "/en/plex-analysis/", cta: "Get my analysis", highlight: true },
  { title: "Property valuation", text: "Know the current market value of your plex — free and confidential.", href: "/en/home-valuation/", cta: "Get my valuation" },
  { title: "Talk to Yanis", text: "A call to discuss your investor situation — no commitment.", href: "/en/contact/", cta: "Book a call" },
];
const faq = [
  { q: "How do you evaluate a plex's value?", a: "Revenues, building condition, rental potential and neighborhood. Since 2017 in Outaouais, I know the specifics of plexes in Hull, Gatineau-centre and other areas well." },
  { q: "Is it still profitable to buy a plex in Gatineau?", a: "It depends on the area, price, revenues and your strategy. Hull, Gatineau-centre and parts of Aylmer still offer good opportunities. We can analyze it together." },
  { q: "How do you sell an occupied plex?", a: "It's feasible — tenant coordination, visits, documentation. The Québec process has specific rules. I support you at every step." },
  { q: "Refinance or sell?", a: "We compare both scenarios with current rates and your area's market value to see what makes more sense." },
];

const PlexPageEn = () => (
  <>
    <PageMeta title="Invest in a Plex in Gatineau" ogImage="https://yanisgauthier.com/og/og-plex.jpg" description="Duplex, triplex and income properties in Gatineau. Return analysis, investment strategy and support by a specialized broker." />
    <ServiceJsonLd name="Plex Investment Analysis in Gatineau" description="Analysis and support service for buying, selling or evaluating plex and income properties in Gatineau and Outaouais." url="/en/plex/" serviceType="Real Estate Investment Analysis" />
    <HeroSection overline="Plex and investment · Gatineau" title="Plex in Gatineau: buy, sell or analyze" subtitle="You need to look beyond the listed price. Revenues, expenses, building condition, potential — every factor counts in the decision." primaryCta={{ label: "Free Plex Analysis", href: "/en/plex-analysis/" }} secondaryCta={{ label: "Value of my plex", href: "/en/home-valuation/" }} trustLine="Clear strategy. Full transparency. Informed decisions." heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="2026 Context" title="Investing in an Outaouais plex in 2026 — what you need to know" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        The Outaouais plex market remains active in 2026. Rental demand for affordable housing stays strong, driven by a stable employment base — federal workers, students, professionals.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        That said, the rental market has rebalanced in 2025-2026 with a significant number of new builds coming online. This change makes return analysis even more critical before any purchase: actual rents in place, actual maintenance costs, anticipated capital expenditures, and long-term strategy must all be examined honestly.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I am a real estate investor myself. My role is not to convince you to buy — it is to give you the honest analysis so you can decide with full information.
      </p>
      <p className="prose-body mt-4 p-4 rounded-md" style={{ background: "rgba(168,138,90,.08)", border: "1px solid rgba(168,138,90,.15)" }}>
        <strong>Note:</strong> The Tribunal administratif du logement (TAL) rent increase recommendation for 2026 is 3.1%. This is an official recommendation. <span className="italic text-xs text-muted-foreground">Source: gouvernement.qc.ca</span>
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Sources: CMHC — Rental Market Report 2025 · Gatineau Real Estate Board (CIO).</p>
      <div className="mt-6">
        <Button asChild><Link to="/en/contact/">Analyze a plex with me →</Link></Button>
      </div>
    </ContentBlock>

<LinkedCardGrid overline="For you" title="I help two types of clients" items={clientTypes} />
    <InlineCTA text="Own a plex? Start by knowing its current value." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <CardGrid overline="Analysis" title="The real questions behind a plex" items={questions} variant="icon-inline" background="alt" />
    <ProcessSteps steps={steps} />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the option that fits your investor situation." steps={nextSteps} background="alt" />
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Investing in Gatineau? Get the complete guide." text="Returns, plex analysis, acquisition strategy and pitfalls to avoid — the essential guide for investing in Gatineau." ctaLabel="Get the Investor Guide" />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
    <ReviewSection overline="Investor testimonials" title="Informed decisions, real results" reviews={getReviewsByCategory("plex").slice(0, 2)} columns={2} />
    <CTASection dark title="Get a clear reading of your situation" text="Sell, buy or simply understand your position — I help you see more clearly." buttons={[{ label: "Free Plex Analysis", href: "/en/plex-analysis/" }, { label: "Free Valuation", href: "/en/home-valuation/", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
  </>
);

export default PlexPageEn;
