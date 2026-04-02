import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-chelsea.jpg";

const ChelseaPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Real Estate Broker Chelsea · Outaouais | YGS"
    metaDesc="Real estate broker in Chelsea, Outaouais. Buy or sell near Gatineau Park — nature, tranquility and quick access to Ottawa with a local specialist."
    jsonLd={{ name: "Chelsea", description: "Real estate broker in Chelsea. Picturesque village, Gatineau Park, nature and tranquility.", lat: 45.5200, lng: -75.7870, url: "/en/chelsea" }}
    hero={{ overline: "Neighborhood Guide · Chelsea", title: "Buy, Sell or Live in Chelsea", subtitle: "Picturesque village at the doorstep of Gatineau Park — nature, tranquility and quick access to Ottawa.", image: heroImg }}
    trustSpecialty="Chelsea & area specialist"
    lifestyle={{ image: heroImg, imageAlt: "Chelsea village, Outaouais", title: "Why Chelsea is so special", subtitle: "A unique village where nature, art and community coexist — 20 minutes from Ottawa." }}
    reasons={[
      "Direct access to Gatineau Park — skiing, hiking, cycling year-round",
      "Artistic village with galleries, cafés and a renowned farmers' market",
      "French and English schools nearby at both elementary and secondary levels",
      "Large wooded lots and unique character properties",
      "20-30 minutes from Ottawa via Highway 5 — smooth commute off-peak",
    ]}
    profilesTitle="Chelsea is ideal for…"
    profiles={[
      { icon: Users, title: "Nature-loving families", text: "Large lots, Gatineau Park next door, tight-knit community." },
      { icon: Home, title: "Character home buyers", text: "Homes on large wooded lots, four-season cottages and unique residences." },
      { icon: TreePine, title: "Outdoor enthusiasts", text: "Cross-country skiing, hiking, cycling and lakes — year-round active lifestyle." },
      { icon: Mountain, title: "Remote workers", text: "Exceptional quality of life with high-speed internet available." },
    ]}
    inlineCta={{ text: "Own a property in Chelsea? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{
      title: "Questions about Chelsea",
      items: [
        { q: "Is Chelsea far from Ottawa?", a: "No — about 20-30 minutes via Highway 5. Faster than many Ottawa suburbs." },
        { q: "Are there schools in Chelsea?", a: "Yes, French and English elementary schools. For high school, options in Gatineau are 15 minutes away." },
        { q: "What kind of properties are in Chelsea?", a: "Single-family homes on large lots, cottages, luxury properties and some townhomes. Very few condos." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/en/cantley", detail: "Rural, large lots, hills" },
      { name: "Aylmer", href: "/en/aylmer", detail: "Lake, established neighborhoods" },
      { name: "Plateau", href: "/en/plateau", detail: "Families, new developments" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Buyer's Guide", text: "The home buying process in Quebec.", href: "/en/buyer-guide" },
      { title: "Free Valuation", text: "What's your Chelsea property worth?", href: "/en/home-valuation" },
      { title: "First-Time Buyer", text: "Budget, down payment and tips.", href: "/en/first-time-buyer" },
      { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Chelsea", text: "Process, budget and tips for buying in the area — sent by email.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Chelsea?", text: "I know Chelsea inside out — let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default ChelseaPageEn;
