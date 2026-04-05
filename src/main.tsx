import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

/* ── Global scroll reveal observer ── */
if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
  );

  // Observe initial + future elements via MutationObserver
  const scan = (root: Element | Document) => {
    root.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      if (!el.classList.contains("revealed")) observer.observe(el);
    });
  };

  // Initial scan after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => scan(document));
  } else {
    scan(document);
  }

  // Watch for dynamically added elements
  new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
}
