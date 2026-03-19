import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Users, Home, TreePine, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-aylmer.webp";

const profiles = [
  { icon: Users, title: "Families", text: "Parks, schools, newer homes — a top choice for families in Gatineau." },
  { icon: Home, title: "First-time buyers", text: "Good value with newer construction and family-friendly infrastructure." },
  { icon: TreePine, title: "Nature lovers", text: "Lake Deschênes, trails and green spaces — suburban feel with urban access." },
  { icon: TrendingUp, title: "Investors", text: "Strong demand and appreciation potential in established neighborhoods." },
];
const relatedSectors = [
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, condos and plex" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Affordable, nature, space" },
];
const faq = [
  { q: "Is Aylmer a good area for families?", a: "Yes — excellent schools, parks, lake access and family-friendly neighborhoods make it a top choice." },
  { q: "How do Plateau and Aylmer compare?", a: "Aylmer has more established neighborhoods with character. The Plateau has newer homes at lower prices. Both are great for families." },
];

const PlateauAylmerPageEn = () => (
  <>
    <PageMeta title="Plateau / Aylmer — Neighborhood Guide | YGS" description="Plateau and Aylmer: family-friendly, newer homes, nature and Ottawa access. Complete neighborhood guide for buyers." />
    <HeroSection overline="Neighborhood Guide · Plateau / Aylmer" title="Living in Plateau and Aylmer" subtitle="Family-friendly neighborhoods, newer homes, lake access and nature — what you need to know to buy or sell in the area." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    <CardGrid overline="For who" title="This area is ideal for…" items={profiles} background="alt" />
    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />
    <FAQSection title="Questions about Plateau / Aylmer" items={faq} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying in Plateau / Aylmer" text="Process, budget and tips for buying in the area." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Buyer or seller in Plateau / Aylmer?" text="I can help you find the right property or know the value of yours." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers, you decide." />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default PlateauAylmerPageEn;
