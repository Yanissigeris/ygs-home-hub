import PageMeta from "@/components/PageMeta";
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
  { icon: MapPin, title: "Understanding the Montréal vs Gatineau market", text: "Prices, taxes and quality of life are very different — often in Gatineau's favor." },
  { icon: DollarSign, title: "More space for less money", text: "For the same budget, you often get much more space and land in Gatineau." },
  { icon: Home, title: "Family-friendly neighborhoods", text: "Aylmer, the Plateau and other areas offer a quality of life hard to find in Montréal." },
  { icon: FileText, title: "Simplified process", text: "Same province, same notary process — the transition is easier than from Ontario." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, recent homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, downtown proximity, condos and plex" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];


const MontrealRelocationPageEn = () => (
  <>
    <PageMeta title="Relocating from Montréal to Gatineau | YGS" description="Moving from Montréal to Gatineau? Cost of living, neighborhoods, quality of life and real estate support for your transition." />
    <HeroSection
      overline="Relocation · Montréal → Gatineau"
      title="Moving to Gatineau from Montréal"
      subtitle="More space, more affordable prices, a family-friendly lifestyle — and a growing real estate market. Discover why more Montréalers are choosing Gatineau."
      primaryCta={{ label: "Book a call", href: "/en/contact" }}
      secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }}
      trustLine="Relocation specialist. Full transparency."
      heroBgImage={heroImg}
    />
<CardGrid overline="The advantages" title="Why choose Gatineau over Montréal" items={challenges} />
    <InlineCTA text="Also selling in Montréal? Knowing the value of your current property can help clarify your budget." buttonLabel="Free Valuation →" href="/en/home-valuation" />
    <SectorLinks overline="Popular areas" title="Neighborhoods to consider" sectors={sectors} background="alt" />
    <ContentBlock narrow>
      <SectionHeading title="A local broker who understands your situation" />
      <p className="prose-body mt-5">The transition from Montréal to Gatineau is simpler than you think — same notary process, same province. My role is to help you discover the best neighborhoods and support you through every step.</p>
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Relocation Guide" text="Everything for moving to Gatineau from Montréal — neighborhoods, prices and process." ctaLabel="Get the guide" />
    <CTASection dark title="Ready to explore Gatineau?" text="Book a free call — let's look at neighborhoods and options together." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide — get it by email" />
  </>
);

export default MontrealRelocationPageEn;
