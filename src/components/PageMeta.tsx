import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE = "YGS — Yanis Gauthier-Sigeris";

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });

  return element;
};

const ensureCanonicalLink = () => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  return element;
};

const PageMeta = ({ title, description, canonical }: PageMetaProps) => {
  useEffect(() => {
    document.title = `${title} | ${SITE}`;

    ensureMetaTag('meta[name="description"]', {
      name: "description",
      content: description,
    });

    ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    if (canonical) {
      ensureCanonicalLink().setAttribute("href", canonical);
    }
  }, [canonical, description, title]);

  return null;
};

export default PageMeta;
