import { FooterInfo } from "../../types/FooterInfo.types";
import i18n from "../../i18n";

export const footerItems: FooterInfo[] = [
  {
    text1: i18n.t("common:labels.presentations"),
    text2: i18n.t("common:labels.professionals"),
    text3: i18n.t("common:labels.stores"),
  },
  {
    text1: i18n.t("common:labels.webinars"),
    text2: i18n.t("common:labels.workshops"),
    text3: i18n.t("common:labels.local-meetups"),
  },
  {
    text1: i18n.t("common:labels.our-initiatives"),
    text2: i18n.t("common:labels.giving-back"),
    text3: i18n.t("common:labels.communities"),
  },
  {
    text1: i18n.t("common:labels.contact-form"),
    text2: i18n.t("common:labels."),
    text3: i18n.t("common:labels."),
  },
];
