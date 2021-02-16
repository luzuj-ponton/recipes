import { FieldInputProps, FieldMetaProps } from "formik";

export interface FormInputProps extends FieldInputProps<string>, FieldMetaProps<string> {
  label: string;
}
