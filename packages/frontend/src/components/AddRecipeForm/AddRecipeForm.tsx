import { Formik, FormikProps } from "formik";
import { Button } from "src/common/ui/Button.styled";
import { IRecipe } from "@shared/src/types/recipe.type";
import { FormArrayInput } from "../FormArrayInput/FormArrayInput";
import { FormInput } from "../FormInput/FormInput";
import { PageHeader, StyledForm } from "./AddRecipeForm.styled";
import { AddStep } from "./AddStep";
import { AddRecipeFormPagesWrapper } from "./AddRecipeFormPageWrapper";
import { AddRecipeFormPage } from "./AddRecipeFormPage";
import { useQuery } from "react-query";
import { getAllTags } from "src/services/recipesService";
import { QueryKeys } from "src/enums/queryKeys.enum";
import React from "react";
import { AddRecipeTags } from "./AddRecipeTags";

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
  const handleAddRecipe = (values: IRecipe) => console.log(values);
  const { data } = useQuery(QueryKeys.Tags, getAllTags);
  const tags = data?.data[0];
  return (
    <>
      <PageHeader>Add Recipe</PageHeader>
      <Formik initialValues={initialValues} onSubmit={handleAddRecipe}>
        {({ values, getFieldProps, getFieldMeta }: FormikProps<IRecipe>) => (
          <StyledForm>
            <AddRecipeFormPagesWrapper dataLength={4}>
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
                <AddStep values={values["steps"]} />
              </AddRecipeFormPage>
              <AddRecipeFormPage pageIndex={4}>
                <div>
                  <PageHeader>Tags:</PageHeader>
                  {tags ? <AddRecipeTags tags={tags} /> : null}
                </div>
                <Button variant="secondary" type="submit" width={200}>
                  Add recipe
                </Button>
              </AddRecipeFormPage>
            </AddRecipeFormPagesWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
