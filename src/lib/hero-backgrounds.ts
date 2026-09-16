import type React from "react";

/**
 * Responsive CSS-background heroes (pages that use
 * `<section className="hero-gradient hero-gradient--with-bg" style={heroBgStyle(heroImg)}>`).
 *
 * Same idea as hero-pictures.ts: the page keeps its plain import and the map
 * (keyed by that import's resolved URL) supplies AVIF 768 px for phones,
 * AVIF 1280 px for larger screens and a WebP 1280 px fallback. index.css
 * consumes the three custom properties with image-set() + a media query.
 * Every hero sits under a dark gradient overlay, so quality 40 is invisible.
 */

import HeroCombienCourtierUrl from "@/assets/hero-combien-courtier.webp";
import HeroCombienCourtierAvif from "@/assets/hero-combien-courtier.webp?w=1280&format=avif&quality=40&as=url";
import HeroCombienCourtierAvifSm from "@/assets/hero-combien-courtier.webp?w=768&format=avif&quality=40&as=url";
import HeroCombienCourtierWebp from "@/assets/hero-combien-courtier.webp?w=1280&format=webp&quality=65&as=url";
import HeroCommentChoisirUrl from "@/assets/hero-comment-choisir.webp";
import HeroCommentChoisirAvif from "@/assets/hero-comment-choisir.webp?w=1280&format=avif&quality=40&as=url";
import HeroCommentChoisirAvifSm from "@/assets/hero-comment-choisir.webp?w=768&format=avif&quality=40&as=url";
import HeroCommentChoisirWebp from "@/assets/hero-comment-choisir.webp?w=1280&format=webp&quality=65&as=url";
import HeroCourtierVsFsboUrl from "@/assets/hero-courtier-vs-fsbo.webp";
import HeroCourtierVsFsboAvif from "@/assets/hero-courtier-vs-fsbo.webp?w=1280&format=avif&quality=40&as=url";
import HeroCourtierVsFsboAvifSm from "@/assets/hero-courtier-vs-fsbo.webp?w=768&format=avif&quality=40&as=url";
import HeroCourtierVsFsboWebp from "@/assets/hero-courtier-vs-fsbo.webp?w=1280&format=webp&quality=65&as=url";
import HeroFraisCourtageUrl from "@/assets/hero-frais-courtage.webp";
import HeroFraisCourtageAvif from "@/assets/hero-frais-courtage.webp?w=1280&format=avif&quality=40&as=url";
import HeroFraisCourtageAvifSm from "@/assets/hero-frais-courtage.webp?w=768&format=avif&quality=40&as=url";
import HeroFraisCourtageWebp from "@/assets/hero-frais-courtage.webp?w=1280&format=webp&quality=65&as=url";
import HeroValuationAylmerUrl from "@/assets/hero-valuation-aylmer.webp";
import HeroValuationAylmerAvif from "@/assets/hero-valuation-aylmer.webp?w=1280&format=avif&quality=40&as=url";
import HeroValuationAylmerAvifSm from "@/assets/hero-valuation-aylmer.webp?w=768&format=avif&quality=40&as=url";
import HeroValuationAylmerWebp from "@/assets/hero-valuation-aylmer.webp?w=1280&format=webp&quality=65&as=url";
import HeroValuationHullUrl from "@/assets/hero-valuation-hull.webp";
import HeroValuationHullAvif from "@/assets/hero-valuation-hull.webp?w=1280&format=avif&quality=40&as=url";
import HeroValuationHullAvifSm from "@/assets/hero-valuation-hull.webp?w=768&format=avif&quality=40&as=url";
import HeroValuationHullWebp from "@/assets/hero-valuation-hull.webp?w=1280&format=webp&quality=65&as=url";
import HeroValuationProUrl from "@/assets/hero-valuation-pro.webp";
import HeroValuationProAvif from "@/assets/hero-valuation-pro.webp?w=1280&format=avif&quality=40&as=url";
import HeroValuationProAvifSm from "@/assets/hero-valuation-pro.webp?w=768&format=avif&quality=40&as=url";
import HeroValuationProWebp from "@/assets/hero-valuation-pro.webp?w=1280&format=webp&quality=65&as=url";
import HeroVerifierOaciqUrl from "@/assets/hero-verifier-oaciq.webp";
import HeroVerifierOaciqAvif from "@/assets/hero-verifier-oaciq.webp?w=1280&format=avif&quality=40&as=url";
import HeroVerifierOaciqAvifSm from "@/assets/hero-verifier-oaciq.webp?w=768&format=avif&quality=40&as=url";
import HeroVerifierOaciqWebp from "@/assets/hero-verifier-oaciq.webp?w=1280&format=webp&quality=65&as=url";

interface HeroBg {
  avif: string;
  avifSm: string;
  webp: string;
}

const HERO_BACKGROUNDS: Record<string, HeroBg> = {
  [HeroCombienCourtierUrl]: { avif: HeroCombienCourtierAvif, avifSm: HeroCombienCourtierAvifSm, webp: HeroCombienCourtierWebp },
  [HeroCommentChoisirUrl]: { avif: HeroCommentChoisirAvif, avifSm: HeroCommentChoisirAvifSm, webp: HeroCommentChoisirWebp },
  [HeroCourtierVsFsboUrl]: { avif: HeroCourtierVsFsboAvif, avifSm: HeroCourtierVsFsboAvifSm, webp: HeroCourtierVsFsboWebp },
  [HeroFraisCourtageUrl]: { avif: HeroFraisCourtageAvif, avifSm: HeroFraisCourtageAvifSm, webp: HeroFraisCourtageWebp },
  [HeroValuationAylmerUrl]: { avif: HeroValuationAylmerAvif, avifSm: HeroValuationAylmerAvifSm, webp: HeroValuationAylmerWebp },
  [HeroValuationHullUrl]: { avif: HeroValuationHullAvif, avifSm: HeroValuationHullAvifSm, webp: HeroValuationHullWebp },
  [HeroValuationProUrl]: { avif: HeroValuationProAvif, avifSm: HeroValuationProAvifSm, webp: HeroValuationProWebp },
  [HeroVerifierOaciqUrl]: { avif: HeroVerifierOaciqAvif, avifSm: HeroVerifierOaciqAvifSm, webp: HeroVerifierOaciqWebp },
};

/** Inline style for a CSS-background hero. Falls back to the original image
 *  (single --hero-bg-image) when the asset is not in the map. */
export function heroBgStyle(heroImg: string): React.CSSProperties {
  const bg = HERO_BACKGROUNDS[heroImg];
  const vars: Record<string, string> = bg
    ? {
        "--hero-bg-image": `url(${bg.webp})`,
        "--hero-bg-avif": `url(${bg.avif})`,
        "--hero-bg-avif-sm": `url(${bg.avifSm})`,
      }
    : { "--hero-bg-image": `url(${heroImg})` };
  return vars as React.CSSProperties;
}
