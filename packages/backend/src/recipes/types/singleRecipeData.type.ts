import { RecipeRating } from 'src/types/recipeRating.type';
import { Recipe } from '../schema/recipe.shema';

export interface SingleRecipeData {
  recipe: Recipe;
  rating: RecipeRating;
}
