import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
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
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, Users, Home, TrendingUp, Building2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-hull.webp";
import riverImg from "@/assets/hull-cycling-path.jpg";

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
  { q: "Is Hull good for investment?", a: "Yes — still-accessible entry prices, strong rental demand and ongoing revitalization with the Zibi project and new developments." },
  { q: "What's the average price for a condo in Hull?", a: "It varies a lot by location and condition. Contact me for an up-to-date analysis based on recent sales in your Hull area." },
  { q: "Is Hull safe?", a: "Hull is experiencing a renaissance — new residential projects, restaurants and a dynamic community. The area improves year after year." },
  { q: "Why work with a real estate broker in Hull?", a: "A broker who knows Hull understands local realities — plexes, zoning, rental potential, revitalization projects. That helps you make an informed decision." },
  { q: "How much does a plex yield in Hull?", a: "Returns depend on purchase price, rents and expenses. I prepare a free return analysis for every plex you're interested in." },
  { q: "How close is Hull to Ottawa?", a: "Very close — a few minutes on foot or by bike from downtown Ottawa via the Alexandra and Portage bridges. It's the closest Outaouais area to Ottawa." },
  { q: "Are there single-family homes in Hull?", a: "Yes, you'll find character homes on residential streets. Hull also offers condos, plexes and townhomes." },
  { q: "Will the Zibi project increase prices?", a: "Zibi and related developments are increasing Hull's appeal. Well-located properties are already benefiting from this transformation." },
  { q: "How do I sell a property in Hull?", a: "Valuation based on recent comparables, strategic positioning and targeted marketing — including Ottawa buyers and investors." },
  { q: "Is Hull good for a first purchase?", a: "Excellent — prices are more accessible than Ottawa or Aylmer, the area is central and well-served by transit. Ideal for entering the market." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];

const related = [
  { title: "Living in Hull — the guide", text: "Culture, restaurants, Ottawa proximity.", href: "/en/living-hull" },
  { title: "Sell in Hull", text: "Selling strategy adapted to Hull.", href: "/en/sell-house-hull" },
  { title: "Home valuation Hull", text: "How much is your Hull property worth?", href: "/en/home-valuation-hull" },
  { title: "Invest in plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex" },
  { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods" },
];

const HullPageEn = () => (
  <>
    <PageMeta title="Hull — Neighborhood Guide | YGS" description="Living, buying or investing in Hull. Urban neighborhood, condos, plex, culture and Ottawa proximity. Complete guide." />
    <NeighborhoodJsonLd name="Hull" description="Real estate broker specializing in Hull, Gatineau. Urban neighborhood, condos, plex, culture and Ottawa proximity." lat={45.4283} lng={-75.7140} url="/en/hull" />
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
        <Link to="/en/home-valuation-hull">Get my valuation</Link>
      </Button>
    </ImageTextSplit>

    <FAQSection title="Questions about Hull" items={faq} />

    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />

    <RelatedPages overline="Also read" title="Related pages" pages={related} background="alt" />

    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Free Investor Guide — plex in Hull" text="Returns, taxes and investment strategy — in a guide sent by email." ctaLabel="Get the Investor Guide" />

    <CTASection
      dark
      title="Buyer, seller or investor in Hull?"
      text="I can help you see clearly — whether you're buying, selling or analyzing a plex in the area."
      buttons={[
        { label: "Home valuation Hull", href: "/en/home-valuation-hull" },
        { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" },
      ]}
      trustLine="I give you the numbers — you decide with full clarity."
    />

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);
export default HullPageEn;
