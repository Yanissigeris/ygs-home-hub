import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { installHmrFallback } from "./lib/hmr-fallback";
import { releasePrerenderedSchemas } from "./lib/prerendered-schemas";

installHmrFallback();
releasePrerenderedSchemas();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
