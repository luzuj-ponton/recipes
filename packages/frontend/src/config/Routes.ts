import { RouteInfo } from "src/types/RouteInfo.types";
import { Routes } from "../enums/routes.enum";

export const routes: RouteInfo[] = [
  { text: "Home", path: Routes.Home },
  { text: "Add recipe", path: Routes.AddRecipe },
];
