import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
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
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import CalculatorsSection from "@/components/CalculatorsSection";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buyer.webp";

const profiles = [
  { icon: CheckCircle2, title: "First-time buyer in Outaouais", text: "Understand the Québec process step by step without feeling overwhelmed — promise to purchase, inspection, notary." },
  { icon: CheckCircle2, title: "Family looking for more space", text: "Find a family-friendly Gatineau neighborhood with more rooms, a yard, good schools and the right services nearby." },
  { icon: CheckCircle2, title: "Relocating from Ottawa or Montréal", text: "A local guide who truly knows Aylmer, Hull, the Plateau and Buckingham — prices, taxes and Québec specifics." },
  { icon: CheckCircle2, title: "Unsure about neighborhoods", text: "Compare Gatineau areas objectively — price, resale potential, Ottawa access, lifestyle — to find the perfect neighborhood for you." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];
const steps = [
  { num: "01", title: "Clarify your project", desc: "Budget, target Gatineau neighborhoods, property type, family needs and Ottawa commute — we lay the groundwork together." },
  { num: "02", title: "Targeted search", desc: "I send you properties that truly match in the neighborhoods that suit you. No noise, no wasted time." },
  { num: "03", title: "Offer & negotiation", desc: "Offer strategy adapted to the local market, inspection, conditions — through to signing at the notary." },
];
const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Local neighborhood specialist" },
  { icon: Shield, label: "Guidance at your pace" },
];
const nextSteps = [
  { title: "Free consultation", text: "Let's discuss your criteria, budget and questions — to buy with confidence.", href: "/en/buyer-consultation", cta: "Book my consultation", highlight: true },
  { title: "Explore neighborhoods", text: "Compare Gatineau neighborhoods — prices, lifestyle, pros and cons.", href: "/en/neighborhoods", cta: "See neighborhoods" },
  { title: "Buyer guide", text: "The buying process in Québec explained simply — from search to notary.", href: "/en/buyer-guide", cta: "Read the guide" },
];
const faq = [
  { q: "Is now a good time to buy in Gatineau?", a: "Every situation is different. The Outaouais market has its own dynamics. We evaluate your budget, priorities and current conditions together." },
  { q: "I'm from Ottawa — how does it work in Québec?", a: "Promise to purchase, inspection, notary — the Québec process has its specifics. After nearly 9 years in Outaouais, I've guided many Ontario buyers through this transition." },
  { q: "Do I need a pre-approval?", a: "Highly recommended. It clarifies your budget and strengthens your position when making an offer, especially in popular areas like Aylmer and the Plateau." },
  { q: "How do I choose the right Gatineau neighborhood?", a: "Lifestyle, budget, family, Ottawa commute, schools — we look at everything together to find the best balance between Aylmer, Hull, the Plateau and Buckingham." },
];

const BuyerPageEn = () => (
  <>
    <PageMeta title="Buy a Property in Gatineau | YGS" description="Find and buy your property in Gatineau with an experienced broker. Personalized consultation, priority access and guidance at your pace." ogImage="https://yanisgauthier.com/og-buyer.jpg" />
    <ServiceJsonLd name="Buyer Agent Service in Gatineau" description="Buyer representation service in Gatineau and Outaouais — neighborhood analysis, property search, offer strategy and full support." url="/en/buy" serviceType="Real Estate Buyer Agent Service" />
    <HeroSection overline="For buyers · Gatineau" title="Buy in Gatineau with clarity and confidence" subtitle="First-time buyer, growing family or relocating from Ottawa — I guide you at every step to buy with confidence and clarity." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }} trustLine="Clear strategy. Full transparency. Informed decisions." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <ContentBlock narrow><SectionHeading overline="Buying real estate" title="Choosing a property also means choosing a neighborhood and a strategy" subtitle="Beyond the house, you need to understand the neighborhoods, the real value, taxes, resale potential and the right offer strategy." /></ContentBlock>
    <CardGrid overline="For you" title="I can help if you are…" items={profiles} background="alt" variant="icon-inline" />
    <ProcessSteps steps={steps} />
    <InlineCTA text="Also selling? Knowing the value of your property can clarify your buying budget." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <SectorLinks overline="Neighborhoods" title="Areas to compare" sectors={sectors} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="First time buying? Get the complete guide." text="The buying process in Québec explained simply — from search to notary, step by step." ctaLabel="Get the Buyer Guide" />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
    <CalculatorsSection />
    <ReviewSection overline="Buyer testimonials" title="They bought with confidence" reviews={getReviewsByCategory("buyer").slice(0, 2)} columns={2} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the step that best fits your situation." steps={nextSteps} />
    <CTASection dark title="Let's talk about your buying project" text="Budget, neighborhoods, strategy — we clarify everything before starting visits." buttons={[{ label: "Book my consultation", href: "/en/buyer-consultation" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
  </>
);

export default BuyerPageEn;
