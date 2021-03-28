import { useContext } from "react";
import { PaginationContext } from "../reducer/pagination.context";

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error("You cannot use PaginationContext outside Pagination component");
  }
  return context;
};
