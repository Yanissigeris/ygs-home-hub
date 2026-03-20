import { useEffect } from "react";
import { reviews } from "@/data/reviews";

/**
 * Enhances the static JSON-LD in index.html with dynamic review data.
 * The base RealEstateAgent schema is pre-rendered in index.html for
 * crawlers that don't execute JS. This component enriches it with
 * individual review entries at runtime.
 */
const JsonLdSchema = () => {
  useEffect(() => {
    // The static schema in index.html already has aggregateRating.
    // Here we inject the individual reviews as a separate schema
    // so the base agent info is always crawlable without JS.
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Yanis Gauthier-Sigeris — Courtier immobilier RE/MAX",
      "url": "https://ygs-home-hub.lovable.app",
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: r.full,
        ...(r.location && { locationCreated: { "@type": "Place", name: r.location } }),
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(reviewSchema);
    script.id = "ygs-jsonld-reviews";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-jsonld-reviews");
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default JsonLdSchema;
