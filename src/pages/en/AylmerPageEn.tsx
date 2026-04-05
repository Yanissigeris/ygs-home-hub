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
import heroImg from "@/assets/hero-aylmer-gen.jpg";

/* ── FAQ data ── */
const faq = [
  {
    q: "What is the average home price in Aylmer in 2026?",
    a: "The median price for a single-family home in Aylmer is around $567,000 in early 2026, with significant variations by sub-sector. Lucerne and Rivermead are generally more expensive ($600,000–$750,000), while some streets in Breckenridge still offer options under $500,000. Contact me for a free, personalized analysis.",
  },
  {
    q: "Is Aylmer bilingual? Can my child attend an English school?",
    a: "Aylmer is one of the most bilingual areas in Gatineau. You'll find French schools (Commission scolaire des Portages de l'Outaouais) and English schools (Western Québec School Board). It's a major draw for Ottawa families or federal employees who want an English-friendly environment while living in Québec.",
  },
  {
    q: "How long does it take to sell a home in Aylmer?",
    a: "In 2025-2026, well-positioned properties in Aylmer sell on average between 20 and 35 days. Homes in Lucerne and Rivermead with good presentation and fair pricing often sell in under 15 days with multiple offers. An overpriced property can sit 60-90 days on the market, sending a negative signal to buyers.",
  },
  {
    q: "Is it better to buy in Aylmer or Ottawa?",
    a: "I hear this question often. For the same budget, Aylmer typically offers more space, a newer home, and a comparable — or even better — quality of life for families seeking nature. Property taxes differ (Québec vs Ontario), and mortgage rules are the same. The main deciding factors are usually school language and access to your workplace. I can help you compare both options honestly.",
  },
  {
    q: "Do you specialize in Aylmer specifically?",
    a: "Aylmer has been one of my primary areas for almost 9 years. I know the streets, recent comparables, micro-trends by sub-sector, and what target buyers expect for each property type. This local knowledge translates directly into results — whether you're selling or buying.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Lucerne / Rivermead",
    text: "A sought-after residential area in Aylmer. Established and renovated homes, mature tree-lined streets, close to Lake Deschênes and cycling paths. Family-friendly with excellent access to the Champlain Bridge. Price: $550,000–$750,000.",
    tag: "Families · Established · In demand",
  },
  {
    title: "Old Aylmer",
    text: "The historic heart of Aylmer. Character properties, pedestrian streets, cafés, restaurants. A more urban, walkable lifestyle. Mixed clientele: professionals, couples, retirees. Price: $450,000–$650,000.",
    tag: "Character · Walkable",
  },
  {
    title: "North Aylmer / Breckenridge",
    text: "A quieter area with recent developments, large yards, and quick highway 50 access. Attracts young families seeking more space at accessible prices. Price: $480,000–$620,000.",
    tag: "Space · Recent · Affordable",
  },
  {
    title: "Waterfront · Lake Deschênes",
    text: "Riverfront and lakefront properties with boat access and larger lots. A niche market with exceptional properties. Scarcity = long-term stable value. Price: $700,000–$1,200,000+.",
    tag: "Prestige · Waterfront",
  },
];

/* ── Buyer checklist columns ── */
const buyerCols = [
  {
    title: "Before visiting",
    items: [
      "Get your mortgage pre-approval",
      "Define your priority area (Lucerne vs Old Aylmer)",
      "Check proximity to your preferred schools",
      "Understand the current market (seller's = fast offers)",
      "Budget for a home inspection",
    ],
  },
  {
    title: "On the market",
    items: [
      "Good properties sell in 10-20 days",
      "Multiple offers are common in Lucerne and Rivermead",
      "A quick visit can make the difference",
      "Pre-offer inspection is an option to consider",
      "Expect 5-10% above asking price in competitive zones",
    ],
  },
  {
    title: "Québec specifics",
    items: [
      "Promise to purchase (not an offer like in Ontario)",
      "Notary required for the transaction",
      "Welcome tax to plan for (transfer duties)",
      "Home inspection strongly recommended",
      "Legal warranty of quality included by default",
    ],
  },
];

/* ── Seller steps ── */
const sellerSteps = [
  { title: "Comparative market analysis", text: "Recent comparables by area, by street, by property type." },
  { title: "Fair and documented estimate", text: "No inflated numbers to win your trust — the market truth." },
  { title: "Preparation and pro photos", text: "Professional photographer included. Home staging advised when useful." },
  { title: "Targeted marketing", text: "Centris, websites, social media, broker network." },
  { title: "Offer management", text: "Response strategy, counter-offers, conditions — I guide you." },
  { title: "All the way to the notary", text: "Full support until keys are handed over." },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🌿", title: "Nature at your doorstep", text: "Lake Deschênes, the Ottawa River, Gatineau Park, and cycling paths to Ottawa via the Champlain Bridge. Aylmer offers exceptional nature access right in the heart of a residential neighbourhood." },
  { icon: "🛒", title: "Full services", text: "Local shops, big stores (IGA, Maxi), restaurants, medical clinics, library. Old Aylmer offers local boutiques and lively terraces in summer. Everything without leaving the area." },
  { icon: "🏫", title: "French and English schools", text: "Particularly well-served for bilingual families. French schools (CS des Portages), English schools (Western Québec), numerous daycares. A major asset for Ottawa families relocating." },
];

/* ── Key facts ── */
const keyFacts = [
  { icon: "🏠", label: "Median price — houses", value: "$567,000", trend: "↑ 3% vs last year" },
  { icon: "⏱", label: "Average time to sell", value: "28 days" },
  { icon: "📊", label: "Market type", value: "Seller's", note: "(favours well-positioned sellers)" },
  { icon: "👥", label: "Approximate population", value: "~50,000" },
];

/* ── Related pages ── */
const related = [
  { title: "Hull", text: "Urban, culture, condos and plex.", href: "/en/hull" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau" },
  { title: "Chelsea", text: "Artist village, Gatineau Park.", href: "/en/chelsea" },
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

const AylmerPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Aylmer Gatineau | YGS — Yanis Gauthier-Sigeris"
      description="Yanis Gauthier-Sigeris, real estate broker specializing in Aylmer, Gatineau. Single-family homes, condos, local expertise. Free home valuation, deep local knowledge."
    />
    <NeighborhoodJsonLd
      name="Aylmer"
      description="Real estate broker specializing in Aylmer, Gatineau. Lake Deschênes, family neighbourhoods, schools and community."
      lat={45.3945}
      lng={-75.8486}
      url="/en/aylmer"
    />
    <FAQPageJsonLd items={faq} />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="AYLMER · GATINEAU (QUÉBEC)"
      title="Real estate broker in Aylmer — your local specialist"
      subtitle="Aylmer is one of Gatineau's most sought-after areas. Bilingual families, lakes, parks, newer homes — and a competitive market that rewards prepared buyers and well-positioned sellers."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See Aylmer properties →", href: "/en/properties?area=aylmer" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — AREA PORTRAIT ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-3 space-y-4">
          <p className="label-overline">WHY AYLMER</p>
          <h2>What makes Aylmer unique in Outaouais</h2>
          <p className="prose-body mt-5">
            Aylmer is the western sector of Gatineau, bordered by the Ottawa River and Lake Deschênes. It's the number one choice for bilingual families who want a suburban quality of life without being far from Ottawa. Homes here tend to be newer than in Hull or central Gatineau, with larger yards and quiet streets.
          </p>
          <p className="prose-body">
            The Lucerne and Rivermead areas are particularly popular — established homes on mature streets, close to Lake Deschênes, parks, and both French and English schools. Old Aylmer offers a distinct heritage charm, with character properties, local shops and a preserved village atmosphere.
          </p>
          <p className="prose-body">
            For buyers coming from Ottawa, Aylmer often means an immediate gain in space and quality of life for the same budget — or less. For sellers, it's a market where presentation and fair pricing make the difference between a quick sale and a property that sits.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">Aylmer by the numbers</h3>
            {keyFacts.map((f) => (
              <div key={f.label} className="space-y-0.5">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>{f.icon}</span> {f.label}
                </p>
                <p className="text-lg font-semibold text-foreground">{f.value}</p>
                {f.trend && <p className="text-xs text-accent">{f.trend}</p>}
                {f.note && <p className="text-xs text-muted-foreground">{f.note}</p>}
              </div>
            ))}
            <p className="text-[0.7rem] text-muted-foreground/60 pt-2 border-t border-border">
              Indicative data based on recent sales. Updated monthly.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — SUB-SECTORS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">AYLMER SUB-SECTORS</p>
        <h2 className="mt-3">Choosing the right neighbourhood in Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Aylmer isn't homogeneous. Each sub-sector has its own personality, buyer profile, and pricing. Here's what you need to know before looking.
        </p>
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

    {/* ═══ SECTION 3 — BUYING IN AYLMER ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">BUYER GUIDE</p>
        <h2 className="mt-3">What you need to know before buying in Aylmer</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {buyerCols.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-accent" />
                    <span className="text-[0.9375rem] text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="prose-body mb-4">First time visiting Aylmer? I'll guide you neighbourhood by neighbourhood.</p>
          <Button size="lg" asChild>
            <Link to="/en/buyer-consultation">Book a consultation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — SELLING IN AYLMER ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <p className="label-overline">SELLER GUIDE</p>
          <h2>Sell your Aylmer property for the best price</h2>
          <p className="prose-body mt-5">
            The Aylmer market favours well-positioned sellers. A properly priced and well-marketed property typically sells in under 30 days, often with multiple offers. But "well-positioned" doesn't mean "highest price" — it means the right price, the right presentation, and the right strategy.
          </p>
          <p className="prose-body">
            Buyers in Aylmer are demanding. They actively compare properties, make quick offers on the ones they love, and move on from overpriced or poorly presented homes. A broker who knows recent comparables by street — not just by area — makes a real difference in your final price.
          </p>
          <p className="prose-body">
            What I bring: a valuation based on real recent sales in your micro-sector, professional photos, a pricing strategy defined with you, and targeted marketing to reach serious buyers — including Ottawa relocators actively looking in Aylmer.
          </p>
          <Button className="mt-4" size="lg" asChild>
            <Link to="/en/home-valuation-aylmer">Free property valuation →</Link>
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">My seller plan — Aylmer</h3>
          {sellerSteps.map((s, i) => (
            <div key={s.title} className="flex gap-4 items-start py-4 border-b border-border last:border-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground text-[0.9375rem]">{s.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — LIFE IN AYLMER ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">LIVING IN AYLMER</p>
        <h2 className="mt-3">Daily life in Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          What the numbers don't tell you about Aylmer — the real quality of life, day to day.
        </p>
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
    <FAQSection title="Frequently asked questions — Aylmer" items={faq} />

    {/* ═══ SECTION 7 — FINAL CTA ═══ */}
    <CTASection
      dark
      title="Ready to take the next step?"
      text="Whether you're selling your home in Aylmer or looking to buy in this area — I'm your local broker."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation" },
        { label: "Contact me →", href: "/en/contact", variant: "outline" },
      ]}
      trustLine={'"I give you the numbers and the options — you decide."'}
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explore other areas"
      title="Discover"
      pages={[
        ...related,
        { title: "Aylmer properties", text: "See current listings.", href: "/en/properties?area=aylmer" },
        { title: "Ottawa → Gatineau relocation", text: "Complete guide for crossing the river.", href: "/en/relocation" },
      ]}
      background="alt"
    />

    <GuideInlineCTA
      lang="en"
      guideType="buyer_guide"
      headline="Free Buyer Guide — buying in Aylmer"
      text="Process, budget and tips for buying in the area — in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default AylmerPageEn;
