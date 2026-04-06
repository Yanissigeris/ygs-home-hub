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
import heroImg from "@/assets/hero-gatineau-centre-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Gatineau centre vs Aylmer — which one to choose?",
    a: "The main difference comes down to lifestyle and where you work. Gatineau centre offers better access to services (hospital, cégep, big-box stores) and is generally more affordable than Aylmer. Aylmer offers a more nature-oriented lifestyle, newer homes, and a more bilingual environment. If you work in Gatineau, the centre may be more practical. If you're coming from Ottawa, Aylmer is often preferred. I can help you compare honestly based on your situation.",
  },
  {
    q: "Is it a good area to invest in a plex?",
    a: "Gatineau centre holds a significant share of the city's existing plex inventory. Rental demand is supported by the Cégep de l'Outaouais, the hospital, and services within accessible reach. As everywhere, an honest return analysis is essential before any purchase. I handle that with you.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Limbour",
    text: "Established residential neighbourhood, homes on tree-lined streets, Bois-Dollard Park. Rooted family clientele. Good access to shops and services along Boulevard Maloney.",
  },
  {
    title: "Manoir-des-Trembles / La Gappe",
    text: "Planned neighbourhoods developed mainly in the 1990s–2000s. Two-storey homes, quiet streets, schools nearby. Popular with young families settling in Gatineau.",
  },
  {
    title: "Plex area — centre",
    text: "Historic concentration of duplexes and triplexes close to shops and STO public transit. Diverse tenant base: cégep students, families, workers. Active investment market.",
  },
  {
    title: "Boulevard Maloney area",
    text: "Gatineau's main commercial corridor. All big-box stores, medical services, restaurants. Residential properties near this corridor are convenient but the environment is more urban and busier.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Invest in a plex", text: "Return analysis, investment strategy.", href: "/en/plex" },
  { title: "Hull", text: "Urban, culture, condos.", href: "/en/hull" },
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy" },
];

const GatineauCentrePageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Gatineau Centre | Plexes, Homes, Condos | YGS"
      description="Buy, sell or invest in Gatineau centre. Plexes, single-family homes, condos. Local broker for nearly 9 years — Yanis Gauthier-Sigeris."
    />
    <NeighborhoodJsonLd
      name="Gatineau (centre)"
      description="Buy, sell or invest in Gatineau centre. Plexes, single-family homes, condos. Local broker."
      lat={45.4765}
      lng={-75.7013}
      url="/en/gatineau-centre"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Gatineau Centre"
      description="Real estate brokerage services in Gatineau centre — plexes, homes, condos."
      url="/en/gatineau-centre"
      serviceType="Real Estate Brokerage"
      areaServed={["Gatineau (centre)", "Québec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="GATINEAU CENTRE · QUÉBEC"
      title="Real estate broker in Gatineau centre — accessibility, services and value"
      subtitle="Gatineau's central area is often underestimated. Yet it's the city's best-served sector — hospital, universities, cégep, transit, shops. And one of the most accessible for families and investors."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=gatineau" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">AREA PORTRAIT</p>
      <h2 className="mt-3">Gatineau centre — well served, well positioned</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          The Gatineau sector (in the municipal district sense, distinct from Aylmer and Hull) covers a large area to the north and east of the city — including the Limbour, La Gappe, Manoir-des-Trembles neighbourhoods, and the areas around Boulevard Maloney. It's Gatineau's residential core, with the highest concentration of public services: Gatineau Hospital, Cégep de l'Outaouais, several secondary schools, the STO public transit network, and major retail centres.
        </p>
        <p className="prose-body">
          For families who work in Gatineau (rather than Ottawa), this area often offers the best balance between access to services and residential quality of life. For investors, Gatineau centre holds a significant share of the existing plex inventory — well-located duplexes and triplexes, close to services and transit corridors.
        </p>
        <p className="prose-body">
          The City of Gatineau, with a population of 298,000, is the fourth-largest city in Québec. (Source: Ville de Gatineau, 2024). The central area benefits directly from all municipal infrastructure investments.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sub-sectors ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">THE NEIGHBOURHOODS</p>
        <h2 className="mt-3">Gatineau centre neighbourhoods to know</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Gatineau is the 4th-largest city in Québec with 298,000 residents. (Source: Ville de Gatineau, 2024)",
            "Gatineau Hospital, Cégep de l'Outaouais and the STO transit network are all located in this area.",
            "In 2026, the Outaouais real estate board notes increased interest in turnkey properties — this area benefits from that trend.",
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
    <FAQSection title="Frequently asked questions — Gatineau centre" items={faq} />

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
      headline="Free Buyer Guide — buying in Gatineau"
      text="Process, budget and tips for buying in the area — in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buyer or seller in Gatineau centre?"
      text="I know the area — let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation" },
        { label: "Analyze a plex →", href: "/en/plex", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default GatineauCentrePageEn;
