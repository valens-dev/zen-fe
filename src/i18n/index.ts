import { initReactI18next } from 'react-i18next';

import * as i18next from 'i18next';

import { en } from './locales/en';
import { de } from './locales/de';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

void i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

// eslint-disable-next-line import/no-default-export
export { default } from 'i18next';
