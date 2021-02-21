import { IAuthCredentials } from "../../../../shared/src/types/auth.type";

export interface IAccountVerificationFormProps {
  onSubmit(variables: IAuthCredentials): void;
  buttonText: string;
  titleText: string;
}

export type AccountVerificationsValues = {
  email: string;
  password: string;
};
