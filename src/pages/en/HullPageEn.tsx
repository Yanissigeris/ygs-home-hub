import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
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
import heroImg from "@/assets/hero-hull.webp";
import riverImg from "@/assets/gatineau-river-view.webp";

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Hull and urban area specialist" },
  { icon: Shield, label: "Zero-pressure guidance" },
];

const reasons = [
  "Vibrant downtown with restaurants, culture and neighborhood life",
  "Immediate proximity to downtown Ottawa via bridges",
  "Condos, plexes and homes at competitive prices",
  "Revitalizing area with appreciation potential",
  "Well-developed transit and bike paths",
];

const profiles = [
  { icon: Users, title: "Young professionals", text: "Urban living, Ottawa proximity, quick access to services and culture." },
  { icon: Building2, title: "Plex investors", text: "Good rental density, consistent demand, still-accessible entry prices." },
  { icon: Home, title: "First-time buyers", text: "Affordable condos and properties in a central, well-served area." },
  { icon: TrendingUp, title: "Resale buyers", text: "Transforming area — interesting appreciation potential in the medium term." },
];

const sellerReasons = [
  "The Hull market is attracting more and more buyers",
  "Area revitalization is increasing interest",
  "Strong demand for well-located plexes and condos",
  "This may be the best time to maximize your price",
];

const faq = [
  { q: "Is Hull good for investment?", a: "Yes — still-accessible entry prices, strong rental demand and ongoing revitalization. Ask for a plex analysis for details." },
  { q: "What's the average price for a condo in Hull?", a: "It varies a lot by location and condition. Contact me for an up-to-date analysis." },
  { q: "Is Hull safe?", a: "Hull is experiencing a renaissance — new projects, restaurants and a dynamic community. The area improves year after year." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];

const related = [
  { title: "Living in Hull — the guide", text: "Culture, restaurants, Ottawa proximity.", href: "/en/living-hull" },
  { title: "Invest in plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex" },
  { title: "Free plex analysis", text: "Revenues, expenses and return on your plex.", href: "/en/plex-analysis" },
  { title: "Free valuation", text: "How much is your property in Hull worth?", href: "/en/home-valuation" },
];

const HullPageEn = () => (
  <>
    <PageMeta title="Hull — Neighborhood Guide | YGS" description="Living, buying or investing in Hull. Urban neighborhood, condos, plex, culture and Ottawa proximity. Complete guide." />
    <HeroSection
      overline="Neighborhood Guide · Hull"
      title="Living, buying or investing in Hull"
      subtitle="Downtown, urban living, Ottawa proximity and rental potential — what you need to know about buying or selling in the area."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }}
      secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }}
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ImageTextSplit image={riverImg} imageAlt="Hull area, Gatineau" imagePosition="right">
      <SectionHeading
        overline="The area"
        title="Why Hull is attracting more and more people"
        subtitle="Young professionals, investors and first-time buyers are rediscovering Hull for its urban energy, Ottawa proximity and still-accessible prices."
      />
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>

    <CardGrid overline="For who" title="Hull is ideal for…" items={profiles} background="alt" />

    <InlineCTA
      text="Looking for a plex in Hull? Get a return analysis before buying."
      buttonLabel="Get a plex analysis →"
      href="/en/plex-analysis"
    />

    <ImageTextSplit image={heroImg} imageAlt="Hull neighborhood, Gatineau" imagePosition="left">
      <SectionHeading
        overline="Sellers in the area"
        title="Own a property in Hull?"
        subtitle="Demand for Hull is growing. Now may be the best time to see what your property is worth."
      />
      <div className="mt-7 space-y-3.5">
        {sellerReasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-muted-foreground">{r}</span>
          </div>
        ))}
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/home-valuation">Get my valuation</Link>
      </Button>
    </ImageTextSplit>

    <FAQSection title="Questions about Hull" items={faq} />

    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />

    <RelatedPages overline="Also read" title="Related pages" pages={related} background="alt" />

    <GuideInlineCTAEn guideType="investor_guide" headline="Free Investor Guide — plex in Hull" text="Returns, taxes and investment strategy — in a guide sent by email." ctaLabel="Get the Investor Guide" />

    <CTASection
      dark
      title="Buyer, seller or investor in Hull?"
      text="I can help you see clearly — whether you're buying, selling or analyzing a plex in the area."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" },
      ]}
      trustLine="Zero pressure — I give you the numbers, you decide."
    />

    <StickyGuideBannerEn guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);
export default HullPageEn;
