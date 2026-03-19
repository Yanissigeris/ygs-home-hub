import * as React from "react";
import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";

// Preload critical hero assets so they're cached across navigations
import yanisPortrait from "@/assets/yanis-portrait-nobg.png";
import heroGatineauSkyline from "@/assets/hero-gatineau-skyline.jpg";

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};
if (typeof window !== "undefined") {
  preloadImage(yanisPortrait);
  preloadImage(heroGatineauSkyline);
}

// Code-split all pages with React.lazy
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
const LivingAylmerPage = React.lazy(() => import("./pages/LivingAylmerPage"));
const LivingHullPage = React.lazy(() => import("./pages/LivingHullPage"));
const LivingPlateauPage = React.lazy(() => import("./pages/LivingPlateauPage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const ThankYouPage = React.lazy(() => import("./pages/ThankYouPage"));
const ThankYouValuationPage = React.lazy(() => import("./pages/ThankYouValuationPage"));
const TestimonialsPage = React.lazy(() => import("./pages/TestimonialsPage"));

const queryClient = new QueryClient();

const routeTree = React.createElement(
  Routes,
  null,
  <>
    <Route element={<SiteLayout />}>
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
    </Route>
    <Route path="*" element={<NotFound />} />
  </>,
);

const appRoutes = React.createElement(
  BrowserRouter,
  { future: { v7_startTransition: true, v7_relativeSplatPath: true } },
  routeTree,
);

const App = () =>
  React.createElement(
    TanStackQueryClientProvider,
    { client: queryClient },
    React.createElement(
      TooltipProvider,
      null,
      <>
        <Toaster />
        <Sonner />
        {appRoutes}
      </>,
    ),
  );

export default App;
