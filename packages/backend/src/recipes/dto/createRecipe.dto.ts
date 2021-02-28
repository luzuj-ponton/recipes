import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Step } from '../recipes.types';

export class RecipeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  prepTimeMax: number;

  @IsNumber()
  prepTimeMin: number;

  @IsNumber()
  servings: number;

  @IsNotEmpty()
  @IsString()
  photoUrl: string;

  @IsNotEmpty()
  @IsArray()
  ingredients: string[];

  @IsNotEmpty()
  @IsArray()
  tags: string[];

  @IsArray()
  steps: Step[];

  @IsString()
  creator: string;
}
