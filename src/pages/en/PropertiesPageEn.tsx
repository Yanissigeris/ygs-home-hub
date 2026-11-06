import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import RelatedPages from "@/components/RelatedPages";
import PropertyCard from "@/components/PropertyCard";
import { propertiesEn as properties } from "@/data/properties-en";
import { Search, Home, Building2, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-properties.webp";

const profileCards = [
  { icon: Search, title: "Looking for a house", text: "Single-family, semi-detached, townhouse, find the property that matches your profile." },
  { icon: Building2, title: "Looking for a plex", text: "Duplex, triplex or more, analyze the return before buying." },
  { icon: Home, title: "Looking for a condo", text: "Downtown, suburb or new development, options are plentiful." },
];
const sectors = [
  { name: "Aylmer", href: "/en/plateau-aylmer/", detail: "Lake, established neighborhoods, quality of life" },
  { name: "Plateau", href: "/en/plateau-aylmer/", detail: "Families, recent developments" },
  { name: "Hull", href: "/en/hull/", detail: "Urban, condos, plex, Ottawa proximity" },
  { name: "Buckingham", href: "/en/buckingham/", detail: "Space, nature, affordable prices" },
];
const faq = [
  { q: "How are featured properties selected?", a: "I select properties based on location, potential, value and relevance for active buyers in Gatineau." },
  { q: "How can I be notified of new listings?", a: "Contact me with your criteria, I'll let you know as soon as a matching property hits the market." },
  { q: "Do properties sell quickly in Gatineau?", a: "It depends on the area and the price. In Q3 2026, a single-family home sold in 34 days on average in the Gatineau area (QPAREB). A well-located, well-presented property can go faster." },
  { q: "What are the prices of sold homes in Gatineau?", a: "Sold prices don't show on Centris for the public. As a broker, I have access to completed sales, and I show you the ones that compare to the property you like." },
  { q: "How do I avoid missing a new listing?", a: "I let you know as soon as a new Centris listing matches your criteria, with comparable sales in the area to judge the price." },
];
const related = [
  { title: "Buyer consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation/" },
  { title: "Free valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
  { title: "Market report", text: "Prices and trends in Gatineau.", href: "/en/market-report/" },
  { title: "Explore neighborhoods", text: "Find the area that fits you.", href: "/en/neighborhoods/" },
];

const PropertiesPageEn = () => (
  <>
    <PageMeta title="Properties for Sale in Gatineau" description="Houses, condos, plexes and land in Gatineau. Browse available properties in all Outaouais neighborhoods." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <HeroSection overline="Properties · Gatineau and Outaouais" title="Find your property in Outaouais" subtitle="Houses, condos, plexes and land: browse available properties in every part of Gatineau and the Outaouais." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation/" }} trustLine="Access to every Centris listing." heroBgImage={heroImg} />

    <ContentBlock narrow={false}>
      <SectionHeading overline="Active listings" title="My current listings" subtitle="My listings: houses, condos, plexes and land in Gatineau and the Outaouais." />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.filter(p => ["active", "rent", "rented"].includes(p.status)).map(property => (<PropertyCard key={property.id} property={property} />))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://www.remax-quebec.com/en/real-estate-brokers/yanis.gauthier-sigeris" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <Home className="h-5 w-5" />See all my properties on RE/MAX<ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {properties.filter(p => p.status === "sold").length > 0 && (
        <div className="mt-16">
          <SectionHeading overline="Recently sold" title="Sold properties" subtitle="Proven results for my clients." />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.filter(p => p.status === "sold").map(property => (<PropertyCard key={property.id} property={property} />))}
          </div>
        </div>
      )}
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading overline="Listing alerts" title="Hear about new listings right away" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        I've been a broker in the Outaouais since 2017. I have access to every Centris listing in Gatineau and the surrounding area, from Chelsea to Pontiac. Once I know your criteria, I flag every new listing that matches them.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        You visit without pressure, and you don't waste time on homes that don't fit. Tell me your area and your price ceiling, then what you won't compromise on. I'll do the sorting.
      </p>
    </ContentBlock>

    <CardGrid overline="Your profile" title="What type of property are you looking for?" items={profileCards} columns={3} background="alt" />

    <ContentBlock narrow>
      <SectionHeading overline="How I work" title="Buying with a broker who represents you" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        In Québec, a buyer who works directly with the listing broker isn't independently represented. When you sign a buyer brokerage contract with me, my legal duty is to you, your budget, your interests, your downside protection. I run comparable sales, structure conditions (financing, inspection, sale of current home), negotiate the offer, and stay on the file all the way through the notary signing.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        That representation costs you nothing in most resale transactions: the listing broker's compensation typically covers the buyer's broker out of the seller's brokerage contract. It's a clear win, independent advice, full market access, and a bilingual file that travels smoothly between Ottawa and Gatineau.
      </p>
    </ContentBlock>

    <SectorLinks overline="By neighborhood" title="Properties by area" sectors={sectors} background="alt" />

    <InlineCTA text="Selling? Find out how much your property is worth, it's free." buttonLabel="Get my valuation →" href="/en/home-valuation/" />

    <FAQSection items={faq} />

    <RelatedPages overline="Explore also" title="Related pages" pages={related} background="alt" />

    <CTASection dark title="Looking for a property in Gatineau?" text="Tell me your criteria, I'll send you matching properties as soon as they're listed." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "Explore neighborhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I give you the options, you decide with full clarity." />
  </>
);
export default PropertiesPageEn;
