import PageMeta from "@/components/PageMeta";
import FaqJsonLd from "@/components/FaqJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import { Book, Home, MapPin, Users, TrendingUp, Shield } from "lucide-react";
import heroImg from "@/assets/hero-faq.webp";

const sellerFaq = [
  { q: "How much is my property worth in Gatineau?", a: "The value depends on recent comparable sales, the condition of your property and the neighborhood. Request a free valuation for a personalized estimate." },
  { q: "How much does a real estate broker cost?", a: "The commission is agreed upon together before we start. Everything is transparent — no surprises." },
  { q: "Should I renovate before selling?", a: "Not necessarily. Some investments pay off — painting, decluttering — others are a waste. I'll help you sort it out." },
  { q: "How long does it take to sell in Gatineau?", a: "On average 30 to 60 days on the market, but it varies by neighborhood, price and season. The right price from the start accelerates everything." },
  { q: "Is spring the best time to sell?", a: "It's often the busiest season, but not always the most profitable. Less competition in fall or winter can work in your favor." },
];
const buyerFaq = [
  { q: "How much do I need for a down payment?", a: "5% minimum for a primary residence. For an owner-occupied plex, 5% as well. For a pure investment, 20%." },
  { q: "Buy in Gatineau or Ottawa?", a: "It depends on your priorities. Generally, prices are more affordable on the Gatineau side, but you need to consider taxes and services." },
  { q: "How long does a purchase take?", a: "60 to 90 days generally from the start of your search to taking possession." },
  { q: "Is the process different in Québec?", a: "Yes — promise to purchase, inspection, notary (not a lawyer). I guide you every step of the way." },
  { q: "What additional fees should I expect beyond the purchase price?", a: "Notary (approximately $1,500), welcome tax, optional title insurance, and pre-purchase inspection." },
];
const plexFaq = [
  { q: "How do you evaluate a plex's value?", a: "Income approach (GRM), comparable sales, building condition and rent optimization potential." },
  { q: "Is it still profitable to buy a plex in Gatineau?", a: "Yes, if the analysis is done right. Entry prices are still accessible and rental demand is strong." },
  { q: "What happens to tenants when I sell?", a: "Leases transfer to the new owner. The law protects tenants — we manage the transition properly." },
];
const militaryFaq = [
  { q: "How does a military real estate relocation work?", a: "We start by understanding your timeline and needs. Then, targeted search, visits (virtual or in-person) and complete support." },
  { q: "Do you work with IRP/BGRS programs?", a: "I understand the realities of these programs and adapt to the constraints and deadlines they impose." },
  { q: "Should I buy or rent during a posting?", a: "It depends on the length of your assignment and your situation. We discuss it together to find the best option." },
];
const resources = [
  { icon: Home, title: "Seller Guide", text: "Everything to sell at the best price.", cta: "Read the guide", href: "/en/seller-guide" },
  { icon: Users, title: "Buyer Guide", text: "The buying process in Québec.", cta: "Read the guide", href: "/en/buyer-guide" },
  { icon: MapPin, title: "Relocation Guide", text: "Settling in Gatineau.", cta: "Read the guide", href: "/en/relocation-guide" },
  { icon: Shield, title: "Military Guide", text: "Real estate and postings.", cta: "Read the guide", href: "/en/military-guide" },
  { icon: TrendingUp, title: "Plex Investment", text: "Analysis and strategy.", cta: "Explore", href: "/en/plex" },
  { icon: Book, title: "First-Time Buyer", text: "Budget, process and tips.", cta: "Read the guide", href: "/en/first-time-buyer" },
];

const FAQPageEn = () => (
  <>
    <PageMeta title="FAQ — Real Estate Questions | YGS" description="Answers to frequently asked questions about real estate in Gatineau. Selling, buying, investing, relocation and more." />
    <HeroSection overline="FAQ · YGS" title="Frequently Asked Questions" subtitle="Answers to the most common questions about selling, buying, investing and relocating in Gatineau." primaryCta={{ label: "Talk to Yanis", href: "/en/contact" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />
    <FAQSection title="Selling in Gatineau" items={sellerFaq} />
    <FAQSection title="Buying in Gatineau" items={buyerFaq} />
    <FAQSection title="Plex Investment" items={plexFaq} />
    <FAQSection title="Military and Relocation" items={militaryFaq} />
    <LinkedCardGrid overline="Resources" title="Guides and Tools" items={resources} columns={3} background="alt" />
    <CTASection dark title="Have a specific question?" text="Contact me directly — I'll give you a clear and personalized answer." buttons={[{ label: "Talk to Yanis", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="Zero pressure — I give you the options, you decide." />
  </>
);
export default FAQPageEn;
