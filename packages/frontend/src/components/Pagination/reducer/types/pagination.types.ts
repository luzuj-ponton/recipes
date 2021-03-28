import { PaginationAction } from "./paginationActions.types";

export type PaginationContextType = [
  state: PaginationState,
  dispatch: React.Dispatch<PaginationAction>,
];

export interface PaginationState {
  page: number;
  limit: number;
  offset: number;
  maxPages: number;
  field: string;
  filterText: string;
  tagsArr: string[];
  sortBy: string;
  sortType: number;
}
