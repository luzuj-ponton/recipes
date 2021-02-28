import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RatingDto } from './dto/rating.dto';
import { Rating, RatingDocument } from './schema/rating.schema';
import { Exceptions } from '@recipes/shared/src/enums/exceptions.enum';
import { RecipeRating } from '../types/recipeRating.type';
import { User } from '../user/schema/user.schema';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
    private recipesService: RecipesService,
  ) {}

  async saveRating(ratingDto: RatingDto, user: User) {
    const recipe = await this.recipesService.findById(ratingDto.recipeId);

    const existingRating = await this.ratingModel.findOne({
      userId: user.id,
    });

    if (existingRating) {
      if (existingRating.userId === user.id) {
        await existingRating.updateOne(ratingDto);
        const newRating = await this.getRecipeRating(recipe.id);
        recipe.rating = newRating;
        await recipe.save();
        return;
      } else {
        throw new HttpException(
          Exceptions.CannotAsingExistingRatingToNewUser,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const rating = new this.ratingModel({ ...ratingDto, userId: user.id });
    const newRating = await rating.save();
    recipe.rating = await this.getRecipeRating(recipe.id);
    recipe.save();
    return newRating;
  }

  async getRecipeRating(recipeId: string): Promise<RecipeRating> {
    const recipeRatings: Rating[] = await this.ratingModel.find({ recipeId });

    if (!recipeRatings) {
      return {
        rating: 0,
        total: 0,
      };
    }

    const rating = await this.sumRatings(recipeRatings);

    return rating;
  }

  private async sumRatings(ratings: Rating[]): Promise<RecipeRating> {
    let ratingsTotal = 0;

    ratings.forEach((rating: Rating) => (ratingsTotal += rating.rating));

    return { rating: ratingsTotal / ratings.length, total: ratings.length };
  }
}
