import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

export type Lang = "fr" | "en";

const LanguageContext = createContext<Lang>("fr");

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // useLocation() is always safe here because LanguageProvider is rendered
  // inside <BrowserRouter> / <StaticRouter>, both of which provide a router context
  // during SSR/prerender. We deliberately do NOT touch window.location directly.
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "fr";
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
};
