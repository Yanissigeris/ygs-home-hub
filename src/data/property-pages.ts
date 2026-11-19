// Pages propriété sur le site (nov. 2026) : chaque carte ouvre une page
// /proprietes/<slug>/ (EN /en/properties/<slug>/) au lieu de la fiche RE/MAX.
// Les photos des galeries viennent des fiches RE/MAX Québec de Yanis (photos de
// ses inscriptions), converties en WebP 1600 px et 800 px dans
// public/photos-proprietes/<id>/NN-1600.webp et NN-800.webp.
// Une inscription absente de PHOTO_COUNTS garde sa photo de carte seulement.

import type { Property } from "./properties";
import slugsJson from "./property-slugs.json";

/** Nombre de photos de galerie par numéro Centris. */
export const PHOTO_COUNTS: Record<string, number> = {
  "26501194": 20,
  "21600052": 24,
  "14821222": 38,
  "12304022": 35,
  "18249217": 34,
  "15159365": 3,
  "21358006": 29,
  "15191323": 37,
};

/**
 * Inscriptions dont certaines photos ont une mise en scène virtuelle faite par IA.
 * La page affiche la divulgation sous la galerie (règle OACIQ, comme sur la fiche RE/MAX).
 */
export const AI_STAGED = new Set<string>(["21358006", "14821222"]);

/** Numéro Centris → slug d'URL (même slug en FR et en EN). */
export const PROPERTY_SLUGS: Record<string, string> = slugsJson;

const ID_BY_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(PROPERTY_SLUGS).map(([id, slug]) => [slug, id]),
);

export const propertyIdFromSlug = (slug: string | undefined): string | undefined =>
  slug ? ID_BY_SLUG[slug] : undefined;

export const propertyPath = (p: Pick<Property, "id">, lang: "fr" | "en"): string => {
  const slug = PROPERTY_SLUGS[p.id];
  if (!slug) return lang === "fr" ? "/proprietes/" : "/en/properties/";
  return lang === "fr" ? `/proprietes/${slug}/` : `/en/properties/${slug}/`;
};

export interface GalleryPhoto {
  small: string;
  large: string;
}

export const galleryFor = (p: Property): GalleryPhoto[] => {
  const count = PHOTO_COUNTS[p.id];
  if (!count) return [{ small: p.image, large: p.image }];
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      small: `/photos-proprietes/${p.id}/${n}-800.webp`,
      large: `/photos-proprietes/${p.id}/${n}-1600.webp`,
    };
  });
};
