import { useEffect } from "react";

interface NeighborhoodJsonLdProps {
  /** Neighborhood name, e.g. "Aylmer" */
  name: string;
  /** Full description for the schema */
  description: string;
  /** Latitude of the neighborhood */
  lat: number;
  /** Longitude of the neighborhood */
  lng: number;
  /** Canonical URL of this page */
  url: string;
}

const BASE_URL = "https://yanisgauthier.ca";

/**
 * Injects a LocalBusiness + RealEstateAgent JSON-LD scoped to a specific
 * neighborhood. This tells Google: "Yanis serves THIS area specifically."
 */
const NeighborhoodJsonLd = ({ name, description, lat, lng, url }: NeighborhoodJsonLdProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["RealEstateAgent", "LocalBusiness"],
      name: `Yanis Gauthier-Sigeris — Courtier immobilier ${name}`,
      description,
      url: `${BASE_URL}${url}`,
      telephone: "+1-819-962-4834",
      email: "yanis@ygsimmo.ca",
      image: `${BASE_URL}/og-image.png`,
      priceRange: "$$",
      currenciesAccepted: "CAD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "10:00",
          closes: "17:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: name,
        addressRegion: "QC",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: lat,
        longitude: lng,
      },
      areaServed: {
        "@type": "Place",
        name,
        geo: {
          "@type": "GeoCoordinates",
          latitude: lat,
          longitude: lng,
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
      },
      knowsLanguage: ["fr", "en"],
      parentOrganization: {
        "@type": "Organization",
        name: "RE/MAX Direct",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "ygs-neighborhood-jsonld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-neighborhood-jsonld");
      if (el) el.remove();
    };
  }, [name, description, lat, lng, url]);

  return null;
};

export default NeighborhoodJsonLd;
