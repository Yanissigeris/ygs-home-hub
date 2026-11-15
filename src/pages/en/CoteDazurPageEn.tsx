import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPageEn = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }}
    seoTitle="Côte-d'Azur Gatineau, Neighbourhood Guide"
    metaDesc="Buy, sell or live in Côte-d'Azur, Gatineau. A mature family neighbourhood with tall trees and spacious mid-range to high-end homes."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Real estate broker in Côte-d'Azur, Gatineau. Mature family neighbourhood, mid-range to high-end homes.", lat: 45.4855, lng: -75.7290, url: "/en/cote-dazur/" }}
    hero={{ overline: "Neighbourhood Guide · Côte-d'Azur", title: "Buy, Sell or Live in Côte-d'Azur", subtitle: "Mature family neighbourhood in the Gatineau sector, around Parc Saint-Exupéry. Tree-lined streets and spacious homes.", image: heroImg }}
    trustSpecialty="Côte-d'Azur specialist"
    lifestyle={{ image: heroImg, imageAlt: "Côte-d'Azur neighbourhood, Gatineau", title: "Why Côte-d'Azur is appreciated", subtitle: "Côte-d'Azur is a neighbourhood of choice for Gatineau residents. Families love it for its greenery and tall mature trees. Homes range from mid-range to high-end, and many are remarkably large." }}
    reasons={[
      "Established residential neighbourhood with mature trees and peaceful streets",
      "Mid-range to high-end homes, many of them remarkably large",
      "Ottawa's single-family benchmark price was $705,100 in September 2026 (Ottawa Real Estate Board, MLS® HPI), for comparison",
      "About 11 km from downtown Ottawa by road. Plan extra time at rush hour.",
      "Grocery stores, a pharmacy and restaurants a few minutes away",
      "Western Quebec School Board (English): Greater Gatineau Elementary in the Gatineau sector, high schools in Hull, subject to eligibility",
      "STO public transit",
      "Average time on market of 35 days for single-family homes in the Gatineau sector in Q3 2026 (QPAREB)",
      "Hilly streets close to the Gatineau River",
      "Quiet, established neighbourhood",
    ]}
    profilesTitle="Who Côte-d'Azur suits best"
    profiles={[
      { icon: Users, title: "Families", text: "A quiet, green neighbourhood with schools and parks nearby." },
      { icon: Home, title: "Buyers who want space", text: "Mid-range to high-end homes, many remarkably large, on lots surrounded by trees." },
      { icon: MapPin, title: "Gatineau residents", text: "A neighbourhood of choice for people who want to stay in the Gatineau sector, close to the services they know." },
      { icon: Coffee, title: "Ottawa relocators", text: "Cross-river buyers from Ottawa looking for more space and a mature neighbourhood at a lower price. Downtown Ottawa is reached via Highway 50 and the Macdonald-Cartier Bridge." },
      { icon: Coffee, title: "Condo buyers", text: "Newer condos, including on Rue de Cannes, in an established, green neighbourhood." },
    ]}
    inlineCta={{ text: "Own a property in Côte-d'Azur? Find out what it's worth.", label: "Free Home Valuation →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Côte-d'Azur",
      items: [
        { q: "Where is Côte-d'Azur located in Gatineau?", a: "In the Gatineau sector (the former city), around Parc Saint-Exupéry and near Rue Saint-Louis. Its streets are named after places on the French Riviera: Rue de Cannes, Rue de Monte-Carlo, Rue de Menton, Rue de Saint-Tropez. Downtown Ottawa is about 11 km away by road, and the drive time depends mostly on when you leave." },
        { q: "What is the price of a home in Côte-d'Azur in 2026?", a: "Côte-d'Azur is part of QPAREB's Gatineau sector. In Q3 2026, the median single-family price there was $464,900 (Centris data). That figure is a reference for the whole sector. Côte-d'Azur mostly offers mid-range to high-end homes, and prices depend on living area, property condition and lot size. For a precise figure, I compare recent sales of homes like yours." },
        { q: "How much can I save buying in Côte-d'Azur vs. Ottawa?", a: "It depends on the homes you compare. Two official reference points: Ottawa's single-family benchmark price was $705,100 in September 2026 (Ottawa Real Estate Board, MLS® HPI). The median single-family price was $464,900 in Q3 2026 in QPAREB's Gatineau sector, which includes Côte-d'Azur. These two figures aren't the same measure (benchmark price vs. median) and don't cover the same period, so for a real comparison I put similar properties side by side. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Yes, subject to eligibility for English instruction (certificate of eligibility). The Western Quebec School Board has elementary schools in the Gatineau and Hull sectors (Greater Gatineau Elementary, Pierre Elliott Trudeau Elementary). Its closest high schools are in Hull (Hadley Junior High, Philemon Wright High School). To find the school for your address, use the WQSB School Locator on westernquebec.ca. I can also point you to the right contacts during a property visit." },
        { q: "How long does a sale take in Côte-d'Azur?", a: "In Q3 2026, single-family homes in QPAREB's Gatineau sector, which includes Côte-d'Azur, sold in 35 days on average, compared with 34 days for the whole metropolitan area (Centris data). The actual timeline depends mostly on price and how well the home is prepared." },
        { q: "What local shops and services are accessible?", a: "Everyday services, grocery stores, a pharmacy and restaurants, are a few minutes away. Depending on your street, it's a short walk or a quick drive." },
        { q: "What kind of homes will I find in Côte-d'Azur?", a: "Mostly mid-range to high-end houses, many remarkably large, on green streets with tall trees. You'll also find newer condos, including on Rue de Cannes." },
        { q: "What should you look at when inspecting a home in an established neighbourhood?", a: "The roof, the plumbing (copper or galvanized steel), the electrical panel's amperage, the foundation and the insulation, especially in an older home. If you plan to add a basement unit, check with the City of Gatineau what zoning allows before you buy, and plan for a permit." },
      ]}}
    sectors={{ list: [
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb, direct neighbour of Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector, services, condos and residential" },
      { name: "Hull", href: "/en/hull/", detail: "Urban, culture, condos, Zibi project, direct access to Ottawa" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide/" },
      { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, Côte-d'Azur", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Côte-d'Azur: buyers have more options than before, so the starting price and the presentation matter more.",
      dataPoint: "In Q3 2026, single-family homes in QPAREB's Gatineau sector, which includes Côte-d'Azur, sold in 35 days on average. When the asking price is too optimistic from the start, the timeline stretches out noticeably.",
      takeaway: "My advice to Côte-d'Azur owners thinking about selling: prepare your home properly, small details included, and list at the right price from day one. Otherwise the sale takes longer and the final price suffers."
    }}
    cta={{ title: "Buying or selling in Côte-d'Azur?", text: "I know the neighbourhood, let's talk.", buttons: [{ label: "Free Home Valuation", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default CoteDazurPageEn;
