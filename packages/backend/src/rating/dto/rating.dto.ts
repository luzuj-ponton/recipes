import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RatingDto {
  @IsNotEmpty()
  @IsString()
  recipeId: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;
}
