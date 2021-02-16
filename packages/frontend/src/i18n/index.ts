import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsPL from "../assets/translations/plTranslations.json";
import translationsEN from "../assets/translations/enTranslations.json";
import { Languages, LanguagesTypes } from "src/enums/languages.enum";

const language = window.navigator.language;

i18n.use(initReactI18next).init({
  resources: {
    pl: translationsPL,
    en: translationsEN,
  },
  lng: language === Languages.Polish ? LanguagesTypes.Polish : LanguagesTypes.English,
});

export default i18n;
