import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { BrowserRouter, Navigate, Route, Routes, createRoutesFromElements, matchRoutes } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/SiteLayout";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageView } from "@/hooks/usePageView";
import { lazyWithPreload, registerPreloader, type Preloadable } from "@/lib/route-preload";

const PageViewTracker = () => {
  usePageView();
  return null;
};

// Hero portrait — only AVIF preload variants needed (WebP fallback is handled
// by <picture> in HeroSection without a preload, since AVIF covers 97% of UAs).
import yanisPortraitAvif from "@/assets/yanis-portrait-nobg.avif";
import yanisPortraitSmAvif from "@/assets/yanis-portrait-nobg-sm.avif";
import yanisPortraitMdAvif from "@/assets/yanis-portrait-nobg-md.avif";
import yanisPortraitLgAvif from "@/assets/yanis-portrait-nobg-lg.avif";

/**
 * Hero portrait preload strategy.
 *
 * Goal: emit EXACTLY one preload that the <picture> element will then reuse
 * from cache (zero double-download). The browser must end up with a single
 * network request whose URL == currentSrc.
 *
 * Approach: instead of computing the tier in JS (which races AVIF detection
 * and devicePixelRatio quirks), we let the browser pick the tier itself by
 * using `imageSrcSet` + `imageSizes` on the <link rel="preload">. This is the
 * SAME algorithm the browser runs for <picture>/<img srcset>, so the URL it
 * picks here is byte-identical to what HeroSection renders → guaranteed cache
 * hit, zero waste.
 *
 * AVIF: we issue an AVIF preload by default. On the rare browser without AVIF
 * support (Safari < 16, ~3% of traffic) the preload is wasted but tiny
 * (<10 KB) and the <picture> falls back to WebP correctly. We do NOT preload
 * WebP at all — issuing two preloads "just in case" would double-download on
 * the 97% AVIF-capable majority, which is the exact problem we're solving.
 *
 * Two media-gated preloads:
 *   - mobile (≤767px): srcset of sm/md/full AVIF with `x` descriptors
 *   - desktop (≥768px): single full AVIF (no responsive variants needed)
 */
const preloadHeroPortrait = () => {
  if (typeof document === "undefined") return;

  // Mobile preload — DPR-aware via 1x/2x/3x descriptors. Browser picks the
  // exact tier <picture media="(max-width: 767px)"> will render.
  const mobile = document.createElement("link");
  mobile.rel = "preload";
  mobile.as = "image";
  mobile.type = "image/avif";
  mobile.media = "(max-width: 767px)";
  mobile.fetchPriority = "high";
  // imagesrcset/imagesizes are the preload-specific equivalents of srcset/sizes.
  mobile.setAttribute(
    "imagesrcset",
    `${yanisPortraitSmAvif} 1x, ${yanisPortraitMdAvif} 2x, ${yanisPortraitAvif} 3x`,
  );
  // No imagesizes needed when using `x` descriptors (DPR-only selection).
  // href is required for spec compliance — used as fallback if imagesrcset
  // can't be parsed. Pick `sm` since it's the most common low-end fallback.
  mobile.href = yanisPortraitSmAvif;
  document.head.appendChild(mobile);

  // Desktop preload — single full AVIF. <picture media="(min-width: 768px)">
  // renders the same file.
  const desktop = document.createElement("link");
  desktop.rel = "preload";
  desktop.as = "image";
  desktop.type = "image/avif";
  desktop.media = "(min-width: 768px)";
  desktop.fetchPriority = "high";
  desktop.setAttribute("imagesrcset", `${yanisPortraitAvif} 1x, ${yanisPortraitLgAvif} 2x`);
  desktop.href = yanisPortraitAvif;
  document.head.appendChild(desktop);
};

// Gate to routes that actually render the portrait above the fold.
// Avoids "preloaded but not used" warnings + wasted bandwidth on the
// other ~140 routes (blog, neighborhoods, services, etc.).
//
// Source of truth: only the 4 pages that render <HeroSection agentImage=...>
//   FR: Index.tsx (/) and OutaouaisHubPage.tsx (/courtier-immobilier-outaouais)
//   EN: IndexEn.tsx (/en) and OutaouaisHubPageEn.tsx (/en/outaouais-real-estate-agent)
// Note: /outaouais and /en/outaouais are <Navigate> redirects — preloading
// there is wasted (the redirect target re-mounts and re-runs nothing here,
// but the portrait IS rendered after redirect, so we include them too to
// cover the brief window before the redirect resolves).
if (typeof window !== "undefined") {
  const p = window.location.pathname.replace(/\/+$/, "") || "/";
  const HERO_ROUTES = new Set([
    "/",
    "/en",
    "/courtier-immobilier-outaouais",
    "/en/outaouais-real-estate-agent",
    // Redirect sources — still preload so the portrait is warm post-redirect.
    "/outaouais",
    "/en/outaouais",
  ]);
  if (HERO_ROUTES.has(p)) preloadHeroPortrait();
}

// FR pages
// Pages chargées à la demande, préchargeables (voir lib/route-preload.ts).
const lazyPage = lazyWithPreload;

import Index from "./pages/Index";
const SellerPage = lazyPage(() => import("./pages/SellerPage"));
const ValuationPage = lazyPage(() => import("./pages/ValuationPage"));
const BuyerPage = lazyPage(() => import("./pages/BuyerPage"));
const PlexPage = lazyPage(() => import("./pages/PlexPage"));
const ContactPage = lazyPage(() => import("./pages/ContactPage"));
const NotFound = lazyPage(() => import("./pages/NotFound"));
const PropertiesPage = lazyPage(() => import("./pages/PropertiesPage"));
const SellerPlanPage = lazyPage(() => import("./pages/SellerPlanPage"));
const SellerGuidePage = lazyPage(() => import("./pages/SellerGuidePage"));
const WhenToSellPage = lazyPage(() => import("./pages/WhenToSellPage"));
const SellPlexPage = lazyPage(() => import("./pages/SellPlexPage"));
const BuyerConsultationPage = lazyPage(() => import("./pages/BuyerConsultationPage"));
const BuyerGuidePage = lazyPage(() => import("./pages/BuyerGuidePage"));
const FirstTimeBuyerPage = lazyPage(() => import("./pages/FirstTimeBuyerPage"));
const BuyFromOttawaPage = lazyPage(() => import("./pages/BuyFromOttawaPage"));
const RelocationPage = lazyPage(() => import("./pages/RelocationPage"));
const MontrealRelocationPage = lazyPage(() => import("./pages/MontrealRelocationPage"));
const RelocationGuidePage = lazyPage(() => import("./pages/RelocationGuidePage"));
const NeighborhoodsOverviewPage = lazyPage(() => import("./pages/NeighborhoodsOverviewPage"));
const MilitaryPage = lazyPage(() => import("./pages/MilitaryPage"));
const MilitaryRelocationPage = lazyPage(() => import("./pages/MilitaryRelocationPage"));
const MilitaryBuyerPage = lazyPage(() => import("./pages/MilitaryBuyerPage"));
const MilitarySellerPage = lazyPage(() => import("./pages/MilitarySellerPage"));
const MilitaryGuidePage = lazyPage(() => import("./pages/MilitaryGuidePage"));
const PlexAnalysisPage = lazyPage(() => import("./pages/PlexAnalysisPage"));
const MarketReportPage = lazyPage(() => import("./pages/MarketReportPage"));
const NeighborhoodPage = lazyPage(() => import("./pages/NeighborhoodPage"));
const HullPage = lazyPage(() => import("./pages/HullPage"));
const BuckinghamPage = lazyPage(() => import("./pages/BuckinghamPage"));
const GatineauCentrePage = lazyPage(() => import("./pages/GatineauCentrePage"));
const AylmerPage = lazyPage(() => import("./pages/AylmerPage"));
const PlateauPage = lazyPage(() => import("./pages/PlateauPage"));
const ChelseaPage = lazyPage(() => import("./pages/ChelseaPage"));
const CantleyPage = lazyPage(() => import("./pages/CantleyPage"));
const ValDesMontsPage = lazyPage(() => import("./pages/ValDesMontsPage"));
const MassonAngersPage = lazyPage(() => import("./pages/MassonAngersPage"));
const PontiacPage = lazyPage(() => import("./pages/PontiacPage"));
const CoteDazurPage = lazyPage(() => import("./pages/CoteDazurPage"));
const LimbourPage = lazyPage(() => import("./pages/LimbourPage"));
const OutaouaisHubPage = lazyPage(() => import("./pages/OutaouaisHubPage"));
const SellHullPage = lazyPage(() => import("./pages/SellHullPage"));
const SellAylmerPage = lazyPage(() => import("./pages/SellAylmerPage"));
const ValuationHullPage = lazyPage(() => import("./pages/ValuationHullPage"));
const ValuationAylmerPage = lazyPage(() => import("./pages/ValuationAylmerPage"));
const CombienCouteCourtierPage = lazyPage(() => import("./pages/CombienCouteCourtierPage"));
const CommentChoisirCourtierPage = lazyPage(() => import("./pages/CommentChoisirCourtierPage"));
const VerifierCourtierOaciqPage = lazyPage(() => import("./pages/VerifierCourtierOaciqPage"));
const FraisCourtagePage = lazyPage(() => import("./pages/FraisCourtagePage"));
const CourtierOuVendreSoiMemePage = lazyPage(() => import("./pages/CourtierOuVendreSoiMemePage"));
const ResourcesPage = lazyPage(() => import("./pages/ResourcesPage"));
const BlogPage = lazyPage(() => import("./pages/BlogPage"));
const BlogArticlePage = lazyPage(() => import("./pages/BlogArticlePage"));
const LivingAylmerPage = lazyPage(() => import("./pages/LivingAylmerPage"));
const LivingHullPage = lazyPage(() => import("./pages/LivingHullPage"));
const LivingPlateauPage = lazyPage(() => import("./pages/LivingPlateauPage"));
const FAQPage = lazyPage(() => import("./pages/FAQPage"));
const ThankYouPage = lazyPage(() => import("./pages/ThankYouPage"));
const ThankYouValuationPage = lazyPage(() => import("./pages/ThankYouValuationPage"));
const TestimonialsPage = lazyPage(() => import("./pages/TestimonialsPage"));
const PrivacyPolicyPage = lazyPage(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazyPage(() => import("./pages/TermsPage"));
const PhotoCreditsPage = lazyPage(() => import("./pages/PhotoCreditsPage"));
const PhotoCreditsPageEn = lazyPage(() => import("./pages/en/PhotoCreditsPageEn"));

// EN pages
const IndexEn = lazyPage(() => import("./pages/en/IndexEn"));
const SellerPageEn = lazyPage(() => import("./pages/en/SellerPageEn"));
const BuyerPageEn = lazyPage(() => import("./pages/en/BuyerPageEn"));
const RelocationPageEn = lazyPage(() => import("./pages/en/RelocationPageEn"));
const MilitaryPageEn = lazyPage(() => import("./pages/en/MilitaryPageEn"));
const PlexPageEn = lazyPage(() => import("./pages/en/PlexPageEn"));
const PropertiesPageEn = lazyPage(() => import("./pages/en/PropertiesPageEn"));
const ContactPageEn = lazyPage(() => import("./pages/en/ContactPageEn"));
const FAQPageEn = lazyPage(() => import("./pages/en/FAQPageEn"));
const TestimonialsPageEn = lazyPage(() => import("./pages/en/TestimonialsPageEn"));
const ResourcesPageEn = lazyPage(() => import("./pages/en/ResourcesPageEn"));
const BlogPageEn = lazyPage(() => import("./pages/en/BlogPageEn"));
const NeighborhoodsPageEn = lazyPage(() => import("./pages/en/NeighborhoodsPageEn"));
const ValuationPageEn = lazyPage(() => import("./pages/en/ValuationPageEn"));
const ThankYouPageEn = lazyPage(() => import("./pages/en/ThankYouPageEn"));
const ThankYouValuationPageEn = lazyPage(() => import("./pages/en/ThankYouValuationPageEn"));
const BuyerGuidePageEn = lazyPage(() => import("./pages/en/BuyerGuidePageEn"));
const SellerGuidePageEn = lazyPage(() => import("./pages/en/SellerGuidePageEn"));
const MilitaryBuyerPageEn = lazyPage(() => import("./pages/en/MilitaryBuyerPageEn"));
const MilitarySellerPageEn = lazyPage(() => import("./pages/en/MilitarySellerPageEn"));
const MilitaryGuidePageEn = lazyPage(() => import("./pages/en/MilitaryGuidePageEn"));
const RelocationGuidePageEn = lazyPage(() => import("./pages/en/RelocationGuidePageEn"));
const FirstTimeBuyerPageEn = lazyPage(() => import("./pages/en/FirstTimeBuyerPageEn"));
const BuyFromOttawaPageEn = lazyPage(() => import("./pages/en/BuyFromOttawaPageEn"));
const BuyerConsultationPageEn = lazyPage(() => import("./pages/en/BuyerConsultationPageEn"));
const PlexAnalysisPageEn = lazyPage(() => import("./pages/en/PlexAnalysisPageEn"));
const PlateauAylmerPageEn = lazyPage(() => import("./pages/en/PlateauAylmerPageEn"));
const HullPageEn = lazyPage(() => import("./pages/en/HullPageEn"));
const BuckinghamPageEn = lazyPage(() => import("./pages/en/BuckinghamPageEn"));
const WhenToSellPageEn = lazyPage(() => import("./pages/en/WhenToSellPageEn"));
const SellerPlanPageEn = lazyPage(() => import("./pages/en/SellerPlanPageEn"));
const SellPlexPageEn = lazyPage(() => import("./pages/en/SellPlexPageEn"));
const MontrealRelocationPageEn = lazyPage(() => import("./pages/en/MontrealRelocationPageEn"));
const MarketReportPageEn = lazyPage(() => import("./pages/en/MarketReportPageEn"));
const LivingAylmerPageEn = lazyPage(() => import("./pages/en/LivingAylmerPageEn"));
const LivingHullPageEn = lazyPage(() => import("./pages/en/LivingHullPageEn"));
const LivingPlateauPageEn = lazyPage(() => import("./pages/en/LivingPlateauPageEn"));
const GatineauCentrePageEn = lazyPage(() => import("./pages/en/GatineauCentrePageEn"));
const AylmerPageEn = lazyPage(() => import("./pages/en/AylmerPageEn"));
const PlateauPageEn = lazyPage(() => import("./pages/en/PlateauPageEn"));
const MilitaryRelocationPageEn = lazyPage(() => import("./pages/en/MilitaryRelocationPageEn"));
const ChelseaPageEn = lazyPage(() => import("./pages/en/ChelseaPageEn"));
const CantleyPageEn = lazyPage(() => import("./pages/en/CantleyPageEn"));
const ValDesMontsPageEn = lazyPage(() => import("./pages/en/ValDesMontsPageEn"));
const MassonAngersPageEn = lazyPage(() => import("./pages/en/MassonAngersPageEn"));
const PontiacPageEn = lazyPage(() => import("./pages/en/PontiacPageEn"));
const CoteDazurPageEn = lazyPage(() => import("./pages/en/CoteDazurPageEn"));
const LimbourPageEn = lazyPage(() => import("./pages/en/LimbourPageEn"));
const OutaouaisHubPageEn = lazyPage(() => import("./pages/en/OutaouaisHubPageEn"));
const SellHullPageEn = lazyPage(() => import("./pages/en/SellHullPageEn"));
const SellAylmerPageEn = lazyPage(() => import("./pages/en/SellAylmerPageEn"));
const ValuationHullPageEn = lazyPage(() => import("./pages/en/ValuationHullPageEn"));
const ValuationAylmerPageEn = lazyPage(() => import("./pages/en/ValuationAylmerPageEn"));
const HowMuchRealtorCostPageEn = lazyPage(() => import("./pages/en/HowMuchRealtorCostPageEn"));
const RealtorCommissionPageEn = lazyPage(() => import("./pages/en/RealtorCommissionPageEn"));
const HowToChooseRealtorPageEn = lazyPage(() => import("./pages/en/HowToChooseRealtorPageEn"));
const OaciqFindBrokerPageEn = lazyPage(() => import("./pages/en/OaciqFindBrokerPageEn"));
const RealtorVsSellingByOwnerPageEn = lazyPage(() => import("./pages/en/RealtorVsSellingByOwnerPageEn"));
const PrivacyPolicyPageEn = lazyPage(() => import("./pages/en/PrivacyPolicyPageEn"));
const TermsPageEn = lazyPage(() => import("./pages/en/TermsPageEn"));


const routeTree = React.createElement(
  Routes,
  null,
  <>
    <Route element={<SiteLayout />}>
      {/* FR routes */}
      <Route path="/" element={<Index />} />
      <Route path="/proprietes" element={<PropertiesPage />} />
      <Route path="/proprietes-vedettes" element={<Navigate to="/proprietes/" replace />} />
      <Route path="/nouvelles-inscriptions" element={<Navigate to="/proprietes/" replace />} />
      <Route path="/nouvelles-inscriptions-gatineau" element={<Navigate to="/proprietes/" replace />} />
      <Route path="/vendu-recemment" element={<Navigate to="/proprietes/" replace />} />
      <Route path="/vendues-recemment-gatineau" element={<Navigate to="/proprietes/" replace />} />
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
      <Route path="/chelsea" element={<ChelseaPage />} />
      <Route path="/cantley" element={<CantleyPage />} />
      <Route path="/val-des-monts" element={<ValDesMontsPage />} />
      <Route path="/masson-angers" element={<MassonAngersPage />} />
      <Route path="/pontiac" element={<PontiacPage />} />
      <Route path="/cote-dazur-gatineau" element={<CoteDazurPage />} />
      <Route path="/limbour" element={<LimbourPage />} />
      <Route path="/ressources" element={<ResourcesPage />} />
      <Route path="/blogue" element={<BlogPage />} />
      <Route path="/blogue/:slug" element={<BlogArticlePage />} />
      <Route path="/vivre-a-aylmer" element={<LivingAylmerPage />} />
      <Route path="/vivre-a-hull" element={<LivingHullPage />} />
      <Route path="/vivre-dans-le-plateau" element={<LivingPlateauPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/temoignages" element={<TestimonialsPage />} />
      <Route path="/merci" element={<ThankYouPage />} />
      <Route path="/merci-evaluation" element={<ThankYouValuationPage />} />
      <Route path="/contact-yanis" element={<ContactPage />} />
      <Route path="/courtier-immobilier-outaouais" element={<OutaouaisHubPage />} />
      <Route path="/outaouais" element={<Navigate to="/courtier-immobilier-outaouais/" replace />} />
      <Route path="/vendre-maison-hull" element={<SellHullPage />} />
      <Route path="/vendre-maison-aylmer" element={<SellAylmerPage />} />
      <Route path="/evaluation-maison-hull" element={<ValuationHullPage />} />
      <Route path="/evaluation-maison-aylmer" element={<ValuationAylmerPage />} />
      <Route path="/combien-coute-un-courtier-immobilier-au-quebec" element={<CombienCouteCourtierPage />} />
      <Route path="/comment-choisir-un-courtier-immobilier" element={<CommentChoisirCourtierPage />} />
      <Route path="/verifier-un-courtier-immobilier-oaciq" element={<VerifierCourtierOaciqPage />} />
      <Route path="/frais-de-courtage-immobilier-quebec" element={<FraisCourtagePage />} />
      <Route path="/courtier-immobilier-ou-vendre-soi-meme" element={<CourtierOuVendreSoiMemePage />} />
      <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
      <Route path="/conditions-utilisation" element={<TermsPage />} />
      <Route path="/credits-photos" element={<PhotoCreditsPage />} />

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
      <Route path="/en/blog" element={<BlogPageEn />} />
      <Route path="/en/blog/:slug" element={<BlogArticlePage />} />
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
      <Route path="/en/chelsea" element={<ChelseaPageEn />} />
      <Route path="/en/cantley" element={<CantleyPageEn />} />
      <Route path="/en/val-des-monts" element={<ValDesMontsPageEn />} />
      <Route path="/en/masson-angers" element={<MassonAngersPageEn />} />
      <Route path="/en/pontiac" element={<PontiacPageEn />} />
      <Route path="/en/cote-dazur" element={<CoteDazurPageEn />} />
      <Route path="/en/limbour" element={<LimbourPageEn />} />
      <Route path="/en/outaouais-real-estate-agent" element={<OutaouaisHubPageEn />} />
      <Route path="/en/outaouais" element={<Navigate to="/en/outaouais-real-estate-agent/" replace />} />
      <Route path="/en/sell-house-hull" element={<SellHullPageEn />} />
      <Route path="/en/sell-house-aylmer" element={<SellAylmerPageEn />} />
      <Route path="/en/home-valuation-hull" element={<ValuationHullPageEn />} />
      <Route path="/en/home-valuation-aylmer" element={<ValuationAylmerPageEn />} />
      <Route path="/en/military-relocation" element={<MilitaryRelocationPageEn />} />
      <Route path="/en/how-much-does-a-realtor-cost-in-quebec" element={<HowMuchRealtorCostPageEn />} />
      <Route path="/en/realtor-commission-quebec" element={<RealtorCommissionPageEn />} />
      <Route path="/en/how-to-choose-a-realtor" element={<HowToChooseRealtorPageEn />} />
      <Route path="/en/oaciq-find-a-broker" element={<OaciqFindBrokerPageEn />} />
      <Route path="/en/realtor-vs-selling-by-owner-quebec" element={<RealtorVsSellingByOwnerPageEn />} />
      <Route path="/en/privacy-policy" element={<PrivacyPolicyPageEn />} />
      <Route path="/en/terms" element={<TermsPageEn />} />
      <Route path="/en/photo-credits" element={<PhotoCreditsPageEn />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>,
);

const appRoutes = React.createElement(
  BrowserRouter,
  { future: { v7_startTransition: true, v7_relativeSplatPath: true } },
  React.createElement(
    LanguageProvider,
    null,
    React.createElement(ScrollToTop),
    React.createElement(PageViewTracker),
    routeTree,
  ),
);

/** Précharge le code de la page demandée (main.tsx l'appelle avant le premier rendu,
 *  via lib/route-preload.ts, pour que ce fichier n'exporte qu'un composant). */
function preloadCurrentRoute(pathname: string): Promise<unknown> {
  const fragment = (routeTree as React.ReactElement<{ children: React.ReactNode }>).props.children;
  const matches = matchRoutes(createRoutesFromElements(fragment), pathname) ?? [];
  const jobs = matches
    .map((m) => (m.route.element as React.ReactElement | undefined)?.type as Partial<Preloadable> | undefined)
    .filter((t): t is Preloadable => typeof t?.preload === "function")
    .map((t) => t.preload());
  return Promise.all(jobs);
}
registerPreloader(preloadCurrentRoute);

// Form error messages (useFormSubmit calls toast()). The toast UI is loaded only
// when a message actually needs to be shown, so it costs nothing on normal visits.
const LazyToaster = React.lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })),
);

const ToastGate = () => {
  const { toasts } = useToast();
  if (toasts.length === 0) return null;
  return (
    <React.Suspense fallback={null}>
      <LazyToaster />
    </React.Suspense>
  );
};

const App = () => (
  <>
    {appRoutes}
    <ToastGate />
  </>
);

export default App;
