import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Users, Home, TrendingUp, Building2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-gatineau-centre.webp";
import riverImg from "@/assets/gatineau-river-view.webp";

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Gatineau area specialist" },
  { icon: Shield, label: "Support at your pace" },
];

const reasons = [
  "Well-established residential neighborhood with all services",
  "Quick access to highways and downtown",
  "Good schools and family parks",
  "Diverse real estate market — houses, semis, condos",
  "Competitive prices compared to Aylmer and Hull",
];

const profiles = [
  { icon: Users, title: "Families", text: "Quiet residential neighborhoods, accessible schools and nearby parks." },
  { icon: Home, title: "First-time buyers", text: "Affordable properties in a well-served area with resale potential." },
  { icon: Building2, title: "Investors", text: "Plexes and multi-units at still-accessible prices with strong rental demand." },
  { icon: TrendingUp, title: "Move-up buyers", text: "Stable area with steady growth and strong demand." },
];

const faq = [
  { q: "Is Gatineau centre a good choice for families?", a: "Yes — established neighborhoods, schools, parks and local services. It's a classic, reliable residential area." },
  { q: "How do prices compare to Aylmer?", a: "Generally more affordable than Aylmer, with a good selection of properties. Contact me for an up-to-date analysis." },
  { q: "Is there investment potential?", a: "Yes — strong rental demand, plexes available at reasonable prices and a stable market." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, recent homes, nature" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, Ottawa proximity" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Land, affordable prices" },
];

const related = [
  { title: "All neighborhoods", text: "Compare Gatineau neighborhoods.", href: "/en/neighborhoods" },
  { title: "Free Valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation" },
  { title: "Invest in Plex", text: "Analysis and investment strategy.", href: "/en/plex" },
];

const GatineauCentrePageEn = () => (
  <>
    <PageMeta title="Gatineau Centre — Neighborhood Guide | YGS" description="Live, buy or invest in Gatineau centre. Established residential area, complete services and competitive prices." />
    <NeighborhoodJsonLd name="Gatineau" description="Real estate broker in Gatineau centre. Established residential area, complete services and competitive prices." lat={45.4765} lng={-75.7013} url="/en/gatineau" />
    <HeroSection overline="Neighborhood Guide · Gatineau" title="Live, buy or invest in Gatineau centre" subtitle="A well-established residential area, complete services and competitive prices — everything you need to know about the Gatineau sector." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <ImageTextSplit image={riverImg} imageAlt="Gatineau sector" imagePosition="right">
      <div className="label-overline">The area</div>
      <h2 className="mt-3">Why choose Gatineau centre</h2>
      <p className="prose-body mt-4">The Gatineau sector offers a great balance of accessibility, services and pricing. It's a popular choice for families and first-time buyers looking for an established, well-served neighborhood.</p>
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>
    <CardGrid overline="For who" title="Gatineau centre is ideal for…" items={profiles} background="alt" />
    <InlineCTA text="Own property in Gatineau? Find out how much it's worth." buttonLabel="Free Valuation →" href="/en/home-valuation" />
    <FAQSection title="Questions about Gatineau centre" items={faq} />
    <SectorLinks overline="Other areas" title="Explore other neighborhoods" sectors={relatedSectors} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying in Gatineau" text="Process, budget and tips for buying in the area — in a guide sent to your email." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Buyer, seller or investor in Gatineau?" text="I can help — whether you're buying, selling or analyzing a property in the area." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default GatineauCentrePageEn;
