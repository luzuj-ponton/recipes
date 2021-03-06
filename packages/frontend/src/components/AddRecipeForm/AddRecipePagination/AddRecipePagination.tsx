import * as React from "react";
import { IPagesContext, AddRecipeFormPagesWrapperProps } from "./AddRecipeFormPagination.types";

export const PagesContext = React.createContext({} as IPagesContext);

export const AddRecipePagination: React.FC<AddRecipeFormPagesWrapperProps> = ({
  dataLength,
  children,
}) => {
  const [activePage, setActivePage] = React.useState(0);

  const nextPage = React.useCallback(() => {
    if (dataLength > activePage) setActivePage((prev) => prev + 1);
  }, [activePage, dataLength]);
  const previousPage = React.useCallback(() => {
    if (activePage > 0) setActivePage((prev) => prev - 1);
  }, [activePage]);

  const value = React.useMemo(() => {
    return { activePage, previousPage, nextPage, dataLength };
  }, [activePage, dataLength, nextPage, previousPage]);

  return <PagesContext.Provider value={value}>{children}</PagesContext.Provider>;
};
