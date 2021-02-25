import { IAuthCredentials, ILogin } from "../../../shared/src/types/auth.type";
import { AxiosResponse } from "axios";
import { apiService } from ".";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";

export const registerUser = (variables: IAuthCredentials): Promise<AxiosResponse<undefined>> =>
  apiService.post(ApiEndpoints.Register, variables);

export const loginUser = (variables: IAuthCredentials): Promise<AxiosResponse<ILogin>> =>
  apiService.post(ApiEndpoints.Login, variables);
