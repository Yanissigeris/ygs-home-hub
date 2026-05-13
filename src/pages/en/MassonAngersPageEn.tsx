import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Masson-Angers — Neighborhood Guide Gatineau"
    metaDesc="Buy, sell or live in Masson-Angers, Gatineau. Growing family-friendly area with new construction and competitive prices."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Real estate broker in Masson-Angers. Growing family area with new homes.", lat: 45.5328, lng: -75.4170, url: "/en/masson-angers/" }}
    hero={{ overline: "Neighborhood Guide · Masson-Angers", title: "Buy, Sell or Live in Masson-Angers", subtitle: "Growing family-friendly area in east Gatineau — new construction, accessible entry prices and quality of life. 20-25 minutes from central Gatineau via Highway 50.", image: heroImg }}
    trustSpecialty="Masson-Angers specialist"
    lifestyle={{ image: heroImg, imageAlt: "Masson-Angers residential area", title: "Why Masson-Angers is booming", subtitle: "Masson-Angers mainly attracts young families and first-time buyers looking for a new or recent home without paying Hull or Aylmer prices. The area has two distinct sub-sectors — Masson and Angers — with several active residential developments and builders delivering new homes in 2026. It's one of the best price-to-quality ratios in Gatineau for buyers willing to accept a longer daily commute to downtown Ottawa." }}
    reasons={[
      "Entry-level prices among the most accessible in Gatineau — semi-detached and new homes between $400,000 and $490,000+ depending on type and year (Centris data, May 2026)",
      "Roughly $300,000+ savings vs. comparable Ottawa neighborhoods — Ottawa single-family median was $780,000 in Q1 2026 (Ottawa Real Estate Board)",
      "Active new construction: multiple builders delivering in 2026 with spring possession available",
      "Two distinct sub-sectors: Masson (west, more mature) and Angers (east, more developing)",
      "French elementary schools (Commission scolaire au Cœur-des-Vallées): Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "Hormisdas-Gamelin secondary school in Buckingham (12 km, IB international program and sport option)",
      "Western Quebec School Board (English) elementary and secondary schools available in the broader east Gatineau area",
      "Quick access to Highway 50 — 20-25 minutes from central Gatineau, about 35-40 minutes from downtown Ottawa",
      "Rivière du Lièvre and Grenouillettes marsh — nature access within a residential area",
      "Practical for federal commuters and first-time buyers priced out of Ottawa",
    ]}
    profilesTitle="Masson-Angers is ideal for…"
    profiles={[
      { icon: Users, title: "Young families", text: "Affordable new homes, 4 CSSCV French elementary schools nearby, parks and trails in new developments. Rivière du Lièvre and green spaces add to the quality of life." },
      { icon: Home, title: "First-time buyers", text: "Accessible entry prices between $400,000 and $490,000 for a semi-detached or new home. Quebec down-payment programs applicable. Easier financing than Hull or Aylmer." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with stable rental demand and multiple new developments delivering in 2026-2027. Medium-term appreciation potential." },
      { icon: MapPin, title: "Ottawa cross-river first-time buyers", text: "Buyers priced out of comparable Ottawa neighborhoods, willing to commute 35-40 minutes via Highway 50 in exchange for $300,000+ savings." },
      { icon: MapPin, title: "East-side workers", text: "Direct access to east Gatineau, Buckingham and Thurso employment zones. 20-25 minutes from central Gatineau via Highway 50." },
    ]}
    inlineCta={{ text: "Own a property in Masson-Angers? Find out its current value.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{ title: "Questions about Masson-Angers", items: [
      { q: "Is Masson-Angers far from downtown Gatineau?", a: "About 20-25 minutes via Highway 50. Quick and direct access. For downtown Ottawa, plan 35-40 minutes depending on traffic and the bridge used (Macdonald-Cartier or Champlain)." },
      { q: "What is the price of a home in Masson-Angers in 2026?", a: "Based on active Centris listings as of May 2026, semi-detached and single-family homes typically sell between $400,000 and $490,000+ depending on type, year of construction and sub-sector. New builds are often positioned around $465,000 for 5 bedrooms with finished basement." },
      { q: "How much can I save buying in Masson-Angers vs. Ottawa?", a: "The price difference is substantial. The median single-family home in Ottawa was $780,000 in Q1 2026 according to the Ottawa Real Estate Board, while homes in Masson-Angers range from $400,000 to $490,000+ (Centris, May 2026). For a comparable property, that often translates into $300,000+ in savings. Property taxes and Quebec-specific costs should also be factored into your decision." },
      { q: "Are there English-language schools nearby?", a: "Yes. The Western Quebec School Board operates English-language elementary and secondary schools across the broader east Gatineau area. To find your specific catchment school, the WQSB has a School Locator tool on their website (westernquebec.ca). Plan for some school transportation since the closest English schools may not be in Masson-Angers itself." },
      { q: "Are there new homes in Masson-Angers?", a: "Yes, it's one of the areas with the most new construction in Gatineau. Multiple builders are active with spring 2026 possession available in some projects." },
      { q: "What schools serve Masson-Angers?", a: "Four French elementary schools from the Commission scolaire au Cœur-des-Vallées: Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur (which has been the subject of a major $20M expansion announced by the Quebec government) and St-Jean-de-Brébeuf. For high school, École secondaire Hormisdas-Gamelin in Buckingham (12 km) with IB program and sport option." },
      { q: "What are the sub-sectors of Masson-Angers?", a: "The area splits into two: Masson (west side, more mature, near the Rivière du Lièvre) and Angers (east side, more developing with recent new construction). Each sub-sector has its own pricing and inventory dynamics." },
    ]}}
    sectors={{ list: [
      { name: "Buckingham", href: "/en/buckingham/", detail: "Direct eastern neighbor, Rivière du Lièvre, Hormisdas-Gamelin secondary school" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector — services, condos and residential" },
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb — alternative 15 minutes west" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Masson-Angers", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Masson-Angers right now: it's become a perfect area for a first home purchase in Gatineau. My buyers are mostly young families and couples 25-35 who want a new or recent home with a $400-500k budget. Many come from Ottawa where they can't afford to buy, or are Gatineau first-time buyers who wanted Aylmer but settle here for the price. The Angers side is more developing with new construction; the Masson side is more mature with resales.",
      dataPoint: "On the sales I close in Masson-Angers, new semi-detached and well-prepared recent homes typically go under contract in 25-40 days. Builders are delivering models between $400-490k with quick possession, and competition for first-time buyers stays strong despite the increase in supply.",
      takeaway: "My advice to buyers considering Masson-Angers: compare Masson vs. Angers carefully before deciding — they're two different dynamics. And if you're targeting new construction, verify the builder, real delivery timelines, and negotiate inclusions. My advice to owners thinking about selling: your price should reflect your sub-sector and the competing supply of new builds, not a generic neighborhood average."
    }}
    cta={{ title: "Buying or selling in Masson-Angers?", text: "I know the area — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default MassonAngersPageEn;
