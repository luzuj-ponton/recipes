export type alignTypes = "center" | "flex-start" | "flex-end" | "space-between" | "space-evenly";

export type justifyTypes = "center" | "flex-start" | "flex-end" | "space-between" | "space-evenly";

export type FlexDirectionType = "row" | "column";

export type ContainerProps = {
  align?: alignTypes;
  justify?: justifyTypes;
  direction?: FlexDirectionType;
};
