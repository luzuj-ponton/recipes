import { PaginationActions } from "../paginationActions.enum";
import { PaginationState } from "./types/pagination.types";
import { PaginationAction } from "./types/paginationActions.types";

export const initialState: PaginationState = {
  page: 0,
  limit: 12,
  maxPages: 0,
  field: "title",
  filterText: "",
  tagsArr: [],
};

export function reducer(state: PaginationState, action: PaginationAction) {
  switch (action.type) {
    case PaginationActions.SetPage:
      return { ...state, page: action.payload };
    case PaginationActions.SetMaxPages:
      return { ...state, maxPages: action.payload };
    case PaginationActions.SetFilterText:
      return { ...state, filterText: action.payload };
    case PaginationActions.SetTagsArr:
      return { ...state, tagsArr: action.payload };
    default:
      return state;
  }
}
