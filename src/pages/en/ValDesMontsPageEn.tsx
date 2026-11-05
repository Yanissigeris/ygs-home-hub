import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPageEn = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Market figures: QPAREB, Q3 2026" }}
    seoTitle="Val-des-Monts QC | Neighbourhood Guide"
    metaDesc="Buy, sell or live in Val-des-Monts, Quebec. Lakes, cottages, large lots and wilderness, north of Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Real estate broker in Val-des-Monts. Lakes, cottages and recreational properties.", lat: 45.5000, lng: -75.6500, url: "/en/val-des-monts/" }}
    hero={{ overline: "Neighbourhood Guide · Val-des-Monts", title: "Buy, Sell or Live in Val-des-Monts", subtitle: "Lakes, wooded lots and cottages in an Outaouais cottage-country municipality. 125 lakes according to the municipality, and Perkins village about 30 km from downtown Ottawa by road.", image: heroImg }}
    trustSpecialty="Val-des-Monts specialist"
    lifestyle={{ image: heroImg, imageAlt: "Lake in Val-des-Monts", title: "Why buyers choose Val-des-Monts", subtitle: "In Val-des-Monts, people buy a principal residence in nature or a weekend cottage. Here, lake access and the lake itself weigh heavily on price." }}
    reasons={[
      "125 lakes according to the municipality, many properties with private lake access",
      "Median single-family price of $530,000 in Q3 2026 in APCIQ's Gatineau periphery area, which includes Val-des-Monts",
      "Major lakes: McGregor, Saint-Pierre, Achigan, Barnes, each with its own market",
      "Large lots in nature, often near a lake",
      "Four-season cottages, permanent residences and luxury waterfront properties",
      "Perkins village as service hub (grocery, elementary school, local amenities)",
      "Perkins village about 30 km from downtown Ottawa by road, practical for Ottawa weekend cottage owners and full-time remote workers",
      "Les Promenades Gatineau 20 to 22 km from Perkins by road, for commercial services",
      "More choice for buyers: 633 active single-family listings in Q3 2026 in the Gatineau periphery area, 23% more than a year earlier (APCIQ)",
    ]}
    profilesTitle="Who Val-des-Monts suits"
    profiles={[
      { icon: TreePine, title: "Lake & nature lovers", text: "Private dock, kayaking, swimming, campfires. Major lakes like McGregor and Saint-Pierre suit four-season waterfront living well." },
      { icon: Home, title: "Cottage seekers", text: "From three-season cottages to year-round waterfront homes, prices vary a lot with lake access and condition. I compare with recent sales on the same lake." },
      { icon: Users, title: "Families seeking space", text: "Large lots, elementary school in Perkins, tight-knit community. No high school in Val-des-Monts: students in the French school system attend high school in the Gatineau sector." },
      { icon: Mountain, title: "Ottawa weekend & permanent buyers", text: "Cross-river buyers from Ottawa wanting a recreational property or full-time nature escape." },
      { icon: Mountain, title: "Remote workers & retirees", text: "Life in nature, with high-speed Internet available in much of the territory. Downtown Ottawa stays within reach for occasional in-person meetings." },
    ]}
    inlineCta={{ text: "Own a cottage in Val-des-Monts? Find out its current value.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Val-des-Monts",
      items: [
        { q: "Is Val-des-Monts accessible year-round?", a: "Yes, most main roads are maintained year-round. Some private waterfront roads may require additional plowing or a 4×4 vehicle for the more remote accesses." },
        { q: "What is the price of a property in Val-des-Monts in 2026?", a: "Val-des-Monts is part of APCIQ's “Gatineau periphery” area, where the median single-family price was $530,000 in Q3 2026 (Centris data). That area also includes Chelsea, Cantley and Pontiac, so it's a broad reference. In Val-des-Monts, prices depend heavily on the lake, orientation and property type, from a rustic cottage to a four-season waterfront home." },
        { q: "What are the main lakes in Val-des-Monts?", a: "The best known are McGregor, Saint-Pierre, Achigan and Barnes. Each lake has its own profile: McGregor for higher-end properties and boating, Saint-Pierre for family cottages, Achigan for fishing, Barnes for quiet." },
        { q: "How do you choose a lake in Val-des-Monts?", a: "The value of a waterfront property depends on the lake itself: its size, water quality, motorboat rules and access to a boat launch. Sun exposure and the type of shoreline matter too. Visit the lake in summer and in winter, because a lake that's busy in July can be very quiet in January." },
        { q: "How much can I save buying in Val-des-Monts vs. comparable Ottawa cottage country?", a: "Official figures don't track cottage country separately, so no reliable savings figure exists. As reference points, the median single-family price was $530,000 in Q3 2026 in APCIQ's Gatineau periphery area, which includes Val-des-Monts, and $740,000 in Ottawa in August 2026 (Ottawa Real Estate Board). For a waterfront or cottage property, I compare recent sales on the same lake or of the same type. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Yes. Poltimore Elementary (Western Quebec School Board) is in Val-des-Monts, subject to eligibility for English instruction. For high school, the WQSB School Locator on westernquebec.ca will tell you which school applies to your address." },
        { q: "Can you live in Val-des-Monts year-round?", a: "Yes, if the property and the road allow it. Before buying a cottage to live in year-round, check that zoning allows a permanent residence and that the road is plowed in winter, since some roads are private. Also check the insulation, the heating and whether the septic system complies with Quebec's regulation on isolated dwellings (Q-2, r. 22). Have the well water tested and confirm Internet coverage at the exact address." },
        { q: "How long does a sale take in Val-des-Monts?", a: "It varies by property type. In Q3 2026, single-family homes in APCIQ's Gatineau periphery area, which includes Val-des-Monts, sold in 46 days on average (Centris data). For a cottage or waterfront property, I'll show you the recent comparable sales." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/en/cantley/", detail: "Rural, hills, large lots, southern neighbour of Val-des-Monts" },
      { name: "Chelsea", href: "/en/chelsea/", detail: "Village, Gatineau Park, high-end alternative on the west side" },
      { name: "Buckingham", href: "/en/buckingham/", detail: "Affordable, river, nature, with high school services" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Sell my cottage", text: "Selling strategy for recreational properties.", href: "/en/sell/" },
      { title: "Home valuation", text: "What's your cottage or land worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "First-Time Buyer", text: "Budget, down payment and tips.", href: "/en/first-time-buyer/" },
      { title: "All Neighbourhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, buying in Val-des-Monts", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I look at in Val-des-Monts: lake access, the septic system and the well matter as much as the house. A three-season cottage and a year-round home are not comparable.",
      dataPoint: "In Q3 2026, single-family homes sold in 46 days on average in the Gatineau outskirts, an APCIQ territory that includes Val-des-Monts (Centris data).",
      takeaway: "My advice to Val-des-Monts owners thinking about selling: timing and preparation matter a lot. The right time depends on your property type and the competition on your lake. We look at it in the numbers. Be realistic on price for your lake type and access: a property on McGregor doesn't compare to one without lake access. Get a proper valuation before listing."
    }}
    cta={{ title: "Buying or selling in Val-des-Monts?", text: "I know the area, let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default ValDesMontsPageEn;
