import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-plateau.webp";

// Title and meta description are published from src/data/seo-routes.json (route "/en/plateau").
// seoTitle / metaDesc below are fallbacks only and are kept identical in intent.
const PlateauPageEn = () => (
  <NeighborhoodTemplate
    seoTitle="Real Estate Broker Plateau · Gatineau | Yanis Gauthier"
    metaDesc="Yanis Gauthier-Sigeris, RE/MAX broker with 300+ transactions in the Outaouais. Buy or sell in the Plateau, Gatineau, with a free home valuation."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Plateau", description: "Yanis Gauthier-Sigeris, RE/MAX broker with 300+ transactions in the Outaouais. Buy or sell in the Plateau, Gatineau, with a free home valuation.", lat: 45.4405, lng: -75.7797, url: "/en/plateau/" }}
    hero={{ overline: "Real estate broker · Plateau, Gatineau", title: "Real estate broker in the Plateau, Gatineau", subtitle: "Buying or selling in the Plateau, on the Hull or the Aylmer side, with a broker who works in the neighbourhood.", image: heroImg }}
    trustSpecialty="Active broker in the Plateau"
    lifestyle={{ image: heroImg, imageAlt: "The Plateau, Gatineau", title: "Where is the Plateau in Gatineau?", subtitle: "The Plateau runs west from Boulevard Saint-Raymond to Chemin Vanier, between Gatineau Park to the north and Boulevard des Allumettières to the south. Boulevard de l'Europe is the dividing line: addresses east of it are in the Hull sector, addresses west of it are in the Aylmer sector." }}
    reasons={[
      "Developed mostly since the late 1990s (Boulevard du Plateau was officially named in 1997)",
      "Mostly recent single-family homes, plus townhouses and condos",
      "Borders Gatineau Park, with access to the trails",
      "French-language elementary schools (CSSPO) in the neighbourhood: École du Plateau, École des Deux-Ruisseaux, École du Grand-Héron",
      "École secondaire de la Cité on Boulevard du Plateau, École secondaire Mont-Bleu nearby",
      "Access to Ottawa via Boulevard des Allumettières, with commute times that vary by time of day and destination",
      "Served by STO bus routes",
    ]}
    answers={[
      {
        q: "Is the Plateau in Hull or Aylmer?",
        a: "Both. From Boulevard Saint-Raymond to Boulevard de l'Europe, Plateau addresses are in the Hull sector. West of Boulevard de l'Europe, up to Chemin Vanier, they are in the Aylmer sector. It is one neighbourhood split by an administrative boundary.",
        detail: "For sellers, this matters: the most reliable comparable sales are on the same side of Boulevard de l'Europe, and preferably on the same street.",
      },
      {
        q: "What kind of homes are in the Plateau?",
        a: "Mostly single-family homes built since the late 1990s, plus townhouses and condos in the newer developments. Being right next to Gatineau Park is a big part of the appeal.",
        detail: "Prices vary with the type of property, the year it was built and the street. For a reliable number on your home, I prepare a valuation based on recent comparable sales in your part of the Plateau.",
      },
      {
        q: "Can my children attend English school in the Plateau?",
        a: "English-language public schools in the area are run by the Western Quebec School Board (WQSB). In Quebec, access to English public school depends on eligibility, usually confirmed by a certificate of eligibility. Check your situation before you choose a neighbourhood.",
        detail: "For families moving from Ontario, the answer can change which schools, and which neighbourhoods, make sense for you. The Western Quebec School Board explains the eligibility rules on its website.",
      },
      {
        q: "Aylmer, Hull or the Plateau: which one should I choose?",
        a: "It depends on what matters most to you. If you want a recent home near Gatineau Park, the Plateau is a good place to start. Aylmer offers more established neighbourhoods, while Hull is a better fit for an urban lifestyle close to the bridges.",
        detail: "I wrote a detailed comparison of the three areas. You will find it in the \"Read also\" section further down this page.",
      },
    ]}
    profilesTitle="Who the Plateau suits"
    profiles={[
      { icon: Users, title: "Families", text: "Recent homes with yards and elementary schools in the neighbourhood." },
      { icon: Home, title: "First-time buyers", text: "Recent townhouses and condos, an entry point into the neighbourhood." },
      { icon: TrendingUp, title: "Buyers who want newer homes", text: "Recent construction, often with fewer major renovations ahead." },
      { icon: MapPin, title: "Ottawa commuters", text: "Access via Boulevard des Allumettières toward the bridges." },
    ]}
    inlineCta={{ text: "Own property in the Plateau? Find out how much it's worth.", label: "Get my valuation →", href: "/en/home-valuation/" }}
    brokerPerspective={{
      title: "My take on the Plateau",
      observation: "In February 2026, I helped a first-time buyer purchase a home in the Plateau. I have closed other transactions in the neighbourhood, including a quick sale on Rue du Chinook, on the Hull side.",
      dataPoint: "7 Rue du Chinook: sold in one week, at $945,000 (April 2026).",
      takeaway: "My advice to Plateau homeowners: your price is set by recent sales on your side of the neighbourhood and on your street, not by an average for the whole area.",
    }}
    faq={{
      title: "Questions about the Plateau",
      items: [
        { q: "Is the Plateau a good neighbourhood for families?", a: "Yes, if you want a recent home: the neighbourhood has three elementary schools and borders Gatineau Park. Your budget and your daily commute also weigh in the decision." },
        { q: "How far is the Plateau from Ottawa?", a: "The Plateau is west of downtown Hull. You reach Ottawa via Boulevard des Allumettières and the bridges, and commute times vary by time of day and destination." },
        { q: "Which schools serve the Plateau?", a: "For French-language public schools, the CSSPO has École du Plateau, École des Deux-Ruisseaux and École du Grand-Héron in the neighbourhood, with École secondaire de la Cité on Boulevard du Plateau and École secondaire Mont-Bleu nearby. The assigned school depends on your address. English-language public schools are run by the Western Quebec School Board, subject to eligibility." },
        { q: "What is the price of a house in the Plateau?", a: "It depends on the type of property, the year it was built and the side of the neighbourhood. The number that matters for you comes from recent sales comparable to your home, in your part of the Plateau." },
        { q: "Are there condos and townhouses in the Plateau?", a: "Yes, mostly in the newer developments. They are often how first-time buyers get into the neighbourhood." },
        { q: "Is the Plateau served by public transit?", a: "Yes, by STO bus routes. The Rapibus does not reach the Plateau: its western end is Taché-UQO station." },
        { q: "Why work with a broker who knows the Plateau?", a: "Because price is decided street by street and by side of the neighbourhood. A broker active in the area knows the recent sales and the buyers who are looking. That helps you buy at the right price or sell at the right time." },
        { q: "How do I get a home valuation in the Plateau?", a: "I prepare a free valuation based on recent comparable sales in your area. It is confidential and there is no commitment." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/en/aylmer/", detail: "Families, established neighbourhoods" },
      { name: "Hull", href: "/en/hull/", detail: "Urban, culture, condos" },
      { name: "Chelsea", href: "/en/chelsea/", detail: "Village, Gatineau Park" },
    ]}}
    related={{ pages: [
      { title: "Aylmer, Hull or the Plateau?", text: "A comparison of the three areas.", href: "/en/blog/aylmer-hull-plateau-which-neighborhood/" },
      { title: "Living in the Plateau", text: "Day-to-day life in the neighbourhood.", href: "/en/living-plateau/" },
      { title: "Free home valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
      { title: "Buy in Gatineau from Ottawa", text: "Crossing the river without surprises.", href: "/en/buy-from-ottawa/" },
      { title: "First-time buyer", text: "Budget, process and tips.", href: "/en/first-time-buyer/" },
      { title: "All neighbourhoods", text: "Compare all Outaouais areas.", href: "/en/neighborhoods/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Free Buyer Guide: buying in the Plateau", text: "Process, budget and tips for buying in the area.", ctaLabel: "Get the Buyer Guide", stickyLabel: "Free Buyer Guide, get it by email" }}
    cta={{ title: "Buyer or seller in the Plateau?", text: "Write to me and we will look at your project together, on the Hull side or the Aylmer side.", buttons: [{ label: "Free valuation", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and the options, you decide." }}
  />
);

export default PlateauPageEn;
