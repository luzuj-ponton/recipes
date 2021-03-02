import { FooterInfo } from "../../types/FooterInfo.types";
import i18n from "../../i18n";

export const footerItems: FooterInfo[] = [
  {
    columnItems: [
      { text: i18n.t("common:labels.presentations") },
      { text: i18n.t("common:labels.professionals") },
      { text: i18n.t("common:labels.stores") },
    ],
  },
  {
    columnItems: [
      { text: i18n.t("common:labels.webinars") },
      { text: i18n.t("common:labels.workshops") },
      { text: i18n.t("common:labels.local-meetups") },
    ],
  },
  {
    columnItems: [
      { text: i18n.t("common:labels.our-initiatives") },
      { text: i18n.t("common:labels.giving-back") },
      { text: i18n.t("common:labels.communities") },
    ],
  },
  {
    columnItems: [
      { text: i18n.t("common:labels.contact-form") },
      { text: i18n.t("common:labels.work-with-us") },
      { text: i18n.t("common:labels.visit-us") },
    ],
  },
];
