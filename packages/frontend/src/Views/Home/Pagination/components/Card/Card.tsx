import { useState } from "react";
import { Wrapper, ImageContainer, RecipeName, BottomPanel, HeartIcon } from "./Card.styled";
import { Rating } from "../Rating/Rating";
import { Routes } from "src/enums/routes.enum";
import { CardProps } from "./Card.types";
import heartIcon from "src/assets/images/heart.svg";

export const Card: React.FC<CardProps> = ({ id, photoUrl, title, rating, total, author }) => {
  // temporary solution, state and toggleFill will be moved to CardsGrid probably after 'adding to favourites' feature will be added

  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsFilled(!isFilled);
  };

  const isRatingAndTotal = !!rating && !!total;

  return (
    <Wrapper to={`${Routes.Recipe}${id}`}>
      <ImageContainer bgImage={photoUrl}></ImageContainer>
      <HeartIcon src={heartIcon} $isFilled={isFilled} onClick={toggleFill} />
      <RecipeName>{title}</RecipeName>
      <BottomPanel>
        {isRatingAndTotal ? <Rating rating={rating} total={total} /> : null}
        <p>{author}</p>
      </BottomPanel>
    </Wrapper>
  );
};
