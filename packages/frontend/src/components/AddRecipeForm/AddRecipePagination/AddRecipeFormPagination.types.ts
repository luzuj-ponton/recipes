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
