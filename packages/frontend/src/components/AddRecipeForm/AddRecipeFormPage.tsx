import { useContext } from "react";
import { Button } from "src/common/ui/Button.styled";
import { Page, ButtonsWrapper } from "./AddRecipeForm.styled";
import { AddRecipeFormPageProps } from "./AddRecipeForm.types";
import { PagesContext } from "./AddRecipeFormPageWrapper";

export const AddRecipeFormPage: React.FC<AddRecipeFormPageProps> = ({ children, pageIndex }) => {
  const { activePage, previousPage, nextPage, dataLength } = useContext(PagesContext);
  return (
    <Page active={activePage === pageIndex}>
      {children}
      <ButtonsWrapper>
        <Button
          variant="secondary"
          type="button"
          width={200}
          onClick={previousPage}
          disabled={pageIndex === 0}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          type="button"
          width={200}
          onClick={nextPage}
          disabled={dataLength === activePage}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </Page>
  );
};
