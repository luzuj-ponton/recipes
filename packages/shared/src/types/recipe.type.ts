export interface IRecipe {
  ingredients: string[];
  _id: string;
  title: string;
  description: string;
  prepTimeMax: number;
  prepTimeMin: number;
  servings: number;
  photoUrl: string;
  rating: {
    rating: number;
    total: number;
  };
  tags: string[];
}

export interface RecipesResponse {
  recipes: IRecipe[];
  resultsQuantity: number;
}
