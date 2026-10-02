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
    a: "Hull offers a wide variety of properties: older and new condos, duplexes, triplexes, single-family homes and townhouses. It also has many income properties. The options change depending on whether you want to live there or invest. I can guide you based on your profile during a free consultation.",
  },
  {
    q: "Is the Zibi project a good buy?",
    a: "Zibi is an ongoing development on Île de Hull. The first residential phases are occupied. It's a modern, carbon-neutral area with beautiful river views, but new condos are generally more expensive than resale in the adjacent area. Properties in neighbourhoods around Zibi (Vieux-Hull, Wrightville) have benefited from the appreciation effect at more accessible prices. I can help you compare options.",
  },
  {
    q: "Is Hull a good choice for federal public servants?",
    a: "Yes, several federal departments and agencies have offices in Hull, including Place du Portage and Terrasses de la Chaudière. For those who work in Ottawa, several parts of Hull let you cross the bridges on foot or by bike.",
  },
  {
    q: "What does a Hull condo or single-family home cost in 2026?",
    a: "In Q2 2026, APCIQ's Hull sector recorded a median price of $282,000 for condos and $514,500 for single-family homes (Centris data). Over the previous 12 months, the median plex price was $585,000. Within Hull, prices vary a lot with the building's age, parking and view, so I compare recent sales of similar properties before any offer.",
  },
  {
    q: "What is the rental yield on a Hull plex right now?",
    a: "Gross yields on older Hull plexes typically run 5-7% before financing and reno reserves, depending on whether rents are at market or below market (a common situation in this sector). Net cash-on-cash returns after a conventional 25% down-payment, financing at current rates, and a 10% maintenance/vacancy reserve are usually in the 3-5% range, sometimes negative on the most overpriced listings. The 2025-2026 rebalancing of Gatineau's rental market makes return analysis matter more. I run the numbers on every property before recommending an offer.",
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
    text: "The historic heart. The Sentier culturel, murals, Laramée Street restaurants, Fournier Boulevard bars. Character architecture, older revenue buildings, lively neighbourhood life. Steps from the Canadian Museum of History.",
  },
  {
    title: "Île de Hull / Zibi Project",
    text: "Ongoing development on the former Domtar mill site. New condos, river views, carbon-neutral heating system, riverfront public spaces. First phases are occupied. An area under active construction.",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Central area, 1960s to 1980s bungalows, larger lots, still-accessible prices.",
  },
  {
    title: "Lac Leamy",
    text: "Home to the Casino du Lac-Leamy and Lac-Leamy Park. Condos and properties with lake access, beach, trails. More affluent clientele, lively summers.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Living in Hull: the guide", text: "Daily life, culture, restaurants and neighbourhood feel.", href: "/en/living-hull/" },
  { title: "Invest in a plex", text: "Return analysis, investment strategy.", href: "/en/plex/" },
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer/" },
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
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation-hull/" }}
      secondaryCta={{ label: "See Hull properties →", href: "/en/properties?area=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Why Hull ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Hull: the area reinventing itself</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull is Gatineau's historic sector, located directly across the Ottawa River from downtown Ottawa. It's the city's densest area, condos, plexes, character homes, restaurants, museums. For federal workers who want to cross the bridge on foot or by bike, it's often the first choice.
        </p>
        <p className="prose-body">
          The Zibi project is currently transforming Île de Hull and Chaudière Island. This 34-acre development built on both banks of the Ottawa River, in both Gatineau and Ottawa, includes residential condos, office space, retail and public spaces. It's the National Capital Region's first carbon-neutral neighbourhood, with its own district energy system. The first phases are occupied. (Source: zibi.ca, Radio-Canada)
        </p>
        <p className="prose-body">
          For investors, Hull holds the majority of Gatineau's plex inventory. Rental demand comes from federal public servants, Université du Québec en Outaouais (UQO) students, whose campus is located in Hull, and young professionals. A rental market anchored in a stable employment base.
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
          Hull has long drawn multiplex investors. Residential density, proximity to Ottawa, the presence of UQO and federal public servants create sustained rental demand, particularly for affordable housing.
        </p>
        <p className="prose-body">
          Gatineau's rental market underwent a rebalancing in 2025-2026 with the arrival of a large number of new builds. So return analysis matters even more. Older plexes with moderate rents are still in high demand.
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
            <Link to="/en/home-valuation-hull/">Get the real numbers →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ MARKET DATA ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Hull, what the 2026 numbers say</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull mixes older condos, older plexes, single-family homes and new-build condos in the same sector. In Q2 2026, APCIQ's Hull sector recorded a median price of $282,000 for condos and $514,500 for single-family homes, and the median plex price over the previous 12 months was $585,000 (Centris data). Condos took longer to sell than houses: 41 days on average, compared with 21 days for single-family homes.
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
    <FAQSection title="Frequently asked questions about Hull, Gatineau" items={faq} />

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
        { label: "Free valuation →", href: "/en/home-valuation-hull/" },
        { label: "Analyze a plex →", href: "/en/plex/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide, get it by email" />
  </>
);

export default HullPageEn;
