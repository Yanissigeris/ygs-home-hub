import { useEffect } from "react";

const BASE_URL = "https://yanisgauthier.com";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}

const ServiceJsonLd = ({ name, description, url, serviceType, areaServed = ["Gatineau", "Aylmer", "Hull", "Buckingham", "Masson-Angers", "Chelsea", "Cantley", "Val-des-Monts", "Pontiac"] }: ServiceJsonLdProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url: `${BASE_URL}${url}`,
      serviceType,
      provider: {
        "@type": "RealEstateAgent",
        name: "Yanis Gauthier-Sigeris — Courtier immobilier RE/MAX",
        url: BASE_URL,
        telephone: "+1-819-962-4834",
        email: "yanis@ygsimmo.ca",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1321 Boulevard Saint-Joseph",
          addressLocality: "Gatineau",
          addressRegion: "QC",
          postalCode: "J8Z 1T7",
          addressCountry: "CA",
        },
      },
      areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${BASE_URL}${url}`,
        servicePhone: { "@type": "ContactPoint", telephone: "+1-819-962-4834" },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `ygs-jsonld-service-${serviceType.replace(/\s/g, "-").toLowerCase()}`;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [name, description, url, serviceType, areaServed]);

  return null;
};

export default ServiceJsonLd;
