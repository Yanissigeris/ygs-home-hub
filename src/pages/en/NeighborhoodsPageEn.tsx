import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import FAQSection from "@/components/FAQSection";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Clock, Award, Shield, MapPin, Home, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.webp";

const sectors = [
  { name: "Aylmer", href: "/en/aylmer/", detail: "Established neighbourhoods, quality of life" },
  { name: "Hull", href: "/en/hull/", detail: "Urban, culture, close to downtown Ottawa" },
  { name: "Plateau", href: "/en/plateau/", detail: "Family-friendly, newer homes, parks" },
  { name: "Gatineau Centre", href: "/en/gatineau/", detail: "Residential, services, accessible suburb" },
  { name: "Chelsea", href: "/en/chelsea/", detail: "Village, Gatineau Park, nature" },
  { name: "Cantley", href: "/en/cantley/", detail: "Hills, large lots, rural living" },
  { name: "Val-des-Monts", href: "/en/val-des-monts/", detail: "Lakes, cottages, wilderness" },
  { name: "Buckingham", href: "/en/buckingham/", detail: "River, affordable prices, nature" },
  { name: "Masson-Angers", href: "/en/masson-angers/", detail: "New construction, families, growing area" },
  { name: "Pontiac", href: "/en/pontiac/", detail: "Wide open spaces, river, rural living" },
  { name: "Côte-d'Azur", href: "/en/cote-dazur/", detail: "Established residential, bungalows, affordable" },
  { name: "Limbour", href: "/en/limbour/", detail: "Family-friendly, parks, modern suburb" },
];
const lifestyleGuides = [
  { icon: MapPin, title: "Living in Aylmer", text: "Lake, nature, community and Ottawa access.", cta: "Read the guide", href: "/en/plateau-aylmer/" },
  { icon: Home, title: "Living in Hull", text: "Culture, restaurants and Ottawa proximity.", cta: "Read the guide", href: "/en/hull/" },
  { icon: Coffee, title: "Living in the Plateau", text: "Families, recent developments and nature.", cta: "Read the guide", href: "/en/plateau-aylmer/" },
];
const faq = [
  { q: "What's the best neighbourhood in Gatineau?", a: "It depends on your profile: families with school-age children, plex investors, first-time buyers, downsizing retirees. Aylmer and the Plateau lean family. Hull suits urban professionals, while Chelsea and Cantley appeal to nature lovers. Buckingham and Masson-Angers have the lowest single-family median of the city's sectors (QPAREB, Q3 2026). Contact me for a personalized recommendation." },
  { q: "Do prices vary a lot between neighbourhoods?", a: "Yes. In Q3 2026, the median single-family price was $395,000 in the Buckingham/Masson-Angers sector, $464,900 in the Gatineau sector, $475,000 in Hull and $530,000 in Aylmer (QPAREB, Centris data). For the periphery (Cantley, Chelsea, Pontiac, Val-des-Monts and other municipalities), the figure was $530,000. The Plateau has no separate figure: it is split between the Hull and Aylmer sectors. Cantley, Chelsea and Val-des-Monts trade urban access for space and nature." },
  { q: "Which neighbourhoods suit families?", a: "Families often choose Aylmer, the Plateau, Limbour and Masson-Angers for the schools, parks, sports facilities and quieter streets. School-board eligibility (English vs French) can also influence the decision." },
  { q: "Which areas are best for buyers from Ottawa?", a: "Hull, Aylmer, the Plateau and Côte-d'Azur are common choices for Ottawa buyers, for bridge access and bilingual services. Each has very different price points and vibes." },
  { q: "Where should I look for a plex or investment property?", a: "Hull, Gatineau Centre and parts of Aylmer hold most of the plexes. Rental demand has dropped since COVID, so each building is judged on its leases in place, and I run the numbers before you offer." },
  { q: "How quickly do good listings sell?", a: "It varies by sector and segment. Move-in-ready homes in Aylmer, the Plateau or Chelsea often sell quickly when correctly priced. Older properties or higher price points can take longer. With buyer alerts, you see new listings as soon as they come out." },
];

const NeighborhoodsPageEn = () => (
  <>
    <PageMeta title="Gatineau Neighbourhoods | Area Comparison" description="Compare Gatineau neighbourhoods: Aylmer, Hull, Plateau, Buckingham and more. Prices, vibe and profile of each area." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <HeroSection overline="Neighbourhoods · Gatineau and Outaouais" title="Neighbourhoods to consider in Outaouais" subtitle="Each Outaouais neighbourhood has its own personality: family-friendly, urban, nature or investment. Browse them to find the one that fits you." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation/" }} trustLine="Local expertise. Full transparency." heroBgImage={heroImg} />
<SectorLinks overline="Explore neighbourhoods" title="Some Outaouais neighbourhoods" sectors={sectors} />
    <ContentBlock narrow>
      <SectionHeading overline="Choosing a sector" title="Every neighbourhood has its character" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        The right area depends on your budget, commute, lifestyle and family priorities. Outaouais has about a dozen micro-markets, each with its own price ceiling, school catchment, transit options and resale pace. A house that looks like the same money in Buckingham versus Aylmer rarely behaves the same way five years later.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I've been a broker in the Outaouais since 2017, and I've represented buyers and sellers in nearly every area listed below. Before you choose, I show you the recent sales in each area you're considering and what they mean for your budget.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Use the cards above to explore individual neighbourhoods, then book a consultation so we can match the right two or three to your real-life criteria rather than the best-known ones.
      </p>
    </ContentBlock>
    <LinkedCardGrid overline="Lifestyle" title="Neighbourhood lifestyle guides" items={lifestyleGuides} columns={3} background="alt" />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide: find the right neighbourhood" text="Everything you need to know to buy in Gatineau, process, budget and neighbourhoods." ctaLabel="Get the Buyer Guide" />
    <FAQSection title="Questions about neighbourhoods" items={faq} />
    <CTASection dark title="Need help choosing?" text="Let's talk about your criteria, I'll suggest the neighbourhoods that fit your situation." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "Free Home Valuation", href: "/en/home-valuation/", variant: "outline" }]} trustLine="I give you the options, you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);
export default NeighborhoodsPageEn;
