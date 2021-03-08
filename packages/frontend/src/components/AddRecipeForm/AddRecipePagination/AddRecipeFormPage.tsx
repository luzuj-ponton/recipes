import React, { useContext } from "react";
import { Button } from "src/common/ui/Button.styled";
import { ButtonsWrapper, Page, ContentWrapper } from "./AddRecipeFormPage.styled";
import { AddRecipeFormPageProps } from "./AddRecipeFormPagination.types";
import { PagesContext } from "./AddRecipePagination";

export const AddRecipeFormPage: React.FC<AddRecipeFormPageProps> = ({ children, pageIndex }) => {
  const { activePage, previousPage, nextPage, numberOfPages } = useContext(PagesContext);
  const previousButtonDisabled = pageIndex === 0;
  const nextButtonDisabled = numberOfPages === activePage;
  return (
    <Page active={activePage === pageIndex}>
      <ContentWrapper>{children}</ContentWrapper>
      <ButtonsWrapper>
        <Button
          variant="secondary"
          type="button"
          width={100}
          onClick={previousPage}
          disabled={previousButtonDisabled}
        >
          &larr;
        </Button>
        <Button
          variant="secondary"
          type="button"
          width={100}
          onClick={nextPage}
          disabled={nextButtonDisabled}
        >
          &rarr;
        </Button>
      </ButtonsWrapper>
    </Page>
  );
};
