import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MountainSnow, Waves } from "lucide-react";
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
import heroImg from "@/assets/hero-cantley-photo.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Are there services in Cantley?",
    a: "Cantley has basic services, daycares, grocery store, local shops, three francophone elementary schools. For everything else (hospital, big-box stores, high school, varied restaurants), residents head to Gatineau or Ottawa. From Cantley's town hall, Les Promenades Gatineau are about 14 km away and downtown Ottawa about 20 km by road. It's important to factor this into your decision.",
  },
  {
    q: "Do Cantley properties have wells and septic systems?",
    a: "Yes, the majority of Cantley's territory is not served by municipal water and sewer. Properties operate with artesian wells and septic systems. These systems work well when properly maintained, but a thorough inspection before purchase is non-negotiable. A well or septic system at end of life can represent a significant expense.",
  },
  {
    q: "What should you check before buying land in Cantley?",
    a: "Zoning first, with the municipality: it sets what you can build and which uses are allowed, such as keeping horses. Then the soil, because a septic system is designed from a site characterization study. Finally, check road access and Internet coverage.",
  },
  {
    q: "Is Cantley suitable for remote work?",
    a: "It depends on the address. Internet coverage varies from one road to the next in Cantley. Before making an offer, check with providers what speed is available at the exact address.",
  },
];

/* ── Activity cards ── */
const activities = [
  {
    icon: MountainSnow,
    title: "Recreational activities",
    text: "Cantley has a golf course, water park, alpine ski centre, campground, and the Nakkertok cross-country ski club.",
  },
  {
    icon: Waves,
    title: "Nature and river",
    text: "Cantley is bordered by the Gatineau River to the west. The territory features rolling terrain typical of the Collines-de-l'Outaouais, forests, climbs, panoramic views. Surrounded by mountainous forests, Cantley has officially positioned itself as a municipality of 'welcoming nature.' (Source: Municipality of Cantley)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Chelsea", text: "Gatineau Park, artistic village.", href: "/en/chelsea/" },
  { title: "Buckingham", text: "Space, affordable prices.", href: "/en/buckingham/" },
  { title: "Gatineau centre", text: "Services, residential, central.", href: "/en/gatineau/" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy/" },
];

const CantleyPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Cantley Outaouais | Families & Large Lots | YGS"
      description="Buy or sell in Cantley, Outaouais. Large lots, family, nature. Over 9 years of local experience: Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Cantley"
      description="Buy or sell in Cantley, Outaouais. Large lots, family, nature. Local broker."
      lat={45.5056}
      lng={-75.7833}
      url="/en/cantley/"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Cantley"
      description="Real estate brokerage services in Cantley, Outaouais: homes, land, family properties."
      url="/en/cantley/"
      serviceType="Real Estate Brokerage"
      areaServed={["Cantley", "Outaouais"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CANTLEY · OUTAOUAIS"
      title="Real estate broker in Cantley, about 20 km from downtown Ottawa"
      subtitle="The municipality stands out for its large lots and low-density housing. For families who want space without going too far, Cantley is often the logical conclusion."
      primaryCta={{ label: "Free Home Valuation →", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=cantley" }}
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo: Wesdarou, CC BY-SA 4.0, Wikimedia Commons (cropped)", href: "https://commons.wikimedia.org/wiki/File:Tiberius_Wright_house_2016-01.jpg" }}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Cantley, verified facts about this growing municipality</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley is a municipality in the MRC des Collines-de-l'Outaouais, about 20 km from downtown Ottawa by road. Its population was 11,449 at the 2021 census, up 7% since 2016, sustained growth that reflects the area's enduring appeal. French is the mother tongue of 80.7% of residents. (Source: Statistics Canada, 2021 Census)
        </p>
        <p className="prose-body">
          Cantley is known as a low-density residential municipality, one of its main draws. Subdivision bylaw 662-24 requires a lot of at least 1,000 m² inside the urban perimeter, with both services. Outside the urban perimeter, the minimum is 3,700 m². (Source: Municipality of Cantley, subdivision bylaw 662-24, 2025)
        </p>
        <p className="prose-body">
          Cantley has three francophone elementary schools: école Sainte-Élisabeth, école de la Rose-des-Vents, and école de l'Orée-des-Bois (opened in 2014). For high school and specialized services, residents head to Gatineau. The Transcollines transit service links Cantley to Gatineau, with transfers to the STO network. (Source: Municipality of Cantley, Wikipedia)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Activities ═══ */}
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="mt-3">Life in Cantley, what sets this area apart</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {activities.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <c.icon size={26} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--ink)" }} />
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Buying ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">What you need to know before buying in Cantley</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley is a semi-rural municipality. Several important realities to understand before buying:
        </p>
        <p className="prose-body">
          The majority of Cantley properties operate with artesian wells and septic systems, the territory is not served by municipal water and sewer across its entirety. A thorough inspection of these systems is non-negotiable before any purchase.
        </p>
        <p className="prose-body">
          Nearby services are limited within Cantley itself, a few shops, a grocery store, daycares, the three elementary schools. For big-box stores, medical specialists, and high school, you head to Gatineau: Les Promenades Gatineau are about 14 km from Cantley's town hall by road.
        </p>
        <p className="prose-body">
          Cantley suits buyers who can live with a drive, or who work from home part of the week.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "By road, Cantley's town hall is about 20 km from downtown Ottawa. Population grew 7% between 2016 and 2021. (Source: Statistics Canada, 2021 Census)",
            "3 francophone elementary schools on the territory, plus Transcollines transit to Gatineau, with transfers to the STO. (Source: Municipality of Cantley)",
            "Lots of at least 3,700 m² outside the urban perimeter, which keeps the area semi-rural. (Source: subdivision bylaw 662-24)",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-[var(--ink-soft)] mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/en/home-valuation/">Free Home Valuation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Frequently asked questions about Cantley, Outaouais" items={faq} updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }} />

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
      headline="Free Buyer Guide: buying in Cantley"
      text="Process, budget and tips for buying in the area, in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buying or selling in Cantley?"
      text="I know the area, let's talk about your project."
      buttons={[
        { label: "Free Home Valuation →", href: "/en/home-valuation/" },
        { label: "Book a consultation →", href: "/en/buyer-consultation/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default CantleyPageEn;
