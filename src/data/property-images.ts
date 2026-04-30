// Responsive image sources for property cards.
// Generated variants: 800w (default desktop) and 480w (mobile), in AVIF + WebP.
// Cards render ~648×486 max → 800w is plenty; 480w covers ≤480 CSS px viewports.

import p28743871_800_avif from "@/assets/property-28743871-800.avif";
import p28743871_800_webp from "@/assets/property-28743871-800.webp";
import p28743871_480_avif from "@/assets/property-28743871-480.avif";
import p28743871_480_webp from "@/assets/property-28743871-480.webp";

import p20453879_800_avif from "@/assets/property-20453879-800.avif";
import p20453879_800_webp from "@/assets/property-20453879-800.webp";
import p20453879_480_avif from "@/assets/property-20453879-480.avif";
import p20453879_480_webp from "@/assets/property-20453879-480.webp";

import p15163372_800_avif from "@/assets/property-15163372-800.avif";
import p15163372_800_webp from "@/assets/property-15163372-800.webp";
import p15163372_480_avif from "@/assets/property-15163372-480.avif";
import p15163372_480_webp from "@/assets/property-15163372-480.webp";

import p17113358_800_avif from "@/assets/property-17113358-800.avif";
import p17113358_800_webp from "@/assets/property-17113358-800.webp";
import p17113358_480_avif from "@/assets/property-17113358-480.avif";
import p17113358_480_webp from "@/assets/property-17113358-480.webp";

import p11366995_800_avif from "@/assets/property-11366995-800.avif";
import p11366995_800_webp from "@/assets/property-11366995-800.webp";
import p11366995_480_avif from "@/assets/property-11366995-480.avif";
import p11366995_480_webp from "@/assets/property-11366995-480.webp";

export interface PropertyImageSet {
  avif800: string;
  webp800: string;
  avif480: string;
  webp480: string;
}

export const propertyImages: Record<string, PropertyImageSet> = {
  "28743871": { avif800: p28743871_800_avif, webp800: p28743871_800_webp, avif480: p28743871_480_avif, webp480: p28743871_480_webp },
  "20453879": { avif800: p20453879_800_avif, webp800: p20453879_800_webp, avif480: p20453879_480_avif, webp480: p20453879_480_webp },
  "15163372": { avif800: p15163372_800_avif, webp800: p15163372_800_webp, avif480: p15163372_480_avif, webp480: p15163372_480_webp },
  "17113358": { avif800: p17113358_800_avif, webp800: p17113358_800_webp, avif480: p17113358_480_avif, webp480: p17113358_480_webp },
  "11366995": { avif800: p11366995_800_avif, webp800: p11366995_800_webp, avif480: p11366995_480_avif, webp480: p11366995_480_webp },
};
