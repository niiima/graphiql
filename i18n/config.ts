// Updated file: i18n/config.ts
// Adjusted import paths to relative JSON files (no public/locales route prefix)

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Direct relative imports as requested
import en from './locales/en.json';
import fa from './locales/fa.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ar from './locales/ar.json';

const resources = {
  en: { translation: en },
  fa: { translation: fa },
  fr: { translation: fr },
  de: { translation: de },
  ar: { translation: ar },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // Default language: Persian
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;