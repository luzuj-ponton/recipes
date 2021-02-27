import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RatingDocument = Rating & Document;

@Schema()
export class Rating extends Document {
  @Prop()
  userId: string;

  @Prop()
  recipeId: string;

  @Prop()
  rating: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
