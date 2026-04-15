import { useEffect } from "react";

interface HowToStep {
  name: string;
  text: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "P90D"
}

const BASE = "https://yanisgauthier.com";

const HowToJsonLd = ({ name, description, steps, totalTime }: HowToJsonLdProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name,
      description,
      ...(totalTime && { totalTime }),
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
      author: {
        "@type": "RealEstateAgent",
        "@id": `${BASE}/#realestateagent`,
        name: "Yanis Gauthier-Sigeris",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ygs-jsonld-howto";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-jsonld-howto");
      if (el) document.head.removeChild(el);
    };
  }, [name, description, steps, totalTime]);

  return null;
};

export default HowToJsonLd;
