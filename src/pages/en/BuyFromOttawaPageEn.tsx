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
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.webp";

const advantages = [
  { icon: DollarSign, title: "More affordable prices", text: "Single-family homes and condos often cost significantly less in Gatineau than across the river in Ottawa." },
  { icon: MapPin, title: "Ottawa proximity", text: "Bridges (Champlain, Alexandra, du Portage), STO transit and bike paths make the daily commute very doable." },
  { icon: Home, title: "More space", text: "For the same budget, you often get more rooms, a bigger yard and better quality of life in Aylmer, the Plateau or Buckingham." },
  { icon: FileText, title: "Québec process", text: "The buying process in Québec has its own rules, promise to purchase, notary, school taxes. I guide you step by step." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull/", detail: "Urban, close to downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "Land, affordable prices, nature" },
];


const faq = [
  { q: "What are the real savings buying in Gatineau?", a: "It depends on the area and property type. Two official reference points: the median single-family price was $740,000 in Ottawa in August 2026 (Ottawa Real Estate Board) and $508,000 in the city of Gatineau in Q2 2026 (APCIQ). They don't cover the same period or identical homes, so to compare the real cost I put similar properties side by side and factor in municipal and school taxes." },
  { q: "How does buying work when I'm in Ontario?", a: "You can work in Ontario and live in Gatineau. The buying process is done in Québec, promise to purchase, inspection conditions, notary signing. If you are represented, your broker must hold an OACIQ licence. I guide you at every step." },
  { q: "Are taxes higher in Québec?", a: "Municipal and school taxes vary by sector, and Ottawa and Gatineau calculate them differently. To compare, we look at the actual tax bills of similar homes. Personal income tax is also structured differently in Québec, so we look at the full picture together." },
  { q: "Can I keep my Ontario job and family doctor?", a: "Yes, many of my clients commute daily to downtown Ottawa or work hybrid. You can also keep an Ontario family doctor in many cases, though Québec's RAMQ provides public health coverage once you become a Québec resident." },
  { q: "What about kids' schools, French or English?", a: "Both options exist in Outaouais. The Western Quebec School Board has English public schools in Aylmer and Hull, and French schools are available in every sector. Eligibility rules for English schooling apply, so we discuss your situation early." },
  { q: "How far is downtown Ottawa from the Gatineau side?", a: "By road, downtown Ottawa is about 2 km from Gatineau city hall, in Hull. From the Plateau it's about 9 km, and about 14 km from Old Aylmer, with drive time depending on the bridge and the hour. STO buses and bike paths are also options. The tramway project is under review by Mobilité Infra Québec, and its schedule remains to be confirmed." },
  { q: "Do I need a Québec mortgage?", a: "Most Canadian lenders operate on both sides of the river, so you can often keep your existing bank. The mortgage is registered in Québec by the notary, under Québec law. I introduce you to mortgage brokers who handle Ottawa-to-Gatineau files routinely." },
];

const BuyFromOttawaPageEn = () => (
  <>
    <PageMeta title="Buy in Gatineau from Ottawa" description="Living in Ottawa and thinking about buying in Gatineau? Taxes, neighborhoods, advantages and bilingual support for your transition." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Buy from Ottawa · Gatineau"
      title="Buy in Gatineau from Ottawa"
      subtitle="More space, more affordable prices, a different quality of life — without being far from work. Here's what you need to know."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }}
      secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods/" }}
      trustLine="Ottawa → Gatineau relocation specialist"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="The advantages"
      title="Why more and more Ottawa residents are crossing the river"
      items={advantages}
    />

    <InlineCTA
      text="Also selling in Ottawa? Knowing the value of your current property can clarify your buying budget."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation/"
    />

    <SectorLinks
      overline="Popular areas"
      title="Top neighborhoods for Ottawa buyers"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Local expertise" title="A broker who knows both sides of the river" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Active in Outaouais real estate since 2017, I've guided dozens of Ontario households through the move to Gatineau, federal employees, healthcare professionals, young families, and retirees right-sizing for a calmer pace. The transition is rarely just about price per square foot. It's about commute reliability, schooling in the right language, access to a doctor, snow-clearing standards, and how a Québec property tax bill actually reads.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I know which Aylmer streets fill up first when listings hit, which Hull blocks have aging plumbing under fresh paint, where the Plateau's newer phases have noise easements, and which Buckingham pockets are quietly appreciating because of recent infrastructure work. That ground-level knowledge is what protects an out-of-province buyer from costly assumptions.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I also coordinate the supporting cast, Québec notary, bilingual mortgage broker, certified inspector familiar with older Hull stock, movers who handle interprovincial files. You don't have to assemble that team alone from across the river.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/buyer-consultation/">Book my consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — buying in Gatineau" text="Process, budget, neighborhoods and tips, all in a guide sent by email." ctaLabel="Get the Buyer Guide" />

    <CTASection
      dark
      title="Ready to explore Gatineau?"
      text="Book a free consultation, let's look at the neighborhoods and options that match your profile."
      buttons={[
        { label: "Book a consultation", href: "/en/buyer-consultation/" },
        { label: "Explore neighborhoods", href: "/en/plateau-aylmer/", variant: "outline" },
      ]}
      trustLine="I give you the options, you decide with full clarity."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);
export default BuyFromOttawaPageEn;
