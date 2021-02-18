export interface IAccountVerificationFormProps {
  onSubmit(): void;
  buttonText: string;
  titleText: string;
}

export type AccountVerificationsValues = {
  email: string;
  password: string;
};
