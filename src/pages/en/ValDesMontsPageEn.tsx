import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts QC — Neighborhood Guide"
    metaDesc="Buy, sell or live in Val-des-Monts, Quebec. Lakes, cottages, large lots and wilderness, north of Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Real estate broker in Val-des-Monts. Lakes, cottages and recreational properties.", lat: 45.5000, lng: -75.6500, url: "/en/val-des-monts/" }}
    hero={{ overline: "Neighborhood Guide · Val-des-Monts", title: "Buy, Sell or Live in Val-des-Monts", subtitle: "Lakes, wooded lots and cottages in an Outaouais cottage-country municipality. Over 125 lakes, and Perkins village 28 to 30 km from downtown Ottawa by road.", image: heroImg }}
    trustSpecialty="Val-des-Monts specialist"
    lifestyle={{ image: heroImg, imageAlt: "Lake in Val-des-Monts", title: "Why buyers choose Val-des-Monts", subtitle: "Val-des-Monts attracts three types of buyers: those looking for a principal residence in nature, those seeking a four-season cottage for weekends, and those investing in a recreational property. Major lakes like McGregor, Saint-Pierre and Achigan drive the demand." }}
    reasons={[
      "Over 125 lakes according to the municipality, many properties with private lake access",
      "Median single-family price of $595,000 in Q2 2026 in APCIQ's Gatineau periphery area, which includes Val-des-Monts",
      "Major lakes: McGregor, Saint-Pierre, Achigan, Barnes, each with its own market dynamics",
      "Lots from 2 to 50+ acres, complete privacy in nature",
      "Four-season cottages, permanent residences and luxury waterfront properties",
      "Perkins village as service hub (grocery, elementary school, local amenities)",
      "Perkins village 28 to 30 km from downtown Ottawa by road, practical for Ottawa weekend cottage owners and full-time remote workers",
      "Les Promenades Gatineau 20 to 22 km from Perkins by road, for commercial services",
      "More choice for buyers: 535 active single-family listings in Q2 2026 in the Gatineau periphery area, 13% more than a year earlier (APCIQ)",
    ]}
    profilesTitle="Val-des-Monts is ideal for…"
    profiles={[
      { icon: TreePine, title: "Lake & nature lovers", text: "Private dock, kayaking, swimming, campfires. Major lakes like McGregor and Saint-Pierre offer the best conditions for four-season waterfront living." },
      { icon: Home, title: "Cottage seekers", text: "From rustic cottages around $200,000 to luxury waterfront $750,000+. Four-season cottages have been most in demand since remote work expanded." },
      { icon: Users, title: "Families seeking space", text: "Large 2+ acre lots, elementary school in Perkins, tight-knit community. No high school in Val-des-Monts: students in the French school system attend high school in the Gatineau sector." },
      { icon: Mountain, title: "Ottawa weekend & permanent buyers", text: "Cross-river buyers from Ottawa wanting a recreational property or full-time nature escape." },
      { icon: Mountain, title: "Remote workers & retirees", text: "Life in nature, with high-speed Internet available in much of the territory. Downtown Ottawa stays within reach for occasional in-person meetings." },
    ]}
    inlineCta={{ text: "Own a cottage in Val-des-Monts? Find out its current value.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Val-des-Monts",
      items: [
        { q: "Is Val-des-Monts accessible year-round?", a: "Yes, most main roads are maintained year-round. Some private waterfront roads may require additional plowing or a 4×4 vehicle for the more remote accesses." },
        { q: "What is the price of a property in Val-des-Monts in 2026?", a: "Val-des-Monts is part of APCIQ's “Gatineau periphery” area, where the median single-family price was $595,000 in Q2 2026 (Centris data). That area also includes Chelsea, Cantley and Pontiac, so it's a broad reference. In Val-des-Monts, prices depend heavily on the lake, orientation and property type, from a rustic cottage to a four-season waterfront home." },
        { q: "What are the main lakes in Val-des-Monts?", a: "The best known are McGregor, Saint-Pierre, Achigan and Barnes. Each lake has its own dynamic: McGregor for higher-end properties and boating, Saint-Pierre for family cottages, Achigan for fishing, Barnes for tranquility." },
        { q: "How much can I save buying in Val-des-Monts vs. comparable Ottawa cottage country?", a: "Official figures don't track cottage country separately, so no reliable savings figure exists. As reference points, the median single-family price was $595,000 in Q2 2026 in APCIQ's Gatineau periphery area, which includes Val-des-Monts, and $740,000 in Ottawa in August 2026 (Ottawa Real Estate Board). For a waterfront or cottage property, I compare recent sales on the same lake or of the same type. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Yes. Poltimore Elementary (Western Quebec School Board) is in Val-des-Monts, subject to eligibility for English instruction. For high school, the WQSB School Locator on westernquebec.ca will tell you which school applies to your address." },
        { q: "Can you live in Val-des-Monts year-round?", a: "Absolutely. More and more permanent residents have settled here since 2020, attracted by remote work and quality of life. The municipality has invested in high-speed Internet to support this trend." },
        { q: "How long does a sale take in Val-des-Monts?", a: "It varies by property type. In Q2 2026, single-family homes in APCIQ's Gatineau periphery area, which includes Val-des-Monts, sold in 39 days on average (Centris data). For a cottage or waterfront property, I'll show you the recent comparable sales." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/en/cantley/", detail: "Rural, hills, large lots, southern neighbor of Val-des-Monts" },
      { name: "Chelsea", href: "/en/chelsea/", detail: "Village, Gatineau Park, high-end alternative on the west side" },
      { name: "Buckingham", href: "/en/buckingham/", detail: "Affordable, river, nature, with high school services" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Sell my cottage", text: "Selling strategy for recreational properties.", href: "/en/sell/" },
      { title: "Home valuation", text: "What's your cottage or land worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "First-Time Buyer", text: "Budget, down payment and tips.", href: "/en/first-time-buyer/" },
      { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, buying in Val-des-Monts", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Val-des-Monts right now: demand stays strong for waterfront, but rustic cottages are selling slower than before. My buyers are mostly Ottawa-Gatineau families looking for a principal residence in nature, or couples 45-65 wanting a four-season cottage to prepare for retirement. Remote work has changed everything, what used to be a weekend property before 2020 is now becoming a primary residence for many of my Ottawa clients.",
      dataPoint: "On the sales I close in Val-des-Monts, well-prepared waterfront properties on McGregor and Saint-Pierre go under contract in 30-60 days during peak season. Rustic cottages or properties without direct lake access often take 60-120 days, and sellers need to be more patient or adjust their pricing.",
      takeaway: "My advice to Val-des-Monts owners thinking about selling: timing and preparation matter enormously. List in spring ideally, prepare your property for photos the summer before if possible, and be realistic on price based on lake type and access. A property on McGregor doesn't compare to one without lake access, get properly evaluated before listing."
    }}
    cta={{ title: "Buying or selling in Val-des-Monts?", text: "I know the area, let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default ValDesMontsPageEn;
