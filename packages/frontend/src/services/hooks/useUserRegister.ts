import { useMutation } from "react-query";
import { registerUser } from "..";

export const useUserRegister = () => {
  const mutation = useMutation(registerUser);
  return mutation;
};
