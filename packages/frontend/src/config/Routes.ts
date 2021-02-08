import { RouteInfo } from "src/types/RouteInfo.types";
import { Routes } from "../enums/routes.enum";
import i18n from "i18next";

export const routes: RouteInfo[] = [
  { text: i18n.t("common:labels.home"), path: Routes.Home },
  { text: i18n.t("common:labels.add-recipe"), path: Routes.AddRecipe },
];
