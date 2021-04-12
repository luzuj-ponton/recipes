import { PaginationActions } from "../paginationActions.enum";
import { PaginationState } from "./types/pagination.types";
import { PaginationAction } from "./types/paginationActions.types";

export const initialState: PaginationState = {
  page: 1,
  limit: 12,
  maxPages: 0,
  field: "title",
  filterText: "",
  tagsArr: [],
  sortBy: "date",
  sortType: -1,
};

export const paginationReducer = (state: PaginationState, action: PaginationAction) => {
  switch (action.type) {
    case PaginationActions.SetPage:
      return { ...state, page: action.payload };
    case PaginationActions.SetMaxPages:
      return { ...state, maxPages: action.payload };
    case PaginationActions.SetFilterText:
      return { ...state, filterText: action.payload, page: 1 };
    case PaginationActions.SetTagsArr:
      return { ...state, tagsArr: action.payload, page: 1 };
    case PaginationActions.SetSort:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortType: action.payload.sortType,
        page: 1,
      };
    default:
      return state;
  }
};
