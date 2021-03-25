import React, { Fragment, useState } from "react";
import {
  Wrapper,
  Title,
  Tag,
  RecipeTypeWrapper,
  RecipeType,
  Icon,
  TagsWrapper,
} from "./Accordion.styled";
import { useTags } from "src/services/hooks/useTags";
import plus from "src/assets/images/plus.svg";
import minus from "src/assets/images/minus.svg";
import { usePaginationContext } from "src/Views/Home/Pagination/hooks/usePaginationContext";
import { setTagsArr } from "src/Views/Home/Pagination/reducer/actions/pagination.actions";

export const Accordion: React.FC = () => {
  const [activeGroups, setActiveGroups] = useState<string[]>([]);
  const [state, dispatch] = usePaginationContext();

  const { data } = useTags();

  const tagsArrData = data?.data[0].innerTags;

  const toggleOpenRecipeType = (e: React.MouseEvent<HTMLDivElement>) => {
    const tagType = e.currentTarget.innerText;

    if (activeGroups.includes(tagType)) {
      return setActiveGroups((prevState) => prevState.filter((item) => item !== tagType));
    }

    setActiveGroups((prevState) => [...prevState, tagType]);
  };

  const handleClickTag = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const name = e.currentTarget.innerText;

    if (state.tagsArr.includes(name)) {
      return setTagsArr(
        dispatch,
        state.tagsArr.filter((item) => item !== name),
      );
    }

    setTagsArr(dispatch, [...state.tagsArr, name]);
  };

  return (
    <Wrapper>
      <Title>Recipes</Title>
      {tagsArrData?.map((group) => (
        <Fragment key={group.title}>
          <RecipeTypeWrapper onClick={toggleOpenRecipeType}>
            <RecipeType>{group.title}</RecipeType>
            <Icon src={activeGroups.includes(group.title) ? minus : plus} />
          </RecipeTypeWrapper>
          <TagsWrapper isOpen={activeGroups.includes(group.title)}>
            {group.tags.map((tag) => (
              <Tag
                onClick={handleClickTag}
                isActive={state.tagsArr.includes(tag.title)}
                key={tag.title}
              >
                {tag.title}
              </Tag>
            ))}
          </TagsWrapper>
        </Fragment>
      ))}
    </Wrapper>
  );
};
