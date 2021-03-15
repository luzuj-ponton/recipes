import { SortType } from './types/getAllQueryOptions.type';

export interface RecipesParams {
  id: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface SortQuery {
  createdAt?: SortType;
  'rating.rating'?: SortType;
}
