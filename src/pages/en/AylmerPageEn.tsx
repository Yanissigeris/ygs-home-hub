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
import heroImg from "@/assets/hero-aylmer-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "How much is a home worth in Aylmer?",
    a: "In Q2 2026, the median single-family price in Aylmer was $572,750, and the median condo price $325,000 (APCIQ, Centris data). Prices then vary by sub-sector, property type and condition. Lucerne, Rivermead and Old Aylmer each have their own market realities. Contact me for a free comparative analysis based on recent sales on your street.",
  },
  {
    q: "Is Aylmer bilingual? Can my child attend an English school?",
    a: "Aylmer is one of the most bilingual areas in Gatineau. You'll find French schools (Centre de services scolaire des Portages-de-l'Outaouais) and English schools (Western Québec School Board). Access to English public school requires a certificate of eligibility. It's a major draw for Ottawa families or federal employees who want an English-friendly environment while living in Québec.",
  },
  {
    q: "How long does it take to sell a home in Aylmer?",
    a: "The Aylmer market remains active, a well-positioned and properly priced property attracts serious buyers quickly. The timeline depends on pricing, sub-sector and presentation. Contact me for a realistic reading of your situation.",
  },
  {
    q: "Is it better to buy in Aylmer or Ottawa?",
    a: "I hear this question often. For the same budget, Aylmer typically offers more space and a newer home. Families who want nature close by get a comparable, or even better, quality of life. Property taxes differ (Québec vs Ontario), and mortgage rules are the same. The main deciding factors are usually school language and access to your workplace. I can help you compare both options based on your situation.",
  },
  {
    q: "Do you specialize in Aylmer specifically?",
    a: "Aylmer has been one of my primary areas for over 9 years. I know the streets, recent comparables, micro-trends by sub-sector, and what target buyers expect for each property type. That local knowledge works on both the selling and the buying side.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Lucerne / Rivermead",
    text: "Established residential area with renovated homes on mature, tree-lined streets. The cycling paths and the Champlain Bridge are close by.",
    tag: "Families · Established · In demand",
  },
  {
    title: "Old Aylmer",
    text: "The historic heart of Aylmer. Character properties, pedestrian streets, cafés, restaurants. A more urban, walkable lifestyle. Mixed clientele: professionals, couples, retirees.",
    tag: "Character · Walkable",
  },
  {
    title: "North Aylmer",
    text: "A quieter area with recent developments, large yards, and access to Boulevard des Allumettières. Attracts young families seeking more space at accessible prices.",
    tag: "Space · Recent · Affordable",
  },
  {
    title: "Waterfront",
    text: "Riverfront properties on the Ottawa River, with boat access and larger lots. A niche market with few properties for sale. That scarcity supports long-term values.",
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
      "Well-priced properties sell quickly in high-demand areas",
      "Multiple offers are common in Lucerne and Rivermead",
      "A quick visit can make the difference",
      "Pre-offer inspection is an option to consider",
      "Expect to go above asking price in competitive zones",
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
  { title: "Fair and documented estimate", text: "No inflated numbers to win your trust, the market truth." },
  { title: "Preparation and pro photos", text: "Professional photographer included. Home staging advised when useful." },
  { title: "Targeted marketing", text: "Centris, websites, social media, broker network." },
  { title: "Offer management", text: "Response strategy, counter-offers, conditions, I guide you." },
  { title: "All the way to the notary", text: "Full support until keys are handed over." },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🌿", title: "Nature at your doorstep", text: "Gatineau Park and the Ottawa River are close by, and cycling paths lead to Ottawa via the Champlain Bridge. Nature is within reach without leaving the residential streets." },
  { icon: "🛒", title: "Full services", text: "Local shops, big stores (IGA, Maxi), restaurants, medical clinics, library. Old Aylmer offers local boutiques and lively terraces in summer. Everything without leaving the area." },
  { icon: "🏫", title: "French and English schools", text: "Particularly well-served for bilingual families. French schools (CS des Portages), English schools (Western Québec), numerous daycares. A major asset for Ottawa families relocating." },
];


/* ── Related pages ── */
const related = [
  { title: "Hull", text: "Urban, culture, condos and plex.", href: "/en/hull/" },
  { title: "Gatineau centre", text: "Residential, services, affordable.", href: "/en/gatineau/" },
  { title: "Chelsea", text: "Artist village, Gatineau Park.", href: "/en/chelsea/" },
  { title: "Cantley", text: "Nature, countryside, families.", href: "/en/cantley/" },
];


const AylmerPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Aylmer Gatineau | Yanis Gauthier-Sigeris (YGS)"
      description="Yanis Gauthier-Sigeris, real estate broker specializing in Aylmer, Gatineau. Single-family homes, condos, local expertise. Free home valuation, deep local knowledge." ogImage="https://yanisgauthier.com/og/og-aylmer.jpg" />
    <NeighborhoodJsonLd
      name="Aylmer"
      description="Real estate broker in Aylmer, Gatineau. Family neighbourhoods, schools, parks and community life."
      lat={45.3945}
      lng={-75.8486}
      url="/en/aylmer/"
    />
    

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="AYLMER · GATINEAU (QUÉBEC)"
      title="Real estate broker in Aylmer, your local specialist"
      subtitle="Aylmer draws many bilingual families, for its parks as much as for its newer homes. The market is competitive and rewards prepared buyers as much as well-positioned sellers."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation-aylmer/" }}
      secondaryCta={{ label: "See Aylmer properties →", href: "/en/properties?area=aylmer" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — AREA PORTRAIT ═══ */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-3 space-y-4">
          <h2>What sets Aylmer apart in Outaouais</h2>
          <p className="prose-body mt-5">
            Aylmer is the western sector of Gatineau, bordered by the Ottawa River. It offers suburban living without moving far from Ottawa. Homes here tend to be newer than in Hull or central Gatineau, with larger yards and quiet streets.
          </p>
          <p className="prose-body">
            Lucerne and Rivermead are in high demand, with their established homes on mature streets, close to parks and both French and English schools. Old Aylmer has a heritage feel, with character properties and local shops in a village atmosphere.
          </p>
          <p className="prose-body">
            For buyers coming from Ottawa, Aylmer often means an immediate gain in space and quality of life for the same budget, or less. For sellers, it's a market where presentation and fair pricing make the difference between a quick sale and a property that sits.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">What is a property worth here?</h3>
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
              Prices vary based on the exact location, property type, condition, and recent sales on your street. The only way to get a reliable number is a comparative analysis based on current real comparables.
            </p>
            <Button className="w-full" size="lg" asChild>
              <Link to="/en/home-valuation-aylmer/">Get the real numbers →</Link>
            </Button>
            <p className="text-[0.72rem] text-muted-foreground italic text-center">
              Free · No obligation · Personalized response
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — SUB-SECTORS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
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
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
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
            <Link to="/en/buyer-consultation/">Book a consultation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — SELLING IN AYLMER ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <h2>Sell your Aylmer property at the right price</h2>
          <p className="prose-body mt-5">
            The Aylmer market favours well-positioned sellers. A properly priced and well-marketed property attracts serious buyers quickly, often with multiple offers. Well-positioned means the right price and careful presentation, not always the highest asking price.
          </p>
          <p className="prose-body">
            Buyers in Aylmer are demanding. They actively compare properties, make quick offers on the ones they love, and move on from overpriced or poorly presented homes. A broker who knows recent comparables by street, not just by area, makes a real difference in your final price.
          </p>
          <p className="prose-body">
            What I bring: a valuation based on real recent sales in your micro-sector, professional photos, a pricing strategy defined with you, and targeted marketing to reach serious buyers, including Ottawa relocators actively looking in Aylmer.
          </p>
          <Button className="mt-4" size="lg" asChild>
            <Link to="/en/home-valuation-aylmer/">Free property valuation →</Link>
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">My seller plan, Aylmer</h3>
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
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <h2 className="mt-3">Daily life in Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          What the numbers don't tell you about Aylmer, the real quality of life, day to day.
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
    <FAQSection title="Frequently asked questions about Aylmer" items={faq} />

    {/* ═══ SECTION 7 — FINAL CTA ═══ */}
    <CTASection
      dark
      title="Ready to take the next step?"
      text="To sell your home in Aylmer or buy in the area, I'm your local broker."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation-aylmer/" },
        { label: "Contact me →", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine={'"I give you the numbers and the options, you decide."'}
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explore other areas"
      title="Discover"
      pages={[
        ...related,
        { title: "Living in Aylmer: the guide", text: "Daily life, schools, parks and neighbourhood feel.", href: "/en/living-aylmer/" },
        { title: "Aylmer properties", text: "See current listings.", href: "/en/properties/" },
        { title: "Ottawa → Gatineau relocation", text: "Complete guide for crossing the river.", href: "/en/relocation/" },
      ]}
      background="alt"
    />

    <GuideInlineCTA
      lang="en"
      guideType="buyer_guide"
      headline="Free Buyer Guide: buying in Aylmer"
      text="Process, budget and tips for buying in the area, in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default AylmerPageEn;
