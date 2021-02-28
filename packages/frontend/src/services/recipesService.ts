import { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { IRecipe, IInnerTags } from "../../../shared/src/types/recipe.type";
import { apiService } from "./";

export const getAllRecipes = (): Promise<AxiosResponse<IRecipe>> =>
  apiService.get(ApiEndpoints.Recipes);

export const getAllTags = (): Promise<AxiosResponse<IInnerTags[]>> =>
  apiService.get(ApiEndpoints.Tags);
