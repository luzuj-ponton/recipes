import React, { useReducer, useMemo } from "react";
import { PaginationContext } from "./reducer/pagination.context";
import { initialState, reducer } from "./reducer/pagination.reducer";
import { PaginationContextType } from "./reducer/types/pagination.types";

export const Pagination: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: PaginationContextType = useMemo(() => [state, dispatch], [state, dispatch]);

  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>;
};
