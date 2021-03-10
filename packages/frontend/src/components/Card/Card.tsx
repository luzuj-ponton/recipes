import { useState } from "react";
import {
  Wrapper,
  ImageContainer,
  RecipeName,
  BottomPanel,
  RatingWrapper,
  Rating,
  StarIcon,
  HeartIcon,
  Author,
} from "../Card/Card.styled";
import starIcon from "src/assets/images/star.svg";
import heartIcon from "src/assets/images/heart.svg";
import { Routes } from "src/enums/routes.enum";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ id, photoUrl, title, rating, total, author }) => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsFilled(!isFilled);
  };
  return (
    <Wrapper to={`${Routes.Recipe}${id}`}>
      <ImageContainer bgImage={photoUrl}></ImageContainer>
      <HeartIcon src={heartIcon} $isFilled={isFilled} onClick={(e) => toggleFill(e)} />

      <RecipeName>{title}</RecipeName>
      <BottomPanel>
        {rating && total ? (
          <RatingWrapper>
            <StarIcon src={starIcon} />
            <Rating>{rating.toFixed(2)}</Rating>
            <Rating>{total.toFixed()}</Rating>
          </RatingWrapper>
        ) : null}

        <Author>by John Keller</Author>
      </BottomPanel>
    </Wrapper>
  );
};
