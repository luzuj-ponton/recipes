import { PaginationActions } from "../../paginationActions.enum";

export interface SetPageAction {
  type: PaginationActions.SetPage;
  payload: number;
}

export interface SetMaxPagesAction {
  type: PaginationActions.SetMaxPages;
  payload: number;
}

export interface SetFilterTextAction {
  type: PaginationActions.SetFilterText;
  payload: string;
}

export interface SetTagsArrAction {
  type: PaginationActions.SetTagsArr;
  payload: string[];
}

export interface SetSortByAction {
  type: PaginationActions.SetSortBy;
  payload: string;
}

export interface SetSortTypeAction {
  type: PaginationActions.SetSortType;
  payload: number;
}

export type PaginationAction =
  | SetPageAction
  | SetMaxPagesAction
  | SetFilterTextAction
  | SetTagsArrAction
  | SetSortByAction
  | SetSortTypeAction;
