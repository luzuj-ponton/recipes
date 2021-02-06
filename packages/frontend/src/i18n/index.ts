import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsPL from "../assets/translations/plTranslations.json";
import translationsEN from "../assets/translations/enTranslations.json";

enum Languages {
  Polish = "pl-PL",
  English = "en-US",
}

enum LanguagesTypes {
  Polish = "pl",
  English = "en",
}

const language = window.navigator.language;

const resources = {
  pl: translationsPL,
  en: translationsEN,
};

i18n.use(initReactI18next).init({
  resources,
  lng: language === Languages.Polish ? LanguagesTypes.Polish : LanguagesTypes.English,
});

export default i18n;
