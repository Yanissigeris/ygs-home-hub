import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-cantley.jpg";

const CantleyPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Real Estate Broker Cantley · Outaouais | YGS"
    metaDesc="Real estate broker in Cantley, QC. Large lots, rolling hills and rural living — 20 minutes from Gatineau. Buy or sell with a local specialist."
    jsonLd={{ name: "Cantley", description: "Real estate broker in Cantley. Rolling hills, large lots and rural living near Gatineau.", lat: 45.5056, lng: -75.7833, url: "/en/cantley" }}
    hero={{ overline: "Neighborhood Guide · Cantley", title: "Buy, Sell or Live in Cantley", subtitle: "Rolling green hills, large lots and rural living — 20 minutes from downtown Gatineau.", image: heroImg }}
    trustSpecialty="Cantley & area specialist"
    lifestyle={{ image: heroImg, imageAlt: "Cantley countryside", title: "Why families choose Cantley", subtitle: "Country charm with city convenience just a short drive away." }}
    reasons={[
      "Large lots from 1 to 10+ acres — space, privacy and nature",
      "Active rural community with farmers' markets and local events",
      "French and English elementary schools on site",
      "Horseback riding, ATV and snowmobile trails — year-round outdoor life",
      "20 minutes from downtown Gatineau, 30-35 minutes from Ottawa",
    ]}
    profilesTitle="Cantley is ideal for…"
    profiles={[
      { icon: Users, title: "Families seeking space", text: "Large lots, fresh air and a family-friendly community." },
      { icon: Home, title: "Rural lifestyle lovers", text: "Properties with barns, workshops or stables." },
      { icon: TreePine, title: "Nature enthusiasts", text: "Hiking, skiing, horseback riding and outdoor living." },
      { icon: Mountain, title: "Remote workers", text: "Absolute peace and exceptional quality of life." },
    ]}
    inlineCta={{ text: "Own property in Cantley? Find out what your land is worth.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Cantley", items: [
      { q: "Is Cantley far from Gatineau?", a: "About 20 minutes from downtown Gatineau via Route 307." },
      { q: "Are there services in Cantley?", a: "Yes — schools, grocery, restaurants, gas station. Gatineau is 15-20 minutes for bigger shopping." },
      { q: "Are the lots really large?", a: "Yes — most properties are 1 to 5+ acres, which is a major draw." },
      { q: "How much does a house cost in Cantley?", a: "Prices vary by lot size and property type. Contact me for an up-to-date market analysis." },
      { q: "Is Cantley good for families?", a: "Absolutely — family-oriented community, schools, outdoor activities and safe neighborhoods." },
      { q: "Do properties use wells and septic systems?", a: "Yes, most Cantley properties have artesian wells and septic systems. Inspection is important when buying." },
      { q: "Is there public transit in Cantley?", a: "Limited service — most residents drive. Proximity to Gatineau makes up for it." },
      { q: "Is Cantley a good investment?", a: "Yes — strong demand for rural properties close to Gatineau. Land values have been appreciating steadily." },
      { q: "What outdoor activities are available?", a: "Hiking, skiing, ATV, snowmobiling, horseback riding, farmers' markets and community events — year-round." },
      { q: "How do I sell my property in Cantley?", a: "I know the Cantley market well — lot size, land features and buyer profiles. Request a free valuation to get started." },
    ]}}
    sectors={{ list: [
      { name: "Chelsea", href: "/en/chelsea", detail: "Artistic village, Gatineau Park" },
      { name: "Val-des-Monts", href: "/en/val-des-monts", detail: "Lakes, cottages, wilderness" },
      { name: "Plateau", href: "/en/plateau", detail: "Families, new developments" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Sell in Gatineau", text: "Strategy, pricing and full support.", href: "/en/sell" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation" },
      { title: "Buyer's Guide", text: "Home buying process in Quebec.", href: "/en/buyer-guide" },
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Cantley", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Cantley?", text: "I know the area — let's talk about your project.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default CantleyPageEn;
