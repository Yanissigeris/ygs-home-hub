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
import heroImg from "@/assets/hero-cantley-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Are there services in Cantley?",
    a: "Cantley has basic services — daycares, grocery store, local shops, three francophone elementary schools. For everything else (hospital, big-box stores, high school, varied restaurants), residents head to Gatineau (15–20 minutes) or Ottawa (25–30 minutes depending on the area). Most families adapt quickly and don't regret the choice — but it's important to factor this into your decision.",
  },
  {
    q: "Do Cantley properties have wells and septic systems?",
    a: "Yes, the majority of Cantley's territory is not served by municipal water and sewer. Properties operate with artesian wells and septic systems. These systems work well when properly maintained — but a thorough inspection before purchase is non-negotiable. A well or septic system at end of life can represent a significant expense. I ensure this aspect is rigorously verified for every transaction in Cantley.",
  },
  {
    q: "Is Cantley suitable for remote work?",
    a: "Yes — and it's actually one of the reasons Cantley has attracted many new residents since 2020. The municipality actively supports fibre optic expansion across its territory. For full or partial remote workers, Cantley offers an exceptional quality of life within reasonable access to Gatineau and Ottawa.",
  },
];

/* ── Activity cards ── */
const activities = [
  {
    icon: "⛷️",
    title: "Recreational activities",
    text: "Cantley has a golf course, water park, alpine ski centre, campground, and the largest cross-country ski network in the region. The municipality has strong recreational tourism potential and actively works to offer it to residents. (Source: Harmonie Construction, Municipality of Cantley)",
  },
  {
    icon: "🌊",
    title: "Nature and river",
    text: "Cantley is bordered by the Gatineau River to the west. The territory features rolling terrain typical of the Collines-de-l'Outaouais — forests, climbs, panoramic views. Surrounded by mountainous forests, Cantley has officially positioned itself as a municipality of 'welcoming nature.' (Source: Municipality of Cantley)",
  },
  {
    icon: "📡",
    title: "Fibre optic and remote work",
    text: "Cantley actively supports fibre optic network expansion across its territory, facilitating remote work. This has been a key factor in attracting families who work partially or entirely from home. (Source: Harmonie Construction/Municipality of Cantley)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Chelsea", text: "Gatineau Park, artistic village.", href: "/en/chelsea" },
  { title: "Buckingham", text: "Space, affordable prices.", href: "/en/buckingham" },
  { title: "Gatineau centre", text: "Services, residential, central.", href: "/en/gatineau" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy" },
];

const CantleyPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Cantley Outaouais | Families & Large Lots | YGS"
      description="Buy or sell in Cantley, Outaouais. Large lots, family, nature. Nearly 9 years of local experience — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Cantley"
      description="Buy or sell in Cantley, Outaouais. Large lots, family, nature. Local broker."
      lat={45.5056}
      lng={-75.7833}
      url="/en/cantley"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Cantley"
      description="Real estate brokerage services in Cantley, Outaouais — homes, land, family properties."
      url="/en/cantley"
      serviceType="Real Estate Brokerage"
      areaServed={["Cantley", "Outaouais"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CANTLEY · OUTAOUAIS"
      title="Real estate broker in Cantley — space, 13 km from Ottawa"
      subtitle="Cantley is 13 kilometres from downtown Ottawa. It's a fast-growing municipality known for its large lots, low-density residential development, and family-friendly quality of life. For families who want space without going far, Cantley is often the logical conclusion."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=cantley" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">Cantley — verified facts about this growing municipality</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley is a municipality in the MRC des Collines-de-l'Outaouais, 13 kilometres from downtown Ottawa. Its population was 11,449 at the 2021 census, up 7% since 2016 — sustained growth that reflects the area's enduring appeal. French is the mother tongue of 86.7% of residents. (Source: Statistics Canada, 2021 Census)
        </p>
        <p className="prose-body">
          Cantley is known as a low-density residential municipality — one of its main draws. Updated urban planning bylaws in 2025 set the minimum lot size within the urban perimeter at 5,000 m². This preserves the municipality's semi-rural character. (Source: Municipality of Cantley, Urban Plan 2025)
        </p>
        <p className="prose-body">
          Cantley has three francophone elementary schools: école Sainte-Élisabeth, école de la Rose-des-Vents, and école de l'Orée-des-Bois (opened in 2014). For high school and specialized services, residents head to Gatineau. The Transcollines transit service connects Cantley to the STO Rapibus network and OC Transpo in Ottawa. (Source: Municipality of Cantley, Wikipedia)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Activities ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LIFE IN CANTLEY</p>
        <h2 className="mt-3">Life in Cantley — what sets this area apart</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activities.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Buying ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">BEFORE YOU BUY</p>
      <h2 className="mt-3">What you need to know before buying in Cantley</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley is a semi-rural municipality. Several important realities to understand before buying:
        </p>
        <p className="prose-body">
          The majority of Cantley properties operate with artesian wells and septic systems — the territory is not served by municipal water and sewer across its entirety. A thorough inspection of these systems is non-negotiable before any purchase.
        </p>
        <p className="prose-body">
          Nearby services are limited within Cantley itself — a few shops, a grocery store, daycares, the three elementary schools. For big-box stores, medical specialists, and high school, you head to Gatineau (15–20 minutes).
        </p>
        <p className="prose-body">
          Remote work has profoundly changed the buyer profile in Cantley. Families who previously commuted to Ottawa or Gatineau have been able to settle here since 2020 and have found a quality of life they wouldn't trade.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Cantley is 13 km from downtown Ottawa. Population grew 7% between 2016 and 2021. (Source: Statistics Canada, 2021 Census)",
            "3 francophone elementary schools on the territory, plus Transcollines transit service to Ottawa and Gatineau. (Source: Municipality of Cantley)",
            "Minimum residential lots of 5,000 m² within the urban perimeter — this bylaw preserves the spacious, semi-rural character. (Source: Urban Plan 2025)",
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
    <FAQSection title="Frequently asked questions — Cantley, Outaouais" items={faq} />

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
      headline="Free Buyer Guide — buying in Cantley"
      text="Process, budget and tips for buying in the area — in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buying or selling in Cantley?"
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

export default CantleyPageEn;
