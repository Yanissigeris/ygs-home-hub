import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Home, Users, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/plateau-aylmer-lifestyle.webp";

const highlights = [
  { icon: MapPin, title: "Lake Deschênes", text: "Beach, water sports and stunning sunsets — steps from home." },
  { icon: Home, title: "Charming neighborhoods", text: "Tree-lined streets, character homes and a tight-knit community." },
  { icon: Coffee, title: "Village life", text: "Restaurants, cafés, boutiques and a local market — all within walking distance." },
  { icon: Users, title: "Bilingual community", text: "French and English schools, community activities and local services." },
];

const faq = [
  { q: "Is Aylmer bilingual?", a: "Yes — French and English schools, bilingual services and a mixed community." },
  { q: "What are the popular activities in Aylmer?", a: "Lake Deschênes beach, Gatineau Park, farmers market, local restaurants and an active community life." },
  { q: "Is Aylmer well-served by transit?", a: "Access via the Champlain Bridge, public transit and cycling paths to Ottawa." },
];

const related = [
  { title: "Buy in Aylmer", text: "Neighborhood guide: prices, buyer profiles and why Aylmer.", href: "/en/aylmer" },
  { title: "All neighborhoods", text: "Compare Gatineau neighborhoods.", href: "/en/neighborhoods" },
  { title: "Relocation Guide", text: "Moving to Gatineau from Ottawa or Montréal.", href: "/en/relocation-guide" },
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation" },
];

const LivingAylmerPageEn = () => (
  <>
    <PageMeta title="Living in Aylmer — Lifestyle Guide" description="Everything about life in Aylmer: lake, restaurants, schools, community and quality of life. Your guide to settling in Aylmer." ogImage="https://yanisgauthier.com/og/og-aylmer.jpg" />
    <HeroSection overline="Living in Aylmer · Gatineau" title="Living in Aylmer — the guide" subtitle="Discover the Aylmer lifestyle: lake, nature, community and Ottawa access. Everything you need to know before settling in." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "See the neighborhood", href: "/en/aylmer" }} heroBgImage={heroImg} />
    <CardGrid overline="Lifestyle" title="What makes Aylmer unique" items={highlights} />
    <ContentBlock narrow>
      <SectionHeading title="An exceptional living environment" />
      <p className="prose-body mt-5">Aylmer combines small-town charm with the advantages of a major metropolitan area. Access to the lake, Gatineau Park, bilingual schools and Ottawa in minutes. It's hard to beat in terms of quality of life.</p>
    </ContentBlock>
    <InlineCTA text="Thinking about settling in Aylmer? Book a free consultation." buttonLabel="Book a consultation →" href="/en/buyer-consultation" />
    <FAQSection title="Questions about living in Aylmer" items={faq} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — settling in Aylmer" text="Everything to buy in Aylmer — process, budget and tips sent to your email." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Ready to discover Aylmer?" text="Let's talk about your criteria — I'll show you the best options in the area." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "See the neighborhood", href: "/en/aylmer", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default LivingAylmerPageEn;
