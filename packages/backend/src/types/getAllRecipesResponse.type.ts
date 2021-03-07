import { Recipe } from 'src/recipes/schema/recipe.shema';

export interface GetAllRecipesResponse {
  recipes: Recipe[];
  resultsQuantity: number;
}
