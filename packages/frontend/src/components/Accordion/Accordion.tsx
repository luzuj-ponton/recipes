import React, { Fragment, useEffect, useState } from "react";
import {
  Wrapper,
  Title,
  Tag,
  RecipeTypeWrapper,
  RecipeType,
  Icon,
  TagsWrapper,
} from "./Accordion.styled";
import plus from "src/assets/images/plus.svg";
import minus from "src/assets/images/minus.svg";
import { usePaginationContext } from "src/Views/Home/Pagination/hooks/usePaginationContext";
import { setTagsArr } from "src/Views/Home/Pagination/reducer/actions/pagination.actions";
import { recipeTypesArr } from "./config";
import { recipeType } from "src/types/recipeType.types";

export const Accordion = () => {
  const [recipeTypes, setRecipeTypes] = useState<recipeType[]>(recipeTypesArr);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [, dispatch] = usePaginationContext();

  const toggleOpen = (id: number) => {
    setRecipeTypes(
      recipeTypes.map((type) => {
        if (type.id === id) {
          type.isOpen = !type.isOpen;
        }
        return type;
      }),
    );
  };

  useEffect(() => {
    setTagsArr(dispatch, activeTags);
  }, [dispatch, activeTags]);

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const tagText = e.currentTarget.innerText;

    setActiveTags((prevTags) => [...prevTags, tagText]);

    if (activeTags.includes(tagText)) {
      setActiveTags((prevTags) => prevTags.filter((item) => item !== tagText));
    }
  };

  return (
    <Wrapper>
      <Title>Recipes</Title>
      {recipeTypes.map((type) => (
        <Fragment key={type.id}>
          <RecipeTypeWrapper onClick={() => toggleOpen(type.id)}>
            <RecipeType>{type.name}</RecipeType>
            <Icon src={type.isOpen ? `${minus}` : `${plus}`} />
          </RecipeTypeWrapper>
          <TagsWrapper isOpen={type.isOpen}>
            {type.tags.map((tag) => (
              <Tag onClick={handleClick} isActive={activeTags.includes(tag)} key={tag}>
                {tag}
              </Tag>
            ))}
          </TagsWrapper>
        </Fragment>
      ))}
    </Wrapper>
  );
};
