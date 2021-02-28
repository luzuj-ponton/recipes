import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from '../recipes/schema/recipe.shema';
import { AuthModule } from '../auth/auth.module';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { Rating, RatingSchema } from './schema/rating.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Rating.name, schema: RatingSchema },
      { name: Recipe.name, schema: RecipeSchema },
    ]),
  ],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingModule {}
