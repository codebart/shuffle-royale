import i18n from 'i18next';
import en from './translations/en.json'
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

const translations = {
    en
};

const defaultLanguage = 'en';

export const currentLanguage = (): string => localStorage.getItem('language') || defaultLanguage;

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: translations,
        lng: currentLanguage(),
        fallbackLng: [defaultLanguage],
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        },
        debug: false,
        react: {
            useSuspense: true
        }
    });

export interface Language {
    code: string;
    name: string;
    flag: string;
}

export const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        flag: 'gb'
    }
];

export default i18n;