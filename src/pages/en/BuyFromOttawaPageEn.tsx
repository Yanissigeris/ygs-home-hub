import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { DollarSign, Home, MapPin, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.jpg";

const reasons = [
  { icon: DollarSign, title: "More affordable prices", text: "Single-family homes in Gatineau often cost significantly less than comparable homes in Ottawa." },
  { icon: Home, title: "More space", text: "Bigger lots, more rooms and newer construction — more value for your budget." },
  { icon: MapPin, title: "Easy commute", text: "Bridges, transit and bike paths make working in Ottawa and living in Gatineau very doable." },
  { icon: TrendingUp, title: "Strong market potential", text: "Growing demand and development make Gatineau a smart long-term investment." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown Ottawa" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Affordable, nature, space" },
];
const faq = [
  { q: "Is it really cheaper in Gatineau?", a: "Yes — especially for single-family homes. But consider taxes and services too. We compare everything together." },
  { q: "How does buying work in Québec?", a: "Different from Ontario — promise to purchase, inspection, notary. I guide you through every step." },
];

const BuyFromOttawaPageEn = () => (
  <>
    <PageMeta title="Buy in Gatineau from Ottawa | YGS" description="More space, affordable prices — why Ottawa residents are moving to Gatineau. Complete guide for cross-river buyers." />
    <HeroSection overline="Ottawa → Gatineau" title="Buy in Gatineau from Ottawa" subtitle="More space, more affordable prices, great quality of life — discover why Ottawa residents are crossing the river." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }} heroBgImage={heroImg} />
    <CardGrid overline="Why Gatineau" title="Why Ottawa buyers choose Gatineau" items={reasons} />
    <SectorLinks overline="Popular areas" title="Top neighborhoods for Ottawa buyers" sectors={sectors} background="alt" />
    <FAQSection items={faq} />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying from Ottawa" text="Process, budget and neighborhoods explained for Ottawa buyers." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Thinking about crossing the river?" text="Let's discuss your situation — neighborhoods, budget and process." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default BuyFromOttawaPageEn;
