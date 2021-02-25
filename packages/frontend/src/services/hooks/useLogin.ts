import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { Routes } from "src/enums/routes.enum";
import { StorageKeys } from "src/enums/storageKeys.enum";
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { configureApi } from "..";
import { IAuthCredentials } from "../../../../shared/src/types/auth.type";
import { loginUser } from "../authServices";

export const useLogin = () => {
  const history = useHistory();
  const [, setValue] = useLocalStorage(StorageKeys.Token);
  const mutation = useMutation(loginUser, {
    onSuccess: ({ data }) => {
      setValue(StorageKeys.Token, data.accessToken);
      configureApi(data.accessToken);
      history.push(Routes.Home);
    },
  });
  const userLogin = (variables: IAuthCredentials) => mutation.mutate(variables);

  return userLogin;
};
