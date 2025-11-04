'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import en from './locales/en.json';
import fa from './locales/fa.json';
import ps from './locales/ps.json';

type Language = 'en' | 'fa' | 'ps';

type Translations = {
  [key: string]: string;
};

const translations: Record<Language, Translations> = {
  en,
  fa,
  ps,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useMemo(() => (key: string): string => {
    return translations[language][key] || key;
  }, [language]);
  
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);


  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
