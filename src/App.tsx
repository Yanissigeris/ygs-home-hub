import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/SiteLayout";
import ScrollToTop from "@/components/ScrollToTop";

import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";

const preloadAsset = (href: string, as: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = as;
  link.href = href;
  if (as === "image") link.fetchPriority = "high";
  document.head.appendChild(link);
};
if (typeof window !== "undefined") {
  preloadAsset(yanisPortrait, "image");
}

// FR pages
const Index = React.lazy(() => import("./pages/Index"));
const SellerPage = React.lazy(() => import("./pages/SellerPage"));
const ValuationPage = React.lazy(() => import("./pages/ValuationPage"));
const BuyerPage = React.lazy(() => import("./pages/BuyerPage"));
const PlexPage = React.lazy(() => import("./pages/PlexPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PropertiesPage = React.lazy(() => import("./pages/PropertiesPage"));
const SellerPlanPage = React.lazy(() => import("./pages/SellerPlanPage"));
const SellerGuidePage = React.lazy(() => import("./pages/SellerGuidePage"));
const WhenToSellPage = React.lazy(() => import("./pages/WhenToSellPage"));
const SellPlexPage = React.lazy(() => import("./pages/SellPlexPage"));
const BuyerConsultationPage = React.lazy(() => import("./pages/BuyerConsultationPage"));
const BuyerGuidePage = React.lazy(() => import("./pages/BuyerGuidePage"));
const FirstTimeBuyerPage = React.lazy(() => import("./pages/FirstTimeBuyerPage"));
const BuyFromOttawaPage = React.lazy(() => import("./pages/BuyFromOttawaPage"));
const RelocationPage = React.lazy(() => import("./pages/RelocationPage"));
const MontrealRelocationPage = React.lazy(() => import("./pages/MontrealRelocationPage"));
const RelocationGuidePage = React.lazy(() => import("./pages/RelocationGuidePage"));
const NeighborhoodsOverviewPage = React.lazy(() => import("./pages/NeighborhoodsOverviewPage"));
const MilitaryPage = React.lazy(() => import("./pages/MilitaryPage"));
const MilitaryRelocationPage = React.lazy(() => import("./pages/MilitaryRelocationPage"));
const MilitaryBuyerPage = React.lazy(() => import("./pages/MilitaryBuyerPage"));
const MilitarySellerPage = React.lazy(() => import("./pages/MilitarySellerPage"));
const MilitaryGuidePage = React.lazy(() => import("./pages/MilitaryGuidePage"));
const PlexAnalysisPage = React.lazy(() => import("./pages/PlexAnalysisPage"));
const MarketReportPage = React.lazy(() => import("./pages/MarketReportPage"));
const NeighborhoodPage = React.lazy(() => import("./pages/NeighborhoodPage"));
const HullPage = React.lazy(() => import("./pages/HullPage"));
const BuckinghamPage = React.lazy(() => import("./pages/BuckinghamPage"));
const GatineauCentrePage = React.lazy(() => import("./pages/GatineauCentrePage"));
const AylmerPage = React.lazy(() => import("./pages/AylmerPage"));
const PlateauPage = React.lazy(() => import("./pages/PlateauPage"));
const ResourcesPage = React.lazy(() => import("./pages/ResourcesPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const LivingAylmerPage = React.lazy(() => import("./pages/LivingAylmerPage"));
const LivingHullPage = React.lazy(() => import("./pages/LivingHullPage"));
const LivingPlateauPage = React.lazy(() => import("./pages/LivingPlateauPage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const ThankYouPage = React.lazy(() => import("./pages/ThankYouPage"));
const ThankYouValuationPage = React.lazy(() => import("./pages/ThankYouValuationPage"));
const TestimonialsPage = React.lazy(() => import("./pages/TestimonialsPage"));

// EN pages
const IndexEn = React.lazy(() => import("./pages/en/IndexEn"));
const SellerPageEn = React.lazy(() => import("./pages/en/SellerPageEn"));
const BuyerPageEn = React.lazy(() => import("./pages/en/BuyerPageEn"));
const RelocationPageEn = React.lazy(() => import("./pages/en/RelocationPageEn"));
const MilitaryPageEn = React.lazy(() => import("./pages/en/MilitaryPageEn"));
const PlexPageEn = React.lazy(() => import("./pages/en/PlexPageEn"));
const PropertiesPageEn = React.lazy(() => import("./pages/en/PropertiesPageEn"));
const ContactPageEn = React.lazy(() => import("./pages/en/ContactPageEn"));
const FAQPageEn = React.lazy(() => import("./pages/en/FAQPageEn"));
const TestimonialsPageEn = React.lazy(() => import("./pages/en/TestimonialsPageEn"));
const ResourcesPageEn = React.lazy(() => import("./pages/en/ResourcesPageEn"));
const NeighborhoodsPageEn = React.lazy(() => import("./pages/en/NeighborhoodsPageEn"));
const ValuationPageEn = React.lazy(() => import("./pages/en/ValuationPageEn"));
const ThankYouPageEn = React.lazy(() => import("./pages/en/ThankYouPageEn"));
const ThankYouValuationPageEn = React.lazy(() => import("./pages/en/ThankYouValuationPageEn"));
const BuyerGuidePageEn = React.lazy(() => import("./pages/en/BuyerGuidePageEn"));
const SellerGuidePageEn = React.lazy(() => import("./pages/en/SellerGuidePageEn"));
const MilitaryBuyerPageEn = React.lazy(() => import("./pages/en/MilitaryBuyerPageEn"));
const MilitarySellerPageEn = React.lazy(() => import("./pages/en/MilitarySellerPageEn"));
const MilitaryGuidePageEn = React.lazy(() => import("./pages/en/MilitaryGuidePageEn"));
const RelocationGuidePageEn = React.lazy(() => import("./pages/en/RelocationGuidePageEn"));
const FirstTimeBuyerPageEn = React.lazy(() => import("./pages/en/FirstTimeBuyerPageEn"));
const BuyFromOttawaPageEn = React.lazy(() => import("./pages/en/BuyFromOttawaPageEn"));
const BuyerConsultationPageEn = React.lazy(() => import("./pages/en/BuyerConsultationPageEn"));
const PlexAnalysisPageEn = React.lazy(() => import("./pages/en/PlexAnalysisPageEn"));
const PlateauAylmerPageEn = React.lazy(() => import("./pages/en/PlateauAylmerPageEn"));
const HullPageEn = React.lazy(() => import("./pages/en/HullPageEn"));
const BuckinghamPageEn = React.lazy(() => import("./pages/en/BuckinghamPageEn"));
const WhenToSellPageEn = React.lazy(() => import("./pages/en/WhenToSellPageEn"));
const SellerPlanPageEn = React.lazy(() => import("./pages/en/SellerPlanPageEn"));
const SellPlexPageEn = React.lazy(() => import("./pages/en/SellPlexPageEn"));
const MontrealRelocationPageEn = React.lazy(() => import("./pages/en/MontrealRelocationPageEn"));
const MarketReportPageEn = React.lazy(() => import("./pages/en/MarketReportPageEn"));
const LivingAylmerPageEn = React.lazy(() => import("./pages/en/LivingAylmerPageEn"));
const LivingHullPageEn = React.lazy(() => import("./pages/en/LivingHullPageEn"));
const LivingPlateauPageEn = React.lazy(() => import("./pages/en/LivingPlateauPageEn"));
const GatineauCentrePageEn = React.lazy(() => import("./pages/en/GatineauCentrePageEn"));
const AylmerPageEn = React.lazy(() => import("./pages/en/AylmerPageEn"));
const PlateauPageEn = React.lazy(() => import("./pages/en/PlateauPageEn"));
const MilitaryRelocationPageEn = React.lazy(() => import("./pages/en/MilitaryRelocationPageEn"));



const routeTree = React.createElement(
  Routes,
  null,
  <>
    <Route element={<SiteLayout />}>
      {/* FR routes */}
      <Route path="/" element={<Index />} />
      <Route path="/proprietes" element={<PropertiesPage />} />
      <Route path="/proprietes-vedettes" element={<PropertiesPage />} />
      <Route path="/nouvelles-inscriptions" element={<PropertiesPage />} />
      <Route path="/nouvelles-inscriptions-gatineau" element={<PropertiesPage />} />
      <Route path="/vendu-recemment" element={<PropertiesPage />} />
      <Route path="/vendues-recemment-gatineau" element={<PropertiesPage />} />
      <Route path="/vendre-ma-maison-gatineau" element={<SellerPage />} />
      <Route path="/evaluation-gratuite-gatineau" element={<ValuationPage />} />
      <Route path="/plan-vendeur-gatineau" element={<SellerPlanPage />} />
      <Route path="/guide-vendeur-gatineau" element={<SellerGuidePage />} />
      <Route path="/quand-vendre-a-gatineau" element={<WhenToSellPage />} />
      <Route path="/vendre-un-plex-a-gatineau" element={<SellPlexPage />} />
      <Route path="/acheter-a-gatineau" element={<BuyerPage />} />
      <Route path="/consultation-acheteur" element={<BuyerConsultationPage />} />
      <Route path="/guide-acheteur-gatineau" element={<BuyerGuidePage />} />
      <Route path="/premier-achat-gatineau" element={<FirstTimeBuyerPage />} />
      <Route path="/acheter-a-gatineau-depuis-ottawa" element={<BuyFromOttawaPage />} />
      <Route path="/relocalisation-ottawa-gatineau" element={<RelocationPage />} />
      <Route path="/relocalisation-montreal-gatineau" element={<MontrealRelocationPage />} />
      <Route path="/guide-relocalisation-gatineau" element={<RelocationGuidePage />} />
      <Route path="/quartiers-a-considerer-a-gatineau" element={<NeighborhoodsOverviewPage />} />
      <Route path="/militaire-gatineau" element={<MilitaryPage />} />
      <Route path="/relocalisation-militaire-gatineau" element={<MilitaryRelocationPage />} />
      <Route path="/acheter-comme-militaire-gatineau" element={<MilitaryBuyerPage />} />
      <Route path="/vendre-lors-dune-mutation-gatineau" element={<MilitarySellerPage />} />
      <Route path="/guide-militaire-gatineau" element={<MilitaryGuidePage />} />
      <Route path="/investir-plex-gatineau" element={<PlexPage />} />
      <Route path="/analyse-plex-gatineau" element={<PlexAnalysisPage />} />
      <Route path="/rapport-marche-gatineau" element={<MarketReportPage />} />
      <Route path="/plateau-aylmer" element={<NeighborhoodPage />} />
      <Route path="/hull" element={<HullPage />} />
      <Route path="/buckingham-masson-angers" element={<BuckinghamPage />} />
      <Route path="/gatineau" element={<GatineauCentrePage />} />
      <Route path="/aylmer" element={<AylmerPage />} />
      <Route path="/plateau" element={<PlateauPage />} />
      <Route path="/ressources" element={<ResourcesPage />} />
      <Route path="/vivre-a-aylmer" element={<LivingAylmerPage />} />
      <Route path="/vivre-a-hull" element={<LivingHullPage />} />
      <Route path="/vivre-dans-le-plateau" element={<LivingPlateauPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/temoignages" element={<TestimonialsPage />} />
      <Route path="/merci" element={<ThankYouPage />} />
      <Route path="/merci-evaluation" element={<ThankYouValuationPage />} />
      <Route path="/contact-yanis" element={<ContactPage />} />

      {/* EN routes */}
      <Route path="/en" element={<IndexEn />} />
      <Route path="/en/properties" element={<PropertiesPageEn />} />
      <Route path="/en/sell" element={<SellerPageEn />} />
      <Route path="/en/home-valuation" element={<ValuationPageEn />} />
      <Route path="/en/seller-guide" element={<SellerGuidePageEn />} />
      <Route path="/en/buy" element={<BuyerPageEn />} />
      <Route path="/en/buyer-consultation" element={<BuyerConsultationPageEn />} />
      <Route path="/en/buyer-guide" element={<BuyerGuidePageEn />} />
      <Route path="/en/first-time-buyer" element={<FirstTimeBuyerPageEn />} />
      <Route path="/en/buy-from-ottawa" element={<BuyFromOttawaPageEn />} />
      <Route path="/en/relocation" element={<RelocationPageEn />} />
      <Route path="/en/relocation-guide" element={<RelocationGuidePageEn />} />
      <Route path="/en/military" element={<MilitaryPageEn />} />
      <Route path="/en/military-buyer" element={<MilitaryBuyerPageEn />} />
      <Route path="/en/military-seller" element={<MilitarySellerPageEn />} />
      <Route path="/en/military-guide" element={<MilitaryGuidePageEn />} />
      <Route path="/en/plex" element={<PlexPageEn />} />
      <Route path="/en/plex-analysis" element={<PlexAnalysisPageEn />} />
      <Route path="/en/neighborhoods" element={<NeighborhoodsPageEn />} />
      <Route path="/en/plateau-aylmer" element={<PlateauAylmerPageEn />} />
      <Route path="/en/hull" element={<HullPageEn />} />
      <Route path="/en/buckingham" element={<BuckinghamPageEn />} />
      <Route path="/en/when-to-sell" element={<WhenToSellPageEn />} />
      <Route path="/en/seller-plan" element={<SellerPlanPageEn />} />
      <Route path="/en/sell-plex" element={<SellPlexPageEn />} />
      <Route path="/en/montreal-relocation" element={<MontrealRelocationPageEn />} />
      <Route path="/en/market-report" element={<MarketReportPageEn />} />
      <Route path="/en/resources" element={<ResourcesPageEn />} />
      <Route path="/en/faq" element={<FAQPageEn />} />
      <Route path="/en/testimonials" element={<TestimonialsPageEn />} />
      <Route path="/en/contact" element={<ContactPageEn />} />
      <Route path="/en/thank-you" element={<ThankYouPageEn />} />
      <Route path="/en/thank-you-valuation" element={<ThankYouValuationPageEn />} />
      <Route path="/en/living-aylmer" element={<LivingAylmerPageEn />} />
      <Route path="/en/living-hull" element={<LivingHullPageEn />} />
      <Route path="/en/living-plateau" element={<LivingPlateauPageEn />} />
      <Route path="/en/gatineau" element={<GatineauCentrePageEn />} />
      <Route path="/en/aylmer" element={<AylmerPageEn />} />
      <Route path="/en/plateau" element={<PlateauPageEn />} />
      <Route path="/en/military-relocation" element={<MilitaryRelocationPageEn />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>,
);

const appRoutes = React.createElement(
  BrowserRouter,
  { future: { v7_startTransition: true, v7_relativeSplatPath: true } },
  React.createElement(LanguageProvider, null, React.createElement(ScrollToTop), routeTree),
);

const App = () => appRoutes;

export default App;
