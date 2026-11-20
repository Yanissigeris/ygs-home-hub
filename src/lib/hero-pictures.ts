/**
 * Responsive sources for every hero background rendered through <HeroSection>.
 *
 * Why a map instead of editing 83 pages: each page keeps its plain
 * `import heroImg from "@/assets/x.webp"` and passes `heroBgImage={heroImg}`.
 * That import resolves to the same hashed URL as the plain import below, so
 * HeroSection looks the responsive variants up by URL at render time.
 *
 * vite-imagetools generates the variants at build time (768/1280/1920/2560 px;
 * it never enlarges past the source, so every source is at least 2400 px wide).
 * Since Lot 2 (Nov 2026) the photo shows in true colours with the navy shade only
 * behind the text, so compression is visible: AVIF 60 / WebP 82 for the
 * generated images (real photos keep 75 / 90). Every entry uses SHARP_SIZES so
 * phones in portrait, where object-cover draws the photo about 1.8x the screen
 * height wide, pick a file wide enough to stay sharp.
 * The 1376 px generated images were enlarged 2x with Real-ESRGAN (Nov 2026).
 * The original WebP stays as the <img src> fallback for browsers without <picture>.
 *
 * Adding a hero: import it three times below (plain URL + AVIF srcset + WebP
 * srcset) and add one map entry. Nothing else to change on the page. Pages
 * that pass the image through NeighborhoodTemplate (`hero: { image: heroImg }`)
 * are covered the same way. The homepage hero (hero-yanis-interior) is NOT in
 * the map on purpose: Index.tsx / IndexEn.tsx pass their own hand-tuned AVIF props.
 */

import GatineauRiverViewUrl from "@/assets/gatineau-river-view.webp";
import GatineauRiverViewAvif from "@/assets/gatineau-river-view.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import GatineauRiverViewMobile from "@/assets/gatineau-river-view.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import GatineauRiverViewWebp from "@/assets/gatineau-river-view.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HeroAcheterUrl from "@/assets/hero-acheter.webp";
import HeroAcheterAvif from "@/assets/hero-acheter.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroAcheterMobile from "@/assets/hero-acheter.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroAcheterWebp from "@/assets/hero-acheter.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroAylmerGenUrl from "@/assets/hero-aylmer-photo.webp";
import HeroAylmerGenAvif from "@/assets/hero-aylmer-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroAylmerGenMobile from "@/assets/hero-aylmer-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroAylmerGenWebp from "@/assets/hero-aylmer-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroBuckinghamGenUrl from "@/assets/hero-buckingham-photo.webp";
import HeroBuckinghamGenAvif from "@/assets/hero-buckingham-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroBuckinghamGenMobile from "@/assets/hero-buckingham-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroBuckinghamGenWebp from "@/assets/hero-buckingham-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroBuyFromOttawaUrl from "@/assets/hero-buy-from-ottawa.webp";
import HeroBuyFromOttawaAvif from "@/assets/hero-buy-from-ottawa.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroBuyFromOttawaMobile from "@/assets/hero-buy-from-ottawa.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroBuyFromOttawaWebp from "@/assets/hero-buy-from-ottawa.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroBuyerConsultationUrl from "@/assets/hero-buyer-consultation.webp";
import HeroBuyerConsultationAvif from "@/assets/hero-buyer-consultation.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroBuyerConsultationMobile from "@/assets/hero-buyer-consultation.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroBuyerConsultationWebp from "@/assets/hero-buyer-consultation.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroBuyerGuideUrl from "@/assets/hero-buyer-guide.webp";
import HeroBuyerGuideAvif from "@/assets/hero-buyer-guide.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroBuyerGuideMobile from "@/assets/hero-buyer-guide.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroBuyerGuideWebp from "@/assets/hero-buyer-guide.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroCantleyGenUrl from "@/assets/hero-cantley-photo.webp";
import HeroCantleyGenAvif from "@/assets/hero-cantley-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroCantleyGenMobile from "@/assets/hero-cantley-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroCantleyGenWebp from "@/assets/hero-cantley-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroChelseaGenUrl from "@/assets/hero-chelsea-photo.webp";
import HeroChelseaGenAvif from "@/assets/hero-chelsea-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroChelseaGenMobile from "@/assets/hero-chelsea-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroChelseaGenWebp from "@/assets/hero-chelsea-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroContactUrl from "@/assets/hero-contact.webp";
import HeroContactAvif from "@/assets/hero-contact.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroContactMobile from "@/assets/hero-contact.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroContactWebp from "@/assets/hero-contact.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroFaqUrl from "@/assets/hero-faq.webp";
import HeroFaqAvif from "@/assets/hero-faq.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroFaqMobile from "@/assets/hero-faq.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroFaqWebp from "@/assets/hero-faq.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroFirstBuyerUrl from "@/assets/hero-first-buyer.webp";
import HeroFirstBuyerAvif from "@/assets/hero-first-buyer.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroFirstBuyerMobile from "@/assets/hero-first-buyer.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroFirstBuyerWebp from "@/assets/hero-first-buyer.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroGatineauCentreGenUrl from "@/assets/hero-gatineau-centre-gen.webp";
import HeroGatineauCentreGenAvif from "@/assets/hero-gatineau-centre-gen.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroGatineauCentreGenMobile from "@/assets/hero-gatineau-centre-gen.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroGatineauCentreGenWebp from "@/assets/hero-gatineau-centre-gen.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroHullGenUrl from "@/assets/hero-hull-photo.webp";
import HeroHullGenAvif from "@/assets/hero-hull-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroHullGenMobile from "@/assets/hero-hull-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroHullGenWebp from "@/assets/hero-hull-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroLivingHullUrl from "@/assets/hero-living-hull.webp";
import HeroLivingHullAvif from "@/assets/hero-living-hull.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroLivingHullMobile from "@/assets/hero-living-hull.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroLivingHullWebp from "@/assets/hero-living-hull.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroLivingPlateauUrl from "@/assets/hero-living-plateau.webp";
import HeroLivingPlateauAvif from "@/assets/hero-living-plateau.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HeroLivingPlateauMobile from "@/assets/hero-living-plateau.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroLivingPlateauWebp from "@/assets/hero-living-plateau.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HeroMarketReportUrl from "@/assets/hero-market-report.webp";
import HeroMarketReportAvif from "@/assets/hero-market-report.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMarketReportMobile from "@/assets/hero-market-report.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMarketReportWebp from "@/assets/hero-market-report.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMilitaryBuyerUrl from "@/assets/hero-military-buyer.webp";
import HeroMilitaryBuyerAvif from "@/assets/hero-military-buyer.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMilitaryBuyerMobile from "@/assets/hero-military-buyer.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMilitaryBuyerWebp from "@/assets/hero-military-buyer.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMilitaryGuideUrl from "@/assets/hero-military-guide.webp";
import HeroMilitaryGuideAvif from "@/assets/hero-military-guide.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMilitaryGuideMobile from "@/assets/hero-military-guide.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMilitaryGuideWebp from "@/assets/hero-military-guide.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMilitaryRelocationUrl from "@/assets/hero-military-relocation.webp";
import HeroMilitaryRelocationAvif from "@/assets/hero-military-relocation.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMilitaryRelocationMobile from "@/assets/hero-military-relocation.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMilitaryRelocationWebp from "@/assets/hero-military-relocation.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMilitarySellerUrl from "@/assets/hero-military-seller.webp";
import HeroMilitarySellerAvif from "@/assets/hero-military-seller.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMilitarySellerMobile from "@/assets/hero-military-seller.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMilitarySellerWebp from "@/assets/hero-military-seller.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMilitaryUrl from "@/assets/hero-military.webp";
import HeroMilitaryAvif from "@/assets/hero-military.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMilitaryMobile from "@/assets/hero-military.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMilitaryWebp from "@/assets/hero-military.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroMontrealRelocationUrl from "@/assets/hero-montreal-relocation.webp";
import HeroMontrealRelocationAvif from "@/assets/hero-montreal-relocation.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroMontrealRelocationMobile from "@/assets/hero-montreal-relocation.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMontrealRelocationWebp from "@/assets/hero-montreal-relocation.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroNeighborhoodsUrl from "@/assets/hero-neighborhoods.webp";
import HeroNeighborhoodsAvif from "@/assets/hero-neighborhoods.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroNeighborhoodsMobile from "@/assets/hero-neighborhoods.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroNeighborhoodsWebp from "@/assets/hero-neighborhoods.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroPlateauUrl from "@/assets/hero-plateau.webp";
import HeroPlateauAvif from "@/assets/hero-plateau.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HeroPlateauMobile from "@/assets/hero-plateau.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroPlateauWebp from "@/assets/hero-plateau.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HeroPlexUrl from "@/assets/hero-plex.webp";
import HeroPlexAvif from "@/assets/hero-plex.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroPlexMobile from "@/assets/hero-plex.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroPlexWebp from "@/assets/hero-plex.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroPontiacUrl from "@/assets/hero-pontiac.webp";
import HeroPontiacAvif from "@/assets/hero-pontiac.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroPontiacMobile from "@/assets/hero-pontiac.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroPontiacWebp from "@/assets/hero-pontiac.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroPropertiesUrl from "@/assets/hero-properties.webp";
import HeroPropertiesAvif from "@/assets/hero-properties.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroPropertiesMobile from "@/assets/hero-properties.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroPropertiesWebp from "@/assets/hero-properties.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroRelocalisationUrl from "@/assets/hero-relocalisation.webp";
import HeroRelocalisationAvif from "@/assets/hero-relocalisation.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroRelocalisationMobile from "@/assets/hero-relocalisation.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroRelocalisationWebp from "@/assets/hero-relocalisation.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroRelocationGuideUrl from "@/assets/hero-relocation-guide.webp";
import HeroRelocationGuideAvif from "@/assets/hero-relocation-guide.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroRelocationGuideMobile from "@/assets/hero-relocation-guide.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroRelocationGuideWebp from "@/assets/hero-relocation-guide.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroResourcesUrl from "@/assets/hero-resources.webp";
import HeroResourcesAvif from "@/assets/hero-resources.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroResourcesMobile from "@/assets/hero-resources.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroResourcesWebp from "@/assets/hero-resources.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroSellPlexUrl from "@/assets/hero-sell-plex.webp";
import HeroSellPlexAvif from "@/assets/hero-sell-plex.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroSellPlexMobile from "@/assets/hero-sell-plex.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroSellPlexWebp from "@/assets/hero-sell-plex.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroSellerGuideUrl from "@/assets/hero-seller-guide.webp";
import HeroSellerGuideAvif from "@/assets/hero-seller-guide.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroSellerGuideMobile from "@/assets/hero-seller-guide.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroSellerGuideWebp from "@/assets/hero-seller-guide.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroSellerUrl from "@/assets/hero-seller.webp";
import HeroSellerAvif from "@/assets/hero-seller.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroSellerMobile from "@/assets/hero-seller.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroSellerWebp from "@/assets/hero-seller.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroTestimonialsUrl from "@/assets/hero-testimonials.webp";
import HeroTestimonialsAvif from "@/assets/hero-testimonials.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroTestimonialsMobile from "@/assets/hero-testimonials.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroTestimonialsWebp from "@/assets/hero-testimonials.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroVendreGatineauUrl from "@/assets/hero-vendre-gatineau.webp";
import HeroVendreGatineauAvif from "@/assets/hero-vendre-gatineau.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HeroVendreGatineauMobile from "@/assets/hero-vendre-gatineau.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroVendreGatineauWebp from "@/assets/hero-vendre-gatineau.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HomeInteriorUrl from "@/assets/home-interior.webp";
import HomeInteriorAvif from "@/assets/home-interior.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HomeInteriorMobile from "@/assets/home-interior.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HomeInteriorWebp from "@/assets/home-interior.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import PlateauAylmerLifestyleUrl from "@/assets/plateau-aylmer-lifestyle.webp";
import PlateauAylmerLifestyleAvif from "@/assets/plateau-aylmer-lifestyle.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import PlateauAylmerLifestyleMobile from "@/assets/plateau-aylmer-lifestyle.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import PlateauAylmerLifestyleWebp from "@/assets/plateau-aylmer-lifestyle.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";

import HeroCoteDazurUrl from "@/assets/hero-cote-dazur.webp";
import HeroCoteDazurAvif from "@/assets/hero-cote-dazur.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroCoteDazurMobile from "@/assets/hero-cote-dazur.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroCoteDazurWebp from "@/assets/hero-cote-dazur.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroLimbourUrl from "@/assets/hero-limbour.webp";
import HeroLimbourAvif from "@/assets/hero-limbour.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HeroLimbourMobile from "@/assets/hero-limbour.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroLimbourWebp from "@/assets/hero-limbour.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HeroMassonAngersGenUrl from "@/assets/hero-masson-angers-gen.webp";
import HeroMassonAngersGenAvif from "@/assets/hero-masson-angers-gen.webp?w=768;1280;1920;2560&format=avif&quality=60&as=srcset";
import HeroMassonAngersGenMobile from "@/assets/hero-masson-angers-gen.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroMassonAngersGenWebp from "@/assets/hero-masson-angers-gen.webp?w=768;1280;1920;2560&format=webp&quality=82&as=srcset";
import HeroOutaouaisGenUrl from "@/assets/hero-outaouais-photo.webp";
import HeroOutaouaisGenAvif from "@/assets/hero-outaouais-photo.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroOutaouaisGenMobile from "@/assets/hero-outaouais-photo.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroOutaouaisGenWebp from "@/assets/hero-outaouais-photo.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";
import HeroValDesMontsGenUrl from "@/assets/hero-val-des-monts-gen.webp";
import HeroValDesMontsGenAvif from "@/assets/hero-val-des-monts-gen.webp?w=768;1280;1920;2560&format=avif&quality=75&as=srcset";
import HeroValDesMontsGenMobile from "@/assets/hero-val-des-monts-gen.webp?w=1280;1920&format=avif&quality=62&as=srcset";
import HeroValDesMontsGenWebp from "@/assets/hero-val-des-monts-gen.webp?w=768;1280;1920;2560&format=webp&quality=90&as=srcset";

export interface HeroPicture {
  /** Lighter AVIF (1280/1920, q62) for phones only. Phones show a crop of the photo,
   *  so the 2560 px desktop file wastes bytes there (Lighthouse, Nov 20 2026). */
  mobileAvif?: string;
  /** Optional `sizes` override. Real photos use a portrait-aware value so phones
   *  (where object-cover scales the photo to the hero height) get a sharp file. */
  sizes?: string;
  /** Lighter navy shade behind the text, for real photos Yanis supplied. */
  lightVeil?: boolean;
  /** CSS object-position for the photo (cropping happens on screen only). */
  position?: string;
  /** srcset strings with width descriptors, e.g. "/assets/x-480.avif 480w, …" */
  avif: string;
  webp: string;
}

/** Keyed by the resolved URL of the plain import (what pages pass as heroBgImage). */
/** Phones in portrait: the hero is taller than wide, so the photo is drawn about
 *  1.8× the viewport height wide. */
const SHARP_SIZES = "(orientation: portrait) 180vh, 100vw";

export const HERO_PICTURES: Record<string, HeroPicture> = {
  [GatineauRiverViewUrl]: { avif: GatineauRiverViewAvif, mobileAvif: GatineauRiverViewMobile, webp: GatineauRiverViewWebp, sizes: SHARP_SIZES },
  [HeroAcheterUrl]: { avif: HeroAcheterAvif, mobileAvif: HeroAcheterMobile, webp: HeroAcheterWebp, sizes: SHARP_SIZES },
  [HeroAylmerGenUrl]: { avif: HeroAylmerGenAvif, mobileAvif: HeroAylmerGenMobile, webp: HeroAylmerGenWebp, sizes: SHARP_SIZES },
  [HeroBuckinghamGenUrl]: { avif: HeroBuckinghamGenAvif, mobileAvif: HeroBuckinghamGenMobile, webp: HeroBuckinghamGenWebp, sizes: SHARP_SIZES },
  [HeroBuyFromOttawaUrl]: { avif: HeroBuyFromOttawaAvif, mobileAvif: HeroBuyFromOttawaMobile, webp: HeroBuyFromOttawaWebp, sizes: SHARP_SIZES, lightVeil: true },
  [HeroBuyerConsultationUrl]: { avif: HeroBuyerConsultationAvif, mobileAvif: HeroBuyerConsultationMobile, webp: HeroBuyerConsultationWebp, sizes: SHARP_SIZES },
  [HeroBuyerGuideUrl]: { avif: HeroBuyerGuideAvif, mobileAvif: HeroBuyerGuideMobile, webp: HeroBuyerGuideWebp, sizes: SHARP_SIZES },
  [HeroCantleyGenUrl]: { avif: HeroCantleyGenAvif, mobileAvif: HeroCantleyGenMobile, webp: HeroCantleyGenWebp, sizes: SHARP_SIZES },
  [HeroChelseaGenUrl]: { avif: HeroChelseaGenAvif, mobileAvif: HeroChelseaGenMobile, webp: HeroChelseaGenWebp, sizes: SHARP_SIZES },
  [HeroContactUrl]: { avif: HeroContactAvif, mobileAvif: HeroContactMobile, webp: HeroContactWebp, sizes: SHARP_SIZES },
  [HeroFaqUrl]: { avif: HeroFaqAvif, mobileAvif: HeroFaqMobile, webp: HeroFaqWebp, sizes: SHARP_SIZES },
  [HeroFirstBuyerUrl]: { avif: HeroFirstBuyerAvif, mobileAvif: HeroFirstBuyerMobile, webp: HeroFirstBuyerWebp, sizes: SHARP_SIZES },
  [HeroGatineauCentreGenUrl]: { avif: HeroGatineauCentreGenAvif, mobileAvif: HeroGatineauCentreGenMobile, webp: HeroGatineauCentreGenWebp, sizes: SHARP_SIZES },
  [HeroHullGenUrl]: { avif: HeroHullGenAvif, mobileAvif: HeroHullGenMobile, webp: HeroHullGenWebp, sizes: SHARP_SIZES, lightVeil: true },
  [HeroLivingHullUrl]: { avif: HeroLivingHullAvif, mobileAvif: HeroLivingHullMobile, webp: HeroLivingHullWebp, sizes: SHARP_SIZES, lightVeil: true },
  [HeroLivingPlateauUrl]: { avif: HeroLivingPlateauAvif, mobileAvif: HeroLivingPlateauMobile, webp: HeroLivingPlateauWebp, sizes: SHARP_SIZES },
  [HeroMarketReportUrl]: { avif: HeroMarketReportAvif, mobileAvif: HeroMarketReportMobile, webp: HeroMarketReportWebp, sizes: SHARP_SIZES },
  [HeroMilitaryBuyerUrl]: { avif: HeroMilitaryBuyerAvif, mobileAvif: HeroMilitaryBuyerMobile, webp: HeroMilitaryBuyerWebp, sizes: SHARP_SIZES },
  [HeroMilitaryGuideUrl]: { avif: HeroMilitaryGuideAvif, mobileAvif: HeroMilitaryGuideMobile, webp: HeroMilitaryGuideWebp, sizes: SHARP_SIZES },
  [HeroMilitaryRelocationUrl]: { avif: HeroMilitaryRelocationAvif, mobileAvif: HeroMilitaryRelocationMobile, webp: HeroMilitaryRelocationWebp, sizes: SHARP_SIZES },
  [HeroMilitarySellerUrl]: { avif: HeroMilitarySellerAvif, mobileAvif: HeroMilitarySellerMobile, webp: HeroMilitarySellerWebp, sizes: SHARP_SIZES },
  [HeroMilitaryUrl]: { avif: HeroMilitaryAvif, mobileAvif: HeroMilitaryMobile, webp: HeroMilitaryWebp, sizes: SHARP_SIZES },
  [HeroMontrealRelocationUrl]: { avif: HeroMontrealRelocationAvif, mobileAvif: HeroMontrealRelocationMobile, webp: HeroMontrealRelocationWebp, sizes: SHARP_SIZES },
  [HeroNeighborhoodsUrl]: { avif: HeroNeighborhoodsAvif, mobileAvif: HeroNeighborhoodsMobile, webp: HeroNeighborhoodsWebp, sizes: SHARP_SIZES, lightVeil: true },
  [HeroPlateauUrl]: { avif: HeroPlateauAvif, mobileAvif: HeroPlateauMobile, webp: HeroPlateauWebp, sizes: SHARP_SIZES },
  [HeroPlexUrl]: { avif: HeroPlexAvif, mobileAvif: HeroPlexMobile, webp: HeroPlexWebp, sizes: SHARP_SIZES },
  [HeroPontiacUrl]: { avif: HeroPontiacAvif, mobileAvif: HeroPontiacMobile, webp: HeroPontiacWebp, sizes: SHARP_SIZES },
  [HeroPropertiesUrl]: { avif: HeroPropertiesAvif, mobileAvif: HeroPropertiesMobile, webp: HeroPropertiesWebp, sizes: SHARP_SIZES },
  [HeroRelocalisationUrl]: { avif: HeroRelocalisationAvif, mobileAvif: HeroRelocalisationMobile, webp: HeroRelocalisationWebp, sizes: SHARP_SIZES, lightVeil: true, position: "right top" },
  [HeroRelocationGuideUrl]: { avif: HeroRelocationGuideAvif, mobileAvif: HeroRelocationGuideMobile, webp: HeroRelocationGuideWebp, sizes: SHARP_SIZES },
  [HeroResourcesUrl]: { avif: HeroResourcesAvif, mobileAvif: HeroResourcesMobile, webp: HeroResourcesWebp, sizes: SHARP_SIZES },
  [HeroSellPlexUrl]: { avif: HeroSellPlexAvif, mobileAvif: HeroSellPlexMobile, webp: HeroSellPlexWebp, sizes: SHARP_SIZES },
  [HeroSellerGuideUrl]: { avif: HeroSellerGuideAvif, mobileAvif: HeroSellerGuideMobile, webp: HeroSellerGuideWebp, sizes: SHARP_SIZES },
  [HeroSellerUrl]: { avif: HeroSellerAvif, mobileAvif: HeroSellerMobile, webp: HeroSellerWebp, sizes: SHARP_SIZES },
  [HeroTestimonialsUrl]: { avif: HeroTestimonialsAvif, mobileAvif: HeroTestimonialsMobile, webp: HeroTestimonialsWebp, sizes: SHARP_SIZES },
  [HeroVendreGatineauUrl]: { avif: HeroVendreGatineauAvif, mobileAvif: HeroVendreGatineauMobile, webp: HeroVendreGatineauWebp, sizes: SHARP_SIZES },
  [HomeInteriorUrl]: { avif: HomeInteriorAvif, mobileAvif: HomeInteriorMobile, webp: HomeInteriorWebp, sizes: SHARP_SIZES },
  [PlateauAylmerLifestyleUrl]: { avif: PlateauAylmerLifestyleAvif, mobileAvif: PlateauAylmerLifestyleMobile, webp: PlateauAylmerLifestyleWebp, sizes: SHARP_SIZES },
  [HeroCoteDazurUrl]: { avif: HeroCoteDazurAvif, mobileAvif: HeroCoteDazurMobile, webp: HeroCoteDazurWebp, sizes: SHARP_SIZES, lightVeil: true },
  [HeroLimbourUrl]: { avif: HeroLimbourAvif, mobileAvif: HeroLimbourMobile, webp: HeroLimbourWebp, sizes: SHARP_SIZES },
  [HeroMassonAngersGenUrl]: { avif: HeroMassonAngersGenAvif, mobileAvif: HeroMassonAngersGenMobile, webp: HeroMassonAngersGenWebp, sizes: SHARP_SIZES },
  [HeroOutaouaisGenUrl]: { avif: HeroOutaouaisGenAvif, mobileAvif: HeroOutaouaisGenMobile, webp: HeroOutaouaisGenWebp, sizes: SHARP_SIZES },
  [HeroValDesMontsGenUrl]: { avif: HeroValDesMontsGenAvif, mobileAvif: HeroValDesMontsGenMobile, webp: HeroValDesMontsGenWebp, sizes: SHARP_SIZES },
};

export function getHeroPicture(src?: string): HeroPicture | undefined {
  return src ? HERO_PICTURES[src] : undefined;
}
