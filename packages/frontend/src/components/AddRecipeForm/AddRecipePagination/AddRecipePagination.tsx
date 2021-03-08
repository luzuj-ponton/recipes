import * as React from "react";
import { IPagesContext, AddRecipeFormPagesWrapperProps } from "./AddRecipeFormPagination.types";

export const PagesContext = React.createContext({} as IPagesContext);

export const AddRecipePagination: React.FC<AddRecipeFormPagesWrapperProps> = ({
  numberOfPages,
  children,
}) => {
  const [activePage, setActivePage] = React.useState(0);

  const nextPage = React.useCallback(() => {
    if (numberOfPages > activePage) setActivePage((prev) => prev + 1);
  }, [activePage, numberOfPages]);
  const previousPage = React.useCallback(() => {
    if (activePage > 0) setActivePage((prev) => prev - 1);
  }, [activePage]);

  const value = React.useMemo(() => {
    return { activePage, previousPage, nextPage, numberOfPages };
  }, [activePage, numberOfPages, nextPage, previousPage]);

  return <PagesContext.Provider value={value}>{children}</PagesContext.Provider>;
};
