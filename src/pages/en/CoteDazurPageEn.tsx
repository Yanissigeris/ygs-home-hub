import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau — Neighborhood Guide"
    metaDesc="Buy, sell or live in Côte-d'Azur, Gatineau. Established residential area with bungalows, mature trees and quick access to Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Real estate broker in Côte-d'Azur, Gatineau. Established residential neighborhood.", lat: 45.4700, lng: -75.7000, url: "/en/cote-dazur/" }}
    hero={{ overline: "Neighborhood Guide · Côte-d'Azur", title: "Buy, Sell or Live in Côte-d'Azur", subtitle: "Mature residential neighborhood in central Gatineau, between Boulevard Maloney and Boulevard La Vérendrye. 1960s-1990s bungalows, quiet streets, 15-20 minutes from downtown Ottawa.", image: heroImg }}
    trustSpecialty="Côte-d'Azur specialist"
    lifestyle={{ image: heroImg, imageAlt: "Côte-d'Azur neighborhood, Gatineau", title: "Why Côte-d'Azur is appreciated", subtitle: "Côte-d'Azur attracts families looking for an established neighborhood close to services, without paying Aylmer, Plateau, or Ottawa prices. Most properties are bungalows and split-levels, often on lots of 4,000 to 6,000 sq ft. The area remains one of the most accessible parts of central Gatineau to step into a single-family home — and increasingly popular with cross-river buyers from Ottawa." }}
    reasons={[
      "Established residential neighborhood with mature trees and peaceful streets",
      "Bungalows, split-levels and renovated homes between $500,000 and $730,000 depending on size and condition (Centris data, May 2026)",
      "Roughly $200,000+ savings vs. comparable Ottawa neighborhoods — Ottawa single-family median was $780,000 in Q1 2026 (Ottawa Real Estate Board)",
      "15-20 minutes from downtown Ottawa via Highway 50 and the Macdonald-Cartier Bridge — practical for federal commuters",
      "Local shops and services on Boulevard Maloney: IGA, Metro, Jean Coutu, Tim Hortons, Poulet Rouge and more",
      "Western Quebec School Board (English) elementary and secondary schools available in the Gatineau sector",
      "STO public transit with bus lines into Hull and downtown Ottawa",
      "Average time on market observed: 30 to 45 days for a well-prepared bungalow at the right price",
      "Renovation upside for buyers who modernize a 1960s-1980s property",
      "Quiet, stable neighborhood — many residents have lived there 20-30 years",
    ]}
    profilesTitle="Côte-d'Azur is ideal for…"
    profiles={[
      { icon: Users, title: "Families", text: "Quiet neighborhood with English-friendly schools, parks and services within walking distance. Stable community where many residents have lived 20-30 years." },
      { icon: Home, title: "First-time buyers", text: "Bungalows starting around $500,000 — accessible entry into the Gatineau single-family market without commuting from far suburbs." },
      { icon: MapPin, title: "Retirees", text: "Single-floor living with no stairs, services and pharmacy on Maloney, peaceful streets. Ideal for aging in place." },
      { icon: Coffee, title: "Ottawa relocators", text: "Cross-river buyers from Ottawa looking for more space, a mature neighborhood, and meaningful savings. Quick commute via Highway 50 and the Macdonald-Cartier Bridge." },
      { icon: Coffee, title: "Resale buyers", text: "1960s-1980s bungalows with solid bones: lot, brick, structure. Real appreciation potential with a well-executed kitchen and bathroom renovation." },
    ]}
    inlineCta={{ text: "Own a property in Côte-d'Azur? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Côte-d'Azur",
      items: [
        { q: "Where is Côte-d'Azur located in Gatineau?", a: "In the Gatineau sector (the former city), between Boulevard Maloney to the north and Boulevard La Vérendrye to the south. Central, well-served by STO transit, and 15-20 minutes from downtown Ottawa." },
        { q: "What is the price of a home in Côte-d'Azur in 2026?", a: "Based on active Centris listings as of May 2026, bungalows and semi-detached homes typically sell between $500,000 and $730,000 depending on living area, property condition, and lot size. Unrenovated bungalows fall in the lower part of the range; modernized properties with garages reach the higher end." },
        { q: "How much can I save buying in Côte-d'Azur vs. Ottawa?", a: "The price difference is significant. The median single-family home in Ottawa was $780,000 in Q1 2026 according to the Ottawa Real Estate Board, while bungalows in Côte-d'Azur typically range from $500,000 to $730,000 (Centris, May 2026). For a comparable property, that often translates into $200,000+ in savings. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Yes. The Western Quebec School Board operates English-language elementary and secondary schools across the Gatineau sector. To find your specific catchment school, the WQSB has a School Locator tool on their website (westernquebec.ca). I can also point you to the right contacts during a property visit." },
        { q: "How long does a sale take in Côte-d'Azur?", a: "Based on recent sales in the area, a well-prepared bungalow at the right price typically goes under contract in 30 to 45 days. The average time on market for a single-family home in the Gatineau metropolitan area was 32 days in Q4 2025 according to the Outaouais Real Estate Board." },
        { q: "What local shops and services are accessible?", a: "Boulevard Maloney concentrates the essential services: IGA and Metro grocery stores, Jean Coutu pharmacy, Tim Hortons, Poulet Rouge restaurant, plus several other shops, restaurants and services. Everything is accessible on foot or within a few minutes by car." },
        { q: "Will a Côte-d'Azur bungalow need renovations?", a: "Often yes, and that's actually one of the area's advantages. Properties typically date from the 1960s to 1990s, and many have kept their original kitchen, bathroom or flooring. It's the number-one objection during showings — but it's also what allows buyers to enter the market at a fair price with appreciation potential." },
      ]}}
    sectors={{ list: [
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb — direct neighbor of Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector — services, condos and residential" },
      { name: "Hull", href: "/en/hull/", detail: "Urban, culture, condos, Zibi project — direct access to Ottawa" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide/" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — Côte-d'Azur", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Côte-d'Azur right now: buyers have more options than before, so an efficient listing strategy at the right price has become critical. Most of my buyers in this area are families looking for a mature, family-friendly neighborhood — many of them coming from across the river in Ottawa, where comparable bungalows often start around $780,000. The area is in high demand, and the buyers who discover it love it.",
      dataPoint: "Most of the bungalows I sell in Côte-d'Azur go under contract in under 21 days when priced right. When the asking price is too optimistic from the start, the timeline stretches significantly.",
      takeaway: "My advice to Côte-d'Azur owners thinking about selling: prep your home properly, fix the small details that make a difference, and list at the right price from day one. Without that, you won't maximize your final sale price and the listing takes longer."
    }}
    cta={{ title: "Buying or selling in Côte-d'Azur?", text: "I know the neighborhood — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default CoteDazurPageEn;
