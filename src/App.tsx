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
            <Route path="/" element={<Index />} />
            <Route path="/vendre-ma-maison-gatineau" element={<SellerPage />} />
            <Route path="/evaluation-gratuite-gatineau" element={<ValuationPage />} />
            <Route path="/acheter-a-gatineau" element={<BuyerPage />} />
            <Route path="/investir-plex-gatineau" element={<PlexPage />} />
            <Route path="/plateau-aylmer" element={<NeighborhoodPage />} />
            <Route path="/contact-yanis" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
