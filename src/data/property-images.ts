// Responsive image sources for property cards.
// vite-imagetools generates 400 / 640 / 900-wide AVIF + WebP variants at build,
// returning a <picture>-shaped object with srcsets for each format.

import p28167244 from "@/assets/property-28167244.webp?w=400;640;900&format=avif;webp&as=picture";
import p28743871 from "@/assets/property-28743871.webp?w=400;640;900&format=avif;webp&as=picture";
import p15163372 from "@/assets/property-15163372.webp?w=400;640;900&format=avif;webp&as=picture";
import p17113358 from "@/assets/property-17113358.webp?w=400;640;900&format=avif;webp&as=picture";
// 11366995 : ajout du palier 500 pour que mobile (~452 CSS px @2×) pioche ~500w au lieu de 900w
import p11366995 from "@/assets/property-11366995.webp?w=400;500;640;900&format=avif;webp&as=picture";
// Fiches précédemment servies en .webp brut hors pipeline — passage <picture>
// AVIF + WebP avec mêmes paliers que les autres cartes.
import p14073975 from "@/assets/property-14073975.webp?w=400;640;900&format=avif;webp&as=picture";
import p19326119 from "@/assets/property-19326119.webp?w=400;640;900&format=avif;webp&as=picture";
import p16828271 from "@/assets/property-16828271.webp?w=400;640;900&format=avif;webp&as=picture";
import p27736954 from "@/assets/property-27736954.webp?w=400;640;900&format=avif;webp&as=picture";
import p18249217 from "@/assets/property-18249217.webp?w=400;640;900&format=avif;webp&as=picture";
// Photo source 640×480 (terrain) — paliers limités à la résolution native.
import p15159365 from "@/assets/property-15159365.webp?w=400;640&format=avif;webp&as=picture";

interface PictureImport {
  sources: { avif?: string; webp?: string };
  img: { src: string; w: number; h: number };
}

export interface PropertyImageSet {
  avifSrcSet: string;
  webpSrcSet: string;
  fallback: string;
}

const toSet = (p: PictureImport): PropertyImageSet => ({
  avifSrcSet: p.sources.avif ?? "",
  webpSrcSet: p.sources.webp ?? "",
  fallback: p.img.src,
});

export const propertyImages: Record<string, PropertyImageSet> = {
  "28167244": toSet(p28167244 as PictureImport),
  "28743871": toSet(p28743871 as PictureImport),
  "15163372": toSet(p15163372 as PictureImport),
  "17113358": toSet(p17113358 as PictureImport),
  "11366995": toSet(p11366995 as PictureImport),
  "14073975": toSet(p14073975 as PictureImport),
  "19326119": toSet(p19326119 as PictureImport),
  "16828271": toSet(p16828271 as PictureImport),
  "27736954": toSet(p27736954 as PictureImport),
  "18249217": toSet(p18249217 as PictureImport),
  "15159365": toSet(p15159365 as PictureImport),
};
