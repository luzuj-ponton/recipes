export interface Step {
  title: string;
  description: string;
}
export interface IRecipe {
  ingredients: string[];
  _id?: string;
  title: string;
  description: string;
  prepTimeMax: number;
  prepTimeMin: number;
  servings: number;
  photoUrl: string;
  steps: Step[];
  tags: string[];
}

export interface IInnerTags {
  innerTags: {
    title: string;
    tags: { title: string }[];
  }[];
}
