/**
 * Neighborhood JSON-LD is now handled statically by public/jsonld-routes.js
 * to avoid duplicate schemas and to keep aggregateRating/review markup
 * intentionally excluded (per Google Search Console compliance).
 *
 * This component is kept as a no-op so existing imports don't break.
 */
interface NeighborhoodJsonLdProps {
  name: string;
  description: string;
  lat: number;
  lng: number;
  url: string;
}

const NeighborhoodJsonLd = (_props: NeighborhoodJsonLdProps) => null;

export default NeighborhoodJsonLd;
