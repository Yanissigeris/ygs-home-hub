import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Clock, Award, Shield, MapPin, Home, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.webp";

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "All-neighborhood specialist" },
  { icon: Shield, label: "Local, honest advice" },
];
const sectors = [
  { name: "Aylmer", href: "/en/aylmer", detail: "Lake Deschênes, established neighborhoods, quality of life" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, close to downtown Ottawa" },
  { name: "Plateau", href: "/en/plateau", detail: "Family-friendly, newer homes, parks" },
  { name: "Gatineau Centre", href: "/en/gatineau", detail: "Residential, services, accessible suburb" },
  { name: "Chelsea", href: "/en/chelsea", detail: "Picturesque village, Gatineau Park, nature" },
  { name: "Cantley", href: "/en/cantley", detail: "Hills, large lots, rural living" },
  { name: "Val-des-Monts", href: "/en/val-des-monts", detail: "Lakes, cottages, wilderness" },
  { name: "Buckingham", href: "/en/buckingham", detail: "River, affordable prices, nature" },
  { name: "Masson-Angers", href: "/en/masson-angers", detail: "New construction, families, growing area" },
  { name: "Pontiac", href: "/en/pontiac", detail: "Wide open spaces, river, rural living" },
  { name: "Côte-d'Azur", href: "/en/cote-dazur", detail: "Established residential, bungalows, affordable" },
  { name: "Limbour", href: "/en/limbour", detail: "Family-friendly, parks, modern suburb" },
];
const lifestyleGuides = [
  { icon: MapPin, title: "Living in Aylmer", text: "Lake, nature, community and Ottawa access.", cta: "Read the guide", href: "/en/plateau-aylmer" },
  { icon: Home, title: "Living in Hull", text: "Culture, restaurants and Ottawa proximity.", cta: "Read the guide", href: "/en/hull" },
  { icon: Coffee, title: "Living in the Plateau", text: "Families, recent developments and nature.", cta: "Read the guide", href: "/en/plateau-aylmer" },
];
const faq = [
  { q: "What's the best neighborhood in Gatineau?", a: "It depends on your profile — families, investors, first-time buyers. Each area has its strengths. Contact me for a personalized recommendation." },
  { q: "Do prices vary a lot between neighborhoods?", a: "Yes, significantly. Buckingham is more affordable, Aylmer more expensive, and Hull offers a good compromise. Let's talk about it." },
];

const NeighborhoodsPageEn = () => (
  <>
    <PageMeta title="Gatineau Neighborhoods — Complete Guide | YGS" description="Compare Gatineau neighborhoods: Aylmer, Hull, Plateau, Buckingham and more. Prices, vibe and profile of each area." ogImage="https://yanisgauthier.com/og-neighborhoods.jpg" />
    <HeroSection overline="Neighborhoods · Gatineau and Outaouais" title="Neighbourhoods to consider in Outaouais" subtitle="Each Outaouais neighbourhood has its own personality — family-friendly, urban, nature or investment. Explore to find the one that fits you." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} trustLine="Local expertise. Full transparency." heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <SectorLinks overline="Explore neighborhoods" title="Some Outaouais neighbourhoods" sectors={sectors} />
    <ContentBlock narrow><SectionHeading title="Every neighborhood has its character" /><p className="prose-body mt-5">The right area depends on your budget, commute, lifestyle and family priorities. After nearly 9 years in Outaouais, I know the advantages and trade-offs of each neighborhood — and I can help you choose the right one.</p></ContentBlock>
    <LinkedCardGrid overline="Lifestyle" title="Neighborhood lifestyle guides" items={lifestyleGuides} columns={3} background="alt" />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — find the right neighborhood" text="Everything you need to know to buy in Gatineau — process, budget and neighborhoods." ctaLabel="Get the Buyer Guide" />
    <FAQSection title="Questions about neighborhoods" items={faq} />
    <CTASection dark title="Need help choosing?" text="Let's talk about your criteria — I'll recommend the neighborhoods best suited to your situation." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "Get my valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default NeighborhoodsPageEn;
