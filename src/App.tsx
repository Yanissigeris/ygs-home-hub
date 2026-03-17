import * as React from "react";
import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";

// Core pages
import Index from "./pages/Index";
import SellerPage from "./pages/SellerPage";
import ValuationPage from "./pages/ValuationPage";
import BuyerPage from "./pages/BuyerPage";
import PlexPage from "./pages/PlexPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Property pages
import PropertiesPage from "./pages/PropertiesPage";
import FeaturedPropertiesPage from "./pages/FeaturedPropertiesPage";
import NewListingsPage from "./pages/NewListingsPage";
import SoldRecentlyPage from "./pages/SoldRecentlyPage";

// Seller funnel
import SellerPlanPage from "./pages/SellerPlanPage";
import SellerGuidePage from "./pages/SellerGuidePage";
import WhenToSellPage from "./pages/WhenToSellPage";
import SellPlexPage from "./pages/SellPlexPage";

// Buyer funnel
import BuyerConsultationPage from "./pages/BuyerConsultationPage";
import BuyerGuidePage from "./pages/BuyerGuidePage";
import FirstTimeBuyerPage from "./pages/FirstTimeBuyerPage";
import BuyFromOttawaPage from "./pages/BuyFromOttawaPage";

// Relocation
import RelocationPage from "./pages/RelocationPage";
import MontrealRelocationPage from "./pages/MontrealRelocationPage";
import RelocationGuidePage from "./pages/RelocationGuidePage";
import NeighborhoodsOverviewPage from "./pages/NeighborhoodsOverviewPage";

// Military
import MilitaryPage from "./pages/MilitaryPage";
import MilitaryRelocationPage from "./pages/MilitaryRelocationPage";
import MilitaryBuyerPage from "./pages/MilitaryBuyerPage";
import MilitarySellerPage from "./pages/MilitarySellerPage";
import MilitaryGuidePage from "./pages/MilitaryGuidePage";

// Plex / Investment
import PlexAnalysisPage from "./pages/PlexAnalysisPage";
import MarketReportPage from "./pages/MarketReportPage";

// Neighborhood pages
import NeighborhoodPage from "./pages/NeighborhoodPage";
import HullPage from "./pages/HullPage";
import BuckinghamPage from "./pages/BuckinghamPage";
import GatineauCentrePage from "./pages/GatineauCentrePage";
import AylmerPage from "./pages/AylmerPage";
import PlateauPage from "./pages/PlateauPage";

// Lifestyle / Resources
import ResourcesPage from "./pages/ResourcesPage";
import LivingAylmerPage from "./pages/LivingAylmerPage";
import LivingHullPage from "./pages/LivingHullPage";
import LivingPlateauPage from "./pages/LivingPlateauPage";
import FAQPage from "./pages/FAQPage";
import ThankYouPage from "./pages/ThankYouPage";
import ThankYouValuationPage from "./pages/ThankYouValuationPage";
import TestimonialsPage from "./pages/TestimonialsPage";

const queryClient = new QueryClient();


const App = () => (
    <AppQueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/proprietes" element={<PropertiesPage />} />
              <Route path="/proprietes-vedettes" element={<FeaturedPropertiesPage />} />
              <Route path="/nouvelles-inscriptions" element={<NewListingsPage />} />
              <Route path="/vendu-recemment" element={<SoldRecentlyPage />} />
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
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppQueryClientProvider>
);

export default App;
