import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { MapPin, DollarSign, FileText, Home, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-relocalisation.webp";

const challenges = [
  { icon: MapPin, title: "Choosing the right neighbourhood", text: "Aylmer, Hull, the Plateau or Buckingham: each area has its own personality. I help you find the one that suits you." },
  { icon: DollarSign, title: "Understanding prices", text: "The Gatineau market works differently from Ottawa or Montreal. I give you a realistic reading of prices by area." },
  { icon: FileText, title: "The Quebec buying process", text: "Promise to purchase, inspection, notary: the process in Quebec has its own steps. I guide you step by step." },
  { icon: Home, title: "Finding the right property", text: "A home also means a neighbourhood, a school, a commute and a lifestyle. We look at the full picture." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Family neighbourhoods and newer homes, about 9 to 14 km from downtown Ottawa" },
  { name: "Hull", href: "/en/hull/", detail: "Urban setting with condos and plexes, about 2 km from downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "Lowest single-family median of the city's 4 sectors (APCIQ, Q2 2026) and access to nature" },
];
const steps = [
  { num: "01", title: "Initial consultation", desc: "We discuss your situation, budget, priorities and questions about Gatineau." },
  { num: "02", title: "Neighbourhood tour", desc: "I introduce you to the neighbourhoods that match your profile, with their pros and cons." },
  { num: "03", title: "Full support", desc: "Targeted search, visits, offer, inspection and notary: I support you until you get the keys." },
];
const nextSteps = [
  { title: "Book a call", text: "We discuss your relocation and your questions. The call is free.", href: "/en/contact/", cta: "Book a call", highlight: true },
  { title: "Relocation guide", text: "What you need to know to settle in Gatineau: neighbourhoods, prices, process and schools.", href: "/en/relocation-guide/", cta: "Read the guide" },
  { title: "Compare neighbourhoods", text: "Gatineau neighbourhoods by lifestyle and budget.", href: "/en/neighborhoods/", cta: "See neighbourhoods" },
];
const faq = [
  { q: "Is it cheaper to buy in Gatineau than in Ottawa?", a: "Generally yes, especially for single-family homes and lots. In Q2 2026, the median single-family price in the Gatineau CMA was $523,500 (APCIQ). You also need to factor in taxes and the cost of living. We compare it all together." },
  { q: "How does buying work in Quebec?", a: "The process differs from Ontario. You sign a promise to purchase, usually conditional on inspection and financing. Once the conditions are met, the sale closes at the notary's office. Active in the Outaouais since 2017, I guide you through each step." },
  { q: "Which neighbourhood is best for families?", a: "It depends on your budget and your commute. In Q2 2026, the median single-family price was $572,750 in Aylmer and $419,545 in Buckingham/Masson-Angers (APCIQ). Hull and the Gatineau sector fall in between. We compare the options based on your priorities." },
  { q: "Can I work in Ottawa and live in Gatineau?", a: "Yes. Downtown Ottawa is about 2 km from Gatineau city hall, in Hull (Portage Bridge) and about 14 km from Old Aylmer (Champlain Bridge). Several bridges and public transit connect both sides of the river." },
];

const RelocationPageEn = () => (
  <>
    <PageMeta title="Relocation Ottawa to Gatineau" description="Moving from Ottawa to Gatineau? A guide to neighbourhoods, taxes, schools and personalized real estate support." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Real Estate Relocation Service, Ottawa to Gatineau" description="Full relocation support from Ottawa to Gatineau: neighbourhood search, visits, offer and settling in the Outaouais." url="/en/relocation/" serviceType="Real Estate Relocation Service" />
    <HeroSection overline="Ottawa → Gatineau" title="Relocating to Gatineau from Ottawa or beyond" subtitle="Thinking about crossing the river? I help you understand the neighbourhoods and prices, then find the right property." primaryCta={{ label: "Book a call", href: "/en/contact/" }} secondaryCta={{ label: "Relocation Guide", href: "/en/relocation-guide/" }} trustLine="Clear strategy." heroBgImage={heroImg} />
<ContentBlock narrow><SectionHeading overline="Relocation" title="Buying in Gatineau when you don't know the area" subtitle="More space and often more affordable prices. You still need to know where to look and how the process works." /><p className="prose-body mt-5">Every year, families and professionals cross the river to settle in Gatineau. A local broker who knows both sides helps you avoid the classic mistakes.</p></ContentBlock>
    <CardGrid overline="The challenges" title="What often holds back relocated buyers" items={challenges} background="alt" />
    <ProcessSteps steps={steps} />
    <InlineCTA text="Also selling? Knowing the value of your current property can clarify your buying budget." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <SectorLinks id="sectors" overline="A few areas" title="Neighbourhoods to consider" sectors={sectors} background="alt" />
    <ReviewSection overline="Relocation testimonials" title="They settled in Gatineau" reviews={getReviewsByCategory("relocation").slice(0, 2)} columns={2} />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the option that fits your situation." steps={nextSteps} background="alt" />
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Relocation Guide" text="What you need to know to settle in Gatineau: neighbourhoods, prices, process and schools." ctaLabel="Get the guide" />
    <CTASection dark title="Let's talk about your relocation" text="We clarify your budget and the areas to target during a first call, no commitment." buttons={[{ label: "Book a call", href: "/en/contact/" }, { label: "Relocation Guide", href: "/en/relocation-guide/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide, get it by email" />
  </>
);

export default RelocationPageEn;
