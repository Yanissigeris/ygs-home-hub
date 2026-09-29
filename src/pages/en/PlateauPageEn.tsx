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
    hero={{ overline: "Real estate broker · Plateau, Gatineau", title: "Real estate broker in the Plateau, Gatineau", subtitle: "I help buyers and sellers across the Plateau, on both the Hull and the Aylmer side. I give you the numbers and the options, you decide.", image: heroImg }}
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
        a: "Both. Between Boulevard Saint-Raymond and Boulevard de l'Europe, Plateau addresses are in the Hull sector. Between Boulevard de l'Europe and Chemin Vanier, they are in the Aylmer sector. It is one neighbourhood split by an administrative boundary.",
        detail: "For sellers, this matters: I always compare a property with recent sales on the same side of Boulevard de l'Europe and, ideally, on the same street. An average for the whole Plateau would give a less accurate price.",
      },
      {
        q: "What kind of homes are in the Plateau?",
        a: "Mostly single-family homes built since the late 1990s, plus townhouses and condos in the newer developments. Being right next to Gatineau Park is a big part of the appeal.",
        detail: "Prices vary with the type of property, the year it was built and the street. Rather than quoting a neighbourhood average, I prepare a valuation based on recent comparable sales in your part of the Plateau.",
      },
      {
        q: "Can my children attend English school in the Plateau?",
        a: "English-language public schools in the area are run by the Western Quebec School Board (WQSB). In Quebec, access to English public school depends on eligibility, usually confirmed by a certificate of eligibility. Check your situation before you choose a neighbourhood.",
        detail: "For families moving from Ontario, the answer can change which schools, and which neighbourhoods, make sense for you. The Western Quebec School Board explains the eligibility rules on its website.",
      },
      {
        q: "Aylmer, Hull or the Plateau: which one should I choose?",
        a: "It depends on what matters most to you. The Plateau appeals to buyers who want a recent home near Gatineau Park. Aylmer offers Lac Deschênes and more established neighbourhoods, while Hull suits people who want an urban lifestyle close to the bridges.",
        detail: "I wrote a detailed comparison of the three areas. You will find it in the \"Read also\" section further down this page.",
      },
    ]}
    profilesTitle="The Plateau is a good fit for…"
    profiles={[
      { icon: Users, title: "Families", text: "Recent homes with yards and elementary schools in the neighbourhood." },
      { icon: Home, title: "First-time buyers", text: "Recent townhouses and condos, an entry point into the neighbourhood." },
      { icon: TrendingUp, title: "Buyers who want newer homes", text: "Recent construction, often with fewer major renovations ahead." },
      { icon: MapPin, title: "Ottawa commuters", text: "Access via Boulevard des Allumettières toward the bridges." },
    ]}
    inlineCta={{ text: "Own property in the Plateau? Find out how much it's worth.", label: "Get my valuation →", href: "/en/home-valuation/" }}
    brokerPerspective={{
      title: "My take on the Plateau",
      observation: "I work with buyers and sellers on both sides of Boulevard de l'Europe, in the Hull sector and in the Aylmer sector. In February 2026, I helped a first-time buyer purchase a home in the Plateau.",
      dataPoint: "7 Rue du Chinook: sold in one week, at $945,000 (April 2026).",
      takeaway: "My advice to Plateau homeowners: your price is set by recent sales on your side of the neighbourhood and on your street, not by an average for the whole area.",
    }}
    faq={{
      title: "Questions about the Plateau",
      items: [
        { q: "Is the Plateau a good neighbourhood for families?", a: "For many families, yes: recent homes, elementary schools in the neighbourhood and direct access to Gatineau Park. The right choice also depends on your budget and your daily commute." },
        { q: "How far is the Plateau from Ottawa?", a: "The Plateau is west of downtown Hull. You reach Ottawa via Boulevard des Allumettières and the bridges, and commute times vary by time of day and destination. Send me your work address and I will help you compare the options." },
        { q: "Which schools serve the Plateau?", a: "For French-language public schools, the CSSPO has École du Plateau, École des Deux-Ruisseaux and École du Grand-Héron in the neighbourhood, with École secondaire de la Cité on Boulevard du Plateau and École secondaire Mont-Bleu nearby. The assigned school depends on your address. English-language public schools are run by the Western Quebec School Board, subject to eligibility." },
        { q: "What is the price of a house in the Plateau?", a: "It depends on the type of property, the year it was built and the side of the neighbourhood. Contact me for an analysis based on recent sales in your part of the Plateau." },
        { q: "Are there condos and townhouses in the Plateau?", a: "Yes, mostly in the newer developments. They are often how first-time buyers get into the neighbourhood." },
        { q: "Is the Plateau served by public transit?", a: "Yes, by STO bus routes. The Rapibus does not reach the Plateau: its western end is Taché-UQO station." },
        { q: "Why work with a broker who knows the Plateau?", a: "Because price is decided street by street and by side of the neighbourhood. A broker active in the area knows the recent sales and the buyers who are looking. That helps you buy at the right price or sell at the right time." },
        { q: "How do I get a home valuation in the Plateau?", a: "I prepare a free valuation based on recent comparable sales in your area. It is confidential and there is no commitment." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/en/aylmer/", detail: "Lac Deschênes, established neighbourhoods" },
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
    cta={{ title: "Buyer or seller in the Plateau?", text: "Let's talk about your project. I know the neighbourhood on both sides of Boulevard de l'Europe.", buttons: [{ label: "Free valuation", href: "/en/home-valuation/" }, { label: "Book a consultation", href: "/en/buyer-consultation/", variant: "outline" }], trustLine: "I give you the numbers and the options, you decide." }}
  />
);

export default PlateauPageEn;
