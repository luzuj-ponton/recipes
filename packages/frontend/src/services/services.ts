import { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { IRecipe } from "../../../shared/src/types/recipe.type";
import { IAuthCredentials } from "../../../shared/src/types/auth.type";
import { apiService } from "./";

export const registerUser = (variables: IAuthCredentials): Promise<AxiosResponse<any>> =>
  apiService.post(ApiEndpoints.Register, variables);

export const getAllRecipes = (): Promise<AxiosResponse<IRecipe>> =>
  apiService.get(ApiEndpoints.Recipes);
