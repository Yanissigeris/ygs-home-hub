import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.webp";

const LimbourPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau | Neighbourhood Guide"
    metaDesc="Buy, sell or live in Limbour, Gatineau. Modern family neighbourhood with parks, schools and quick access to Ottawa."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Limbour", description: "Real estate broker in Limbour, Gatineau. Modern family neighbourhood.", lat: 45.4850, lng: -75.6600, url: "/en/limbour/" }}
    hero={{ overline: "Neighbourhood Guide · Limbour", title: "Buy, Sell or Live in Limbour", subtitle: "Modern family neighbourhood in the Gatineau sector, near Hôpital de Gatineau and Highway 50. 2000s-2020s homes, parks, trails, about 12 km from downtown Ottawa.", image: heroImg }}
    trustSpecialty="Limbour specialist"
    lifestyle={{ image: heroImg, imageAlt: "Limbour neighbourhood, Gatineau", title: "Is Limbour a good neighbourhood for families?", subtitle: "Yes. It's the buyer profile I see most often in Limbour: young families and couples moving up from a condo or a first home. The neighbourhood was planned for them, with loop streets and cul-de-sacs that keep through traffic down, parks and trails built into the development, and both French and English schools within the Gatineau sector. In Ferme Limbour, properties are larger and higher-end." }}
    reasons={[
      "Recent homes and modern residential developments (mostly 2000-2020 builds)",
      "Median single-family price of $490,000 in Q2 2026 in APCIQ's Gatineau sector, which includes Limbour",
      "Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), for comparison",
      "Ferme Limbour sub-sector: higher-end residential with wooded trails and larger properties",
      "Abundant parks, walking trails and green spaces",
      "Gatineau Hospital (909 Boulevard La Vérendrye Ouest) a few minutes away by car",
      "Western Quebec School Board (English): Greater Gatineau Elementary in the Gatineau sector, high schools in Hull, subject to eligibility",
      "Access to Highway 50, about 12 km from downtown Ottawa by road",
      "Growing area with little renovation work needed compared to older neighbourhoods",
      "Practical for federal commuters and Ottawa cross-river buyers seeking modern construction",
    ]}
    answers={[
      {
        q: "What kind of homes are in Limbour?",
        a: "Mostly two-storey single-family homes with a garage, built between 2000 and 2020, plus townhomes and some semi-detached homes. Typical sizes range from 1,400 to 2,200 sq. ft., with a basement that is often finished or ready to finish.",
        detail: "For a buyer, that means recent materials, insulation and mechanical systems, so few major renovations compared to older areas like Côte-d'Azur. Lots are already landscaped and parks are mature. In Ferme Limbour, lots are larger and often wooded, and an equivalent home can be worth $30,000 to $50,000 more than elsewhere in Limbour.",
      },
      {
        q: "Limbour, Aylmer, the Plateau or Masson-Angers: which one should I choose?",
        a: "Limbour offers recent homes at a more accessible price than Aylmer or the Plateau. It is also closer to Ottawa than Masson-Angers: about 12 km from downtown by road, compared with about 36 km from Masson-Angers.",
        detail: "If you want a move-in ready home in an established neighbourhood without over-leveraging, Limbour is often the right compromise. For Lac Deschênes or the shops of Old Aylmer, look at Aylmer instead. Masson-Angers is a better fit if you prefer a customized new build and the commute matters less.",
      },
    ]}
    profilesTitle="Who buys in Limbour"
    profiles={[
      { icon: Users, title: "Young families", text: "Recent homes 5-20 years old with garages, open lots, schools, parks and trails nearby. No urgent renovations." },
      { icon: Home, title: "Move-up buyers", text: "Families upgrading from a condo or smaller first home. The Ferme Limbour sub-sector offers larger properties with wooded lots." },
      { icon: TrendingUp, title: "Investors", text: "Growing area with stable rental demand from young families and Gatineau Hospital workers." },
      { icon: MapPin, title: "Ottawa relocators", text: "Cross-river buyers from Ottawa wanting modern construction without paying Ottawa prices. Quick commute via Highway 50." },
      { icon: MapPin, title: "Commuters", text: "Access to Highway 50, which leads to the bridges into Ottawa." },
    ]}
    inlineCta={{ text: "Own a property in Limbour? Find out what it's worth.", label: "Get my value →", href: "/en/home-valuation/" }}
    faq={{ title: "Questions about Limbour", items: [
      { q: "Is Limbour a new neighbourhood?", a: "Yes, mostly. Most developments date from the 2000s-2020s, with a few older properties in certain pockets. The Ferme Limbour sub-sector draws buyers with its large homes." },
      { q: "What is the price of a home in Limbour in 2026?", a: "Limbour is part of APCIQ's Gatineau sector. In Q2 2026, the median single-family price there was $490,000 (Centris data). In Limbour, prices then vary with size, year of construction and sub-sector, and the higher-end properties are in Ferme Limbour. For a precise figure, I compare recent sales of homes like yours." },
      { q: "How much can I save buying in Limbour vs. Ottawa?", a: "It depends on the homes you compare. Two official reference points: Ottawa's median single-family price was $740,000 in August 2026 (Ottawa Real Estate Board), and it was $490,000 in Q2 2026 in APCIQ's Gatineau sector, which includes Limbour. The two boards don't cover the same period or identical homes, so for a real comparison I put similar properties side by side. Property taxes and Quebec-specific costs should also be factored into your decision." },
      { q: "Are there English-language schools nearby?", a: "Yes, subject to eligibility for English instruction (certificate of eligibility). The Western Quebec School Board has elementary schools in the Gatineau and Hull sectors (Greater Gatineau Elementary, Pierre Elliott Trudeau Elementary), and its closest high schools are in Hull (Hadley Junior High, Philemon Wright High School). To find the school for your address, use the WQSB School Locator on westernquebec.ca. I can also point you to the right contacts during a property visit." },
      { q: "Are there parks and trails in Limbour?", a: "Yes, the neighbourhood is known for its green spaces, walking trails and neighbourhood parks. The Ferme Limbour sub-sector is surrounded by wooded areas, which contributes to the area's appeal." },
      { q: "What services are accessible near Limbour?", a: "Rue Saint-Louis has local shops, including a grocery store and a pharmacy. Gatineau Hospital, at 909 Boulevard La Vérendrye Ouest, is a few minutes away by car." },
      { q: "How long does a sale take in Limbour?", a: "In Q2 2026, single-family homes in APCIQ's Gatineau sector, which includes Limbour, sold in 22 days on average, compared with 27 days for the whole metropolitan area (Centris data). The actual timeline depends mostly on price and how well the home is prepared." },
    ]}}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/en/cote-dazur/", detail: "Established mature neighbourhood, renovation-ready bungalows, direct neighbour of Limbour" },
      { name: "Gatineau (centre)", href: "/en/gatineau/", detail: "Heart of the Gatineau sector, services, condos and residential" },
      { name: "Masson-Angers", href: "/en/masson-angers/", detail: "Developing area with new builds at accessible prices" },
    ]}}
    related={{ overline: "Also worth reading", title: "Related Pages", pages: [
      { title: "Buying in Limbour", text: "Recent homes at good prices.", href: "/en/blog/buying-limbour-recent-homes/" },
      { title: "First-Time Buyer", text: "Tips for first-time buyers.", href: "/en/first-time-buyer/" },
      { title: "Free Valuation", text: "What's your property worth?", href: "/en/home-valuation/" },
      { title: "Buyer's Guide", text: "Home buying process.", href: "/en/buyer-guide/" },
      { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
      { title: "Buy from Ottawa", text: "Crossing the river without surprises.", href: "/en/buy-from-ottawa/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free buyer's guide, buying in Limbour", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the buyer's guide", stickyLabel: "Free buyer's guide, get it by email" }}
    brokerPerspective={{
      observation: "What I'm seeing in Limbour right now: most of my buyers are young families or couples upgrading from a condo or smaller first home. They're looking for a recent property, no major renovations needed, with a garage and an open lot. Ferme Limbour gets a lot of visits. More and more buyers from across the river in Ottawa come here for modern construction at a lower price than in comparable Ottawa neighbourhoods.",
      dataPoint: "In Q2 2026, single-family homes in APCIQ's Gatineau sector, which includes Limbour, sold in 22 days on average. When the asking price is aligned with the sub-sector (Ferme Limbour vs. the rest of Limbour), the timeline shortens.",
      takeaway: "My advice to Limbour owners thinking about selling: don't underestimate the impact of your sub-sector on your final price. An equivalent home in Ferme Limbour vs. another street in Limbour can mean a $30,000-$50,000 difference. List at the right price for your zone, not an average for the whole neighbourhood."
    }}
    cta={{ title: "Buying or selling in Limbour?", text: "I know the neighbourhood, let's talk.", buttons: [{ label: "Get my value", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and options, you decide." }}
  />
);

export default LimbourPageEn;
