import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts QC — Neighborhood Guide"
    metaDesc="Buy, sell or live in Val-des-Monts, Quebec. Lakes, cottages, large lots and wilderness — 30 minutes from Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Real estate broker in Val-des-Monts. Lakes, cottages and recreational properties.", lat: 45.5000, lng: -75.6500, url: "/en/val-des-monts" }}
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
    inlineCta={{ text: "Own a cottage in Val-des-Monts? Find out its current value.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Val-des-Monts", items: [
      { q: "Is Val-des-Monts accessible year-round?", a: "Yes, most roads are maintained year-round. Some private roads may require plowing." },
      { q: "Can you live in Val-des-Monts year-round?", a: "Absolutely. More and more permanent residents are moving in, attracted by remote work and quality of life." },
      { q: "Are prices affordable?", a: "Compared to Aylmer or Chelsea, yes. Great properties at accessible prices, especially off-waterfront." },
    ]}}
    sectors={{ list: [
      { name: "Cantley", href: "/en/cantley", detail: "Rural, hills, large lots" },
      { name: "Chelsea", href: "/en/chelsea", detail: "Village, Gatineau Park" },
      { name: "Buckingham", href: "/en/buckingham", detail: "Affordable, river, nature" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Sell my cottage", text: "Selling strategy for recreational properties.", href: "/en/sell" },
      { title: "Home valuation", text: "What's your cottage or land worth?", href: "/en/home-valuation" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide" },
      { title: "First-Time Buyer", text: "Budget, down payment and tips.", href: "/en/first-time-buyer" },
      { title: "All Neighborhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Val-des-Monts", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Val-des-Monts?", text: "I know the area — let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default ValDesMontsPageEn;
