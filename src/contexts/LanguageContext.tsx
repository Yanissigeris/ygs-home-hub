import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

export type Lang = "fr" | "en";

const LanguageContext = createContext<Lang>("fr");

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "fr";
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
};
