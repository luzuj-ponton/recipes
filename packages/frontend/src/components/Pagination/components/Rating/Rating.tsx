import React from "react";
import starIcon from "src/assets/images/star.svg";
import { RatingWrapper, Score, StarIcon } from "./Rating.styled";
import { RatingProps } from "./Rating.types";

export const Rating: React.FC<RatingProps> = ({ rating, total }) => (
  <RatingWrapper>
    <StarIcon src={starIcon} />
    <Score>{rating.toFixed(2)}</Score>
    <span>({total.toFixed()})</span>
  </RatingWrapper>
);
