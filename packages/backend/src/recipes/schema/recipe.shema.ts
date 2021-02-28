import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { RecipeRating } from '../../types/recipeRating.type';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  prepTimeMax: number;

  @Prop()
  prepTimeMin: number;

  @Prop()
  servings: number;

  @Prop()
  photoUrl: string;

  @Prop()
  ingredients: string[];

  @Prop()
  tags: string[];

  @Prop({ type: Object })
  rating: RecipeRating;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  creator: Types.ObjectId;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
