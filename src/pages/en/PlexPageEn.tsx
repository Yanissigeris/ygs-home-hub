import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Building2, TrendingUp, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-plex.webp";

const clientTypes = [
  { icon: Building2, title: "Plex owners", text: "Sell, refinance or hold? We analyze your situation with real numbers — not assumptions.", cta: "Get an analysis", href: "/en/plex-analysis" },
  { icon: TrendingUp, title: "Investor buyers", text: "Real value, rental potential, risks and buying strategy — the numbers before the decision.", cta: "Request an analysis", href: "/en/plex-analysis" },
];
const questions = [
  { icon: CheckCircle2, title: "Should I keep or sell?", text: "Current returns, market conditions and long-term strategy." },
  { icon: CheckCircle2, title: "Does the asking price make sense?", text: "Real revenues, real expenses, rental potential — not just the listed price." },
  { icon: CheckCircle2, title: "What's the true return?", text: "Expenses, vacancy, upcoming repairs, growth potential." },
  { icon: CheckCircle2, title: "What risks to watch for?", text: "Roof, plumbing, electrical, foundation — some costs change the equation." },
  { icon: CheckCircle2, title: "How to maximize sale price?", text: "Price positioning and marketing make a difference on a plex." },
];
const steps = [
  { num: "01", title: "Number analysis", desc: "Revenues, expenses, market value and rental potential — we start with the facts." },
  { num: "02", title: "Strategic recommendation", desc: "Hold, sell, refinance or buy — the best option for your situation." },
  { num: "03", title: "Execution and support", desc: "From decision to transaction, complete and transparent support." },
];
const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Plex and multi-unit specialist" },
  { icon: Shield, label: "Analysis based on real numbers" },
];
const nextSteps = [
  { title: "Free plex analysis", text: "Value, revenues, expenses, potential — an objective reading of your situation.", href: "/en/plex-analysis", cta: "Get my analysis", highlight: true },
  { title: "Property valuation", text: "Know the current market value of your plex — free and confidential.", href: "/en/home-valuation", cta: "Get my valuation" },
  { title: "Talk to Yanis", text: "A call to discuss your investor situation — no commitment.", href: "/en/contact", cta: "Book a call" },
];
const faq = [
  { q: "How do you evaluate a plex's value?", a: "Revenues, building condition, rental potential and neighborhood. After nearly 9 years in Outaouais, I know the specifics of local plexes well." },
  { q: "Is it still profitable to buy a plex?", a: "It depends on the price, revenues and your strategy. We can analyze it together." },
  { q: "How do you sell an occupied plex?", a: "It's feasible — tenant coordination, visits, documentation. I support you at every step." },
  { q: "Refinance or sell?", a: "We compare both scenarios together to see what makes more sense in your situation." },
];

const PlexPageEn = () => (
  <>
    <PageMeta title="Invest in a Plex in Gatineau | YGS" description="Duplex, triplex and income properties in Gatineau. Return analysis, investment strategy and support by a specialized broker." />
    <HeroSection overline="Plex and investment · Gatineau" title="Plex in Gatineau: buy, sell or analyze" subtitle="You need to look beyond the listed price. Revenues, expenses, building condition, potential — every factor counts in the decision." primaryCta={{ label: "Free Plex Analysis", href: "/en/plex-analysis" }} secondaryCta={{ label: "Value of my plex", href: "/en/home-valuation" }} trustLine="Clear strategy. Zero pressure. No bad surprises." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <LinkedCardGrid overline="For you" title="I help two types of clients" items={clientTypes} />
    <InlineCTA text="Own a plex? Start by knowing its current value." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <CardGrid overline="Analysis" title="The real questions behind a plex" items={questions} variant="icon-inline" background="alt" />
    <ProcessSteps steps={steps} />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the option that fits your investor situation." steps={nextSteps} background="alt" />
    <GuideInlineCTAEn guideType="investor_guide" headline="Investing in Gatineau? Get the complete guide." text="Returns, plex analysis, acquisition strategy and pitfalls to avoid — the essential guide for investing in Gatineau." ctaLabel="Get the Investor Guide" />
    <StickyGuideBannerEn guideType="investor_guide" label="Free Investor Guide — get it by email" />
    <ReviewSection overline="Investor testimonials" title="Informed decisions, real results" reviews={getReviewsByCategory("plex").slice(0, 2)} columns={2} />
    <CTASection dark title="Get a clear reading of your situation" text="Sell, buy or simply understand your position — I help you see more clearly." buttons={[{ label: "Free Plex Analysis", href: "/en/plex-analysis" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers and the options, you decide." />
    <FAQSection items={faq} />
  </>
);

export default PlexPageEn;
