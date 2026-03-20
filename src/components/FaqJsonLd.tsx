import { useEffect } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqJsonLdProps {
  items: FaqItem[];
}

/** Injects FAQPage JSON-LD structured data for Google rich snippets */
const FaqJsonLd = ({ items }: FaqJsonLdProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "ygs-faq-jsonld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-faq-jsonld");
      if (el) el.remove();
    };
  }, [items]);

  return null;
};

export default FaqJsonLd;
