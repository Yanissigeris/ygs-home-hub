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
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, Users, Home, TrendingUp, TreePine, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buckingham-gen.jpg";
import riverImg from "@/assets/buckingham-river-nature.jpg";


const reasons = [
  "Bigger lots and more spacious properties",
  "Among the most affordable entry prices in Outaouais",
  "Natural setting — rivers, parks, green spaces",
  "Ideal for families who want space without leaving the region",
  "Growing area with new developments",
];

const profiles = [
  { icon: Users, title: "Families", text: "More space, big yards, community schools — all at a realistic price." },
  { icon: Home, title: "First-time buyers", text: "The best value in Outaouais for accessing homeownership." },
  { icon: TreePine, title: "Nature lovers", text: "Rivers, trails, green spaces — a quieter lifestyle without being isolated." },
  { icon: TrendingUp, title: "Investors", text: "Low entry prices, expected growth, interesting rental potential." },
];

const sellerReasons = [
  "Demand is growing in the area with new developments",
  "Buyers are looking for space — your property interests them",
  "Take advantage of rising values before prices stabilize",
  "Optimize your position for your next real estate project",
];

const faq = [
  { q: "Is Buckingham far from everything?", a: "No — it's 25-35 minutes from Ottawa and downtown Gatineau via Highway 50. All essential services are available locally." },
  { q: "Will prices keep going up?", a: "The area is growing with new developments and increasing demand. Contact me for an up-to-date analysis." },
  { q: "Are there good investments in Buckingham?", a: "Yes — low entry prices with growing rental demand. Good option for a first investment." },
  { q: "Why buy in Buckingham instead of Gatineau?", a: "For the space, affordable prices and nature. You get a bigger lot and more spacious home for the same budget as in the city." },
  { q: "Is Buckingham good for a first purchase?", a: "Excellent — entry prices are the lowest in the region. It's often the best option to access homeownership in Outaouais." },
  { q: "Are there schools in Buckingham?", a: "Yes, French elementary and secondary schools. English options are also available in nearby areas." },
  { q: "How do I sell a house in Buckingham?", a: "Realistic valuation, strategic positioning and targeted marketing to attract buyers seeking space and nature." },
  { q: "Is the Lièvre River an asset?", a: "Absolutely — waterfront properties are highly sought after, and the river offers boating, fishing and beautiful scenery." },
  { q: "What services are available in Buckingham?", a: "Schools, groceries, restaurants, health services and a community center. The downtown has a lot of character." },
  { q: "How do I get a home valuation in Buckingham?", a: "I prepare a free valuation based on recent comparable sales in your area. It's confidential and no commitment." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
];

const related = [
  { title: "All neighborhoods", text: "Compare Gatineau neighborhoods.", href: "/en/neighborhoods" },
  { title: "First-time buyer", text: "Budget and process for first-time buyers.", href: "/en/first-time-buyer" },
  { title: "Free valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
  { title: "Buyer guide", text: "The buying process in Québec.", href: "/en/buyer-guide" },
];

const BuckinghamPageEn = () => (
  <>
    <PageMeta title="Buckingham / Masson-Angers — Neighborhood Guide" description="Buckingham and Masson-Angers: nature, land, affordable prices. Neighborhood guide for buyers and investors." />
    <NeighborhoodJsonLd name="Buckingham" description="Real estate broker in Buckingham and Masson-Angers. Nature, spacious land and affordable prices in Outaouais." lat={45.5864} lng={-75.4197} url="/en/buckingham" />
    <HeroSection
      overline="Neighborhood Guide · Buckingham / Masson-Angers"
      title="Living in Buckingham and Masson-Angers"
      subtitle="Space, nature, affordable prices and quality of life — what you need to know to buy or sell in the area."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }}
      secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }}
      heroBgImage={riverImg}
    />
<ImageTextSplit image={heroImg} imageAlt="Buckingham and Masson-Angers area" imagePosition="right">
      <SectionHeading
        overline="The area"
        title="Why people choose Buckingham / Masson-Angers"
        subtitle="Families, first-time buyers and nature lovers choose this area for the space, prices and quality of life."
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

    <CardGrid overline="For who" title="This area is ideal for…" items={profiles} background="alt" />

    <InlineCTA
      text="Thinking about buying in the area? Let's discuss your budget and options."
      buttonLabel="Book a consultation →"
      href="/en/buyer-consultation"
    />

    <ImageTextSplit image={riverImg} imageAlt="Nature and river, Buckingham" imagePosition="left">
      <SectionHeading
        overline="Sellers in the area"
        title="Own a property in Buckingham or Masson-Angers?"
        subtitle="Demand is growing in the area. Now is a good time to understand what your property is worth."
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

    <FAQSection title="Questions about Buckingham / Masson-Angers" items={faq} />

    <SectorLinks overline="Other neighborhoods" title="Explore other areas" sectors={relatedSectors} />

    <RelatedPages overline="Also read" title="Related pages" pages={related} background="alt" />

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — buying in Buckingham" text="Process, budget and tips for buying in the area." ctaLabel="Get the Buyer Guide" />

    <CTASection
      dark
      title="Buyer or seller in Buckingham?"
      text="I can help you find the right property or know the value of yours."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" },
      ]}
      trustLine="I give you the numbers — you decide with full clarity."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default BuckinghamPageEn;
