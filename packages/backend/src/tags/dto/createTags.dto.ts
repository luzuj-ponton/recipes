import { IsNotEmpty, IsArray } from 'class-validator';
import { InnerTags } from 'src/types/innerTags.type';

export class CreateTagsDto {
  @IsNotEmpty()
  @IsArray()
  innerTags: InnerTags[];
}
