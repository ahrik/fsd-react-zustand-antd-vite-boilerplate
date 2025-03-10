import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { LANGUAGES } from '@shared/constants';

i18n
  .use(HttpBackend) // Подключаем плагин для загрузки JSON
  .use(initReactI18next)
  .init({
    lng: LANGUAGES.En,
    fallbackLng: LANGUAGES.Ru,
    backend: {
      loadPath: '/locales/{{lng}}.json', // Путь к файлам
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
