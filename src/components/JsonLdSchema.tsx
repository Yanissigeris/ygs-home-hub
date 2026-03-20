import { useEffect } from "react";
import { reviews } from "@/data/reviews";

const JsonLdSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Yanis Gauthier-Sigeris — Courtier immobilier",
      url: "https://www.ygsimmo.ca",
      image: "https://www.ygsimmo.ca/yanis-photo.jpg",
      telephone: "+1-819-555-1234",
      email: "yanis@ygsimmo.ca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gatineau",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Gatineau" },
        { "@type": "City", name: "Aylmer" },
        { "@type": "City", name: "Hull" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: String(reviews.length),
        reviewCount: String(reviews.length),
      },
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
    script.textContent = JSON.stringify(schema);
    script.id = "ygs-jsonld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-jsonld");
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default JsonLdSchema;
