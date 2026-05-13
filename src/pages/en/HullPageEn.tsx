import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
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
  {
    q: "What does a Hull condo or single-family home cost in 2026?",
    a: "As of May 2026, resale condos in Vieux-Hull and Wrightville typically range from $235,000 (1-bed older buildings) to $475,000 (2-bed recent buildings with parking). New construction in the Zibi development starts around $425,000 for a 1-bed and reaches $850,000+ for larger river-view units. Single-family homes are scarcer and trade between $475,000 and $725,000 depending on sub-sector and condition. Older plexes (duplex/triplex) typically list between $625,000 and $950,000.",
  },
  {
    q: "What is the rental yield on a Hull plex right now?",
    a: "Gross yields on older Hull plexes typically run 5–7% before financing and reno reserves, depending on whether rents are at market or below market (a common situation in this sector). Net cash-on-cash returns after a conventional 25% down-payment, financing at current rates, and a 10% maintenance/vacancy reserve are usually in the 3–5% range — sometimes negative on the most overpriced listings. The 2025–2026 rebalancing of Gatineau's rental market makes return analysis more critical than ever; I run the actual numbers on every property before recommending an offer.",
  },
  {
    q: "Will the Gatineau-Ottawa tramway change Hull property values?",
    a: "The proposed Gatineau-Ottawa tramway would run a corridor through Wrightville and Val-Tétreau toward downtown Ottawa. The project is still in the planning and consultation phase — no service date is confirmed. Historically, confirmed light-rail corridors lift property values within walking distance by 5–15% over a 5–10 year horizon, but that effect is contingent on the project actually being built. I track the project monthly and factor it transparently into valuations rather than treating it as a guaranteed upside.",
  },
  {
    q: "Are Hull's older buildings safe to buy as a first home?",
    a: "Many of Hull's most attractive properties are 80–120 years old, which means knob-and-tube wiring, cast-iron plumbing, asbestos in older insulation, and occasional foundation movement are real possibilities. None of these are deal-breakers — they're well-understood by Quebec inspectors and tradespeople — but they require an experienced building inspector and a realistic renovation budget. I work with two inspectors who specialize in Hull's pre-1960 stock and I never recommend a first-time buyer go in without one.",
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
  { title: "Invest in a plex", text: "Return analysis, investment strategy.", href: "/en/plex/" },
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer/" },
  { title: "Relocating from Ottawa", text: "Buying in Gatineau from Ontario.", href: "/en/relocation/" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau/" },
];

const HullPageEn = () => (
  <>
    <SEO title="Real estate broker Hull Gatineau | YGS" description="Buy or sell in Hull with a local broker. Urban sector, Zibi project, proximity to Ottawa." canonical="https://yanisgauthier.com/en/hull" hreflangFr="https://yanisgauthier.com/hull" hreflangEn="https://yanisgauthier.com/en/hull" lang="en" />
    <PageMeta
      title="Real Estate Broker Hull Gatineau | Condos, Plexes, Homes | YGS"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <NeighborhoodJsonLd
      name="Hull"
      description="Buy or sell in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Local broker."
      lat={45.4283}
      lng={-75.7140}
      url="/en/hull/"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Hull"
      description="Real estate brokerage services in Hull, Gatineau — condos, plexes, homes."
      url="/en/hull/"
      serviceType="Real Estate Brokerage"
      areaServed={["Hull", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Real estate broker in Hull — at the heart of urban Outaouais"
      subtitle="Hull is Gatineau's most urban area. Directly facing Ottawa, undergoing transformation with the Zibi project, Hull attracts professionals, bilingual families and investors. This is where the city moves the most."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation-hull/" }}
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
          <Link to="/en/plex/">Analyze a plex with me →</Link>
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
            <Link to="/en/home-valuation-hull/">Get the real numbers →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ MARKET DATA ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">MARKET DATA</p>
      <h2 className="mt-3">Hull — what the 2026 numbers say</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull is the most heterogeneous market in metropolitan Gatineau and the only sector where you can credibly compare a $235,000 1-bed condo, a $625,000 century triplex and a $1.2M new-build river-view condo on the same Centris page. As of May 2026, resale condos in Vieux-Hull and Wrightville run from $235,000 to $475,000 depending on age, parking and view; Zibi new-build inventory starts around $425,000 for a 1-bed and pushes past $850,000 for the larger waterfront units. Older single-family homes in the residential streets behind boulevard Saint-Joseph trade between $475,000 and $725,000 — an inventory pocket that's slowly being absorbed by anglophone families relocating from the Glebe and Hintonburg.
        </p>
        <p className="prose-body">
          On the income side, plexes remain the structural reason Hull is on every Outaouais investor's shortlist. The Université du Québec en Outaouais (UQO) anchors a permanent rental pool of roughly 6,500 students; federal offices in the Portage Complex, Place du Centre and Tour de la Paix generate stable demand from public servants who want to walk to work. The 2025–2026 cycle did rebalance the rental market — new builds delivered in Hull and on Île de Hull pushed vacancy slightly higher and capped rent growth — but older plexes with below-market tenants and untapped renovation upside continue to trade actively. Cap rates on those older buildings typically land between 5% and 7% gross.
        </p>
        <p className="prose-body">
          The wild card for the next five years is the Gatineau-Ottawa tramway. The current alignment runs through Wrightville and Val-Tétreau toward downtown Ottawa via the Macdonald-Cartier Bridge corridor. The project is in planning and consultation, not construction — but historically, confirmed light-rail corridors lift values within walking distance by 5–15% over a 5–10 year horizon. I treat the tramway as plausible upside, not a guaranteed lift, and I price every Hull listing on today's fundamentals first.
        </p>
      </div>
    </ContentBlock>

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
        { label: "Free valuation →", href: "/en/home-valuation-hull/" },
        { label: "Analyze a plex →", href: "/en/plex/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);

export default HullPageEn;
