import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import Index from "./pages/Index";
import SellerPage from "./pages/SellerPage";
import ValuationPage from "./pages/ValuationPage";
import BuyerPage from "./pages/BuyerPage";
import PlexPage from "./pages/PlexPage";
import NeighborhoodPage from "./pages/NeighborhoodPage";
import HullPage from "./pages/HullPage";
import BuckinghamPage from "./pages/BuckinghamPage";
import RelocationPage from "./pages/RelocationPage";
import PlexAnalysisPage from "./pages/PlexAnalysisPage";
import SellerPlanPage from "./pages/SellerPlanPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            {/* Core funnel pages */}
            <Route path="/" element={<Index />} />
            <Route path="/vendre-ma-maison-gatineau" element={<SellerPage />} />
            <Route path="/evaluation-gratuite-gatineau" element={<ValuationPage />} />
            <Route path="/acheter-a-gatineau" element={<BuyerPage />} />
            <Route path="/investir-plex-gatineau" element={<PlexPage />} />
            {/* Conversion landing pages */}
            <Route path="/analyse-plex-gatineau" element={<PlexAnalysisPage />} />
            <Route path="/plan-vendeur-gatineau" element={<SellerPlanPage />} />
            {/* Local / neighborhood pages */}
            <Route path="/plateau-aylmer" element={<NeighborhoodPage />} />
            <Route path="/hull" element={<HullPage />} />
            <Route path="/buckingham-masson-angers" element={<BuckinghamPage />} />
            {/* Guide pages */}
            <Route path="/relocalisation-ottawa-gatineau" element={<RelocationPage />} />
            {/* About / Contact */}
            <Route path="/contact-yanis" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
