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
import heroImg from "@/assets/hero-buckingham-gen.jpg";

/* ── FAQ data ── */
const faq = [
  {
    q: "Is Buckingham too far from Ottawa to live there?",
    a: "Buckingham is about 45–50 minutes from Ottawa by car depending on traffic. For a daily in-person commute to Ottawa, it is indeed a significant trip. For partial remote work or a job in Gatineau, it's entirely manageable — and the gain in space and quality of life is significant. During our consultation, I can help you weigh this trade-off honestly based on your real situation.",
  },
  {
    q: "Are there services in Buckingham?",
    a: "Yes — Buckingham has a functional downtown with daily essentials: grocery stores, pharmacy, medical clinic, restaurants, library, elementary and secondary schools, arena. It's not the same offering as Aylmer or Hull, but daily needs are covered. For big-box stores and medical specialists, you head to central Gatineau (30–40 minutes).",
  },
  {
    q: "Do Buckingham properties have wells?",
    a: "A large portion of Buckingham is connected to municipal water and sewer — unlike more rural areas like Cantley or L'Ange-Gardien. In the core Buckingham area, properties are generally on municipal services. On the outskirts, verification is needed. I systematically confirm this point for every property visited.",
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
    text: "Closer to central Gatineau, Masson-Angers runs along the Ottawa River. Quiet residential area, homes on generous lots, access to riverside trails. Attracts families who want to be a bit closer to the city while keeping space and tranquility.",
  },
  {
    title: "Angers / L'Ange-Gardien",
    text: "Transition zone toward rural MRCs. Large properties, woodlands, silence. For those truly seeking space. Wells and septic systems are common — inspection is crucial in this area.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, large lots, hills.", href: "/en/cantley" },
  { title: "Gatineau centre", text: "Services, residential, central.", href: "/en/gatineau-centre" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy" },
  { title: "Free valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
];

const BuckinghamPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Buckingham Masson-Angers | Large Lots | YGS"
      description="Buy or sell in Buckingham and Masson-Angers, Gatineau. Large lots, space, affordable prices. Local Outaouais broker — Yanis Gauthier-Sigeris."
    />
    <NeighborhoodJsonLd
      name="Buckingham"
      description="Buy or sell in Buckingham and Masson-Angers, Gatineau. Large lots, space, affordable prices."
      lat={45.5860}
      lng={-75.4190}
      url="/en/buckingham"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Buckingham"
      description="Real estate brokerage services in Buckingham and Masson-Angers, Gatineau."
      url="/en/buckingham"
      serviceType="Real Estate Brokerage"
      areaServed={["Buckingham", "Masson-Angers", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="BUCKINGHAM · MASSON-ANGERS · GATINEAU"
      title="Real estate broker in Buckingham — the space Gatineau no longer offers"
      subtitle="Buckingham and Masson-Angers are Gatineau's eastern sectors. This is where lots are large, homes have space, and the pace of life is different. For buyers who've done the math and truly want space, it's often the Outaouais market's revelation."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=buckingham" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">Buckingham and Masson-Angers — the facts</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Buckingham is one of the five historic sectors that merged to form the City of Gatineau in 2002. A former industrial town — its economy was built on paper mills for over a century — Buckingham is now a quiet residential area with a strong community identity and a functional downtown. Masson-Angers, closer to central Gatineau, runs along the Ottawa River and offers a semi-rural atmosphere favoured by families.
        </p>
        <p className="prose-body">
          What fundamentally sets this area apart from all others in Gatineau: space. Lots are larger, homes are more spacious, and streets are quieter. This area primarily attracts established families, upsizing buyers who want more room, and — since 2020 — remote workers who no longer need to be close to Ottawa daily.
        </p>
        <p className="prose-body">
          Buckingham has a lively downtown: grocery stores, pharmacy, restaurants, medical clinic, library, arena, secondary school. For big-box stores and specialized services, you head to central Gatineau (30–40 minutes).
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sub-sectors ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">THE AREAS</p>
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
      <p className="label-overline">HONESTY</p>
      <h2 className="mt-3">The distance question — an honest answer</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          The main question buyers ask about Buckingham: "Isn't it too far?"
        </p>
        <p className="prose-body">
          The honest answer depends on your situation. Buckingham is about 45–50 minutes from Ottawa depending on traffic, and 30–40 minutes from central Gatineau. For someone working full-time in person in Ottawa, it is indeed a significant daily commute.
        </p>
        <p className="prose-body">
          For someone working remotely part-time (2–3 days/week) or based in Gatineau, the distance becomes an advantage — you get much more space for the same budget.
        </p>
        <p className="prose-body">
          It's a lifestyle decision as much as a budget one. I help you weigh it honestly, without selling you a property that wouldn't match your reality.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Buckingham is one of the five historic sectors that formed the City of Gatineau. Functional downtown with essential services on site.",
            "Masson-Angers runs along the Ottawa River and offers the closest semi-rural atmosphere to central Gatineau in this eastern sector.",
            "In 2026, the Outaouais real estate board notes increased interest in turnkey properties — the Buckingham area benefits from this growing appeal for space and affordability.",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-accent mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/en/home-valuation">Get the real numbers →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Frequently asked questions — Buckingham and Masson-Angers" items={faq} />

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
      headline="Free Buyer Guide — buying in Buckingham"
      text="Process, budget and tips for buying in the area — in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buying or selling in Buckingham?"
      text="I know the area — let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation" },
        { label: "Book a consultation →", href: "/en/buyer-consultation", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default BuckinghamPageEn;
