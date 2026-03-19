import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Building2, Coffee, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-hull.webp";

const profiles = [
  { icon: Coffee, title: "Urban lifestyle", text: "Restaurants, culture, nightlife — a vibrant downtown feel close to Ottawa." },
  { icon: Building2, title: "Condo buyers", text: "Modern condos and converted buildings with character at accessible prices." },
  { icon: TrendingUp, title: "Plex investors", text: "Strong rental demand, walkability and appreciation potential." },
  { icon: MapPin, title: "Ottawa commuters", text: "Walk or bike to downtown Ottawa — the closest Gatineau neighborhood." },
];
const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Affordable, nature, space" },
];
const faq = [
  { q: "Is Hull good for investment?", a: "Yes — strong rental demand, walkability and proximity to Ottawa make it excellent for plex and condo investments." },
  { q: "Is Hull safe?", a: "Hull has revitalized significantly. Like any urban area, some blocks are better than others. I can guide you to the best options." },
];

const HullPageEn = () => (
  <>
    <PageMeta title="Hull — Neighborhood Guide | YGS" description="Hull: urban, culture, Ottawa proximity, condos and plex. Complete neighborhood guide for buyers and investors." />
    <HeroSection overline="Neighborhood Guide · Hull" title="Living in Hull" subtitle="Urban energy, Ottawa proximity, culture and investment opportunity — what you need to know about buying or investing in Hull." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    <CardGrid overline="For who" title="This area is ideal for…" items={profiles} background="alt" />
    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />
    <FAQSection title="Questions about Hull" items={faq} />
    <GuideInlineCTAEn guideType="investor_guide" headline="Free Investor Guide — investing in Hull" text="Returns, analysis and strategy for investing in Gatineau." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Buyer or investor in Hull?" text="I can help you find the right property or analyze your investment." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers, you decide." />
    <StickyGuideBannerEn guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);
export default HullPageEn;
