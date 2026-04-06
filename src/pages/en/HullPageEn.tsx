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
import heroImg from "@/assets/hero-hull-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "What types of properties can you buy in Hull?",
    a: "Hull offers the widest variety in Gatineau: older and new condos, duplexes, triplexes, single-family homes, and townhouses. It's also the area with the most income properties. Depending on your goal — living, renting, or investing — the options differ. I can guide you based on your profile during a free consultation.",
  },
  {
    q: "Is the Zibi project a good opportunity?",
    a: "Zibi is an ongoing development on Île de Hull. The first residential phases are occupied. It's a modern, carbon-neutral area with beautiful river views — but new condos are generally more expensive than resale in the adjacent area. Properties in neighbourhoods around Zibi (Vieux-Hull, Wrightville) have benefited from the appreciation effect at more accessible prices. I can help you compare options.",
  },
  {
    q: "Is Hull a good choice for federal public servants?",
    a: "Yes — many federal departments and agencies have offices on the Québec side in Gatineau (Portage Complex, Tour de la Paix, etc.). And even for those working in Ottawa, bridges are accessible by bike or on foot from several Hull areas. That's one of the reasons Hull remains in high demand among public servants on both sides of the river.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Hull",
    text: "The historic heart. The Sentier culturel, murals, Laramée Street restaurants, Fournier Boulevard bars. Character architecture, older revenue buildings, lively neighbourhood life. Steps from the Canadian Museum of History.",
  },
  {
    title: "Île de Hull / Zibi Project",
    text: "Ongoing development on the former Domtar mill site. New condos, river views, carbon-neutral heating system, riverfront public spaces. First phases are occupied. An area under active construction.",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Central area, 1960s–80s bungalows, larger lots, still-accessible prices. Located on the corridor of the future Gatineau-Ottawa tramway — an active infrastructure project that could transform mobility in this area.",
  },
  {
    title: "Lac Leamy",
    text: "Home to the Casino du Lac-Leamy and Lac-Leamy Park. Condos and properties with lake access, beach, trails. More affluent clientele, lively summers.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Invest in a plex", text: "Return analysis, investment strategy.", href: "/en/plex" },
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer" },
  { title: "Relocating from Ottawa", text: "Buying in Gatineau from Ontario.", href: "/en/relocating-from-ottawa" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau-centre" },
];

const HullPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Hull Gatineau | Condos, Plexes, Homes | YGS"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <NeighborhoodJsonLd
      name="Hull"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker."
      lat={45.4283}
      lng={-75.7140}
      url="/en/hull"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Hull"
      description="Real estate brokerage services in Hull, Gatineau — condos, plexes, homes."
      url="/en/hull"
      serviceType="Real Estate Brokerage"
      areaServed={["Hull", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Real estate broker in Hull — at the heart of urban Outaouais"
      subtitle="Hull is Gatineau's most urban area. Directly facing Ottawa, undergoing transformation with the Zibi project, Hull attracts professionals, bilingual families and investors. This is where the city moves the most."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See Hull properties →", href: "/en/properties?area=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Why Hull ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">WHY HULL</p>
      <h2 className="mt-3">Hull: the area reinventing itself</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull is Gatineau's historic sector, located directly across the Ottawa River from downtown Ottawa. It's the city's densest area — condos, plexes, character homes, restaurants, museums. For federal workers who want to cross the bridge on foot or by bike, it's often the first choice.
        </p>
        <p className="prose-body">
          The Zibi project is currently transforming Île de Hull and Chaudière Island. This 34-acre development built on both banks of the Ottawa River — in both Gatineau and Ottawa — includes residential condos, office space, retail and public spaces. It's the National Capital Region's first carbon-neutral neighbourhood, using an energy system unique in North America. The first phases are occupied. (Source: zibi.ca, Radio-Canada)
        </p>
        <p className="prose-body">
          For investors, Hull holds the majority of Gatineau's plex inventory. Rental demand comes from federal public servants, Université du Québec en Outaouais (UQO) students — whose campus is located in Hull — and young professionals. A rental market anchored in a stable employment base.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sub-sectors ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">THE AREAS</p>
        <h2 className="mt-3">Hull's areas to know</h2>
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

    {/* ═══ SECTION 3 — Investing ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">INVESTMENT</p>
      <h2 className="mt-3">Investing in a plex in Hull — what you need to understand</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull is historically Gatineau's most active area for multiplex investment. Residential density, proximity to Ottawa, the presence of UQO and federal public servants create sustained rental demand — particularly for affordable housing.
        </p>
        <p className="prose-body">
          Gatineau's rental market underwent a rebalancing in 2025–2026 with the arrival of a large number of new builds. This shift makes return analysis even more critical. Older plexes with moderate rents remain the most in demand.
        </p>
        <p className="prose-body">
          I'm a real estate investor myself — my analysis is honest, not a sales pitch.
        </p>
      </div>
      <div className="mt-6">
        <Button size="lg" asChild>
          <Link to="/en/plex">Analyze a plex with me →</Link>
        </Button>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Hull is the closest area to Ottawa in Gatineau — Alexandra, Champlain, Portage and Chaudières bridges.",
            "The Zibi project is an active, ongoing development — adjacent areas benefit from this transformation.",
            "UQO and federal offices on the Québec side anchor stable rental demand in Hull.",
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
    <FAQSection title="Frequently asked questions — Hull, Gatineau" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explore other areas"
      title="Related reading"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      lang="en"
      guideType="investor_guide"
      headline="Free Investor Guide — plex in Hull"
      text="Returns, taxes and investment strategy — in a guide sent by email."
      ctaLabel="Get the Investor Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Your Hull project — where to start?"
      text="Buying, selling, rental investment — Hull is an area I know in depth. Let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation" },
        { label: "Analyze a plex →", href: "/en/plex", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);

export default HullPageEn;
