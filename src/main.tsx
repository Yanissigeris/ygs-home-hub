import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./design-upgrade.css";
import { installHmrFallback } from "./lib/hmr-fallback";

installHmrFallback();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);

/* ── Global scroll reveal observer ──
 * Deferred to idle time to keep the main thread free during LCP/TBT window.
 * The observer + MutationObserver scan was previously running synchronously
 * after first paint and adding ~50-100ms TBT on desktop.
 */
function initScrollReveal() {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    typeof MutationObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
  );

  const scan = (root: Element | Document) => {
    root.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      if (!el.classList.contains("revealed")) observer.observe(el);
    });
  };

  scan(document);

  new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
}

if (typeof window !== "undefined") {
  type IdleWindow = Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  };
  const ric = (window as IdleWindow).requestIdleCallback;
  if (ric) {
    ric(initScrollReveal, { timeout: 2000 });
  } else {
    setTimeout(initScrollReveal, 1500);
  }
}
