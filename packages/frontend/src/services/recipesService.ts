import { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { RecipesResponse } from "../../../shared/src/types/responses/recipesResponse.type";
import { apiService } from ".";
import { RecipeParameters } from "../../../shared/src/types/recipe.type";

export const getAllRecipes = (params: RecipeParameters): Promise<AxiosResponse<RecipesResponse>> =>
  apiService.get(ApiEndpoints.Recipes, {
    params,
  });
