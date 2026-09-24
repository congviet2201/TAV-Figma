import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { detectLanguageByIP } from "./detectLanguageByIP";

export type LangCode = "vi" | "en" | "ja";

interface LanguageContextType {
  isLanguage: LangCode;
  setIsLanguage: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isLanguage, setIsLanguage] = useState<LangCode>("vi");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LangCode | null;

    if (savedLang) {
      setIsLanguage(savedLang);
    } else {
      detectLanguageByIP().then((lang: LangCode) => {
        setIsLanguage(lang);
        localStorage.setItem("language", lang);
      });
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ isLanguage, setIsLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
