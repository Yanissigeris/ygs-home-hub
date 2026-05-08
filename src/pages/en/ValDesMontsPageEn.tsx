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
      "Lots from 2 to 50+ acres — complete privacy in nature",
      "Four-season cottages, permanent residences and luxury properties",
      "Active community with festivals, markets and local events",
      "30-40 minutes from Gatineau, 45-50 minutes from Ottawa",
    ]}
    profilesTitle="Val-des-Monts is ideal for…"
    profiles={[
      { icon: TreePine, title: "Lake & nature lovers", text: "Private dock, kayaking, swimming and campfires — every day." },
      { icon: Home, title: "Cottage seekers", text: "Four-season cottages from rustic to luxurious." },
      { icon: Users, title: "Families seeking space", text: "Large lots, fresh air and a welcoming community." },
      { icon: Mountain, title: "Remote workers & retirees", text: "Exceptional setting with access to services." },
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
