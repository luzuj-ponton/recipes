import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InnerTags } from 'src/types/innerTags.type';

export type TagsDocument = Tags & Document;

@Schema()
export class Tags {
  @Prop()
  innerTags: InnerTags[];
}

export const TagsSchema = SchemaFactory.createForClass(Tags);
