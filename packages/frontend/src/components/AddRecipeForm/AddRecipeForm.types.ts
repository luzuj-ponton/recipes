import { IInnerTags } from "@shared/src/types/recipe.type";

export interface AddRecipeFormPagesWrapperProps {
  dataLength: number;
}
export interface IPagesContext {
  activePage: number;
  dataLength: number;
  previousPage: () => void;
  nextPage: () => void;
}
export interface AddRecipeFormPageProps {
  pageIndex: number;
}

export interface AddRecipeTagsProps {
  tags: IInnerTags;
}
