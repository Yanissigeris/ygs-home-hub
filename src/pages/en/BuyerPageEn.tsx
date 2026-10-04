import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import CalculatorsSection from "@/components/CalculatorsSection";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-acheter.webp";

const profiles = [
  { icon: CheckCircle2, title: "First-time buyer in the Outaouais", text: "Understand each step of buying in Québec, from the promise to purchase to signing at the notary." },
  { icon: CheckCircle2, title: "Family looking for more space", text: "Find a family-friendly Gatineau neighbourhood with more rooms, a yard, good schools and the right services nearby." },
  { icon: CheckCircle2, title: "Relocating from Ottawa or Montréal", text: "A local broker who knows Aylmer, Hull, the Plateau and Buckingham, plus local prices and Québec rules, welcome tax included." },
  { icon: CheckCircle2, title: "Unsure about neighbourhoods", text: "Compare Gatineau areas on price, resale potential, Ottawa access and lifestyle, to choose the one that fits you." },
];
const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull/", detail: "Condos and plexes, close to Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "More affordable prices, river" },
];
const steps = [
  { num: "01", title: "Clarify your project", desc: "Budget, target Gatineau neighbourhoods, property type, family needs and Ottawa commute: we lay the groundwork together." },
  { num: "02", title: "Targeted search", desc: "I send you properties that match your criteria, in the neighbourhoods you picked. You only visit what is worth the trip." },
  { num: "03", title: "Offer & negotiation", desc: "An offer suited to the local market, then inspection and conditions, through to signing at the notary." },
];
const nextSteps = [
  { title: "Free consultation", text: "We go over your criteria and budget before any showings.", href: "/en/buyer-consultation/", cta: "Book my consultation", highlight: true },
  { title: "Compare neighbourhoods", text: "Gatineau neighbourhoods side by side: prices, lifestyle, pros and cons.", href: "/en/neighborhoods/", cta: "See neighbourhoods" },
  { title: "Buyer guide", text: "The buying process in Québec explained simply, from search to notary.", href: "/en/buyer-guide/", cta: "Read the guide" },
];
const faq = [
  { q: "Is now a good time to buy in Gatineau?", a: "It depends mostly on your situation. Over 12 months, conditions favoured sellers for single-family homes (APCIQ, June 2026). We look together at your budget and recent sales in the area you are targeting." },
  { q: "I'm from Ottawa, how does it work in Québec?", a: "In Québec, the sale is finalized at a notary. When a broker represents you, the promise to purchase uses an OACIQ form. Plan for the land transfer duties (welcome tax), billed by the municipality after the purchase. I have worked with buyers from Ontario since 2017, and I explain each step before you sign." },
  { q: "Do I need a mortgage pre-approval?", a: "Yes, it is strongly recommended. A pre-approval clarifies your budget and makes your offer more credible to the seller. It is not final approval: the lender will also review the property you choose." },
  { q: "How do I choose the right Gatineau neighbourhood?", a: "Lifestyle, budget, family, Ottawa commute, schools: we look at all of it together to find the balance that suits you between Aylmer, Hull, the Plateau and Buckingham. For reference, Gatineau city hall, in Hull, is about 2 km from downtown Ottawa, the Plateau about 9 km and Old Aylmer about 14 km." },
];

const BuyerPageEn = () => (
  <>
    <PageMeta title="Buy a Property in Gatineau" description="Find and buy your property in Gatineau with an experienced broker. Personalized consultation and guidance at your pace." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <ServiceJsonLd name="Buyer Agent Service in Gatineau" description="Buyer representation service in Gatineau and the Outaouais: neighbourhood analysis, property search, offer strategy and full support." url="/en/buy/" serviceType="Real Estate Buyer Agent Service" />
    <HeroSection overline="For buyers · Gatineau" title="Buy in Gatineau with clarity and confidence" subtitle="First purchase or a move from Ottawa or Montréal: I guide you at every step, with the numbers in hand." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "Compare neighbourhoods", href: "/en/neighborhoods/" }} trustLine="Clear strategy." heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="2026 Context" title="Buying in Gatineau in 2026: what the numbers say" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        In Q2 2026, the Gatineau metropolitan area recorded 1,310 residential sales. The single-family median price was $523,500, with a selling time of 27 days (APCIQ, Centris data).
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        According to APCIQ, over the 12 months ending in June 2026, conditions favoured sellers for single-family homes in every price range. A well-located home can therefore sell quickly. Coming in with a pre-approval and clear criteria lets you make an offer without rushing.
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Source: APCIQ, residential barometer for Q2 2026, Gatineau metropolitan area.</p>
    </ContentBlock>

    <ContentBlock narrow><SectionHeading overline="Buying real estate" title="Choosing a property also means choosing a neighbourhood and a strategy" subtitle="Beyond the house, you need to understand the neighbourhoods, market value, taxes, resale potential and the right offer strategy." /></ContentBlock>
    <CardGrid overline="For you" title="The buyers I work with" items={profiles} background="alt" variant="icon-inline" />
    <ProcessSteps steps={steps} />
    <InlineCTA text="Also selling? Knowing the value of your property can clarify your buying budget." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <SectorLinks overline="Neighbourhoods" title="Areas to compare" sectors={sectors} />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="First time buying? Get the complete guide." text="The buying process in Québec explained simply, from search to notary, step by step." ctaLabel="Get the Buyer Guide" />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
    <CalculatorsSection />
    <ReviewSection overline="Buyer testimonials" title="What my buyer clients say" reviews={getReviewsByCategory("buyer").slice(0, 2)} columns={2} background="alt" />
    <FunnelNextStep overline="Next step" title="Where to start?" subtitle="Choose the step that fits your situation." steps={nextSteps} />
    <CTASection dark title="Let's talk about your buying project" text="Budget and neighbourhoods: we sort it all out before the first showings." buttons={[{ label: "Book my consultation", href: "/en/buyer-consultation/" }, { label: "Compare neighbourhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
  </>
);

export default BuyerPageEn;
