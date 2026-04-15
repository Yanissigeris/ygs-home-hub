import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau — Neighborhood Guide"
    metaDesc="Buy, sell or live in Côte-d'Azur, Gatineau. Established residential area with bungalows, mature trees and quick access to Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Real estate broker in Côte-d'Azur, Gatineau. Established residential neighborhood.", lat: 45.4700, lng: -75.7000, url: "/en/cote-dazur" }}
    hero={{ overline: "Neighborhood Guide · Côte-d'Azur", title: "Buy, Sell or Live in Côte-d'Azur", subtitle: "Established residential neighborhood — bungalows, mature trees and quiet suburban living.", image: heroImg }}
    trustSpecialty="Côte-d'Azur specialist"
    lifestyle={{ image: heroImg, imageAlt: "Côte-d'Azur neighborhood, Gatineau", title: "Why Côte-d'Azur is appreciated", subtitle: "A mature residential neighborhood with tree-lined streets and easy access to everything." }}
    reasons={[
      "Established residential neighborhood with mature trees and peaceful streets",
      "Bungalows, split-levels and renovated homes at great value",
      "Close to shops, supermarkets and services on Boulevard Maloney",
      "Elementary and high schools within walking distance",
      "15-20 minutes from Ottawa via Highway 50 and Macdonald-Cartier Bridge",
    ]}
    profilesTitle="Côte-d'Azur is ideal for…"
    profiles={[
      { icon: Users, title: "Families", text: "Quiet neighborhood, nearby schools, parks and stable community." },
      { icon: Home, title: "First-time buyers", text: "Affordable bungalows with renovation potential." },
      { icon: MapPin, title: "Retirees", text: "Quiet area with all services nearby." },
      { icon: Coffee, title: "Resale buyers", text: "Character properties with appreciation potential." },
    ]}
    inlineCta={{ text: "Own a property in Côte-d'Azur? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Côte-d'Azur", items: [
      { q: "Where is Côte-d'Azur located?", a: "In the Gatineau sector, between Boulevard Maloney and Boulevard La Vérendrye. Central and well-served." },
      { q: "Are homes affordable?", a: "Yes — one of the most accessible Gatineau neighborhoods for bungalows and single-family homes." },
      { q: "Is there public transit?", a: "Yes, STO bus lines serve the area with routes to Hull and Ottawa." },
    ]}}
    sectors={{ list: [
      { name: "Limbour", href: "/en/limbour", detail: "Family, parks, modern suburb" },
      { name: "Gatineau (centre)", href: "/en/gatineau", detail: "Services, central, residential" },
      { name: "Hull", href: "/en/hull", detail: "Urban, culture, condos" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — Côte-d'Azur", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Côte-d'Azur?", text: "I know the neighborhood — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default CoteDazurPageEn;
