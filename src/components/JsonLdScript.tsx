import { useEffect } from "react";

/**
 * Injects one JSON-LD block into <head> while the page is mounted and removes
 * it on navigation. Used for route schemas that are also written into the
 * static HTML by scripts/prerender.mjs (same id, same data), so the browser
 * and the crawler-visible HTML always carry the same block.
 */
const JsonLdScript = ({ id, data }: { id: string; data: object }) => {
  useEffect(() => {
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, data]);
  return null;
};

export default JsonLdScript;
