// Responsive image sources for property cards.
// vite-imagetools generates 400 / 640 / 900-wide AVIF + WebP variants at build,
// returning a <picture>-shaped object with srcsets for each format.

import p28167244 from "@/assets/property-28167244.webp?w=400;640;900&format=avif;webp&as=picture";
import p28743871 from "@/assets/property-28743871.webp?w=400;640;900&format=avif;webp&as=picture";
import p20453879 from "@/assets/property-20453879.webp?w=400;640;900&format=avif;webp&as=picture";
import p15163372 from "@/assets/property-15163372.webp?w=400;640;900&format=avif;webp&as=picture";
import p17113358 from "@/assets/property-17113358.webp?w=400;640;900&format=avif;webp&as=picture";
import p11366995 from "@/assets/property-11366995.webp?w=400;640;900&format=avif;webp&as=picture";

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
  "20453879": toSet(p20453879 as PictureImport),
  "15163372": toSet(p15163372 as PictureImport),
  "17113358": toSet(p17113358 as PictureImport),
  "11366995": toSet(p11366995 as PictureImport),
};
