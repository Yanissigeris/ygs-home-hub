import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import ContentBlock from "@/components/ContentBlock";
import { CheckCircle2, Users, Home, TrendingUp, MapPin, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-plateau.webp";
import lifestyleImg from "@/assets/plateau-aylmer-lifestyle.webp";


const reasons = [
  "Recent developments with modern homes",
  "Family neighborhoods with parks and cycling paths",
  "Schools and daycares nearby",
  "Quick access to Ottawa and downtown Gatineau",
  "Excellent value for young families",
];

const profiles = [
  { icon: Users, title: "Young families", text: "Recent homes, safe neighborhoods and an active family community." },
  { icon: Home, title: "First-time buyers", text: "New or recent properties at still-accessible prices." },
  { icon: MapPin, title: "Outdoor enthusiasts", text: "Proximity to Gatineau Park and numerous trails." },
  { icon: TrendingUp, title: "Investors", text: "Growing area with strong demand and good return potential." },
];

const faq = [
  { q: "Is the Plateau a good choice for a family?", a: "It's one of the most popular areas for families — recent homes, parks, schools and a young community." },
  { q: "Are prices increasing in the Plateau?", a: "The Plateau is experiencing strong growth. Contact me for the latest data in your sub-sector." },
  { q: "Are there many new constructions?", a: "Yes — several recent developments offer new homes and semis with warranty." },
  { q: "Why work with a real estate broker in the Plateau?", a: "A local broker knows the developments, prices by street and market trends in the Plateau. That helps you buy at the right price or sell at the best time." },
  { q: "What is the average home price in the Plateau?", a: "It depends on property type and year of construction. Contact me for an analysis based on recent sales in your Plateau area." },
  { q: "Are there new homes available in the Plateau?", a: "Yes, several builders offer new homes with warranty. I can guide you toward projects that match your budget." },
  { q: "Is the Plateau good for a first purchase?", a: "Very good — recent constructions offer excellent value, and the area is well-served by schools and services." },
  { q: "How do I get a home valuation in the Plateau?", a: "I prepare a free valuation based on recent comparable sales on your street. It's confidential and no commitment." },
  { q: "Are there condos in the Plateau?", a: "Yes, you'll find condos and townhomes, especially in recent developments. It's a popular option for first-time buyers." },
  { q: "What services are available in the Plateau?", a: "Elementary and secondary schools, parks, grocery stores, pharmacies and quick access to Gatineau shopping centers. The area is complete for families." },
];

const relatedSectors = [
  { name: "Aylmer", href: "/en/aylmer", detail: "Lake Deschênes, established neighborhoods" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, condos" },
  { name: "Gatineau centre", href: "/en/gatineau", detail: "Residential, services, affordable" },
];

const related = [
  { title: "Living in the Plateau — the guide", text: "Lifestyle, families and recent developments.", href: "/en/living-plateau" },
  { title: "Sell in Gatineau", text: "Strategy, pricing and full support.", href: "/en/sell" },
  { title: "Free Valuation", text: "How much is your Plateau property worth?", href: "/en/home-valuation" },
  { title: "First-time buyer", text: "Budget, process and tips for first-time buyers.", href: "/en/first-time-buyer" },
  { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods" },
];

const PlateauPageEn = () => (
  <>
    <SEO title="Real estate broker Plateau Gatineau | YGS" description="Buy or sell in the Plateau in Gatineau. Quiet family neighborhood, Highway 50 access." canonical="https://yanisgauthier.com/en/plateau" hreflangFr="https://yanisgauthier.com/plateau" hreflangEn="https://yanisgauthier.com/en/plateau" lang="en" />
    <PageMeta title="Plateau — Neighborhood Guide Gatineau" description="Discover the Plateau in Gatineau. Families, recent developments, parks and quick Ottawa access. Complete guide." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd name="Plateau" description="Real estate broker specializing in the Plateau, Gatineau. Recent developments, families and excellent value." lat={45.4830} lng={-75.7350} url="/en/plateau" />
    <HeroSection overline="Neighborhood Guide · Plateau" title="Live, buy or invest in the Plateau" subtitle="Recent developments, family neighborhoods and excellent value — the Plateau is one of Gatineau's most dynamic areas." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
<ImageTextSplit image={lifestyleImg} imageAlt="Life in the Plateau, Gatineau" imagePosition="right">
      <div className="label-overline">The area</div>
      <h2 className="mt-3">Why the Plateau attracts families</h2>
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>
    <CardGrid overline="For who" title="The Plateau is ideal for…" items={profiles} background="alt" />
    <ContentBlock>
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">The Plateau — what makes this Gatineau sector different</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          The Plateau is one of the youngest and most dynamic sectors of the City of Gatineau. Most of its housing stock was built between 1995 and today, with new phases still being delivered along boulevard du Plateau and in the Mont-Bleu corridor. As of May 2026, single-family homes typically trade between $475,000 and $700,000 according to active Centris listings, with semi-detached townhomes from the mid-$400,000s and recent condos starting in the high-$200,000s. Lots are smaller than in Aylmer or Buckingham, but in exchange you get newer construction, low maintenance and predictable energy costs.
        </p>
        <p className="prose-body">
          Daily life is anchored by Galeries du Plateau (groceries, pharmacy, professional services), the Mont-Bleu sports complex and the linear parks that run through the residential streets. Public schools are operated by the Centre de services scolaire des Portages-de-l'Outaouais (CSSPO) — École du Plateau, École du Vieux-Verger and École secondaire Mont-Bleu serve most of the area. For English-language education, the Western Quebec School Board (WQSB) routes students to nearby schools in Aylmer and Hull. Several daycares and CPEs operate inside the Plateau itself, which removes a major friction point for working parents.
        </p>
        <p className="prose-body">
          Commute-wise, the Plateau is well-positioned for cross-river workers. The Champlain Bridge is roughly 10–15 minutes by car off-peak, the Macdonald-Cartier Bridge 15–20 minutes, and the STO Rapibus and Plateau express lines connect directly to downtown Ottawa. For families relocating from Ontario, that combination — recent construction, English-school access, and a 20-minute door-to-door commute to Tunney's Pasture or Place du Portage — is what usually decides the search in favour of the Plateau over similarly priced Ottawa suburbs.
        </p>
      </div>
    </ContentBlock>
    <SectorLinks overline="Other areas" title="Explore other neighborhoods" sectors={relatedSectors} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — buying in the Plateau" text="Process, budget and tips for buying in the area — in a guide sent to your email." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Buyer or seller in the Plateau?" text="I know the Plateau — let's talk about your project." buttons={[{ label: "Free Valuation", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default PlateauPageEn;
