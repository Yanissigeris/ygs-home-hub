import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Users, Home, MapPin, Coffee, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-aylmer.webp";
import lifestyleImg from "@/assets/plateau-aylmer-lifestyle.webp";

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Aylmer area specialist" },
  { icon: Shield, label: "Support at your pace" },
];

const reasons = [
  "Family neighborhoods with access to Lake Deschênes",
  "Proximity to Gatineau Park and trails",
  "Renowned schools and bilingual services",
  "Established community with small-town charm",
  "Quick access to Ottawa via the Champlain Bridge",
];

const profiles = [
  { icon: Users, title: "Established families", text: "Mature neighborhoods, large properties and a tight-knit community." },
  { icon: Home, title: "Move-up buyers", text: "Character properties with renovation potential in a sought-after area." },
  { icon: MapPin, title: "Nature lovers", text: "Lake Deschênes, Gatineau Park and trails right at your doorstep." },
  { icon: Coffee, title: "Village life", text: "Restaurants, cafés, boutiques and a local market within walking distance." },
];

const faq = [
  { q: "What is the average home price in Aylmer?", a: "It varies by neighborhood and property type. Contact me for an up-to-date analysis based on recent comparable sales in your Aylmer area." },
  { q: "Is Aylmer good for families?", a: "Absolutely. Bilingual schools, parks, Lake Deschênes, tight-knit community — it's one of the best family areas in Outaouais." },
  { q: "How long to get to Ottawa from Aylmer?", a: "15-25 minutes by car depending on the time. Access via the Champlain Bridge and cycling paths." },
  { q: "Why work with a real estate broker in Aylmer?", a: "A broker who knows Aylmer deeply understands micro-markets, real value by street and what local and Ottawa buyers expect. That makes all the difference in your result." },
  { q: "What are the best neighborhoods in Aylmer?", a: "Old Aylmer for charm and village life, the Aylmer Plateau for newer homes, and streets near the lake for character properties. Each area has its own profile." },
  { q: "How does buying a home in Aylmer work?", a: "Budget definition, targeted search in the right streets, offer, inspection, financing and notary. I guide you through every step." },
  { q: "Are prices going up in Aylmer?", a: "Aylmer remains one of the most sought-after areas in Outaouais. Trends vary by property type — a personalized analysis will give you the exact picture." },
  { q: "Can I find an affordable bungalow in Aylmer?", a: "Yes, some areas still offer bungalows at competitive prices, but you need to act fast. A targeted buying strategy makes the difference." },
  { q: "Are there condos in Aylmer?", a: "Yes, you'll find condos in Old Aylmer and in some recent developments. It's a great option for first-time buyers or retirees." },
  { q: "How do I get a home valuation in Aylmer?", a: "I prepare a free valuation based on recent sales on your street and in your neighborhood. It's confidential, no commitment, and you receive a clear report." },
];

const relatedSectors = [
  { name: "Plateau", href: "/en/plateau", detail: "Recent developments, families" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, condos" },
  { name: "Gatineau centre", href: "/en/gatineau", detail: "Residential, services, affordable" },
];

const related = [
  { title: "Living in Aylmer — the guide", text: "Lifestyle, lake, community and everything you need to know.", href: "/en/living-aylmer" },
  { title: "Buyer Guide", text: "The buying process in Québec, step by step.", href: "/en/buyer-guide" },
  { title: "First-time buyer", text: "Budget, down payment and tips for first-time buyers.", href: "/en/first-time-buyer" },
  { title: "Free Valuation", text: "How much is your Aylmer property worth?", href: "/en/home-valuation" },
];

const AylmerPageEn = () => (
  <>
    <PageMeta title="Real Estate Broker Aylmer · Gatineau | YGS" description="Real estate broker in Aylmer, Gatineau. Lake Deschênes, family neighborhoods, bilingual schools — buy or sell with a local specialist." />
    <NeighborhoodJsonLd name="Aylmer" description="Real estate broker specializing in Aylmer, Gatineau. Lake Deschênes, family neighborhoods, schools and community." lat={45.3945} lng={-75.8486} url="/en/aylmer" />
    <HeroSection overline="Neighborhood Guide · Aylmer" title="Live, buy or sell in Aylmer" subtitle="Lake Deschênes, parks, schools and community — Aylmer offers an exceptional living environment steps from Ottawa." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    <TrustMiniStrip items={trustItems} />
    <ImageTextSplit image={lifestyleImg} imageAlt="Life in Aylmer, Gatineau" imagePosition="right">
      <div className="label-overline">The area</div>
      <h2 className="mt-3">Why Aylmer is so popular</h2>
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>
    <CardGrid overline="For who" title="Aylmer is ideal for…" items={profiles} background="alt" />
    <InlineCTA text="Own property in Aylmer? Find out how much it's worth." buttonLabel="Free Valuation →" href="/en/home-valuation" />
    <FAQSection title="Questions about Aylmer" items={faq} />
    <SectorLinks overline="Other areas" title="Explore other neighborhoods" sectors={relatedSectors} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying in Aylmer" text="Process, budget and tips for buying in the area — in a guide sent to your email." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Buyer or seller in Aylmer?" text="I know Aylmer inside out — let's talk about your project." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default AylmerPageEn;
