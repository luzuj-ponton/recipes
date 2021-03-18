import { PaginationActions } from "../paginationActions.enum";
import { PaginationState } from "./types/pagination.types";
import { PaginationAction } from "./types/paginationActions.types";

export const initialState: PaginationState = {
  page: 0,
  limit: 12,
  offset: 0,
  maxPages: 0,
  field: "title",
  filterText: "",
  tagsArr: [],
  sortBy: "date",
  sortType: -1,
};

export function paginationReducer(state: PaginationState, action: PaginationAction) {
  switch (action.type) {
    case PaginationActions.SetPage:
      return { ...state, page: action.payload, offset: action.payload * state.limit };
    case PaginationActions.SetMaxPages:
      return { ...state, maxPages: action.payload };
    case PaginationActions.SetFilterText:
      return { ...state, filterText: action.payload, offset: 0, page: 0 };
    case PaginationActions.SetTagsArr:
      return { ...state, tagsArr: action.payload, offset: 0, page: 0 };
    case PaginationActions.SetSortBy:
      return { ...state, sortBy: action.payload, offset: 0, page: 0 };
    case PaginationActions.SetSortType:
      return { ...state, sortType: action.payload, offset: 0, page: 0 };
    default:
      return state;
  }
}
