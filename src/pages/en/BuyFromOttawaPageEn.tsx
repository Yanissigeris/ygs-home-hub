import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.webp";

const advantages = [
  { icon: DollarSign, title: "More affordable prices", text: "Single-family homes and condos often cost significantly less in Gatineau than across the river in Ottawa." },
  { icon: MapPin, title: "Ottawa proximity", text: "Bridges (Champlain, Alexandra, du Portage), STO transit and bike paths make the daily commute very doable." },
  { icon: Home, title: "More space", text: "For the same budget, you often get more rooms, a bigger yard and better quality of life in Aylmer, the Plateau or Buckingham." },
  { icon: FileText, title: "Québec process", text: "The buying process in Québec has its own rules — promise to purchase, notary, school taxes. I guide you step by step." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Ottawa → Gatineau relocation specialist" },
  { icon: Shield, label: "Bilingual · Full transparency" },
];

const faq = [
  { q: "What are the real savings buying in Gatineau?", a: "It depends on the area and property type. Generally 15-30% savings on purchase price, but municipal and school taxes should also be considered." },
  { q: "How does buying work when I'm in Ontario?", a: "You can work in Ontario and live in Gatineau. The buying process is done in Québec — promise to purchase, notary, etc. I guide you at every step." },
  { q: "Are taxes higher in Québec?", a: "Municipal taxes vary by area. Income tax is different too. We look at the full picture together." },
];

const BuyFromOttawaPageEn = () => (
  <>
    <PageMeta title="Buy in Gatineau from Ottawa | YGS" description="Living in Ottawa and thinking about buying in Gatineau? Taxes, neighborhoods, advantages and bilingual support for your transition." />
    <HeroSection
      overline="Buy from Ottawa · Gatineau"
      title="Buy in Gatineau from Ottawa"
      subtitle="More space, more affordable prices, a different quality of life — without being far from work. Here's what you need to know."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }}
      secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }}
      trustLine="Ottawa → Gatineau relocation specialist"
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="The advantages"
      title="Why more and more Ottawa residents are crossing the river"
      items={advantages}
    />

    <InlineCTA
      text="Also selling in Ottawa? Knowing the value of your current property can clarify your buying budget."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation"
    />

    <SectorLinks
      overline="Popular areas"
      title="Top neighborhoods for Ottawa buyers"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading title="A broker who knows both sides" />
      <p className="prose-body mt-5">
        After nearly 9 years in Gatineau, I've helped dozens of families cross the river. I know the advantages, the trade-offs and the pitfalls — and I help you navigate it all with confidence.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/buyer-consultation">Book my consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — buying in Gatineau" text="Process, budget, neighborhoods and tips — all in a guide sent by email." ctaLabel="Get the Buyer Guide" />

    <CTASection
      dark
      title="Ready to explore Gatineau?"
      text="Book a free consultation — let's look at the neighborhoods and options that match your profile."
      buttons={[
        { label: "Book a consultation", href: "/en/buyer-consultation" },
        { label: "Explore neighborhoods", href: "/en/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="I give you the options — you decide with full clarity."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default BuyFromOttawaPageEn;
