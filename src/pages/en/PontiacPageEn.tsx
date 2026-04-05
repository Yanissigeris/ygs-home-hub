import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-pontiac.webp";

const PontiacPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Pontiac QC — Neighborhood Guide"
    metaDesc="Buy, sell or live in Pontiac, Quebec. Ottawa River, large lots, authentic rural living — at the doorstep of Gatineau and Ottawa."
    jsonLd={{ name: "Pontiac", description: "Real estate broker in Pontiac. Farmland, Ottawa River and rural living.", lat: 45.5800, lng: -76.1200, url: "/en/pontiac" }}
    hero={{ overline: "Area Guide · Pontiac", title: "Buy, Sell or Live in the Pontiac", subtitle: "Wide open spaces, Ottawa River and authentic rural charm — Quebec countryside at its finest.", image: heroImg }}
    trustSpecialty="Pontiac & rural Outaouais specialist"
    lifestyle={{ image: heroImg, imageAlt: "Pontiac countryside", title: "Why the Pontiac appeals", subtitle: "A vast territory where nature, heritage and tranquility offer a unique lifestyle." }}
    reasons={[
      "Large agricultural and residential lots at very accessible prices",
      "Ottawa River — kayaking, fishing and water activities",
      "Unique built heritage — stone houses, century-old farms",
      "Warm bilingual rural community",
      "30-45 minutes from Aylmer, 40-55 minutes from Ottawa",
    ]}
    profilesTitle="The Pontiac is ideal for…"
    profiles={[
      { icon: TreePine, title: "Open space lovers", text: "Farmland, forests and river as far as the eye can see." },
      { icon: Home, title: "Farm buyers", text: "Agricultural properties, stone houses and renovated farms." },
      { icon: Users, title: "Families seeking peace", text: "Authentic rural living at a reasonable distance from the city." },
      { icon: Mountain, title: "Retirees & remote workers", text: "Unbeatable prices and a peaceful setting." },
    ]}
    inlineCta={{ text: "Own property in the Pontiac? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Pontiac", items: [
      { q: "Is the Pontiac far from Gatineau?", a: "It depends — from 30 minutes (Luskville) to over an hour (Fort-Coulonge). Most residential properties are 30-45 minutes away." },
      { q: "Can you commute to Ottawa?", a: "Yes, but the commute is longer than Aylmer or Hull. Pontiac is better suited for remote work." },
      { q: "Are lots affordable?", a: "Very affordable compared to the rest of the Outaouais. Best space-to-price ratio in the region." },
    ]}}
    sectors={{ list: [
      { name: "Aylmer", href: "/en/aylmer", detail: "Lake, family neighborhoods" },
      { name: "Chelsea", href: "/en/chelsea", detail: "Village, Gatineau Park" },
      { name: "Buckingham", href: "/en/buckingham", detail: "River, nature, affordable" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
      { title: "Relocation Guide", text: "Moving to the Outaouais.", href: "/en/relocation" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in the Pontiac", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in the Pontiac?", text: "I know the territory — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default PontiacPageEn;
