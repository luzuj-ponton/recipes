import { IAuthCredentials } from "../../../shared/src/types/auth.type";
import { AxiosResponse } from "axios";
import { apiService } from ".";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";

export const registerUser = (variables: IAuthCredentials): Promise<AxiosResponse<any>> =>
  apiService.post(ApiEndpoints.Register, variables);
