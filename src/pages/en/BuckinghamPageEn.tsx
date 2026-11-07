import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-buckingham-photo.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Is Buckingham too far from Ottawa to live there?",
    a: "Central Buckingham is about 38 km from downtown Ottawa by road. At rush hour, plan for more time. If you commute to Ottawa in person every day, it's a long trip. With partial remote work or a job in Gatineau, it's manageable, and you gain space. During our consultation, we look at this trade-off together based on your situation.",
  },
  {
    q: "Are there services in Buckingham?",
    a: "Yes, Buckingham has a functional downtown with everyday services: grocery stores, pharmacy, medical clinic, restaurants, library, elementary and secondary schools, arena. The offering is smaller than in Aylmer or Hull, but daily needs are covered. Hôpital de Papineau is also in Buckingham. For big-box stores, you head to central Gatineau: Les Promenades Gatineau are 30 to 36 km away by road, depending on the route.",
  },
  {
    q: "Do Buckingham properties have wells?",
    a: "A large portion of Buckingham is connected to municipal water and sewer, unlike more rural areas like Cantley or L'Ange-Gardien. In the core Buckingham area, properties are generally on municipal services. On the outskirts, verification is needed. I systematically confirm this point for every property visited.",
  },
  {
    q: "What does a single-family home cost in Buckingham in 2026?",
    a: "In Q3 2026, the median single-family price in QPAREB's Buckingham/Masson-Angers sector was $395,000, the lowest of the four sectors of the city of Gatineau (Centris data). For comparison, it was $530,000 in Aylmer over the same period. In Buckingham, prices then vary with year of construction, lot size and condition.",
  },
  {
    q: "Which schools serve Buckingham and Masson-Angers?",
    a: "Public francophone schools are operated by the Centre de services scolaire au Cœur-des-Vallées (CSSCV). Hormisdas-Gamelin is the main French secondary school in Buckingham. The Western Quebec School Board (WQSB) provides English-language education through Buckingham Elementary and routes secondary students to Hadley Junior High and Philemon Wright in Hull. I always confirm the exact catchment for each address with the school board before an offer.",
  },
  {
    q: "Is the Buckingham and Masson-Angers market moving fast in 2026?",
    a: "In Q3 2026, single-family homes in QPAREB's Buckingham/Masson-Angers sector sold in 34 days on average, the same as the metropolitan average. Single-family sales fell 23% from a year earlier while active listings rose 47%, so buyers have more choice (Centris data). Pricing strategy and the home's condition affect how long it takes.",
  },
  {
    q: "Can I get a home valuation in Buckingham specifically?",
    a: "Yes. I prepare free, no-commitment valuations anchored on recent comparable sales on your street and in your sub-sector, Buckingham core, Masson, Angers village or rural fringe. Each of these has a different price profile and an Aylmer-trained eye won't catch the nuances. Reach out for a personalized response and analysis.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Buckingham",
    text: "The historic heart of eastern Gatineau. Downtown with full services, varied homes ranging from early 20th-century character properties to recent builds on large lots. Rooted community, small-town atmosphere.",
  },
  {
    title: "Masson-Angers",
    text: "Closer to central Gatineau, Masson-Angers runs along the Ottawa River. Quiet residential area, with homes on large lots and trails along the river. It attracts families who want to be a bit closer to the city without giving up space.",
  },
  {
    title: "Angers and the rural edge",
    text: "Angers is part of Masson-Angers, in Gatineau. Beyond it, the neighbouring municipality of L'Ange-Gardien is part of the MRC des Collines-de-l'Outaouais. Large properties and wooded lots, for buyers who want space above all. Wells and septic systems are common, so the inspection matters a lot in this area.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, large lots, hills.", href: "/en/cantley/" },
  { title: "Gatineau centre", text: "Services, residential, central.", href: "/en/gatineau/" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy/" },
  { title: "Free valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
];

const BuckinghamPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Buckingham Masson-Angers | Large Lots | YGS"
      description="Buy or sell in Buckingham and Masson-Angers, Gatineau. Large lots, space, affordable prices. Local Outaouais broker: Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Buckingham"
      description="Buy or sell in Buckingham and Masson-Angers, Gatineau. Large lots, space, affordable prices."
      lat={45.5860}
      lng={-75.4190}
      url="/en/buckingham/"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Buckingham"
      description="Real estate brokerage services in Buckingham and Masson-Angers, Gatineau."
      url="/en/buckingham/"
      serviceType="Real Estate Brokerage"
      areaServed={["Buckingham", "Masson-Angers", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="BUCKINGHAM · MASSON-ANGERS · GATINEAU"
      title="Real estate broker in Buckingham, more space in east Gatineau"
      subtitle="Buckingham and Masson-Angers are Gatineau's eastern sectors. Lots are large here and homes are roomy, with a slower pace of life. For buyers who've done the math and want space, it's often a pleasant surprise."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=buckingham" }}
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo: Sorcier du Lac, CC BY-SA 4.0, Wikimedia Commons (cropped)", href: "https://commons.wikimedia.org/wiki/File:Rivi%C3%A8re_du_Li%C3%A8vre,_Buckingham,_Qu%C3%A9bec_2024-20-14_16-20-19.jpg" }}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Buckingham and Masson-Angers, the facts</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Buckingham is one of the five historic sectors that merged to form the City of Gatineau in 2002. A former industrial town, Buckingham long lived off the forest industry: a sawmill from 1864, then a pulp mill in the 20th century. Today it's a quiet residential area with a strong community identity and a functional downtown. Masson-Angers, closer to central Gatineau, runs along the Ottawa River and offers a semi-rural atmosphere favoured by families.
        </p>
        <p className="prose-body">
          What fundamentally sets this area apart from all others in Gatineau: space. Lots are larger, homes are more spacious, and streets are quieter. This area primarily attracts established families, upsizing buyers who want more room, and, since 2020, remote workers who no longer need to be close to Ottawa daily.
        </p>
        <p className="prose-body">
          Buckingham has a lively downtown: grocery stores, pharmacy, restaurants, medical clinic, library, arena, secondary school. For big-box stores and specialized services, you head to central Gatineau, roughly 30 to 36 km away by road (Les Promenades Gatineau, depending on the route).
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sub-sectors ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="mt-3">Buckingham vs Masson-Angers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Distance ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">The distance question, an honest answer</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          The main question buyers ask about Buckingham: "Isn't it too far?"
        </p>
        <p className="prose-body">
          It depends on your situation. Buckingham is about 38 km from downtown Ottawa and 30 to 36 km from Les Promenades Gatineau by road, so the drive time depends a lot on traffic. For someone working full-time in person in Ottawa, it's a long daily commute.
        </p>
        <p className="prose-body">
          For someone working remotely part-time (2-3 days/week) or based in Gatineau, the distance becomes an advantage, you get much more space for the same budget.
        </p>
        <p className="prose-body">
          It's a lifestyle decision as much as a budget one. I help you weigh it, without pushing you toward a property that doesn't fit your reality.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Buckingham is one of the five historic sectors that formed the City of Gatineau. Functional downtown, with everyday services on site.",
            "Masson-Angers runs along the Ottawa River and offers the closest semi-rural atmosphere to central Gatineau in this eastern sector.",
            "In Q3 2026, the median single-family price in the Buckingham/Masson-Angers sector was $395,000, the lowest of the four sectors of the city of Gatineau (QPAREB).",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-[var(--ink-soft)] mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/en/home-valuation/">Get the real numbers →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ MARKET DATA ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Buckingham &amp; Masson-Angers, what the 2026 numbers say</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          In Q3 2026, QPAREB counted 138 active single-family listings in the Buckingham/Masson-Angers sector, 47% more than a year earlier, with 89 sales (down 23%) and a median price of $395,000 (Centris data). For an Ottawa family, a useful reference is Ottawa's single-family benchmark price of $705,100 in September 2026 (Ottawa Real Estate Board, MLS® HPI). The two figures aren't the same measure (benchmark price vs. median) and don't cover the same period.
        </p>
        <p className="prose-body">
          Single-family homes in the sector sold in 34 days on average in Q3 2026 (QPAREB), in line with the metropolitan Gatineau average. The lesson for sellers: pricing strategy and pre-sale preparation affect how long a home stays on the market.
        </p>
        <p className="prose-body">
          For first-time buyers, the federal Home Buyers' Plan (HBP, up to $60,000 per person from RRSP) and the Tax-Free First Home Savings Account (FHSA, up to $40,000 lifetime) stack with provincial programs. Combined with Buckingham's entry prices, the math for a couple with two solid jobs in Gatineau or partial-remote in Ottawa often beats anything available on the Ontario side at the same down-payment level. I walk every first-time buyer through this calculation before we visit a single property, it usually changes their search radius.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Frequently asked questions about Buckingham and Masson-Angers" items={faq} updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explore other areas"
      title="Related reading"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      lang="en"
      guideType="buyer_guide"
      headline="Free Buyer Guide: buying in Buckingham"
      text="Process, budget and tips for buying in the area, in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buying or selling in Buckingham?"
      text="I know the area, let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation/" },
        { label: "Book a consultation →", href: "/en/buyer-consultation/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default BuckinghamPageEn;
