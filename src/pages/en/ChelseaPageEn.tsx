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
import heroImg from "@/assets/hero-chelsea-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Is Chelsea too expensive compared to Gatineau?",
    a: "Chelsea is indeed a premium market compared to the City of Gatineau, large-lot properties, scarce inventory, and quality of life are reflected in the prices. But 'too expensive' depends on what you're looking for. If access to nature, tranquility, bilingualism, and quality of life are your priorities, Chelsea is often the right choice. I can help you compare Chelsea with Cantley or Aylmer based on your budget and criteria.",
  },
  {
    q: "Can I build on a lot in Chelsea?",
    a: "Chelsea has strict building regulations, particularly in areas adjacent to Gatineau Park and along waterways. Agricultural zoning, the 15-metre riparian protection strip and MRC constraints can limit or regulate projects. Before any land purchase, a thorough verification with the Municipality of Chelsea and the MRC des Collines-de-l'Outaouais is essential.",
  },
  {
    q: "Can my children go to an English school in Chelsea?",
    a: "Yes, if your child is eligible for English instruction (certificate of eligibility). Chelsea Elementary, a Western Quebec School Board school, is in the municipality. For high school, the closest English schools are in Gatineau, in the Hull and Aylmer sectors. According to the 2021 Census, Chelsea's population is split almost evenly between francophones and anglophones.",
  },
  {
    q: "What does a typical Chelsea home cost in 2026?",
    a: "Chelsea is part of APCIQ's “Gatineau periphery” area, where the median single-family price was $595,000 in Q2 2026 (Centris data). That area also includes Cantley, Pontiac and Val-des-Monts, so Chelsea prices can differ a lot from it, especially for waterfront or large-acreage properties around Lac Meech and Lac Mountain. Gatineau Park covers roughly 60% of the territory, which limits the land available for building. For a precise figure, I compare recent Chelsea sales.",
  },
  {
    q: "How long does the Ottawa commute really take from Chelsea?",
    a: "Old Chelsea village is about 15 km from downtown Ottawa by road, via Highway 5, and the drive takes longer at the morning rush. Transcollines buses link Chelsea to Gatineau, with transfers to the STO network.",
  },
  {
    q: "Are wells and septic systems a problem when buying in Chelsea?",
    a: "Most Chelsea properties operate on artesian wells and septic systems rather than municipal services. They're not problematic in themselves, they're standard in semi-rural Quebec, but they require a thorough professional inspection before purchase. Water potability testing (bacteria + minerals), well flow rate, septic tank age and percolation field condition are non-negotiable. I systematically include these in the offer's inspection clause and walk buyers through the results.",
  },
  {
    q: "Is Chelsea a good place to invest in real estate long-term?",
    a: "Yes, with one important caveat. The combination of constrained supply (Gatineau Park), constant Ottawa-side demand, and a community committed to preserving its character has historically supported strong property values through every market cycle. The caveat: Chelsea is a niche market, fewer transactions per year than Aylmer or the Plateau, so liquidity at resale takes longer. For a 10-year hold, the fundamentals are excellent. For a 2-3 year flip, less so.",
  },
];

/* ── Atouts cards ── */
const atouts = [
  {
    icon: "🌲",
    title: "Gatineau Park",
    text: "Gatineau Park covers 360 km² of forests, lakes and rivers. Created in 1938, it spans several municipalities with Chelsea as the main gateway. Hiking, cycling, cross-country skiing, snowshoeing, swimming at Lac Meech, activities accessible on foot or by bike from residential properties. (Source: National Capital Commission)",
  },
  {
    icon: "♨️",
    title: "Nordik Spa-Nature",
    text: "Nordik Spa-Nature is located in Chelsea. It is one of the largest Nordic spas in North America. Its presence contributes to the municipality's appeal and attracts visitors who often discover Chelsea as a residential destination. (Source: nordikspanature.com)",
  },
  {
    icon: "⛷️",
    title: "Old Chelsea / Camp Fortune",
    text: "Old Chelsea village is the historic heart of the municipality. A few local shops, restaurants, and a preserved village character. Camp Fortune, nearby, is a ski club about 21 km from downtown Ottawa by road. (Source: Wikipedia/Chelsea)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, large lots, hills.", href: "/en/cantley/" },
  { title: "Aylmer", text: "Lake Deschênes, families, bilingual.", href: "/en/aylmer/" },
  { title: "Relocating from Ottawa", text: "Buying in Gatineau from Ontario.", href: "/en/relocation/" },
  { title: "Buy in Gatineau", text: "Complete buyer guide.", href: "/en/buy/" },
];

const ChelseaPageEn = () => (
  <>
    <PageMeta
      title="Real Estate Broker Chelsea Quebec | Gatineau Park | YGS"
      description="Buy or sell in Chelsea, Quebec. Large-lot homes, Gatineau Park, bilingual community. Local broker — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-chelsea.jpg" />
    <NeighborhoodJsonLd
      name="Chelsea"
      description="Buy or sell in Chelsea, Quebec. Large-lot homes, Gatineau Park, bilingual community. Local broker."
      lat={45.5200}
      lng={-75.7870}
      url="/en/chelsea/"
    />
    <ServiceJsonLd
      name="Real Estate Broker in Chelsea"
      description="Real estate brokerage services in Chelsea, Quebec — homes, land, character properties."
      url="/en/chelsea/"
      serviceType="Real Estate Brokerage"
      areaServed={["Chelsea", "Quebec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CHELSEA · QUÉBEC"
      title="Real estate broker in Chelsea — living between nature and Ottawa"
      subtitle="Chelsea is a distinct municipality north of Gatineau. Sixty percent of its territory is occupied by Gatineau Park. Old Chelsea village is about 15 km from downtown Ottawa by road."
      primaryCta={{ label: "Free valuation →", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "See properties →", href: "/en/properties?area=chelsea" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Chelsea, verified facts about this unique municipality</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Chelsea is a municipality in the MRC des Collines-de-l'Outaouais, of which it is the county seat. Its population was approximately 8,000 at the 2021 census, in steady growth. What fundamentally distinguishes it: approximately 60% of its territory belongs to Gatineau Park, managed by the National Capital Commission. This reality significantly limits available buildable land, which explains the scarcity of properties and their stable long-term value. (Source: Wikipedia/Chelsea, National Capital Commission)
        </p>
        <p className="prose-body">
          Chelsea's population is almost equally split between francophones and anglophones, approximately 70% of households speak both official languages. Chelsea was one of the first municipalities in Canada to ban the use of pesticides. These two characteristics, bilingualism and environmental awareness, define the community's identity. (Source: Wikipedia/Chelsea, Quebec)
        </p>
        <p className="prose-body">
          Highway 5, known as the Gatineau Highway, connects Chelsea directly to Gatineau and Ottawa. The Transcollines transit service links Chelsea to Gatineau, with transfers to the STO network. The Meredith Centre (hockey, soccer, community spaces) is the heart of family activities in Chelsea. (Source: Wikipedia/Chelsea, Municipality of Chelsea)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Highlights ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="mt-3">What you'll find in Chelsea</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {atouts.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Buying in Chelsea ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">What you need to know before buying in Chelsea</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Buying in Chelsea means buying in a niche market with limited inventory and constant demand. Several important characteristics to understand:
        </p>
        <p className="prose-body">
          First, Chelsea's municipal bylaws strictly regulate construction. Lots are subject to MRC des Collines-de-l'Outaouais rules and Gatineau Park protection rules for adjacent properties. Before any purchase of land or a property to renovate or expand, a zoning verification is essential.
        </p>
        <p className="prose-body">
          Second, Chelsea is not served by municipal water and sewer services across its entire territory. Many properties operate with artesian wells and septic systems. A thorough inspection of these systems before purchase is non-negotiable.
        </p>
        <p className="prose-body">
          Third, Chelsea is a semi-rural municipality: nearby services (grocery, clinic, pharmacy) are limited locally. For shopping, residents go to Gatineau or Ottawa: Les Galeries de Hull are about 10 km from Old Chelsea village by road.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ QUALITY CTA ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Chelsea is the main gateway to Gatineau Park, 360 km² of nature accessible from your property. (Source: National Capital Commission)",
            "~70% of Chelsea households are bilingual, a unique environment for both francophone and anglophone families. (Source: Wikipedia/Chelsea, Quebec)",
            "Approximately 60% of the territory is Gatineau Park, which limits buildable supply and supports existing property values long-term. (Source: National Capital Commission)",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-accent mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/en/home-valuation/">Get the real numbers →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ MARKET DATA ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Chelsea, what the 2026 numbers say</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          In APCIQ's statistics, Chelsea belongs to the “Gatineau periphery” area, where the median single-family price was $595,000 in Q2 2026 (Centris data); that area also includes Cantley, Pontiac and Val-des-Monts, so it's only a broad reference for Chelsea. Gatineau Park covers roughly 60% of the territory, which limits the land available for building, and building and shoreline rules are strict, including a 15-metre riparian protection strip.
        </p>
        <p className="prose-body">
          On the buyer side, Chelsea attracts a very specific demographic: federal executives and senior professionals from Ottawa who want acreage and bilingual schools without leaving the National Capital Region; remote-first knowledge workers who can afford to optimize for quality of life; and Quebec families relocating from Montréal who recognize that this kind of nature-plus-city combination is genuinely rare. The 70% bilingual rate is not marketing, it shapes every PTA meeting, sports league and community event in town, and it's a major reason anglophone families from Ontario find the transition smoother here than in pure-francophone sectors of Gatineau.
        </p>
        <p className="prose-body">
          For sellers, the playbook in Chelsea is different from anywhere else in the region. The qualified-buyer pool is smaller but more decisive, when the right family sees the right property, offers come quickly. Pricing has to anchor on genuine comparables (not the next sub-sector over), and presentation matters disproportionately because buyers paying $800K+ expect move-in-ready quality. I prepare every Chelsea listing with that audience in mind, from the photography brief to the open-house staging.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Frequently asked questions — Chelsea, Quebec" items={faq} />

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
      headline="Free Buyer Guide — buying in Chelsea"
      text="Process, budget and tips for buying in the area, in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Buying or selling in Chelsea?"
      text="I know Chelsea inside out, let's talk about your project."
      buttons={[
        { label: "Free valuation →", href: "/en/home-valuation/" },
        { label: "Book a consultation →", href: "/en/buyer-consultation/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default ChelseaPageEn;
