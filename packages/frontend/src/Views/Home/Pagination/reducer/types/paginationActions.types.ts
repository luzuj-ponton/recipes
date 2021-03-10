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

export type PaginationAction =
  | SetPageAction
  | SetMaxPagesAction
  | SetFilterTextAction
  | SetTagsArrAction;
