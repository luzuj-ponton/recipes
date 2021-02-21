import { IAuthUser } from "../../../../shared/src/types/auth.type";

export interface IAccountVerificationFormProps {
  onSubmit(variables: IAuthUser): void;
  buttonText: string;
  titleText: string;
}

export type AccountVerificationsValues = {
  email: string;
  password: string;
};
