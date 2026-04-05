import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import heroImg from "@/assets/hero-hull-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "What is the price of a condo in Hull in 2026?",
    a: "The median condo price in Hull is around $299,000 in 2026, with a wide range depending on location and finishes. A studio in Vieux-Hull can be found around $200,000, while a 2-bedroom condo with river views in the Zibi area can exceed $450,000. Contact me for a precise analysis based on your budget and needs.",
  },
  {
    q: "Is the Zibi project a good buying opportunity?",
    a: "Zibi is an ambitious project transforming the former Domtar mill on Île de Hull and Île Chaudière. The first phases are delivered and the next ones are underway. It's an area with strong appreciation potential, but new-build prices are high. Properties in adjacent areas (Vieux-Hull, Wrightville) often benefit from the appreciation effect at more accessible prices. I can help you evaluate options based on your profile.",
  },
  {
    q: "Is it profitable to buy a plex in Hull?",
    a: "Hull offers the best conditions for rental investment in Outaouais: low vacancy, strong demand, good appreciation. But 'profitable' depends on purchase price, rents in place, property condition and your financing. I do honest return analyses — with real numbers. If a plex doesn't pass the test, I'll tell you clearly.",
  },
  {
    q: "Is Hull safe?",
    a: "Hull has a historical reputation that no longer reflects the reality of many areas. Vieux-Hull and Île de Hull have transformed considerably. Like any city, some areas are quieter than others. During your search, I guide you toward streets and micro-areas that match your expectations in terms of lifestyle and safety.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Hull",
    text: "The historic heart with the Sentier culturel, murals, Laramée and Fournier restaurants. Character architecture, older revenue buildings, lively neighbourhood life. Ideal for investors and buyers seeking urban authenticity.",
    tag: "Character · Investment",
  },
  {
    title: "Île de Hull — Zibi Project",
    text: "The future of Hull. New condos, modern architecture, river views, steps from the Canadian Museum of History. Clientele: young professionals, couples, federal workers. Rapidly rising prices.",
    tag: "New · Premium · Views",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Central area in transition. 1960s-80s bungalows, larger lots, still-accessible prices. Strong appreciation potential with the Gatineau-Ottawa tramway line in development. Attracts visionary investors.",
    tag: "Value · Potential · Tramway",
  },
  {
    title: "Lac Leamy",
    text: "Hull's premium area. Near the Casino and Nordik Spa, upscale condos, homes with lake views. Affluent clientele, business tourism, lucrative short-term rentals. Niche market.",
    tag: "Premium · Lake · Casino",
  },
];

/* ── Investment stats ── */
const investStats = [
  { number: "~1.9%", label: "Vacancy rate", note: "Among the lowest in Québec" },
  { number: "35 d.", label: "Average selling time — plex", note: "Above-average liquidity" },
  { number: "↑ 9%", label: "Plex price increase — 1 year", note: "Sustained appreciation" },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🎨", title: "Culture and urban life", text: "Canadian Museum of History (one of Canada's most visited), Casino du Lac-Leamy, Sentier culturel with murals and galleries, Vieux-Hull bars and restaurants, Gatineau en Feu festival. Hull offers a cultural life rare for a city this size." },
  { icon: "🌉", title: "Ottawa in 5 minutes", text: "Alexandra Bridge, Chaudières Bridge, Portage Bridge — three direct crossings to downtown Ottawa. For federal workers or professionals working in Ontario, Hull is often the best compromise: Québec quality of life, Ontario accessibility." },
  { icon: "🌊", title: "Nature and water in the city", text: "Leamy Park (beach, trails, water sports), Jacques-Cartier Park (Winterlude, Canada Day), riverfront promenade developing with Zibi. Hull is rare: a dense city with direct water access." },
];

/* ── Related pages ── */
const related = [
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau-centre" },
  { title: "Chelsea", text: "Artistic village, Gatineau Park.", href: "/en/chelsea" },
  { title: "Cantley", text: "Nature, countryside, families.", href: "/en/cantley" },
];

/* ── FAQPage JSON-LD injector ── */
const FAQPageJsonLd = ({ items }: { items: { q: string; a: string }[] }) => {
  useEffect(() => {
    const prev = document.getElementById("ygs-faqpage-jsonld");
    if (prev) prev.remove();
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ygs-faqpage-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("ygs-faqpage-jsonld")?.remove(); };
  }, [items]);
  return null;
};

const HullPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Hull Gatineau | YGS"
      description="Real estate broker specializing in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull. Free valuation."
    />
    <NeighborhoodJsonLd
      name="Hull"
      description="Real estate broker specializing in Hull, Gatineau. Condos, plexes, homes near Ottawa. Zibi project, Île de Hull, Vieux-Hull."
      lat={45.4283}
      lng={-75.7140}
      url="/en/hull"
    />
    <FAQPageJsonLd items={faq} />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Real estate broker in Hull — at the heart of urban Outaouais"
      subtitle="Hull is Gatineau's most dynamic area. Steps from Ottawa, transforming with the Zibi project, Hull attracts professionals and investors alike. Modern condos, profitable plexes, character homes — this is where it's happening."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See Hull properties →", href: "/en/properties?area=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — AREA PORTRAIT ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-3 space-y-4">
          <p className="label-overline">WHY HULL</p>
          <h2>Hull: the area reinventing itself</h2>
          <p className="prose-body mt-5">
            Hull is Gatineau's historic sector, located directly across the Ottawa River from downtown Ottawa. It's the city's most urban neighbourhood, with the highest density of condos, plexes, restaurants and shops. For federal workers, it's often the number one choice — cross the bridge and you're in downtown Ottawa in 10 minutes.
          </p>
          <p className="prose-body">
            The Zibi project, under development on Île de Hull and Chaudière Island, is transforming the area. Upscale new condos, riverfront public spaces, federal offices — it's the largest mixed-use real estate project in Outaouais in decades. Buyers positioning themselves now in adjacent areas benefit from the appreciation effect of this development.
          </p>
          <p className="prose-body">
            For investors, Hull offers the best rental returns in Gatineau. The vacancy rate is historically low (under 2%), tenants are plentiful (students, civil servants, young professionals), and plexes still sell at prices that allow positive cash flow when properly analyzed.
          </p>
        </div>

        {/* Right — Key facts card */}
        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Hull by the numbers</h3>
            <div className="space-y-3">
              {[
                { label: "Median condo price", value: "$299,000", badge: "↑ 7%" },
                { label: "Median home price", value: "$498,000", badge: "↑ 6%" },
                { label: "Average days on market", value: "21 days", badge: null },
                { label: "Market type", value: "Seller's", badge: null },
                { label: "Rental vacancy rate", value: "~1.9%", badge: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-[0.85rem] text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground text-[0.9375rem]">{item.value}</span>
                    {item.badge && (
                      <span className="text-xs font-medium text-accent">{item.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — SUB-SECTORS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">HULL'S AREAS</p>
        <h2 className="mt-3">Hull is not just one neighbourhood</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="inline-block text-xs font-medium text-accent">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — INVESTING IN HULL ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">RENTAL INVESTMENT</p>
        <h2 className="mt-3">Why investors choose Hull</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Hull is Gatineau's number one area for rental investment. Here's why the numbers speak for themselves.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {investStats.map((s) => (
            <div key={s.label} className="rounded-md border border-border bg-background p-6 text-center space-y-2">
              <p className="text-3xl font-serif font-bold text-foreground">{s.number}</p>
              <p className="font-semibold text-foreground text-[0.9375rem]">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="prose-body mt-8 max-w-2xl">
          A well-analyzed duplex or triplex in Hull can offer a gross return of 5 to 7%, depending on property condition, rents in place, and acquisition strategy. But mistakes are costly — ignored capital expenditures, below-market rents, misunderstood zoning. That's exactly where I come in: honest analysis before the decision.
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <Link to="/en/plex">Get a free plex analysis →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — BUY / SELL ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2>Buying or selling in Hull — what you need to know</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Buyers</h3>
            <p className="prose-body">
              Hull is a fast market. Well-positioned condos sell in under 2 weeks. For homes and plexes, the window is slightly wider but still short. Get your pre-approval before you start visiting.
            </p>
            <p className="prose-body">
              Ottawa buyers discovering Hull are often surprised: for the same budget as a 1-bedroom condo in Centretown, you can get a 2-bedroom condo with river views in Hull. A 5-minute bridge crossing by car or bike more than compensates.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Sellers</h3>
            <p className="prose-body">
              Hull's market has favoured sellers for several consecutive years. But the difference between a good sale and a great one comes down to details: the right price from the start, polished presentation, and marketing that also targets buyers from the Ontario side.
            </p>
            <p className="prose-body">
              If you're selling a plex, the return analysis I present to investor-buyers can justify a higher price — if the numbers support it.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — LIVING IN HULL ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">LIVING IN HULL</p>
        <h2 className="mt-3">What they don't tell you about Hull</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lifestyleCards.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 6 — FAQ ═══ */}
    <FAQSection title="Frequently asked questions — Hull" items={faq} />

    {/* ═══ SECTION 7 — CTA FINAL ═══ */}
    <CTASection
      dark
      title="Your Hull project — where to start?"
      text="Buying, selling, rental investment — I've known Hull for almost 9 years. Let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation" },
        { label: "Analyze a plex →", href: "/en/plex", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explore other areas"
      title="Discover"
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

    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);

export default HullPageEn;
