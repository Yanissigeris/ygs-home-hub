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
  { icon: DollarSign, title: "More affordable prices", text: "Single-family homes and condos often cost less in Gatineau than in Ottawa. In Q2 2026, the median single-family price in the Gatineau CMA was $523,500 (APCIQ)." },
  { icon: MapPin, title: "Ottawa proximity", text: "Bridges (Champlain, Alexandra, du Portage) and STO buses connect both sides of the river. Downtown Ottawa is about 2 km from Hull and about 14 km from Old Aylmer." },
  { icon: Home, title: "More space", text: "For the same budget, you often get more rooms or a bigger yard in Aylmer, the Plateau or Buckingham." },
  { icon: FileText, title: "Quebec process", text: "The buying process in Quebec has its own rules: promise to purchase, notary, transfer duties (welcome tax) and school taxes. I guide you step by step." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Newer family homes, Ottawa access" },
  { name: "Hull", href: "/en/hull/", detail: "Condos and plexes, close to downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "More land, more affordable prices" },
];


const faq = [
  { q: "How much can I save buying in Gatineau?", a: "It depends on the area and property type. Two official reference points: the median single-family price was $740,000 in Ottawa in August 2026 (Ottawa Real Estate Board) and $508,000 in the city of Gatineau in Q2 2026 (APCIQ). They don't cover the same period or identical homes, so to compare costs I put similar properties side by side and factor in municipal and school taxes." },
  { q: "How does buying work when I'm in Ontario?", a: "You can work in Ontario and live in Gatineau. The buying process takes place in Quebec: promise to purchase, inspection conditions, notary signing. If you are represented, your broker must hold an OACIQ licence. I guide you at every step." },
  { q: "Are taxes higher in Quebec?", a: "It depends on the tax. When you buy, you pay the welcome tax: in Gatineau, about $4,486 on a $425,000 property under the 2026 grid. Municipal and school taxes vary by sector, and Ottawa and Gatineau calculate them differently. To compare, we look at the tax bills of similar homes. Personal income tax is also structured differently in Quebec, so we look at the full picture together." },
  { q: "Can I keep my Ontario job and family doctor?", a: "For your job, yes: many Gatineau residents work in Ottawa, on site or hybrid. As for your family doctor, check with your clinic. Once you are a Quebec resident, your public health coverage falls under RAMQ." },
  { q: "What about kids' schools, French or English?", a: "Both options exist in the Outaouais. The Western Québec School Board has English public schools in Aylmer and Hull, and French schools are available in every sector. Eligibility rules for English schooling apply, so we discuss your situation early." },
  { q: "How far is downtown Ottawa from the Gatineau side?", a: "By road, downtown Ottawa is about 2 km from Gatineau city hall, in Hull. From the Plateau it's about 9 km, and about 14 km from Old Aylmer, with drive time depending on the bridge and the hour. STO buses and bike paths are also options. The tramway project is under review by Mobilité Infra Québec, and its schedule remains to be confirmed." },
  { q: "Do I need a Quebec mortgage?", a: "Most Canadian lenders operate on both sides of the river, so you can often keep your existing bank. The mortgage is registered in Quebec by the notary, under Quebec law. I introduce you to mortgage brokers who handle Ottawa-to-Gatineau files routinely." },
];

const BuyFromOttawaPageEn = () => (
  <>
    <PageMeta title="Buy in Gatineau from Ottawa" description="Living in Ottawa and thinking about buying in Gatineau? Taxes, neighbourhoods, advantages and bilingual support for your transition." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Buy from Ottawa · Gatineau"
      title="Buy in Gatineau from Ottawa"
      subtitle="More space and more affordable prices, without moving far from work. What to know before you cross the river."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }}
      secondaryCta={{ label: "See neighbourhoods", href: "/en/neighborhoods/" }}
      trustLine="Ottawa → Gatineau relocation specialist"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="The advantages"
      title="Why some Ottawa residents choose Gatineau"
      items={advantages}
    />

    <InlineCTA
      text="Want to know what your budget gets you on this side of the river? We'll look at areas and prices together."
      buttonLabel="Book a call →"
      href="/en/contact/"
    />

    <SectorLinks
      overline="Areas to consider"
      title="Neighbourhoods Ottawa buyers look at"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Local expertise" title="A broker who knows both sides of the river" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Active in real estate in the Outaouais since 2017, I've guided Ontario households through the move to Gatineau: federal employees, healthcare professionals, young families and retirees looking for a calmer pace. The move rarely comes down to price per square foot. It also involves commute reliability, schooling in the right language, access to a doctor, snow-clearing standards and how to read a Quebec property tax bill.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I know the Aylmer streets where listings move fast and the parts of Hull where older housing calls for a careful inspection. On the Plateau, I check the servitudes registered in the land register before an offer. That ground-level knowledge protects a buyer from Ontario against costly assumptions.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        I also coordinate the supporting cast: a Quebec notary, a bilingual mortgage broker, a building inspector familiar with older Hull homes and movers who handle interprovincial files. You don't have to assemble that team alone from across the river.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/buyer-consultation/">Book my consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide: buying in Gatineau" text="Process, budget, neighbourhoods and tips, all in a guide sent by email." ctaLabel="Get the Buyer Guide" />

    <CTASection
      dark
      title="Ready to take a closer look at Gatineau?"
      text="Book a free consultation. We'll look at the neighbourhoods and options that match your profile."
      buttons={[
        { label: "Book a consultation", href: "/en/buyer-consultation/" },
        { label: "See Plateau and Aylmer", href: "/en/plateau-aylmer/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options. You decide."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);
export default BuyFromOttawaPageEn;
