export interface Value {
  sortBy: "date" | "rating";
  sortType: 1 | -1;
}

export interface Option {
  value: Value;
  text: string;
}
