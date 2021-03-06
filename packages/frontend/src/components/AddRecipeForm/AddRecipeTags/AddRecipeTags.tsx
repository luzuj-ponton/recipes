import React from "react";
import { useQuery } from "react-query";
import { QueryKeys } from "src/enums/queryKeys.enum";
import { getAllTags } from "src/services/recipesService";
import { Label, Input, TagGroupWrapper, TagWrapper, Wrapper } from "./AddRecipeTags.styled";

export const AddRecipeTags: React.FC = () => {
  const { data } = useQuery(QueryKeys.Tags, getAllTags);
  const tags = data?.data?.[0].innerTags;
  return (
    <Wrapper>
      {tags?.map(({ title: tagGroupTitle, tags: tagsGroup }) => (
        <div key={tagGroupTitle}>
          <p>{tagGroupTitle}:</p>
          <TagGroupWrapper>
            {tagsGroup.map(({ title }) => (
              <TagWrapper>
                <Input type="checkbox" name="tags" value={title} id={title} />
                <Label htmlFor={title} key={title}>
                  {title}
                </Label>
              </TagWrapper>
            ))}
          </TagGroupWrapper>
        </div>
      ))}
    </Wrapper>
  );
};
