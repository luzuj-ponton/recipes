import { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { RecipesResponse } from "../../../shared/src/types/recipe.type";
import { apiService } from ".";

export const getAllRecipes = (
  offset?: number,
  limit?: number,
  fields?: string,
  text?: string,
  tagsArr?: string[],
): Promise<AxiosResponse<RecipesResponse>> =>
  apiService.get(ApiEndpoints.Recipes, {
    params: {
      offset,
      limit,
      fields,
      text,
      tagsArr,
    },
  });
