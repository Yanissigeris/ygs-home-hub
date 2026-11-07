import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPageEn = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }}
    seoTitle="Masson-Angers | Neighbourhood Guide Gatineau"
    metaDesc="Buy, sell or live in Masson-Angers, Gatineau. Family-friendly area with new construction and prices below central Gatineau."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Real estate broker in Masson-Angers. Growing family area with new homes.", lat: 45.5328, lng: -75.4170, url: "/en/masson-angers/" }}
    hero={{ overline: "Neighbourhood Guide · Masson-Angers", title: "Buy, Sell or Live in Masson-Angers", subtitle: "Family-friendly area in east Gatineau, with new construction and some of the lowest entry prices in the city. About 36 km from downtown Ottawa and 28 to 33 km from Les Promenades Gatineau by road, depending on the route.", image: heroImg }}
    trustSpecialty="Masson-Angers specialist"
    lifestyle={{ image: heroImg, imageAlt: "Masson-Angers residential area", title: "Why buyers choose Masson-Angers", subtitle: "The area has two distinct sub-sectors, Masson and Angers, with both new construction and resale homes. On price, the Buckingham/Masson-Angers sector has the lowest single-family median in the city, at $395,000 (QPAREB, Q3 2026), with a longer commute to downtown Ottawa as the trade-off." }}
    reasons={[
      "Median single-family price of $395,000 in Q3 2026 in the Buckingham/Masson-Angers sector, the lowest of the four sectors of the city of Gatineau (QPAREB)",
      "Ottawa's single-family benchmark price was $705,100 in September 2026 (Ottawa Real Estate Board, MLS® HPI), for comparison",
      "New builds and resales: I compare each one with properties of the same type",
      "Two distinct sub-sectors: Masson (west, more mature) and Angers (east, more developing)",
      "French elementary schools (Centre de services scolaire au Cœur-des-Vallées): Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "Hormisdas-Gamelin secondary school in Buckingham (IB Middle Years Programme and sport option)",
      "Western Quebec School Board (English): Buckingham Elementary in Buckingham, high schools in Hull, subject to eligibility",
      "Direct access to Highway 50",
      "Rivière du Lièvre and Grenouillettes marsh, nature access within a residential area",
      "Practical for federal commuters and first-time buyers priced out of Ottawa",
    ]}
    profilesTitle="Who Masson-Angers suits"
    profiles={[
      { icon: Users, title: "Young families", text: "Affordable new homes, 4 CSSCV French elementary schools nearby, parks and trails in new developments. Rivière du Lièvre and green spaces add to the quality of life." },
      { icon: Home, title: "First-time buyers", text: "In Q3 2026, the median single-family price was $395,000 in QPAREB's Buckingham/Masson-Angers sector, the lowest of Gatineau's four sectors. The Home Buyers' Plan (HBP) and the FHSA apply." },
      { icon: TrendingUp, title: "Investors", text: "Lower entry prices than elsewhere in Gatineau, plus new projects. Before an offer, I show you recent rents in the area." },
      { icon: MapPin, title: "Ottawa cross-river first-time buyers", text: "Buyers priced out of comparable Ottawa neighbourhoods, willing to commute to downtown Ottawa in exchange for a lower purchase price." },
      { icon: MapPin, title: "East-side workers", text: "Direct access to east Gatineau, Buckingham and Thurso employment zones. Central Buckingham is about 5 km away by road." },
    ]}
    inlineCta={{ text: "Own a property in Masson-Angers? Find out its current value.", label: "Free Home Valuation →", href: "/en/home-valuation/" }}
    faq={{ title: "Questions about Masson-Angers", items: [
      { q: "Is Masson-Angers far from downtown Gatineau?", a: "Les Promenades Gatineau are 28 to 33 km away by road depending on the route, and downtown Ottawa about 36 km. Drive time depends on the hour and the bridge you take." },
      { q: "What is the price of a home in Masson-Angers in 2026?", a: "Masson-Angers is part of QPAREB's Buckingham/Masson-Angers sector. In Q3 2026, the median single-family price there was $395,000, the lowest of the four sectors of the city of Gatineau (Centris data). Prices then vary with type, year of construction and sub-sector: I'll show you the recent comparable sales." },
      { q: "How much can I save buying in Masson-Angers vs. Ottawa?", a: "It depends on the homes you compare. Two official reference points: Ottawa's single-family benchmark price was $705,100 in September 2026 (Ottawa Real Estate Board, MLS® HPI). The median single-family price was $395,000 in Q3 2026 in QPAREB's Buckingham/Masson-Angers sector. These two figures aren't the same measure (benchmark price vs. median) and don't cover the same period, so for a real comparison I put similar properties side by side. Property taxes and Quebec-specific costs should also be factored into your decision." },
      { q: "Are there English-language schools nearby?", a: "Yes, subject to eligibility for English instruction (certificate of eligibility). The Western Quebec School Board has Buckingham Elementary in Buckingham and Greater Gatineau Elementary in the Gatineau sector. Its closest high schools are in Hull (Hadley Junior High, Philemon Wright High School). Plan for school transportation, and use the WQSB School Locator on westernquebec.ca to find the school for your address." },
      { q: "Are there new homes in Masson-Angers?", a: "Yes, there is new construction in Masson-Angers. Possession dates vary from one project to another: I check the available projects with you." },
        { q: "Is a new home covered by a warranty?", a: "Yes, when it's built by an accredited contractor. In Quebec, the mandatory guarantee plan for new residential buildings is administered by GCR, and coverage length depends on the type of defect. Check GCR's website before you sign. I can also represent you with the builder: ask up front who pays my fee." },
      { q: "What schools serve Masson-Angers?", a: "Four French elementary schools from the Centre de services scolaire au Cœur-des-Vallées: Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur and St-Jean-de-Brébeuf. For high school, École secondaire Hormisdas-Gamelin in Buckingham, which offers the IB Middle Years Programme (PEI) and a sport option." },
      { q: "What are the sub-sectors of Masson-Angers?", a: "The area splits into two: Masson (west side, more mature, near the Rivière du Lièvre) and Angers (east side, more developing with recent new construction). Prices and inventory differ from one sub-sector to the other." },
    ]}}
    sectors={{ list: [
      { name: "Buckingham", href: "/en/buckingham/", detail: "Direct eastern neighbour, Rivière du Lièvre, Hormisdas-Gamelin secondary school" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector, services, condos and residential" },
      { name: "Limbour", href: "/en/limbour/", detail: "Family, parks, modern suburb, alternative about 29 km west" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, buying in Masson-Angers", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I look at in Masson-Angers: I compare a new home with other new homes, and a resale with other resales. The warranty and the delivery date are not the same.",
      dataPoint: "In Q3 2026, the Buckingham/Masson-Angers sector had 47% more active single-family listings than a year earlier, and single-family sales were down 23% (QPAREB, Centris data).",
      takeaway: "My advice to buyers considering Masson-Angers: compare Masson and Angers carefully before deciding, because they behave like two different markets. If you're targeting new construction, check the builder and the delivery timelines, and negotiate inclusions. My advice to owners thinking about selling: your price should reflect your sub-sector and the competing supply of new builds, not a generic neighbourhood average."
    }}
    cta={{ title: "Buying or selling in Masson-Angers?", text: "I know the area, let's talk.", buttons: [{ label: "Free Home Valuation", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default MassonAngersPageEn;
