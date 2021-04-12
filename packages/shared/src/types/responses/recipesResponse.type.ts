import { IRecipe } from "../recipe.type";

export interface RecipesResponse {
  recipes: IRecipe[];
  resultsQuantity: number;
}
