import React from "react";
import { PaginationContextType } from "./types/pagination.types";

export const PaginationContext = React.createContext<PaginationContextType>(
  {} as PaginationContextType,
);
