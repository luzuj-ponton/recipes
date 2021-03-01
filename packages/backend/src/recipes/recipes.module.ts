import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from './schema/recipe.shema';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { User, UserSchema } from '../user/schema/user.schema';
import { AuthModule } from '../auth/auth.module';
import { RatingModule } from '../rating/rating.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recipe.name, schema: RecipeSchema },
      { name: User.name, schema: UserSchema },
    ]),
    AuthModule,
    RatingModule,
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService],
})
export class RecipesModule {}
