import { PaginationActions } from "../paginationActions.enum";
import { PaginationState } from "./types/pagination.types";
import { PaginationAction } from "./types/paginationActions.types";

const resetOffsetPage = {
  offset: 0,
  page: 1,
};

export const initialState: PaginationState = {
  page: 1,
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
      return { ...state, page: action.payload, offset: (action.payload - 1) * state.limit };
    case PaginationActions.SetMaxPages:
      return { ...state, maxPages: action.payload };
    case PaginationActions.SetFilterText:
      return { ...state, filterText: action.payload, ...resetOffsetPage };
    case PaginationActions.SetTagsArr:
      return { ...state, tagsArr: action.payload, ...resetOffsetPage };
    case PaginationActions.SetSortBy:
      return { ...state, sortBy: action.payload, ...resetOffsetPage };
    case PaginationActions.SetSortType:
      return { ...state, sortType: action.payload, ...resetOffsetPage };
    default:
      return state;
  }
}
