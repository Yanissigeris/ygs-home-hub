import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, Globe, TreePine, Waves, Bus, CheckCircle2, AlertTriangle } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-pontiac.webp";

const faq = [
  {
    q: "Is the Municipality of Pontiac the same as the Pontiac region (MRC)?",
    a: "No — and this is a very common confusion. The Municipality of Pontiac (Luskville, Breckenridge, Quyon areas) is part of the MRC des Collines-de-l'Outaouais and is included in the National Capital Region. The MRC Pontiac is a much larger and much more western territory (Fort-Coulonge, Shawville, Campbell's Bay) — it is outside the NCR and an entirely different market basin.",
  },
  {
    q: "Are there schools in Pontiac?",
    a: "The Municipality of Pontiac has elementary schools on its territory. For secondary school and specialized educational services, families generally travel toward Gatineau or schools in the Chelsea area. For anglophone families, the Western Quebec School Board serves the region. I recommend verifying directly with the relevant school boards to confirm the school zone for any property you're considering.",
  },
  {
    q: "Is Pontiac too far to live while working in Ottawa or Gatineau?",
    a: "It depends on your work situation. The Luskville area is the most accessible — about 35-40 minutes from Ottawa and 25-30 minutes from Gatineau. Quyon, more remote, requires a longer commute. For someone fully or mostly working remotely, Pontiac offers exceptional quality of life at prices no longer found in closer areas. For daily in-person work in Ottawa, it is a commute commitment to weigh seriously. I help you compare honestly based on your actual situation.",
  },
  {
    q: "Is Pontiac a good option for anglophone families?",
    a: "Yes — Pontiac is one of the most bilingual communities in the National Capital Region. With approximately 64% of residents bilingual and nearly 39% with English as mother tongue (2016 Census), it is a naturally anglophone-friendly environment. The Western Quebec School Board serves the area for English-language education. For anglophone families relocating from Ottawa who want more space at an accessible price within Quebec, Pontiac is often a compelling option that is under-explored.",
  },
  {
    q: "What does a Pontiac home cost in 2026?",
    a: "Pontiac is one of the most affordable corners of the National Capital Region. As of May 2026, single-family homes on standard residential lots in Luskville and Breckenridge typically trade between $329,000 and $479,000 on Centris. Properties with acreage (2–10 acres) usually run $425,000 to $625,000 depending on house condition and waterfront access. True waterfront on the Ottawa River — increasingly rare — clears $625,000 and can reach $1M+ for protected, well-maintained estates.",
  },
  {
    q: "Are wells, septic and propane standard in Pontiac?",
    a: "Yes. Almost no Pontiac property is connected to municipal water or sewer. Artesian wells, septic systems and propane (or oil/wood) heating are the norm. None of these are problems on their own — they're standard semi-rural Quebec — but they require a thorough professional inspection: water potability, well flow rate, septic tank age and percolation field, propane tank ownership status, and (where relevant) wood-stove WETT certification. I include all of these in every Pontiac inspection clause.",
  },
  {
    q: "Is Pontiac in a flood zone along the Ottawa River?",
    a: "Parts of Pontiac do sit in the regulated 0–20-year and 20–100-year flood zones along the Ottawa River, mapped by the MRC des Collines-de-l'Outaouais after the 2017 and 2019 floods. Properties in those zones can have insurance, financing and reconstruction restrictions. Before any offer on a riverfront or near-river property, I pull the official flood-zone map and the property's location relative to the high-water mark — and I walk you through what that means for insurability and resale.",
  },
];

const PontiacPageEn = () => {
  useEffect(() => {
    const prev = document.getElementById("ygs-pontiac-agent-jsonld");
    if (prev) prev.remove();
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Yanis Gauthier-Sigeris — YGS",
      url: "https://yanisgauthier.com",
      areaServed: { "@type": "Place", name: "Pontiac, MRC des Collines-de-l'Outaouais, Québec, Canada" },
      description: "Real estate broker specializing in the Municipality of Pontiac, Outaouais. Luskville, Breckenridge, Quyon.",
      telephone: "+18192103044",
      address: { "@type": "PostalAddress", streetAddress: "216 chemin d'Aylmer", addressLocality: "Gatineau", addressRegion: "QC", postalCode: "J9H 1A4", addressCountry: "CA" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "ygs-pontiac-agent-jsonld";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.getElementById("ygs-pontiac-agent-jsonld")?.remove(); };
  }, []);

  return (
    <>
      <PageMeta
        title="Real Estate Broker Pontiac Outaouais | Luskville & Breckenridge | YGS"
        description="Buy or sell in the Municipality of Pontiac, Outaouais. Luskville, Breckenridge, Quyon. Large lots, Ottawa River, bilingual. Local broker — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
      <NeighborhoodJsonLd name="Pontiac" description="Real estate broker in the Municipality of Pontiac. Luskville, Breckenridge, Quyon." lat={45.58} lng={-76.12} url="/en/pontiac" />
      <ServiceJsonLd name="Real Estate Broker Pontiac" description="Real estate services in the Municipality of Pontiac, Outaouais" url="/en/pontiac" serviceType="Real Estate Brokerage" areaServed={["Pontiac", "Luskville", "Breckenridge", "Quyon"]} />

      {/* HERO */}
      <HeroSection
        overline="PONTIAC · OUTAOUAIS · NATIONAL CAPITAL REGION"
        title="Real estate broker in Pontiac — between the Ottawa River and Gatineau Park"
        subtitle="The Municipality of Pontiac is nestled between the Ottawa River, the Quyon River and the hills of Gatineau Park. It is a unique territory within the National Capital Region: large, rural, bilingual, and still accessible. For buyers who want real space, it is often a discovery."
        primaryCta={{ label: "Free valuation →", href: "/en/home-valuation" }}
        secondaryCta={{ label: "Discuss my project →", href: "/en/contact" }}
        heroBgImage={heroImg}
      />

      {/* SECTION 1 — Important clarification */}
      <ContentBlock background="alt" padSize="md">
        <div className="max-w-[44rem] mx-auto">
          <div className="border-l-[3px] border-accent bg-background rounded-sm px-5 py-4">
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
              <AlertTriangle size={14} className="inline mr-1.5 text-accent -mt-0.5" />
              <strong>Not to be confused</strong>: the Municipality of Pontiac (Luskville, Breckenridge, Quyon area) is part of the MRC des Collines-de-l'Outaouais and the National Capital Region. It is distinct from the MRC Pontiac — a much more western territory not included in the National Capital Region. Yanis Gauthier-Sigeris covers the Municipality of Pontiac (Collines-de-l'Outaouais).
            </p>
          </div>
        </div>
      </ContentBlock>

      {/* SECTION 2 — Portrait */}
      <ContentBlock>
        <div className="label-overline mb-2">PONTIAC AT A GLANCE</div>
        <h2 className="mb-8">The Municipality of Pontiac — verified facts</h2>
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 space-y-5 text-[0.9375rem] text-muted-foreground leading-relaxed">
            <p>The Municipality of Pontiac was created in 1975 by the amalgamation of four municipalities: North Onslow, South Onslow, Quyon and Eardley. It is part of the MRC des Collines-de-l'Outaouais and is included in Canada's National Capital Region. Its territory covers approximately 503&nbsp;km² on the north shore of the Ottawa River. <span className="text-xs italic">(Source: Wikipedia/Pontiac, Quebec; Municipality of Pontiac)</span></p>
            <p>The Municipality of Pontiac is one of the most bilingual communities in the region. According to the 2016 census, approximately 64% of residents speak both official languages, with French as mother tongue at 55.5% and English at 38.6%. It is a naturally bilingual environment that attracts both francophone and anglophone families. <span className="text-xs italic">(Source: Wikipedia/Pontiac, Quebec — 2016 Census)</span></p>
            <p>A large portion of the Municipality of Pontiac's territory is included in Gatineau Park, managed by the National Capital Commission. This reality largely determines the character of the territory: little urbanization, lots of nature, and a limited residential supply that supports the value of existing properties. <span className="text-xs italic">(Source: Wikipedia/Pontiac, Quebec)</span></p>
          </div>
          <div className="md:col-span-2">
            <div className="border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-serif text-lg text-foreground">Pontiac — key facts</h3>
              <div className="w-8 h-0.5 bg-accent" />
              <div className="space-y-4 text-[0.875rem]">
                {[
                  { icon: MapPin, label: "Location", value: "MRC des Collines-de-l'Outaouais · National Capital Region" },
                  { icon: Users, label: "Population", value: "6,142 residents (2021 Census)", source: "(Source: Statistics Canada, 2021)" },
                  { icon: Globe, label: "Bilingualism", value: "~64% bilingual residents · FR 55.5% · EN 38.6%", source: "(Source: 2016 Census)" },
                  { icon: TreePine, label: "Nature", value: "Gatineau Park covers a large portion of the territory", source: "(Source: National Capital Commission)" },
                ].map((f) => (
                  <div key={f.label} className="flex gap-3">
                    <f.icon size={16} className="shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{f.label}</div>
                      <div className="text-muted-foreground">{f.value}</div>
                      {f.source && <div className="text-xs italic text-muted-foreground/70">{f.source}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/en/home-valuation" className="block w-full mt-4 text-center bg-accent text-accent-foreground rounded-md py-2.5 text-[0.875rem] font-medium hover:bg-accent/90 transition-colors">
                Get the real numbers →
              </Link>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* SECTION 3 — Communities */}
      <ContentBlock background="alt">
        <h2 className="mb-3">The communities of the Municipality of Pontiac</h2>
        <p className="text-[0.9rem] text-muted-foreground mb-8">The Municipality of Pontiac encompasses several distinct communities, each with its own character. Here are the main ones I serve.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Luskville", text: "The community closest to Gatineau and Chelsea — and therefore the most sought-after for buyers who want to be within reasonable distance of urban services. Luskville is nestled in the hills of Gatineau Park, with properties often on large wooded lots. The Luskville Falls trail is one of the most iconic hikes in the entire region, accessible from the village itself.", tag: "Close to Gatineau · Nature · Trails" },
            { name: "Breckenridge", text: "Located along the Ottawa River, Breckenridge offers some of the most beautiful waterfront properties in the region. Single-family homes on large lots, often with river views or direct water access. A sought-after area for buyers who value waterfront living in a rural setting.", tag: "Waterfront · Ottawa River · Rural" },
            { name: "Quyon", text: "The historic village of Pontiac, founded in 1848. Quyon is the most rural and most distant community from Gatineau. This is where traditional community life is strongest — agriculture, local activities, a strong sense of belonging. Ideal for buyers who truly want to escape urban life.", tag: "Historic village · Rural · Strong community" },
          ].map((s) => (
            <div key={s.name} className="bg-background border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-serif text-lg text-foreground">{s.name}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--gold-text)]">{s.tag}</span>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SECTION 4 — What attracts buyers */}
      <ContentBlock>
        <h2 className="mb-8">What you find in Pontiac that you won't find anywhere else in the region</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: TreePine, title: "Gatineau Park — in your backyard", text: "A large portion of Pontiac's territory is included in Gatineau Park (360 km² of forests, lakes and rivers, created in 1938). The Luskville Falls trail is directly accessible from the Luskville area. Residents have access to hundreds of kilometres of hiking, cross-country skiing and snowshoeing trails. (Source: National Capital Commission)" },
            { icon: Waves, title: "The Ottawa River as your frontage", text: "The Municipality of Pontiac runs along the north shore of the Ottawa River. Several Breckenridge properties offer direct river access or water views. The Ottawa River is navigable, rich in fish, and one of Canada's largest rivers — a rare quality-of-life asset for a residential property." },
            { icon: Bus, title: "Transcollines — urban connection", text: "The Municipality of Pontiac is served by Transcollines, the transit service that connects the Collines-de-l'Outaouais municipalities to the STO's Rapibus network and Ottawa's OC Transpo. A city connection that makes Pontiac more accessible than one might think for those combining remote work with occasional commuting." },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-lg p-6 space-y-3">
              <c.icon size={24} className="text-accent" />
              <h3 className="font-serif text-lg text-foreground">{c.title}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SECTION 5 — What to know */}
      <ContentBlock background="alt" narrow>
        <h2 className="mb-6">What you need to know before buying in Pontiac</h2>
        <div className="space-y-4 text-[0.9375rem] text-muted-foreground leading-relaxed">
          <p>Pontiac is a rural municipality. Several important realities to understand before making an offer:</p>
          <p>The vast majority of properties operate with artesian wells and septic systems. A complete inspection of these systems before purchase is essential — not optional. An end-of-life system represents a significant expense to anticipate.</p>
          <p>On-site services are limited. Pontiac has no large grocery chains, specialized clinics or hospital. For these needs, residents travel toward Gatineau (30-45 minutes depending on the area) or Ottawa. Residents live with this reality and factor it into their decision.</p>
          <p>Zoning in Pontiac is influenced by the MRC des Collines-de-l'Outaouais regulations and by National Capital Commission requirements for areas adjacent to Gatineau Park. Before any construction project or major renovation, a zoning verification with the municipality is essential.</p>
          <p>The Pontiac real estate market is a niche market. Transactions are less frequent than in Gatineau or Aylmer — which means that accurate comparable assessment is even more important. I know this area and monitor the transactions that close here.</p>
        </div>
      </ContentBlock>

      {/* SECTION 6 — Market context 2026 */}
      <ContentBlock narrow>
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-serif text-lg text-foreground">Pontiac in 2026</h3>
          <div className="space-y-3.5">
            {[
              "Pontiac attracts a specific buyer profile: remote workers, nature lovers, people seeking real space within the NCR. Demand for this profile remains steady.",
              "The 2026 Outaouais market offers buyers more choice than in 2022-2024, according to the Gatineau Real Estate Board. Pontiac benefits from this stabilization context.",
              "Transactions in Pontiac are less frequent than in urban areas — which makes accurate valuation even more critical. A broker who actively monitors this market is a real advantage.",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="shrink-0 text-accent mt-0.5" />
                <span className="text-[0.9rem] text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
          <Link to="/en/home-valuation" className="block w-full mt-2 text-center bg-accent text-accent-foreground rounded-md py-2.5 text-[0.875rem] font-medium hover:bg-accent/90 transition-colors">
            Get the real numbers →
          </Link>
          <p className="text-center text-xs text-muted-foreground">Free · No obligation · Response within 24-48h</p>
        </div>
      </ContentBlock>

      {/* SECTION 7 — FAQ */}
      <FAQSection title="Frequently asked questions — Pontiac, Outaouais" items={faq} />

      {/* Guide CTA */}
      <GuideInlineCTA
        guideType="buyer_guide"
        headline="Free buyer's guide — buying in the Pontiac"
        text="Process, budget and tips for buying in the area."
        ctaLabel="Get the buyer's guide"
      />

      {/* Related Links */}
      <RelatedPages
        overline="Explore other areas I serve"
        title="Nearby areas"
        pages={[
          { title: "Chelsea", text: "Village, Gatineau Park.", href: "/en/chelsea" },
          { title: "Cantley", text: "Large lots, families.", href: "/en/cantley" },
          { title: "Aylmer", text: "Lac Deschênes, family neighbourhoods.", href: "/en/aylmer" },
          { title: "Val-des-Monts", text: "Lakes, nature, tranquility.", href: "/en/val-des-monts" },
        ]}
        background="alt"
      />

      {/* CTA Final */}
      <CTASection
        dark
        overline="YOUR PROJECT IN PONTIAC"
        title="Pontiac is a market that few brokers truly know"
        text="I have been covering the Municipality of Pontiac since 2017. I know the areas, the comparables, and the practical realities — wells, septic systems, zoning, access. If you have a project here, I am your local broker."
        buttons={[
          { label: "Free valuation →", href: "/en/home-valuation" },
          { label: "Contact me →", href: "/en/contact", variant: "outline" },
        ]}
        trustLine="« I give you the numbers and options, you decide. »"
      />

      <StickyGuideBanner guideType="buyer_guide" label="Free buyer's guide — get it by email" />
    </>
  );
};

export default PontiacPageEn;
