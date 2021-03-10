import { Dispatch } from "react";
import { PaginationActions } from "../../paginationActions.enum";
import {
  SetTagsArrAction,
  SetFilterTextAction,
  SetMaxPagesAction,
  SetPageAction,
} from "../types/paginationActions.types";

export const setPage = (dispatch: Dispatch<SetPageAction>, page: number) => {
  dispatch({ type: PaginationActions.SetPage, payload: page });
};

export const setMaxPages = (dispatch: Dispatch<SetMaxPagesAction>, maxPages: number) => {
  dispatch({ type: PaginationActions.SetMaxPages, payload: maxPages });
};

export const setFilterText = (dispatch: Dispatch<SetFilterTextAction>, filterText: string) => {
  dispatch({ type: PaginationActions.SetFilterText, payload: filterText });
};

export const setTagsArr = (dispatch: Dispatch<SetTagsArrAction>, tagsArr: string[]) => {
  dispatch({ type: PaginationActions.SetTagsArr, payload: tagsArr });
};
