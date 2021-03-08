export interface AddRecipeFormPagesWrapperProps {
  numberOfPages: number;
}

export interface IPagesContext {
  activePage: number;
  numberOfPages: number;
  previousPage: () => void;
  nextPage: () => void;
}

export interface AddRecipeFormPageProps {
  pageIndex: number;
}

export interface PageProps {
  active: boolean;
}
