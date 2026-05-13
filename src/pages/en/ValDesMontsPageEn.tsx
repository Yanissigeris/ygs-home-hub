import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts QC — Neighborhood Guide"
    metaDesc="Buy, sell or live in Val-des-Monts, Quebec. Lakes, cottages, large lots and wilderness — 30 minutes from Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Real estate broker in Val-des-Monts. Lakes, cottages and recreational properties.", lat: 45.5000, lng: -75.6500, url: "/en/val-des-monts/" }}
    hero={{ overline: "Neighborhood Guide · Val-des-Monts", title: "Buy, Sell or Live in Val-des-Monts", subtitle: "Crystal-clear lakes, wooded lots and tranquility — the Outaouais cottage country municipality. Over 200 lakes, 30-40 minutes from Gatineau and 45 minutes from Ottawa.", image: heroImg }}
    trustSpecialty="Val-des-Monts specialist"
    lifestyle={{ image: heroImg, imageAlt: "Lake in Val-des-Monts", title: "Why Val-des-Monts is unique", subtitle: "Val-des-Monts attracts three types of buyers: those looking for a principal residence in nature, those seeking a four-season cottage for weekends, and those investing in a recreational property. The major lakes — McGregor, Saint-Pierre and Achigan — drive the demand. It's one of the rare Outaouais areas where you can live waterfront under 30 minutes from downtown Ottawa." }}
    reasons={[
      "Over 200 lakes — many properties with private lake access",
      "Properties between $200,000 and $750,000+ depending on type, lake access and sub-area (Centris data, May 2026)",
      "Major lakes: McGregor, Saint-Pierre, Achigan, Barnes — each with its own market dynamics",
      "Roughly $200,000+ savings vs. comparable Ottawa cottage country — Ottawa single-family median was $780,000 in Q1 2026 (Ottawa Real Estate Board)",
      "Lots from 2 to 50+ acres — complete privacy in nature",
      "Four-season cottages, permanent residences and luxury waterfront properties",
      "Perkins village as service hub (grocery, elementary school, local amenities)",
      "27 minutes from the Macdonald-Cartier Bridge — practical for Ottawa weekend cottage owners and full-time remote workers",
      "30-40 minutes from central Gatineau — access to hospital and commercial services",
      "Active market: ~77 single-family homes and ~6 cottages available on Centris in May 2026",
    ]}
    profilesTitle="Val-des-Monts is ideal for…"
    profiles={[
      { icon: TreePine, title: "Lake & nature lovers", text: "Private dock, kayaking, swimming, campfires. Major lakes like McGregor and Saint-Pierre offer the best conditions for four-season waterfront living." },
      { icon: Home, title: "Cottage seekers", text: "From rustic cottages around $200,000 to luxury waterfront $750,000+. Four-season cottages have been most in demand since remote work expanded." },
      { icon: Users, title: "Families seeking space", text: "Large 2+ acre lots, elementary school in Perkins, tight-knit community. No high school in Val-des-Monts — plan for transportation to Buckingham or Gatineau." },
      { icon: Mountain, title: "Ottawa weekend & permanent buyers", text: "Cross-river buyers from Ottawa wanting a recreational property or full-time nature escape, only 27 minutes from the Macdonald-Cartier Bridge." },
      { icon: Mountain, title: "Remote workers & retirees", text: "Exceptional living environment with high-speed Internet available in most areas. 27 minutes from Ottawa for occasional in-person meetings." },
    ]}
    inlineCta={{ text: "Own a cottage in Val-des-Monts? Find out its current value.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{
      title: "Questions about Val-des-Monts",
      items: [
        { q: "Is Val-des-Monts accessible year-round?", a: "Yes, most main roads are maintained year-round. Some private waterfront roads may require additional plowing or a 4×4 vehicle for the more remote accesses." },
        { q: "What is the price of a property in Val-des-Monts in 2026?", a: "Based on active Centris listings as of May 2026, properties typically sell between $200,000 for a rustic cottage with lake access and $750,000+ for a four-season waterfront residence. Prices depend heavily on the lake, orientation and property type." },
        { q: "What are the main lakes in Val-des-Monts?", a: "The best known are McGregor, Saint-Pierre, Achigan and Barnes. Each lake has its own dynamic: McGregor for higher-end properties and boating, Saint-Pierre for family cottages, Achigan for fishing, Barnes for tranquility." },
        { q: "How much can I save buying in Val-des-Monts vs. comparable Ottawa cottage country?", a: "The price difference is significant. The median single-family home in Ottawa was $780,000 in Q1 2026 according to the Ottawa Real Estate Board, while properties in Val-des-Monts range from $200,000 to $750,000+ (Centris, May 2026). For a comparable property, that often translates into $200,000+ in savings. Property taxes and Quebec-specific costs should also be factored into your decision." },
        { q: "Are there English-language schools nearby?", a: "Not directly in Val-des-Monts, but the Western Quebec School Board operates English elementary and secondary schools in the broader Gatineau area. Plan for school transportation. The WQSB School Locator on westernquebec.ca will tell you which catchment school applies to your address." },
        { q: "Can you live in Val-des-Monts year-round?", a: "Absolutely. More and more permanent residents have settled here since 2020, attracted by remote work and quality of life. The municipality has invested in high-speed Internet to support this trend." },
        { q: "How long does a sale take in Val-des-Monts?", a: "It varies by property type. Well-prepared waterfront properties on McGregor or Saint-Pierre often go under contract in 30-60 days during peak season (spring-summer). Rustic cottages or properties without lake access can take 60-120 days." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/en/cantley/", detail: "Rural, hills, large lots — southern neighbor of Val-des-Monts" },
      { name: "Chelsea", href: "/en/chelsea/", detail: "Village, Gatineau Park — high-end alternative on the west side" },
      { name: "Buckingham", href: "/en/buckingham/", detail: "Affordable, river, nature — with high school services" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Sell my cottage", text: "Selling strategy for recreational properties.", href: "/en/sell/" },
      { title: "Home valuation", text: "What's your cottage or land worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide/" },
      { title: "First-Time Buyer", text: "Budget, down payment and tips.", href: "/en/first-time-buyer/" },
      { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Val-des-Monts", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Val-des-Monts right now: demand stays strong for waterfront, but rustic cottages are selling slower than before. My buyers are mostly Ottawa-Gatineau families looking for a principal residence in nature, or couples 45-65 wanting a four-season cottage to prepare for retirement. Remote work has changed everything — what used to be a weekend property before 2020 is now becoming a primary residence for many of my Ottawa clients.",
      dataPoint: "On the sales I close in Val-des-Monts, well-prepared waterfront properties on McGregor and Saint-Pierre go under contract in 30-60 days during peak season. Rustic cottages or properties without direct lake access often take 60-120 days, and sellers need to be more patient or adjust their pricing.",
      takeaway: "My advice to Val-des-Monts owners thinking about selling: timing and preparation matter enormously. List in spring ideally, prepare your property for photos the summer before if possible, and be realistic on price based on lake type and access. A property on McGregor doesn't compare to one without lake access — get properly evaluated before listing."
    }}
    cta={{ title: "Buying or selling in Val-des-Monts?", text: "I know the area — let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default ValDesMontsPageEn;
