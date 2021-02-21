import axios, { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { IRecipe } from "../../../shared/src/types/recipe.type";
import { IAuthUser } from "../../../shared/src/types/auth.type";
const baseURL = "http://localhost:4000/";

const apiService = axios.create({
  baseURL,
  timeout: 30 * 1000,
});

export const registerUser = (variables: IAuthUser): Promise<AxiosResponse<any>> => {
  return apiService.post(ApiEndpoints.Register, variables);
};

export const getAllRecipes = (): Promise<AxiosResponse<IRecipe>> => {
  return apiService.get(ApiEndpoints.Recipes);
};
