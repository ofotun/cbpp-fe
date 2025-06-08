import React from 'react';
export type Language = {
    code: string;
    name: string;
    nativeName: string;
};
export declare const SUPPORTED_LANGUAGES: Language[];
interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (lang: Language) => Promise<void>;
    isLoading: boolean;
}
declare const LanguageContext: React.Context<LanguageContextType | undefined>;
export declare const LanguageProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useLanguage: () => LanguageContextType;
export default LanguageContext;
