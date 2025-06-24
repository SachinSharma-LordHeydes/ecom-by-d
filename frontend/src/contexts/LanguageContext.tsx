"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English - EN', flag: '🇺🇸' },
  { code: 'es', name: 'español - ES', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية - AR', flag: '🇸🇦' },
  { code: 'de', name: 'Deutsch - DE', flag: '🇩🇪' },
  { code: 'he', name: 'עברית - HE', flag: '🇮🇱' },
  { code: 'ko', name: '한국어 - KO', flag: '🇰🇷' },
  { code: 'pt', name: 'português - PT', flag: '🇵🇹' },
  { code: 'zh-s', name: '中文 (简体) - ZH', flag: '🇨🇳' },
  { code: 'zh-t', name: '中文 (繁體) - ZH', flag: '🇹🇼' },
];

type LanguageContextType = {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
