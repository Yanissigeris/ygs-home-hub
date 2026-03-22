import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { MapPin, DollarSign, FileText, Home, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-relocation.webp";

const challenges = [
  { icon: MapPin, title: "Choosing the right neighborhood", text: "Aylmer, Hull, Plateau, Buckingham — each has its own personality. I help you find the right fit." },
  { icon: DollarSign, title: "Understanding prices", text: "The Gatineau market is different from Ottawa or Montréal. I give you a realistic reading of prices by area." },
  { icon: FileText, title: "Navigating the Québec process", text: "Promise to purchase, inspection, notary — the process in Québec has its specifics. I guide you step by step." },
  { icon: Home, title: "Finding the right property", text: "Not just a house — a neighborhood, a school, a commute, a lifestyle. We look at the full picture." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];
const steps = [
  { num: "01", title: "Initial consultation", desc: "We discuss your situation, budget, priorities and questions about Gatineau." },
  { num: "02", title: "Neighborhood tour", desc: "I introduce you to the neighborhoods that match your profile — with real pros and cons." },
  { num: "03", title: "Full support", desc: "Targeted search, visits, offer, inspection, notary — I support you through to the keys." },
];
const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Ottawa → Gatineau relocation specialist" },
  { icon: Shield, label: "Bilingual support" },
];
const nextSteps = [
  { title: "Book a call", text: "Let's discuss your relocation, priorities and questions — 100% free.", href: "/en/contact", cta: "Book a call", highlight: true },
  { title: "Relocation guide", text: "Everything you need to know to settle in Gatineau — neighborhoods, prices, process, schools.", href: "/en/relocation-guide", cta: "Read the guide" },
  { title: "Explore neighborhoods", text: "Compare Gatineau neighborhoods based on your lifestyle and budget.", href: "/en/neighborhoods", cta: "See neighborhoods" },
];
const faq = [
  { q: "Is it really cheaper in Gatineau than Ottawa?", a: "Generally yes — especially for single-family homes and lots. But you also need to consider taxes, services and lifestyle. We look at everything together." },
  { q: "How does buying work in Québec?", a: "The process is different from Ontario — promise to purchase, inspection, conditions, notary. After nearly 9 years in Outaouais, I've guided many buyers through this transition." },
  { q: "Which neighborhood is best for families?", a: "It depends on your priorities — Aylmer and the Plateau are very popular for families, but Hull and Buckingham also have their advantages. Let's talk about it." },
  { q: "Can I work in Ottawa and live in Gatineau?", a: "Absolutely. Most of my relocated clients do exactly that. Bridges, public transit and bike paths make it very doable." },
];

const RelocationPageEn = () => (
  <>
    <PageMeta title="Relocation Ottawa to Gatineau | YGS" description="Moving from Ottawa to Gatineau? Complete guide: neighborhoods, taxes, schools and personalized real estate support." />
    <HeroSection overline="Ottawa → Gatineau" title="Relocating to Gatineau from Ottawa or beyond" subtitle="Thinking about crossing the river? I help you understand the neighborhoods, prices, process and find the right property — with confidence." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Relocation Guide", href: "/en/relocation-guide" }} trustLine="Clear strategy. Full transparency. Informed decisions." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <ContentBlock narrow><SectionHeading overline="Relocation" title="Buying in Gatineau when you don't know the area" subtitle="More space, more affordable prices, a different quality of life — but you still need to know where to look and how to navigate the process." /><p className="prose-body mt-5">Every year, dozens of families and professionals cross the river. What makes the difference is having a local guide who knows both sides — and who can help you avoid the classic mistakes.</p></ContentBlock>
    <CardGrid overline="The challenges" title="What often holds back relocated buyers" items={challenges} background="alt" />
    <ProcessSteps steps={steps} />
    <InlineCTA text="Also selling? Knowing the value of your current property can clarify your buying budget." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <SectorLinks id="sectors" overline="Popular neighborhoods" title="Most popular neighborhoods for relocators" sectors={sectors} background="alt" />
    <ReviewSection overline="Relocation testimonials" title="They settled in Gatineau with confidence" reviews={getReviewsByCategory("relocation").slice(0, 2)} columns={2} />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the option that fits your situation." steps={nextSteps} background="alt" />
    <GuideInlineCTAEn guideType="relocation_guide" headline="Free Relocation Guide" text="Everything you need to know to settle in Gatineau — neighborhoods, prices, process and schools." ctaLabel="Get the guide" />
    <CTASection dark title="Let's talk about your relocation" text="Budget, neighborhoods, Québec process — we clarify everything during a first call, no commitment." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Relocation Guide", href: "/en/relocation-guide", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <FAQSection items={faq} />
    <StickyGuideBannerEn guideType="relocation_guide" label="Free Relocation Guide — get it by email" />
  </>
);

export default RelocationPageEn;
