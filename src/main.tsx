import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { preloadRoute } from "./lib/route-preload";
import "./index.css";
import { installHmrFallback } from "./lib/hmr-fallback";
import { releasePrerenderedSchemas } from "./lib/prerendered-schemas";

installHmrFallback();
releasePrerenderedSchemas();

const render = () =>
  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );

// La page enregistrée (HTML prérendu) reste affichée pendant que le code de la page
// se charge, puis React la remplace par la même page. Sans cette attente, un squelette
// gris s'affichait entre les deux. Au pire on attend 3 s, puis on affiche quand même.
let started = false;
const start = () => {
  if (started) return;
  started = true;
  render();
};
Promise.race([preloadRoute(window.location.pathname), new Promise((r) => setTimeout(r, 3000))])
  .catch(() => undefined)
  .finally(start);
