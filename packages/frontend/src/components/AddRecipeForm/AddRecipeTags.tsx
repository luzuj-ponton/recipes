import React from "react";
import { AddRecipeTagsProps } from "./AddRecipeForm.types";
import { Label, Input, TagGroupWrapper, TagWrapper, Wrapper } from "./AddRecipeTags.styled";

export const AddRecipeTags: React.FC<AddRecipeTagsProps> = ({ tags: { innerTags } }) => {
  return (
    <Wrapper>
      {innerTags.map(({ title: tagGroupTitle, tags: tagsGroup }) => (
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
