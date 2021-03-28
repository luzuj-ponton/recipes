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
  creator: string;
  comments: string[];
}

export interface RecipeParameters {
  offset?: number;
  limit?: number;
  fields?: string;
  text?: string;
  tagsArr?: string[];
  sortBy?: string;
  sortType?: number;
}
