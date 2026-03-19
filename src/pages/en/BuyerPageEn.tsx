import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buyer.webp";

const profiles = [
  { icon: CheckCircle2, title: "First-time buyer", text: "Understand the process step by step without feeling overwhelmed." },
  { icon: CheckCircle2, title: "Family looking for more space", text: "Find a family-friendly neighborhood with more rooms, a yard and the right services nearby." },
  { icon: CheckCircle2, title: "Relocating from Ottawa or Montréal", text: "A local guide who truly knows the terrain — neighborhoods, prices, taxes and Québec specifics." },
  { icon: CheckCircle2, title: "Unsure about neighborhoods", text: "Compare areas objectively — price, potential, lifestyle — to find the right fit." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];
const steps = [
  { num: "01", title: "Clarify your project", desc: "Budget, target neighborhoods, property type, family needs — we lay the groundwork together." },
  { num: "02", title: "Targeted search", desc: "I send you properties that truly match. No noise, no wasted time." },
  { num: "03", title: "Offer & negotiation", desc: "Offer strategy, inspection, conditions — through to signing at the notary." },
];
const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Local neighborhood specialist" },
  { icon: Shield, label: "Pressure-free guidance" },
];
const nextSteps = [
  { title: "Free consultation", text: "Let's discuss your criteria, budget and questions — to buy with confidence.", href: "/en/buyer-consultation", cta: "Book my consultation", highlight: true },
  { title: "Explore neighborhoods", text: "Compare Gatineau neighborhoods — prices, lifestyle, pros and cons.", href: "/en/neighborhoods", cta: "See neighborhoods" },
  { title: "Buyer guide", text: "The buying process in Québec explained simply — from search to notary.", href: "/en/buyer-guide", cta: "Read the guide" },
];
const faq = [
  { q: "Is now a good time to buy in Gatineau?", a: "Every situation is different. We evaluate your budget, priorities and market conditions together." },
  { q: "I'm from Ottawa — how does it work in Québec?", a: "Promise to purchase, inspection, notary — the process has its specifics. After nearly 9 years in Outaouais, I've guided many buyers through this transition." },
  { q: "Do I need a pre-approval?", a: "Highly recommended. It clarifies your budget and strengthens your position when making an offer." },
  { q: "How do I choose the right neighborhood?", a: "Lifestyle, budget, family, daily commute — we look at everything together to find the best balance." },
];

const BuyerPageEn = () => (
  <>
    <PageMeta title="Buy a Property in Gatineau | YGS" description="Find and buy your property in Gatineau with an experienced broker. Personalized consultation, priority access and pressure-free guidance." />
    <HeroSection overline="For buyers · Gatineau" title="Buy in Gatineau with clarity and confidence" subtitle="First-time buyer, growing family or relocating from Ottawa — I guide you at every step to buy stress-free and mistake-free." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }} trustLine="Clear strategy. Zero pressure. No bad surprises." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <ContentBlock narrow><SectionHeading overline="Buying real estate" title="Choosing a property also means choosing a neighborhood and a strategy" subtitle="Beyond the house, you need to understand the neighborhoods, the real value, taxes, resale potential and the right offer strategy." /></ContentBlock>
    <CardGrid overline="For you" title="I can help if you are…" items={profiles} background="alt" variant="icon-inline" />
    <ProcessSteps steps={steps} />
    <InlineCTA text="Also selling? Knowing the value of your property can clarify your buying budget." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <SectorLinks sectors={sectors} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="First time buying? Get the complete guide." text="The buying process in Québec explained simply — from search to notary, step by step." ctaLabel="Get the Buyer Guide" />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
    <ReviewSection overline="Buyer testimonials" title="They bought with confidence" reviews={getReviewsByCategory("buyer").slice(0, 2)} columns={2} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the step that best fits your situation." steps={nextSteps} />
    <CTASection dark title="Let's talk about your buying project" text="Budget, neighborhoods, strategy — we clarify everything before starting visits." buttons={[{ label: "Book my consultation", href: "/en/buyer-consultation" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers and the options, you decide." />
    <FAQSection items={faq} />
  </>
);

export default BuyerPageEn;
