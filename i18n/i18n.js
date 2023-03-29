import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      key: "hello world with i18next",
    },
  },
  vn: {
    translation: {
      key: "xin chào vn với i18next",
    },
  },
};
const defualtNS = "home";
export const locales = {
  en: "English",
  vn: "Tiếng Việt",
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  // ns: ["home", "posts"],
  // defualtNS,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
