import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.jpg";

const MassonAngersPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Masson-Angers — Neighborhood Guide Gatineau | YGS"
    metaDesc="Buy, sell or live in Masson-Angers, Gatineau. Growing family-friendly area with new construction and competitive prices."
    jsonLd={{ name: "Masson-Angers", description: "Real estate broker in Masson-Angers. Growing family area with new homes.", lat: 45.5328, lng: -75.4170, url: "/en/masson-angers" }}
    hero={{ overline: "Neighborhood Guide · Masson-Angers", title: "Buy, Sell or Live in Masson-Angers", subtitle: "Growing family area with new construction and competitive prices.", image: heroImg }}
    trustSpecialty="Masson-Angers specialist"
    lifestyle={{ image: heroImg, imageAlt: "Masson-Angers residential area", title: "Why Masson-Angers is booming", subtitle: "One of Gatineau's most dynamic areas for young families and first-time buyers." }}
    reasons={[
      "Entry-level prices among the lowest in Gatineau — ideal for first-time buyers",
      "New construction and recent residential developments",
      "Highway 50 proximity — quick access to Gatineau and Ottawa",
      "Parks, trails and green spaces in new neighborhoods",
      "Expanding services — schools, shops and restaurants",
    ]}
    profilesTitle="Masson-Angers is ideal for…"
    profiles={[
      { icon: Users, title: "Young families", text: "Affordable new homes, parks and schools nearby." },
      { icon: Home, title: "First-time buyers", text: "Accessible entry prices and easier financing." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with appreciation potential." },
      { icon: MapPin, title: "East-side workers", text: "Quick access to east Gatineau and Buckingham employment zones." },
    ]}
    inlineCta={{ text: "Own a property in Masson-Angers? Find out its current value.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Masson-Angers", items: [
      { q: "Is Masson-Angers far from downtown Gatineau?", a: "About 20-25 minutes via Highway 50. Quick and direct access." },
      { q: "Are there new homes in Masson-Angers?", a: "Yes, it's one of the areas with the most new construction in Gatineau." },
      { q: "Is the market going up?", a: "Yes — prices are gradually increasing with new developments and growing demand." },
    ]}}
    sectors={{ list: [
      { name: "Buckingham", href: "/en/buckingham", detail: "River, nature, affordable" },
      { name: "Gatineau (centre)", href: "/en/gatineau", detail: "Central, services, residential" },
      { name: "Limbour", href: "/en/limbour", detail: "Family, parks, modern suburb" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Masson-Angers", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Masson-Angers?", text: "I know the area — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default MassonAngersPageEn;
