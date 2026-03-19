import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Search, Home, Building2, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-properties.webp";

const profileCards = [
  { icon: Search, title: "Looking for a house", text: "Single-family, semi-detached, townhouse — find the property that matches your profile." },
  { icon: Building2, title: "Looking for a plex", text: "Duplex, triplex or more — analyze the return before buying." },
  { icon: Home, title: "Looking for a condo", text: "Downtown, suburb or new development — options are plentiful." },
];
const sectors = [
  { name: "Aylmer", href: "/en/plateau-aylmer", detail: "Lake, established neighborhoods, quality of life" },
  { name: "Plateau", href: "/en/plateau-aylmer", detail: "Families, recent developments" },
  { name: "Hull", href: "/en/hull", detail: "Urban, condos, plex, Ottawa proximity" },
  { name: "Buckingham", href: "/en/buckingham", detail: "Space, nature, affordable prices" },
];
const faq = [
  { q: "How are featured properties selected?", a: "I select properties based on location, potential, value and relevance for active buyers in Gatineau." },
  { q: "How can I be notified of new listings?", a: "Contact me with your criteria — I'll let you know as soon as a matching property hits the market." },
  { q: "Do properties sell quickly in Gatineau?", a: "Yes — the best ones often sell within days. Being informed first makes all the difference." },
];

const PropertiesPageEn = () => (
  <>
    <PageMeta title="Properties for Sale in Gatineau | YGS" description="Houses, condos, plexes and land in Gatineau. Browse available properties in all Outaouais neighborhoods." />
    <HeroSection overline="Properties · Gatineau and Outaouais" title="Find your property in Outaouais" subtitle="Houses, condos, plexes and land — browse available properties in all Gatineau and Outaouais neighborhoods." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} trustLine="Strategic guidance. Zero pressure." heroBgImage={heroImg} />
    <ContentBlock narrow={false}>
      <SectionHeading overline="Active listings" title="My properties for sale" subtitle="Browse my listings — houses, condos, plexes and land in Gatineau and Outaouais." />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.filter(p => p.status === "active").map(property => (<PropertyCard key={property.id} property={property} />))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://www.remax-quebec.com/fr/courtiers-immobiliers/yanis.gauthier-sigeris" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <Home className="h-5 w-5" />See all my properties on RE/MAX<ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </ContentBlock>
    <CardGrid overline="Your profile" title="What type of property are you looking for?" items={profileCards} columns={3} background="alt" />
    <SectorLinks overline="By neighborhood" title="Properties by area" sectors={sectors} background="alt" />
    <InlineCTA text="Selling? Find out how much your property is worth — it's free." buttonLabel="Get my valuation →" href="/en/home-valuation" />
    <FAQSection items={faq} />
    <CTASection dark title="Looking for a property in Gatineau?" text="Tell me your criteria — I'll send you the best options before anyone else." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} trustLine="Zero pressure — I give you the options, you decide." />
  </>
);
export default PropertiesPageEn;
