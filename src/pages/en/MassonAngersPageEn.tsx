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
      "Median single-family price of $419,545 in Q2 2026 in the Buckingham/Masson-Angers sector, the lowest of the four sectors of the city of Gatineau (APCIQ)",
      "Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), for comparison",
      "Active new construction: multiple builders delivering in 2026 with spring possession available",
      "Two distinct sub-sectors: Masson (west, more mature) and Angers (east, more developing)",
      "French elementary schools (Centre de services scolaire au Cœur-des-Vallées): Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "Hormisdas-Gamelin secondary school in Buckingham (12 km, IB international program and sport option)",
      "Western Quebec School Board (English): Buckingham Elementary in Buckingham, high schools in Hull, subject to eligibility",
      "Quick access to Highway 50-20-25 minutes from central Gatineau, about 35-40 minutes from downtown Ottawa",
      "Rivière du Lièvre and Grenouillettes marsh, nature access within a residential area",
      "Practical for federal commuters and first-time buyers priced out of Ottawa",
    ]}
    profilesTitle="Masson-Angers is ideal for…"
    profiles={[
      { icon: Users, title: "Young families", text: "Affordable new homes, 4 CSSCV French elementary schools nearby, parks and trails in new developments. Rivière du Lièvre and green spaces add to the quality of life." },
      { icon: Home, title: "First-time buyers", text: "Accessible entry prices between $400,000 and $490,000 for a semi-detached or new home. Quebec down-payment programs applicable. Easier financing than Hull or Aylmer." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with stable rental demand and multiple new developments delivering in 2026-2027. Medium-term appreciation potential." },
      { icon: MapPin, title: "Ottawa cross-river first-time buyers", text: "Buyers priced out of comparable Ottawa neighborhoods, willing to commute 35-40 minutes via Highway 50 in exchange for a lower purchase price." },
      { icon: MapPin, title: "East-side workers", text: "Direct access to east Gatineau, Buckingham and Thurso employment zones. 20-25 minutes from central Gatineau via Highway 50." },
    ]}
    inlineCta={{ text: "Own a property in Masson-Angers? Find out its current value.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{ title: "Questions about Masson-Angers", items: [
      { q: "Is Masson-Angers far from downtown Gatineau?", a: "About 20-25 minutes via Highway 50. Quick and direct access. For downtown Ottawa, plan 35-40 minutes depending on traffic and the bridge used." },
      { q: "What is the price of a home in Masson-Angers in 2026?", a: "Masson-Angers is part of APCIQ's Buckingham/Masson-Angers sector. In Q2 2026, the median single-family price there was $419,545, the lowest of the four sectors of the city of Gatineau (Centris data). Prices then vary with type, year of construction and sub-sector: I'll show you the recent comparable sales." },
      { q: "How much can I save buying in Masson-Angers vs. Ottawa?", a: "It depends on the homes you compare. Two official reference points: Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), and it was $419,545 in Q2 2026 in APCIQ's Buckingham/Masson-Angers sector. The two boards don't cover the same period or identical homes, so for a real comparison I put similar properties side by side. Property taxes and Quebec-specific costs should also be factored into your decision." },
      { q: "Are there English-language schools nearby?", a: "Yes, subject to eligibility for English instruction (certificate of eligibility). The Western Quebec School Board has Buckingham Elementary in Buckingham and Greater Gatineau Elementary in the Gatineau sector; its closest high schools are in Hull (Hadley Junior High, Philemon Wright High School). Plan for school transportation, and use the WQSB School Locator on westernquebec.ca to find the school for your address." },
      { q: "Are there new homes in Masson-Angers?", a: "Yes, several builders are active in Masson-Angers. Possession dates vary from one project to another: I check the available projects with you." },
      { q: "What schools serve Masson-Angers?", a: "Four French elementary schools from the Centre de services scolaire au Cœur-des-Vallées: Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur (which has been the subject of a major $20M expansion announced by the Quebec government) and St-Jean-de-Brébeuf. For high school, École secondaire Hormisdas-Gamelin in Buckingham (12 km) with IB program and sport option." },
      { q: "What are the sub-sectors of Masson-Angers?", a: "The area splits into two: Masson (west side, more mature, near the Rivière du Lièvre) and Angers (east side, more developing with recent new construction). Each sub-sector has its own pricing and inventory dynamics." },
    ]}}
    sectors={{ list: [
      { name: "Buckingham", href: "/en/buckingham/", detail: "Direct eastern neighbor, Rivière du Lièvre, Hormisdas-Gamelin secondary school" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector, services, condos and residential" },
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb, alternative 15 minutes west" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, buying in Masson-Angers", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Masson-Angers right now: it's become a perfect area for a first home purchase in Gatineau. My buyers are mostly young families and couples 25-35 who want a new or recent home with a $400-500k budget. Many come from Ottawa where they can't afford to buy, or are Gatineau first-time buyers who wanted Aylmer but settle here for the price. The Angers side is more developing with new construction; the Masson side is more mature with resales.",
      dataPoint: "On the sales I close in Masson-Angers, new semi-detached and well-prepared recent homes typically go under contract in 25-40 days. Builders are delivering models between $400-490k with quick possession, and competition for first-time buyers stays strong despite the increase in supply.",
      takeaway: "My advice to buyers considering Masson-Angers: compare Masson vs. Angers carefully before deciding, they're two different dynamics. And if you're targeting new construction, verify the builder, real delivery timelines, and negotiate inclusions. My advice to owners thinking about selling: your price should reflect your sub-sector and the competing supply of new builds, not a generic neighborhood average."
    }}
    cta={{ title: "Buying or selling in Masson-Angers?", text: "I know the area, let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default MassonAngersPageEn;
