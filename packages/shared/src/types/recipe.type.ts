export interface IRecipe {
  ingredients: string[];
  _id: string;
  title: string;
  description: string;
  prepTimeMax: number;
  prepTimeMin: number;
  servings: number;
  photoUrl: string;
}
