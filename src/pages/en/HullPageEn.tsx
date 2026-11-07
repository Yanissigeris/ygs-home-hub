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
import heroImg from "@/assets/hero-hull-photo.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "What types of properties can you buy in Hull?",
    a: "Hull offers a wide variety of properties: older and new condos, duplexes, triplexes, single-family homes and townhouses. It also has many income properties. The options change depending on whether you want to live there or invest. I can guide you based on your profile during a free consultation.",
  },
  {
    q: "Is the Zibi project a good buy?",
    a: "Zibi is an ongoing development on Île de Hull. The first residential phases are occupied. It's a modern area with beautiful river views, but new condos are generally more expensive than resale in the adjacent area. I compare both options with you.",
  },
  {
    q: "Is Hull a good choice for federal public servants?",
    a: "Yes, several federal departments and agencies have offices in Hull, including Place du Portage and Terrasses de la Chaudière. For those who work in Ottawa, several parts of Hull let you cross the bridges on foot or by bike.",
  },
  {
    q: "What does a Hull condo or single-family home cost in 2026?",
    a: "In Q3 2026, QPAREB's Hull sector recorded a median price of $289,900 for condos and $475,000 for single-family homes (Centris data). Over the previous 12 months, the median plex price was $597,750. Within Hull, prices vary a lot with the building's age, parking and view, so I compare recent sales of similar properties before any offer.",
  },
  {
    q: "What is the rental yield on a Hull plex right now?",
    a: "It depends on the price and the rents in place. Rental demand has dropped since COVID, and CMHC measured a 3.8% vacancy rate for rental apartments in the Gatineau area in October 2025, up from 1.9% a year earlier. I run the numbers on every property before recommending an offer.",
  },
  {
    q: "Will the Gatineau-Ottawa tramway change Hull property values?",
    a: "Possibly, but nothing is certain yet. In February 2026, Québec gave Mobilité Infra Québec a nine-month mandate to review the tramway project, which would link Aylmer and the Plateau to downtown Ottawa. In June 2026, Mobilité Infra Québec estimated its cost at about $8 billion for 24 km, to be built in several phases. The 2035 opening targeted by the former project office remains to be confirmed. Any effect on values depends on the project being built, so I price Hull properties on today's sales and treat the tramway as a possibility, not a given.",
  },
  {
    q: "Are Hull's older buildings safe to buy as a first home?",
    a: "Many of Hull's character properties are 80 to 120 years old, which means knob-and-tube wiring, cast-iron plumbing, asbestos in older insulation, and occasional foundation movement are all possible. None of these is a deal-breaker. Quebec inspectors and tradespeople know them well, but these issues call for an experienced building inspector and a realistic renovation budget.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Hull",
    text: "The historic heart. The Sentier culturel, murals, restaurants and bars. Character architecture, older revenue buildings, lively neighbourhood life. Steps from the Canadian Museum of History.",
  },
  {
    title: "Île de Hull / Zibi Project",
    text: "Ongoing development on the former Domtar mill site. New condos, river views, zero-carbon district heating, riverfront public spaces. First phases are occupied. An area under active construction.",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Central area, 1960s to 1980s bungalows, larger lots, still-accessible prices.",
  },
  {
    title: "Lac Leamy",
    text: "Home to the Casino du Lac-Leamy and Lac-Leamy Park. Condos and properties with lake access, beach, trails. Lively summers around the beach and trails.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Living in Hull: the guide", text: "Daily life, culture, restaurants and neighbourhood feel.", href: "/en/living-hull/" },
  { title: "Invest in a plex", text: "Return analysis, investment strategy.", href: "/en/plex/" },
  { title: "Aylmer", text: "Families, bilingual.", href: "/en/aylmer/" },
  { title: "Relocating from Ottawa", text: "Buying in Gatineau from Ontario.", href: "/en/relocation/" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau/" },
];

const HullPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Hull Gatineau | Condos, Plexes, Homes | YGS"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker: Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <NeighborhoodJsonLd
      name="Hull"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker."
      lat={45.4283}
      lng={-75.7140}
      url="/en/hull/"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Hull"
      description="Real estate brokerage services in Hull, Gatineau: condos, plexes, homes."
      url="/en/hull/"
      serviceType="Real Estate Brokerage"
      areaServed={["Hull", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Real estate broker in Hull, at the heart of urban Outaouais"
      subtitle="Hull is Gatineau's most urban area, directly across from Ottawa. The Zibi project is reshaping the area, which draws professionals and bilingual families as much as investors."
      primaryCta={{ label: "Free Home Valuation →", href: "/en/home-valuation-hull/" }}
      secondaryCta={{ label: "See Hull properties →", href: "/en/properties?area=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Why Hull ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Hull: the area reinventing itself</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull is Gatineau's historic sector, located directly across the Ottawa River from downtown Ottawa. It's the city's densest area, condos, plexes, character homes, restaurants, museums. For federal workers who want to cross the bridge on foot or by bike, it's the closest area.
        </p>
        <p className="prose-body">
          The Zibi project is currently transforming Île de Hull and Chaudière Island. This 34-acre development built on both banks of the Ottawa River, in both Gatineau and Ottawa, includes residential condos, office space, retail and public spaces. The federal government calls it the National Capital Region's first net-zero community, and Zibi is building a zero-carbon district heating and cooling system. The first phases are occupied. (Source: zibi.ca, Natural Resources Canada, 2021)
        </p>
        <p className="prose-body">
          For investors, Hull remains a plex sector: 106 plexes sold there over the last 12 months (QPAREB, Q3 2026). Rental demand has dropped since COVID, so I start from the rents in place before talking about returns.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sub-sectors ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
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
      <h2 className="mt-3">Investing in a plex in Hull, what you need to understand</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull has long drawn multiplex investors, because of its residential density and its proximity to Ottawa. The rental market has cooled since COVID.
        </p>
        <p className="prose-body">
          According to CMHC, the rental vacancy rate in the Gatineau area rose from 1.9% in October 2024 to 3.8% in October 2025. The increase was most pronounced in the Hull and Gatineau zones. So return analysis matters even more.
        </p>
        <p className="prose-body">
          Over the last 12 months, the median plex price in Hull was $597,750, up 6% (QPAREB, Q3 2026). In the deals I handle, plexes with below-market rents sell faster. A poorly rented or poorly maintained plex stays on the market longer, and its price gets negotiated. I'm also seeing more owner-occupants buying a duplex or triplex to live in.
        </p>
        <p className="prose-body">
          I'm a real estate investor myself, my analysis is honest, not a sales pitch.
        </p>
      </div>
      <div className="mt-6">
        <Button size="lg" asChild>
          <Link to="/en/plex/">Analyze a plex with me →</Link>
        </Button>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Hull is the closest area to Ottawa in Gatineau, Alexandra, Champlain, Portage and Chaudières bridges.",
            "The Zibi project is an active, ongoing development, adjacent areas benefit from this transformation.",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-[var(--ink-soft)] mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/en/home-valuation-hull/">Free Home Valuation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ MARKET DATA ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Hull, what the 2026 numbers say</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull mixes older condos, older plexes, single-family homes and new-build condos in the same sector. In Q3 2026, QPAREB's Hull sector recorded a median price of $289,900 for condos and $475,000 for single-family homes (Centris data). Over the previous 12 months, the median plex price was $597,750. Condos took longer to sell than houses: 38 days on average, compared with 22 days for single-family homes.
        </p>
        <p className="prose-body">
          On the income side, plexes are the main reason Hull is on Outaouais investors' shortlists. Federal offices at Place du Portage, Place du Centre and Terrasses de la Chaudière generate stable demand from public servants who want to walk to work. The 2025-2026 cycle did rebalance the rental market. New builds delivered in Hull and on Île de Hull pushed vacancy slightly higher and capped rent growth, but older plexes with below-market tenants and renovation upside still trade actively. Cap rates on those older buildings typically land between 5% and 7% gross.
        </p>
        <p className="prose-body">
          The wild card for the next few years is the tramway. Under review by Mobilité Infra Québec since February 2026, the project would link Aylmer and the Plateau to downtown Ottawa. In June 2026, its cost was estimated at about $8 billion for 24 km, to be built in several phases, and the 2035 opening targeted by the former project office remains to be confirmed. I treat the tramway as a possibility, not a guaranteed lift, and I price every Hull listing on today's fundamentals first.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Frequently asked questions about Hull, Gatineau" items={faq} updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }} />

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
      headline="Free Investor Guide: plex in Hull"
      text="Returns, taxes and investment strategy, in a guide sent by email."
      ctaLabel="Get the Investor Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Your Hull project: where to start?"
      text="Buying, selling, rental investment, Hull is an area I know in depth. Let's talk about your project."
      buttons={[
        { label: "Free Home Valuation →", href: "/en/home-valuation-hull/" },
        { label: "Analyze a plex →", href: "/en/plex/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide, get it by email" />
  </>
);

export default HullPageEn;
