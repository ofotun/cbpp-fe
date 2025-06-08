import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language resources
import enCommon from '../locales/en/common.json';
import enMicrosite from '../locales/en/microsite.json';
import pcmCommon from '../locales/pcm/common.json';
import pcmMicrosite from '../locales/pcm/microsite.json';
import yoMicrosite from '../locales/yo/microsite.json';
import haMicrosite from '../locales/ha/microsite.json';
import igMicrosite from '../locales/ig/microsite.json';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Naija Pidgin' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Èdè Yorùbá' },
  { code: 'ha', name: 'Hausa', nativeName: 'Harshen Hausa' },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo' },
];

// Initialize i18next
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: enCommon,
        microsite: enMicrosite,
      },
      pcm: {
        common: pcmCommon,
        microsite: pcmMicrosite,
      },
      yo: {
        microsite: yoMicrosite,
      },
      ha: {
        microsite: haMicrosite,
      },
      ig: {
        microsite: igMicrosite,
      },
    },
    fallbackLng: 'en',
    ns: ['common', 'microsite'],
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => Promise<void>;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language) || SUPPORTED_LANGUAGES[0]
  );
  const [isLoading, setIsLoading] = useState(false);

  const loadLanguageResources = async (langCode: string) => {
    try {
      // Dynamic import of language resources
      const module = await import(`../locales/${langCode}/common.json`);
      i18n.addResourceBundle(langCode, 'common', module.default, true, true);
    } catch (error) {
      console.error(`Failed to load language resources for ${langCode}:`, error);
    }
  };

  const setLanguage = async (lang: Language) => {
    setIsLoading(true);
    try {
      // Load language resources if not already loaded
      if (!i18n.hasResourceBundle(lang.code, 'common')) {
        await loadLanguageResources(lang.code);
      }
      
      await i18n.changeLanguage(lang.code);
      setCurrentLanguage(lang);
      
      // Store language preference
      localStorage.setItem('i18nextLng', lang.code);
      
      // Update document language
      document.documentElement.lang = lang.code;
      
      // Update direction if needed (for future RTL support)
      document.dir = i18n.dir(lang.code);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initialize language on mount
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang) {
      const lang = SUPPORTED_LANGUAGES.find(l => l.code === storedLang);
      if (lang) {
        setLanguage(lang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 