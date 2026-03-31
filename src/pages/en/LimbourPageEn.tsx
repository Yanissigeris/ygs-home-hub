import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.jpg";

const LimbourPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau — Neighborhood Guide | YGS"
    metaDesc="Buy, sell or live in Limbour, Gatineau. Modern family neighborhood with parks, schools and quick access to Ottawa."
    jsonLd={{ name: "Limbour", description: "Real estate broker in Limbour, Gatineau. Modern family neighborhood.", lat: 45.4850, lng: -75.6600, url: "/en/limbour" }}
    hero={{ overline: "Neighborhood Guide · Limbour", title: "Buy, Sell or Live in Limbour", subtitle: "Modern family neighborhood — newer homes, parks and pleasant suburban living.", image: heroImg }}
    trustSpecialty="Limbour specialist"
    lifestyle={{ image: heroImg, imageAlt: "Limbour neighborhood, Gatineau", title: "Why families love Limbour", subtitle: "A dynamic residential area with recent developments and great quality of life." }}
    reasons={[
      "Recent homes and modern residential developments",
      "Abundant parks, walking trails and green spaces",
      "Elementary and high schools nearby",
      "Shops and services accessible on Boulevard de l'Hôpital",
      "Quick access to Highway 50 — 20 minutes from Ottawa",
    ]}
    profilesTitle="Limbour is ideal for…"
    profiles={[
      { icon: Users, title: "Young families", text: "Newer homes, parks, schools — everything for kids." },
      { icon: Home, title: "Recent home buyers", text: "5-15 year old construction in excellent condition." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with stable rental demand." },
      { icon: MapPin, title: "Commuters", text: "Quick access to Gatineau-centre and Ottawa." },
    ]}
    inlineCta={{ text: "Own a property in Limbour? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation" }}
    faq={{ title: "Questions about Limbour", items: [
      { q: "Is Limbour a new neighborhood?", a: "Relatively — many developments from the last 10-15 years with modern, well-built homes." },
      { q: "Are there parks in Limbour?", a: "Yes, the neighborhood is well-equipped with green spaces, trails and playgrounds." },
      { q: "How do you get to Ottawa from Limbour?", a: "Via Highway 50, about 20-25 minutes depending on traffic." },
    ]}}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/en/cote-dazur", detail: "Established residential" },
      { name: "Gatineau (centre)", href: "/en/gatineau", detail: "Services, central" },
      { name: "Masson-Angers", href: "/en/masson-angers", detail: "New builds, affordable" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Limbour", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    cta={{ title: "Buying or selling in Limbour?", text: "I know the neighborhood — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation" }, { label: "Book a consultation", href: "/en/buyer-consultation", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default LimbourPageEn;
