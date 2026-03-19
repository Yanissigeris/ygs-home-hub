import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Users, Home, TreePine, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-buckingham.jpg";

const profiles = [
  { icon: Users, title: "Families", text: "More space, big yards, community schools — all at a realistic price." },
  { icon: Home, title: "First-time buyers", text: "The best value in Outaouais for accessing homeownership." },
  { icon: TreePine, title: "Nature lovers", text: "Rivers, trails, green spaces — a quieter lifestyle without being isolated." },
  { icon: TrendingUp, title: "Investors", text: "Low entry prices, expected growth, interesting rental potential." },
];
const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
];
const faq = [
  { q: "Is Buckingham far from everything?", a: "No — it's 25-35 minutes from Ottawa and downtown Gatineau. All essential services are available locally." },
  { q: "Are there good investments in Buckingham?", a: "Yes — low entry prices with growing rental demand. Good option for a first investment." },
];

const BuckinghamPageEn = () => (
  <>
    <PageMeta title="Buckingham / Masson-Angers — Neighborhood Guide | YGS" description="Buckingham and Masson-Angers: nature, land, affordable prices. Neighborhood guide for buyers and investors." />
    <HeroSection overline="Neighborhood Guide · Buckingham / Masson-Angers" title="Living in Buckingham and Masson-Angers" subtitle="Space, nature, affordable prices and quality of life — what you need to know to buy or sell in the area." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    <CardGrid overline="For who" title="This area is ideal for…" items={profiles} background="alt" />
    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />
    <FAQSection title="Questions about Buckingham" items={faq} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying in Buckingham" text="Process, budget and tips for buying in the area." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Buyer or seller in Buckingham?" text="I can help you find the right property or know the value of yours." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers, you decide." />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default BuckinghamPageEn;
