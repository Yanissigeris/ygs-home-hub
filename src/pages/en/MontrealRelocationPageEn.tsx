import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-montreal-relocation.webp";

const challenges = [
  { icon: MapPin, title: "Prices in both markets", text: "Prices and the welcome tax vary from one city to another. I give you Gatineau's numbers by sector so you can compare with your current market." },
  { icon: DollarSign, title: "Space for your budget", text: "Depending on the sector, the same budget may buy more space or land in Gatineau. I show you the comparables so you can check." },
  { icon: Home, title: "Family-friendly neighbourhoods", text: "Aylmer, the Plateau and other areas are mostly residential, with schools and parks nearby." },
  { icon: FileText, title: "The same process", text: "You stay in Quebec, so the promise to purchase and the signing at the notary follow the same rules as in Montreal." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Family neighbourhoods and newer homes, about 9 to 14 km from downtown Ottawa" },
  { name: "Hull", href: "/en/hull/", detail: "Urban setting with condos and plexes, about 2 km from downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "Lowest single-family median of the city's 4 sectors (APCIQ, Q2 2026) and access to nature" },
];


const MontrealRelocationPageEn = () => (
  <>
    <PageMeta title="Relocating from Montreal to Gatineau" description="Moving from Montreal to Gatineau? Cost of living, neighbourhoods, quality of life and real estate support for your transition." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Montreal to Gatineau Relocation" description="Support for relocating from Montreal to Gatineau: neighbourhoods, prices by sector, promise to purchase and notary." url="/en/montreal-relocation/" serviceType="Real Estate Relocation Service" />
    <HeroSection
      overline="Relocation · Montreal → Gatineau"
      title="Moving to Gatineau from Montreal"
      subtitle="Leaving Montreal for the Outaouais? I help you compare Gatineau's sectors and prices before you buy."
      primaryCta={{ label: "Book a call", href: "/en/contact/" }}
      secondaryCta={{ label: "See neighbourhoods", href: "/en/neighborhoods/" }}
      trustLine="Relocation specialist. Full transparency."
      heroBgImage={heroImg}
    />
<CardGrid overline="Before you move" title="Comparing Gatineau and Montreal" items={challenges} />
    <InlineCTA text="Want to know what your budget gets you in Gatineau? We'll look at areas and prices together." buttonLabel="Book a call →" href="/en/contact/" />
    <SectorLinks overline="A few areas" title="Neighbourhoods to consider" sectors={sectors} background="alt" />
    <ContentBlock narrow>
      <SectionHeading title="A local broker who understands your situation" />
      <p className="prose-body mt-5">The transition from Montreal to Gatineau is simpler than you think: same province, same notarial process. My role is to show you the neighbourhoods that match your criteria and support you through every step.</p>
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Relocation Guide" text="What you need to know to settle in Gatineau from Montreal: neighbourhoods, prices, process and schools." ctaLabel="Get the guide" />
    <CTASection dark title="Let's talk about your move to Gatineau" text="Book a free call. We'll look at neighbourhoods and options together." buttons={[{ label: "Book a call", href: "/en/contact/" }, { label: "See neighbourhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide, get it by email" />
  </>
);

export default MontrealRelocationPageEn;
