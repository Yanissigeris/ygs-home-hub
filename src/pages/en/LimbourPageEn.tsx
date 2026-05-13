import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.webp";

const LimbourPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau — Neighborhood Guide"
    metaDesc="Buy, sell or live in Limbour, Gatineau. Modern family neighborhood with parks, schools and quick access to Ottawa."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Limbour", description: "Real estate broker in Limbour, Gatineau. Modern family neighborhood.", lat: 45.4850, lng: -75.6600, url: "/en/limbour/" }}
    hero={{ overline: "Neighborhood Guide · Limbour", title: "Buy, Sell or Live in Limbour", subtitle: "Modern family neighborhood in the Gatineau sector, near Hôpital de Gatineau and Highway 50. 2000s-2020s homes, parks, trails, 20 minutes from downtown Ottawa.", image: heroImg }}
    trustSpecialty="Limbour specialist"
    lifestyle={{ image: heroImg, imageAlt: "Limbour neighborhood, Gatineau", title: "Why families love Limbour", subtitle: "Limbour attracts young families and second-time buyers looking for newer homes, open lots, and a growing neighborhood. The Ferme Limbour sub-sector is especially sought after for higher-end properties. The area remains accessible for buyers who want to avoid the major renovations typical of older neighborhoods." }}
    reasons={[
      "Recent homes and modern residential developments (mostly 2000-2020 builds)",
      "Single-family homes and semi-detached between $475,000 and $800,000 depending on sub-sector and type (Centris data, May 2026)",
      "Roughly $100,000+ savings vs. comparable Ottawa neighborhoods — Ottawa single-family median was $780,000 in Q1 2026 (Ottawa Real Estate Board)",
      "Ferme Limbour sub-sector: higher-end residential with wooded trails and larger properties",
      "Abundant parks, walking trails and green spaces",
      "Medical services and pharmacies on Boulevard de l'Hôpital: Gatineau Hospital, Pharmaprix, Uniprix",
      "Western Quebec School Board (English) elementary and secondary schools available in the Gatineau sector",
      "Quick access to Highway 50 — about 20 minutes from downtown Ottawa",
      "Growing area with little renovation work needed compared to older neighborhoods",
      "Practical for federal commuters and Ottawa cross-river buyers seeking modern construction",
    ]}
    profilesTitle="Limbour is ideal for…"
    profiles={[
      { icon: Users, title: "Young families", text: "Recent homes 5-20 years old with garages, open lots, schools, parks and trails nearby. No urgent renovations." },
      { icon: Home, title: "Move-up buyers", text: "Families upgrading from a condo or smaller first home. The Ferme Limbour sub-sector offers larger properties with wooded lots." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with stable rental demand from young families and Gatineau Hospital workers." },
      { icon: MapPin, title: "Ottawa relocators", text: "Cross-river buyers from Ottawa wanting modern construction without paying Ottawa prices. Quick commute via Highway 50." },
      { icon: MapPin, title: "Commuters", text: "Quick access to Highway 50, 20 minutes from downtown Ottawa via the Macdonald-Cartier Bridge." },
    ]}
    inlineCta={{ text: "Own a property in Limbour? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{ title: "Questions about Limbour", items: [
      { q: "Is Limbour a new neighborhood?", a: "Yes, mostly. Most developments date from the 2000s-2020s, with a few older properties in certain pockets. The Ferme Limbour sub-sector is especially sought after for its quality construction." },
      { q: "What is the price of a home in Limbour in 2026?", a: "Based on active Centris listings as of May 2026, single-family and semi-detached homes typically sell between $475,000 and $800,000 depending on size, year of construction, and sub-sector. The higher-end properties are in Ferme Limbour." },
      { q: "How much can I save buying in Limbour vs. Ottawa?", a: "The price difference is meaningful. The median single-family home in Ottawa was $780,000 in Q1 2026 according to the Ottawa Real Estate Board, while homes in Limbour range from $475,000 to $800,000 (Centris, May 2026). For a comparable property, that often translates into $100,000+ in savings. Property taxes and Quebec-specific costs should also be factored into your decision." },
      { q: "Are there English-language schools nearby?", a: "Yes. The Western Quebec School Board operates English-language elementary and secondary schools across the Gatineau sector. To find your specific catchment school, the WQSB has a School Locator tool on their website (westernquebec.ca). I can also point you to the right contacts during a property visit." },
      { q: "Are there parks and trails in Limbour?", a: "Yes, the neighborhood is known for its green spaces, walking trails and neighborhood parks. The Ferme Limbour sub-sector is surrounded by wooded areas, which contributes to the area's appeal." },
      { q: "What services are accessible near Limbour?", a: "Boulevard de l'Hôpital concentrates the essential services: Gatineau Hospital, Pharmaprix and Uniprix pharmacies. Tim Hortons and restaurants are accessible within minutes via Boulevard Maloney and Boulevard La Vérendrye." },
      { q: "How long does a sale take in Limbour?", a: "Well-prepared recent homes typically go under contract in 25-40 days in the current market. The average time on market for a single-family home in the Gatineau metropolitan area was 32 days in Q4 2025 according to the Outaouais Real Estate Board." },
    ]}}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/en/cote-dazur/", detail: "Established mature neighborhood, renovation-ready bungalows — direct neighbor of Limbour" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector — services, condos and residential" },
      { name: "Masson-Angers", href: "/en/masson-angers/", detail: "Developing area with new builds at accessible prices" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide/" },
      { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide — buying in Limbour", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide — get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Limbour right now: most of my buyers are young families or couples upgrading from a condo or smaller first home. They're looking for a recent property, no major renovations needed, with a garage and an open lot. The Ferme Limbour sub-sector is especially sought after — and increasingly, buyers from across the river in Ottawa come here looking for modern construction at a more accessible price than what they'd find in comparable Ottawa neighborhoods.",
      dataPoint: "On the sales I close in Limbour, well-prepared homes priced right typically go under contract in 30-40 days. When the asking price is aligned with the sub-sector (Ferme Limbour vs. the rest of Limbour), the timeline shortens.",
      takeaway: "My advice to Limbour owners thinking about selling: don't underestimate the impact of your sub-sector on your final price. An equivalent home in Ferme Limbour vs. another street in Limbour can mean a $30,000-$50,000 difference. List at the right price for your specific zone, not an average for the whole neighborhood."
    }}
    cta={{ title: "Buying or selling in Limbour?", text: "I know the neighborhood — let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options — you decide." }}
  />
);

export default LimbourPageEn;
