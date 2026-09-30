import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau, Neighborhood Guide"
    metaDesc="Buy, sell or live in Côte-d'Azur, Gatineau. Established residential area with bungalows, mature trees and quick access to Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Real estate broker in Côte-d'Azur, Gatineau. Established residential neighborhood.", lat: 45.4700, lng: -75.7000, url: "/en/cote-dazur/" }}
    hero={{ overline: "Neighborhood Guide · Côte-d'Azur", title: "Buy, Sell or Live in Côte-d'Azur", subtitle: "Mature residential neighborhood in the Gatineau sector. 1960s-1990s bungalows, quiet streets, 15-20 minutes from downtown Ottawa.", image: heroImg }}
    trustSpecialty="Côte-d'Azur specialist"
    lifestyle={{ image: heroImg, imageAlt: "Côte-d'Azur neighborhood, Gatineau", title: "Why Côte-d'Azur is appreciated", subtitle: "Côte-d'Azur attracts families looking for an established neighborhood close to services, without paying Aylmer, Plateau, or Ottawa prices. Most properties are bungalows and split-levels, often on lots of 4,000 to 6,000 sq ft. The area remains one of the most accessible parts of central Gatineau to step into a single-family home, and increasingly popular with cross-river buyers from Ottawa." }}
    reasons={[
      "Established residential neighborhood with mature trees and peaceful streets",
      "Bungalows, split-levels and renovated homes; median single-family price of $490,000 in Q2 2026 in APCIQ's Gatineau sector, which includes Côte-d'Azur",
      "Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), for comparison",
      "15-20 minutes from downtown Ottawa via Highway 50 and the Macdonald-Cartier Bridge, practical for federal commuters",
      "Local shops and services on Boulevard Maloney: IGA, Metro, Jean Coutu, Tim Hortons, Poulet Rouge and more",
      "Western Quebec School Board (English): Greater Gatineau Elementary in the Gatineau sector, high schools in Hull, subject to eligibility",
      "STO public transit with bus lines into Hull and downtown Ottawa",
      "Average time on market of 22 days for single-family homes in the Gatineau sector in Q2 2026 (APCIQ)",
      "Renovation upside for buyers who modernize a 1960s-1980s property",
      "Quiet, stable neighborhood, many residents have lived there 20-30 years",
    ]}
    profilesTitle="Côte-d'Azur is ideal for…"
    profiles={[
      { icon: Users, title: "Families", text: "Quiet neighborhood with English-friendly schools, parks and services within walking distance. Stable community where many residents have lived 20-30 years." },
      { icon: Home, title: "First-time buyers", text: "Bungalows starting around $500,000, accessible entry into the Gatineau single-family market without commuting from far suburbs." },
      { icon: MapPin, title: "Retirees", text: "Single-floor living with no stairs, services and pharmacy on Maloney, peaceful streets. Ideal for aging in place." },
      { icon: Coffee, title: "Ottawa relocators", text: "Cross-river buyers from Ottawa looking for more space, a mature neighborhood, and meaningful savings. Quick commute via Highway 50 and the Macdonald-Cartier Bridge." },
      { icon: Coffee, title: "Resale buyers", text: "1960s-1980s bungalows with solid bones: lot, brick, structure. Real appreciation potential with a well-executed kitchen and bathroom renovation." },
    ]}
    inlineCta={{ text: "Own a property in Côte-d'Azur? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Côte-d'Azur",
      items: [
        { q: "Where is Côte-d'Azur located in Gatineau?", a: "In the Gatineau sector (the former city). Central, well-served by STO transit, and 15-20 minutes from downtown Ottawa." },
        { q: "What is the price of a home in Côte-d'Azur in 2026?", a: "Côte-d'Azur is part of APCIQ's Gatineau sector. In Q2 2026, the median single-family price there was $490,000 (Centris data). In Côte-d'Azur, prices then depend on living area, property condition and lot size: unrenovated bungalows sit lower, modernized properties with garages higher. For a precise figure, I compare recent sales of homes like yours." },
        { q: "How much can I save buying in Côte-d'Azur vs. Ottawa?", a: "It depends on the homes you compare. Two official reference points: Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), and it was $490,000 in Q2 2026 in APCIQ's Gatineau sector, which includes Côte-d'Azur. The two boards don't cover the same period or identical homes, so for a real comparison I put similar properties side by side. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Yes, subject to eligibility for English instruction (certificate of eligibility). The Western Quebec School Board has elementary schools in the Gatineau and Hull sectors (Greater Gatineau Elementary, Pierre Elliott Trudeau Elementary), and its closest high schools are in Hull (Hadley Junior High, Philemon Wright High School). To find the school for your address, use the WQSB School Locator on westernquebec.ca. I can also point you to the right contacts during a property visit." },
        { q: "How long does a sale take in Côte-d'Azur?", a: "In Q2 2026, single-family homes in APCIQ's Gatineau sector, which includes Côte-d'Azur, sold in 22 days on average, compared with 27 days for the whole metropolitan area (Centris data). The actual timeline depends mostly on price and how well the home is prepared." },
        { q: "What local shops and services are accessible?", a: "Boulevard Maloney concentrates the essential services: IGA and Metro grocery stores, Jean Coutu pharmacy, Tim Hortons, Poulet Rouge restaurant, plus several other shops, restaurants and services. Everything is accessible on foot or within a few minutes by car." },
        { q: "Will a Côte-d'Azur bungalow need renovations?", a: "Often yes, and that's actually one of the area's advantages. Properties typically date from the 1960s to 1990s, and many have kept their original kitchen, bathroom or flooring. It's the number-one objection during showings, but it's also what allows buyers to enter the market at a fair price with appreciation potential." },
      ]}}
    sectors={{ list: [
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb, direct neighbor of Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector, services, condos and residential" },
      { name: "Hull", href: "/en/hull/", detail: "Urban, culture, condos, Zibi project, direct access to Ottawa" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide/" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, Côte-d'Azur", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Côte-d'Azur right now: buyers have more options than before, so an efficient listing strategy at the right price has become critical. Most of my buyers in this area are families looking for a mature, family-friendly neighborhood, many of them coming from across the river in Ottawa. The area is in high demand, and the buyers who discover it love it.",
      dataPoint: "In Q2 2026, single-family homes in APCIQ's Gatineau sector, which includes Côte-d'Azur, sold in 22 days on average. When the asking price is too optimistic from the start, the timeline stretches significantly.",
      takeaway: "My advice to Côte-d'Azur owners thinking about selling: prep your home properly, fix the small details that make a difference, and list at the right price from day one. Without that, you won't maximize your final sale price and the listing takes longer."
    }}
    cta={{ title: "Buying or selling in Côte-d'Azur?", text: "I know the neighborhood, let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default CoteDazurPageEn;
