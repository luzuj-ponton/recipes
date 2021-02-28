import * as React from "react";
import { IPagesContext, AddRecipeFormPagesWrapperProps } from "./AddRecipeForm.types";

export const PagesContext = React.createContext({} as IPagesContext);

export const AddRecipeFormPagesWrapper: React.FC<AddRecipeFormPagesWrapperProps> = ({
  dataLength,
  children,
}) => {
  const [activePage, setActivePage] = React.useState(0);

  const nextPage = () => {
    if (dataLength > activePage) setActivePage((prev) => prev + 1);
  };
  const previousPage = () => {
    if (activePage > 0) setActivePage((prev) => prev - 1);
  };
  return (
    <PagesContext.Provider value={{ activePage, previousPage, nextPage, dataLength }}>
      {children}
    </PagesContext.Provider>
  );
};
