import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fires a GA4 `page_view` event on every SPA route change.
 * Must be mounted INSIDE a <BrowserRouter>. The small setTimeout lets
 * PageMeta/SEO components update document.title before we read it.
 */
export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    const id = window.setTimeout(() => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: path,
          page_title: typeof document !== "undefined" ? document.title : "",
          page_location: typeof window !== "undefined" ? window.location.href : "",
        });
      }
    }, 80);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
}
