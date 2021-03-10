import { PaginationAction } from "./paginationActions.types";

export type PaginationContextType = [
  state: PaginationState,
  dispatch: React.Dispatch<PaginationAction>,
];

export interface PaginationState {
  page: number;
  limit: number;
  maxPages: number;
  field: string;
  filterText: string;
  tagsArr: string[];
}
