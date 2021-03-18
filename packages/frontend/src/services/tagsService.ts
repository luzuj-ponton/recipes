import { TagsResponse } from "../../../shared/src/types/responses/tagsResponse.type";
import { AxiosResponse } from "axios";
import { ApiEndpoints } from "src/enums/apiEndpoints.enum";
import { apiService } from ".";

export const getTags = (): Promise<AxiosResponse<TagsResponse[]>> =>
  apiService.get(ApiEndpoints.Tags);
