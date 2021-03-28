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
import { useTags } from "@services/hooks/useTags";
import plus from "src/assets/images/plus.svg";
import minus from "src/assets/images/minus.svg";
import { usePaginationContext } from "src/components/Pagination/hooks/usePaginationContext";
import { setTagsArr } from "@components/Pagination/reducer/actions/pagination.actions";

export const Accordion: React.FC = () => {
  const [activeGroups, setActiveGroups] = useState<string[]>([]);
  const [state, dispatch] = usePaginationContext();

  const { data } = useTags();

  const tagsArrData = data?.data[0].innerTags;

  const toggleOpenRecipeType = (e: React.MouseEvent<HTMLDivElement>) => {
    const tagTypeId = e.currentTarget.id;

    if (activeGroups.includes(tagTypeId)) {
      return setActiveGroups((prevState) => prevState.filter((item) => item !== tagTypeId));
    }

    setActiveGroups((prevState) => [...prevState, tagTypeId]);
  };

  const handleClickTag = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const tagId = e.currentTarget.id;

    if (state.tagsArr.includes(tagId)) {
      return setTagsArr(
        dispatch,
        state.tagsArr.filter((item) => item !== tagId),
      );
    }

    setTagsArr(dispatch, [...state.tagsArr, tagId]);
  };

  return (
    <Wrapper>
      <Title>Recipes</Title>
      {tagsArrData?.map((group) => (
        <Fragment key={group.title}>
          <RecipeTypeWrapper id={group.title} onClick={toggleOpenRecipeType}>
            <RecipeType>{group.title}</RecipeType>
            <Icon src={activeGroups.includes(group.title) ? minus : plus} />
          </RecipeTypeWrapper>
          <TagsWrapper isOpen={activeGroups.includes(group.title)}>
            {group.tags.map((tag) => (
              <Tag
                id={tag.title}
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
