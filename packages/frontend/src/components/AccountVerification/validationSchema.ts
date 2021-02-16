import * as Yup from "yup";

export const accountValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Must be 8 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"), //Add i18n
  email: Yup.string().email("Invalid email address").required("Required"), //Add i18n
});
