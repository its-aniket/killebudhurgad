"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { LangCode, Translations, t, languages } from "./translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  tr: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  tr: t.en,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  // Persist choice in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("kb_lang") as LangCode | null;
    if (saved && t[saved]) setLangState(saved);
  }, []);

  const setLang = (code: LangCode) => {
    setLangState(code);
    localStorage.setItem("kb_lang", code);
  };

  const langMeta = languages.find((l) => l.code === lang);
  const dir = langMeta?.dir === "rtl" ? "rtl" : "ltr";

  // Update <html dir> and <html lang> in real time
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
