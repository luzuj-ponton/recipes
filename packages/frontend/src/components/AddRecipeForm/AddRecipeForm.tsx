import { Formik, FormikProps } from "formik";
import { Button } from "src/common/ui/Button.styled";
import { IRecipe } from "@shared/src/types/recipe.type";
import { FormArrayInput } from "../FormArrayInput/FormArrayInput";
import { FormInput } from "../FormInput/FormInput";
import { PageHeader, StyledForm, TagsWrapper } from "./AddRecipeForm.styled";
import { AddStep } from "./AddStep/AddStep";
import { AddRecipePagination } from "./AddRecipePagination/AddRecipePagination";
import { AddRecipeFormPage } from "./AddRecipePagination/AddRecipeFormPage";
import React from "react";
import { AddRecipeTags } from "./AddRecipeTags/AddRecipeTags";
import { useMutation } from "react-query";
import { addRecipe } from "src/services/recipesService";

const recipeFormData = [
  [
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    { label: "Image (url)", key: "photoUrl" },
  ],
  [
    { label: "Minimum prep. time (mins.)", key: "prepTimeMin" },
    { label: "Maximum prep. time (mins.)", key: "prepTimeMax" },
    { label: "Servings", key: "servings" },
  ],
];

const initialValues: IRecipe = {
  title: "",
  description: "",
  prepTimeMax: 60,
  prepTimeMin: 10,
  servings: 2,
  photoUrl: "",
  ingredients: [],
  steps: [],
  tags: [],
};

export const AddRecipeForm: React.FC = () => {
  const mutation = useMutation(addRecipe);
  const handleAddRecipe = (values: IRecipe) => mutation.mutate(values);
  return (
    <>
      <PageHeader>Add Recipe</PageHeader>
      <Formik initialValues={initialValues} onSubmit={handleAddRecipe}>
        {({ values, getFieldProps, getFieldMeta }: FormikProps<IRecipe>) => (
          <StyledForm>
            <AddRecipePagination dataLength={4}>
              {recipeFormData.map((page, index) => (
                <AddRecipeFormPage pageIndex={index} key={index}>
                  {page.map(({ key, label }) => (
                    <FormInput
                      key={key}
                      label={label}
                      {...getFieldProps(key)}
                      {...getFieldMeta(key)}
                    />
                  ))}
                </AddRecipeFormPage>
              ))}
              <AddRecipeFormPage pageIndex={2}>
                <FormArrayInput
                  values={values["ingredients"]}
                  label="Ingredients"
                  id="ingredients"
                />
              </AddRecipeFormPage>
              <AddRecipeFormPage pageIndex={3}>
                <AddStep />
              </AddRecipeFormPage>
              <AddRecipeFormPage pageIndex={4}>
                <TagsWrapper>
                  <PageHeader>Tags:</PageHeader>
                  <AddRecipeTags />
                </TagsWrapper>
                <Button variant="secondary" type="submit" width={200}>
                  Add recipe
                </Button>
              </AddRecipeFormPage>
            </AddRecipePagination>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
