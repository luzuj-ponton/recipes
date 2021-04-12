import React from "react";
import {
  BottomPanelSkeleton,
  ImageSkeleton,
  RecipeNameSkeleton,
  Wrapper,
} from "./LoadingSkeletonCard.styled";

export const LoadingSkeletonCard: React.FC = () => (
  <Wrapper>
    <ImageSkeleton />
    <RecipeNameSkeleton />
    <BottomPanelSkeleton />
  </Wrapper>
);
