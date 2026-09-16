/**
 * Responsive sources for every hero background rendered through <HeroSection>.
 *
 * Why a map instead of editing 83 pages: each page keeps its plain
 * `import heroImg from "@/assets/x.webp"` and passes `heroBgImage={heroImg}`.
 * That import resolves to the same hashed URL as the plain import below, so
 * HeroSection looks the responsive variants up by URL at render time.
 *
 * vite-imagetools generates the variants at build time (768/1280/1920 px —
 * three widths, not more, to keep the Netlify build time in check: every
 * phone at DPR 2-3 lands on 768 or 1280 anyway).
 * AVIF quality 38 and WebP quality 68 are deliberate: every hero sits under a
 * 62-85 % petrol gradient overlay, so aggressive compression is invisible
 * (hero-aylmer-gen: 447 KB today -> ~55 KB AVIF at 1280 px). The original
 * 1920 px WebP stays as the <img src> fallback for browsers without <picture>.
 *
 * Adding a hero: import it three times below (plain URL + AVIF srcset + WebP
 * srcset) and add one map entry. Nothing else to change on the page. Pages
 * that pass the image through NeighborhoodTemplate (`hero: { image: heroImg }`)
 * are covered the same way. The homepage hero (hero-yanis-interior) is NOT in
 * the map on purpose: Index.tsx / IndexEn.tsx pass their own hand-tuned AVIF props.
 */

import GatineauRiverViewUrl from "@/assets/gatineau-river-view.webp";
import GatineauRiverViewAvif from "@/assets/gatineau-river-view.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import GatineauRiverViewWebp from "@/assets/gatineau-river-view.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroAcheterUrl from "@/assets/hero-acheter.webp";
import HeroAcheterAvif from "@/assets/hero-acheter.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroAcheterWebp from "@/assets/hero-acheter.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroAylmerGenUrl from "@/assets/hero-aylmer-gen.webp";
import HeroAylmerGenAvif from "@/assets/hero-aylmer-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroAylmerGenWebp from "@/assets/hero-aylmer-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroBuckinghamGenUrl from "@/assets/hero-buckingham-gen.webp";
import HeroBuckinghamGenAvif from "@/assets/hero-buckingham-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroBuckinghamGenWebp from "@/assets/hero-buckingham-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroBuyFromOttawaUrl from "@/assets/hero-buy-from-ottawa.webp";
import HeroBuyFromOttawaAvif from "@/assets/hero-buy-from-ottawa.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroBuyFromOttawaWebp from "@/assets/hero-buy-from-ottawa.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroBuyerConsultationUrl from "@/assets/hero-buyer-consultation.webp";
import HeroBuyerConsultationAvif from "@/assets/hero-buyer-consultation.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroBuyerConsultationWebp from "@/assets/hero-buyer-consultation.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroBuyerGuideUrl from "@/assets/hero-buyer-guide.webp";
import HeroBuyerGuideAvif from "@/assets/hero-buyer-guide.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroBuyerGuideWebp from "@/assets/hero-buyer-guide.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroCantleyGenUrl from "@/assets/hero-cantley-gen.webp";
import HeroCantleyGenAvif from "@/assets/hero-cantley-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroCantleyGenWebp from "@/assets/hero-cantley-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroChelseaGenUrl from "@/assets/hero-chelsea-gen.webp";
import HeroChelseaGenAvif from "@/assets/hero-chelsea-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroChelseaGenWebp from "@/assets/hero-chelsea-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroContactUrl from "@/assets/hero-contact.webp";
import HeroContactAvif from "@/assets/hero-contact.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroContactWebp from "@/assets/hero-contact.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroFaqUrl from "@/assets/hero-faq.webp";
import HeroFaqAvif from "@/assets/hero-faq.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroFaqWebp from "@/assets/hero-faq.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroFirstBuyerUrl from "@/assets/hero-first-buyer.webp";
import HeroFirstBuyerAvif from "@/assets/hero-first-buyer.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroFirstBuyerWebp from "@/assets/hero-first-buyer.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroGatineauCentreGenUrl from "@/assets/hero-gatineau-centre-gen.webp";
import HeroGatineauCentreGenAvif from "@/assets/hero-gatineau-centre-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroGatineauCentreGenWebp from "@/assets/hero-gatineau-centre-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroHullGenUrl from "@/assets/hero-hull-gen.webp";
import HeroHullGenAvif from "@/assets/hero-hull-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroHullGenWebp from "@/assets/hero-hull-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroLivingHullUrl from "@/assets/hero-living-hull.webp";
import HeroLivingHullAvif from "@/assets/hero-living-hull.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroLivingHullWebp from "@/assets/hero-living-hull.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroLivingPlateauUrl from "@/assets/hero-living-plateau.webp";
import HeroLivingPlateauAvif from "@/assets/hero-living-plateau.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroLivingPlateauWebp from "@/assets/hero-living-plateau.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMarketReportUrl from "@/assets/hero-market-report.webp";
import HeroMarketReportAvif from "@/assets/hero-market-report.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMarketReportWebp from "@/assets/hero-market-report.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMilitaryBuyerUrl from "@/assets/hero-military-buyer.webp";
import HeroMilitaryBuyerAvif from "@/assets/hero-military-buyer.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMilitaryBuyerWebp from "@/assets/hero-military-buyer.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMilitaryGuideUrl from "@/assets/hero-military-guide.webp";
import HeroMilitaryGuideAvif from "@/assets/hero-military-guide.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMilitaryGuideWebp from "@/assets/hero-military-guide.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMilitaryRelocationUrl from "@/assets/hero-military-relocation.webp";
import HeroMilitaryRelocationAvif from "@/assets/hero-military-relocation.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMilitaryRelocationWebp from "@/assets/hero-military-relocation.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMilitarySellerUrl from "@/assets/hero-military-seller.webp";
import HeroMilitarySellerAvif from "@/assets/hero-military-seller.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMilitarySellerWebp from "@/assets/hero-military-seller.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMilitaryUrl from "@/assets/hero-military.webp";
import HeroMilitaryAvif from "@/assets/hero-military.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMilitaryWebp from "@/assets/hero-military.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMontrealRelocationUrl from "@/assets/hero-montreal-relocation.webp";
import HeroMontrealRelocationAvif from "@/assets/hero-montreal-relocation.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMontrealRelocationWebp from "@/assets/hero-montreal-relocation.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroNeighborhoodsUrl from "@/assets/hero-neighborhoods.webp";
import HeroNeighborhoodsAvif from "@/assets/hero-neighborhoods.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroNeighborhoodsWebp from "@/assets/hero-neighborhoods.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroPlateauUrl from "@/assets/hero-plateau.webp";
import HeroPlateauAvif from "@/assets/hero-plateau.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroPlateauWebp from "@/assets/hero-plateau.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroPlexUrl from "@/assets/hero-plex.webp";
import HeroPlexAvif from "@/assets/hero-plex.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroPlexWebp from "@/assets/hero-plex.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroPontiacUrl from "@/assets/hero-pontiac.webp";
import HeroPontiacAvif from "@/assets/hero-pontiac.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroPontiacWebp from "@/assets/hero-pontiac.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroPropertiesUrl from "@/assets/hero-properties.webp";
import HeroPropertiesAvif from "@/assets/hero-properties.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroPropertiesWebp from "@/assets/hero-properties.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroRelocalisationUrl from "@/assets/hero-relocalisation.webp";
import HeroRelocalisationAvif from "@/assets/hero-relocalisation.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroRelocalisationWebp from "@/assets/hero-relocalisation.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroRelocationGuideUrl from "@/assets/hero-relocation-guide.webp";
import HeroRelocationGuideAvif from "@/assets/hero-relocation-guide.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroRelocationGuideWebp from "@/assets/hero-relocation-guide.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroResourcesUrl from "@/assets/hero-resources.webp";
import HeroResourcesAvif from "@/assets/hero-resources.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroResourcesWebp from "@/assets/hero-resources.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroSellPlexUrl from "@/assets/hero-sell-plex.webp";
import HeroSellPlexAvif from "@/assets/hero-sell-plex.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroSellPlexWebp from "@/assets/hero-sell-plex.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroSellerGuideUrl from "@/assets/hero-seller-guide.webp";
import HeroSellerGuideAvif from "@/assets/hero-seller-guide.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroSellerGuideWebp from "@/assets/hero-seller-guide.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroSellerUrl from "@/assets/hero-seller.webp";
import HeroSellerAvif from "@/assets/hero-seller.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroSellerWebp from "@/assets/hero-seller.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroTestimonialsUrl from "@/assets/hero-testimonials.webp";
import HeroTestimonialsAvif from "@/assets/hero-testimonials.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroTestimonialsWebp from "@/assets/hero-testimonials.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroVendreGatineauUrl from "@/assets/hero-vendre-gatineau.webp";
import HeroVendreGatineauAvif from "@/assets/hero-vendre-gatineau.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroVendreGatineauWebp from "@/assets/hero-vendre-gatineau.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HomeInteriorUrl from "@/assets/home-interior.webp";
import HomeInteriorAvif from "@/assets/home-interior.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HomeInteriorWebp from "@/assets/home-interior.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import PlateauAylmerLifestyleUrl from "@/assets/plateau-aylmer-lifestyle.webp";
import PlateauAylmerLifestyleAvif from "@/assets/plateau-aylmer-lifestyle.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import PlateauAylmerLifestyleWebp from "@/assets/plateau-aylmer-lifestyle.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";

import HeroCoteDazurUrl from "@/assets/hero-cote-dazur.webp";
import HeroCoteDazurAvif from "@/assets/hero-cote-dazur.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroCoteDazurWebp from "@/assets/hero-cote-dazur.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroLimbourUrl from "@/assets/hero-limbour.webp";
import HeroLimbourAvif from "@/assets/hero-limbour.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroLimbourWebp from "@/assets/hero-limbour.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroMassonAngersGenUrl from "@/assets/hero-masson-angers-gen.webp";
import HeroMassonAngersGenAvif from "@/assets/hero-masson-angers-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroMassonAngersGenWebp from "@/assets/hero-masson-angers-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroOutaouaisGenUrl from "@/assets/hero-outaouais-gen.webp";
import HeroOutaouaisGenAvif from "@/assets/hero-outaouais-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroOutaouaisGenWebp from "@/assets/hero-outaouais-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";
import HeroValDesMontsGenUrl from "@/assets/hero-val-des-monts-gen.webp";
import HeroValDesMontsGenAvif from "@/assets/hero-val-des-monts-gen.webp?w=768;1280;1920&format=avif&quality=38&as=srcset";
import HeroValDesMontsGenWebp from "@/assets/hero-val-des-monts-gen.webp?w=768;1280;1920&format=webp&quality=68&as=srcset";

export interface HeroPicture {
  /** srcset strings with width descriptors, e.g. "/assets/x-480.avif 480w, …" */
  avif: string;
  webp: string;
}

/** Keyed by the resolved URL of the plain import (what pages pass as heroBgImage). */
export const HERO_PICTURES: Record<string, HeroPicture> = {
  [GatineauRiverViewUrl]: { avif: GatineauRiverViewAvif, webp: GatineauRiverViewWebp },
  [HeroAcheterUrl]: { avif: HeroAcheterAvif, webp: HeroAcheterWebp },
  [HeroAylmerGenUrl]: { avif: HeroAylmerGenAvif, webp: HeroAylmerGenWebp },
  [HeroBuckinghamGenUrl]: { avif: HeroBuckinghamGenAvif, webp: HeroBuckinghamGenWebp },
  [HeroBuyFromOttawaUrl]: { avif: HeroBuyFromOttawaAvif, webp: HeroBuyFromOttawaWebp },
  [HeroBuyerConsultationUrl]: { avif: HeroBuyerConsultationAvif, webp: HeroBuyerConsultationWebp },
  [HeroBuyerGuideUrl]: { avif: HeroBuyerGuideAvif, webp: HeroBuyerGuideWebp },
  [HeroCantleyGenUrl]: { avif: HeroCantleyGenAvif, webp: HeroCantleyGenWebp },
  [HeroChelseaGenUrl]: { avif: HeroChelseaGenAvif, webp: HeroChelseaGenWebp },
  [HeroContactUrl]: { avif: HeroContactAvif, webp: HeroContactWebp },
  [HeroFaqUrl]: { avif: HeroFaqAvif, webp: HeroFaqWebp },
  [HeroFirstBuyerUrl]: { avif: HeroFirstBuyerAvif, webp: HeroFirstBuyerWebp },
  [HeroGatineauCentreGenUrl]: { avif: HeroGatineauCentreGenAvif, webp: HeroGatineauCentreGenWebp },
  [HeroHullGenUrl]: { avif: HeroHullGenAvif, webp: HeroHullGenWebp },
  [HeroLivingHullUrl]: { avif: HeroLivingHullAvif, webp: HeroLivingHullWebp },
  [HeroLivingPlateauUrl]: { avif: HeroLivingPlateauAvif, webp: HeroLivingPlateauWebp },
  [HeroMarketReportUrl]: { avif: HeroMarketReportAvif, webp: HeroMarketReportWebp },
  [HeroMilitaryBuyerUrl]: { avif: HeroMilitaryBuyerAvif, webp: HeroMilitaryBuyerWebp },
  [HeroMilitaryGuideUrl]: { avif: HeroMilitaryGuideAvif, webp: HeroMilitaryGuideWebp },
  [HeroMilitaryRelocationUrl]: { avif: HeroMilitaryRelocationAvif, webp: HeroMilitaryRelocationWebp },
  [HeroMilitarySellerUrl]: { avif: HeroMilitarySellerAvif, webp: HeroMilitarySellerWebp },
  [HeroMilitaryUrl]: { avif: HeroMilitaryAvif, webp: HeroMilitaryWebp },
  [HeroMontrealRelocationUrl]: { avif: HeroMontrealRelocationAvif, webp: HeroMontrealRelocationWebp },
  [HeroNeighborhoodsUrl]: { avif: HeroNeighborhoodsAvif, webp: HeroNeighborhoodsWebp },
  [HeroPlateauUrl]: { avif: HeroPlateauAvif, webp: HeroPlateauWebp },
  [HeroPlexUrl]: { avif: HeroPlexAvif, webp: HeroPlexWebp },
  [HeroPontiacUrl]: { avif: HeroPontiacAvif, webp: HeroPontiacWebp },
  [HeroPropertiesUrl]: { avif: HeroPropertiesAvif, webp: HeroPropertiesWebp },
  [HeroRelocalisationUrl]: { avif: HeroRelocalisationAvif, webp: HeroRelocalisationWebp },
  [HeroRelocationGuideUrl]: { avif: HeroRelocationGuideAvif, webp: HeroRelocationGuideWebp },
  [HeroResourcesUrl]: { avif: HeroResourcesAvif, webp: HeroResourcesWebp },
  [HeroSellPlexUrl]: { avif: HeroSellPlexAvif, webp: HeroSellPlexWebp },
  [HeroSellerGuideUrl]: { avif: HeroSellerGuideAvif, webp: HeroSellerGuideWebp },
  [HeroSellerUrl]: { avif: HeroSellerAvif, webp: HeroSellerWebp },
  [HeroTestimonialsUrl]: { avif: HeroTestimonialsAvif, webp: HeroTestimonialsWebp },
  [HeroVendreGatineauUrl]: { avif: HeroVendreGatineauAvif, webp: HeroVendreGatineauWebp },
  [HomeInteriorUrl]: { avif: HomeInteriorAvif, webp: HomeInteriorWebp },
  [PlateauAylmerLifestyleUrl]: { avif: PlateauAylmerLifestyleAvif, webp: PlateauAylmerLifestyleWebp },
  [HeroCoteDazurUrl]: { avif: HeroCoteDazurAvif, webp: HeroCoteDazurWebp },
  [HeroLimbourUrl]: { avif: HeroLimbourAvif, webp: HeroLimbourWebp },
  [HeroMassonAngersGenUrl]: { avif: HeroMassonAngersGenAvif, webp: HeroMassonAngersGenWebp },
  [HeroOutaouaisGenUrl]: { avif: HeroOutaouaisGenAvif, webp: HeroOutaouaisGenWebp },
  [HeroValDesMontsGenUrl]: { avif: HeroValDesMontsGenAvif, webp: HeroValDesMontsGenWebp },
};

export function getHeroPicture(src?: string): HeroPicture | undefined {
  return src ? HERO_PICTURES[src] : undefined;
}
