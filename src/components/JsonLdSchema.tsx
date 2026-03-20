import { useEffect } from "react";
import { reviews } from "@/data/reviews";

const JsonLdSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Yanis Gauthier-Sigeris — Courtier immobilier RE/MAX",
      url: "https://ygs-home-hub.lovable.app",
      image: "https://ygs-home-hub.lovable.app/og-image.png",
      telephone: "+1-819-962-4834",
      email: "yanis@ygsimmo.ca",
      description: "Courtier immobilier à Gatineau. Vendre, acheter ou investir en Outaouais — stratégie claire avec conseils honnêtes.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1321 Boulevard Saint-Joseph",
        addressLocality: "Gatineau",
        addressRegion: "QC",
        postalCode: "J8Z 1T7",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.4765,
        longitude: -75.7013,
      },
      areaServed: [
        { "@type": "City", name: "Gatineau" },
        { "@type": "City", name: "Aylmer" },
        { "@type": "City", name: "Hull" },
        { "@type": "City", name: "Buckingham" },
        { "@type": "City", name: "Masson-Angers" },
      ],
      knowsLanguage: ["fr", "en"],
      memberOf: {
        "@type": "Organization",
        name: "RE/MAX Direct",
      },
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
      sameAs: [],
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
