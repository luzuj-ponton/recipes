import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';
import { UsersService } from '../user/users.service';
import { Exceptions } from '../../../shared/src/enums/exceptions.enum';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    private userService: UsersService,
  ) {}

  async create(createRecipeDto: RecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto);
    const user = await this.userService.findById(createRecipeDto.creator);
    user?.recipes.push(createdRecipe);
    user?.save();
    return await createdRecipe.save();
  }

  async findById(id: string): Promise<Recipe | null> {
    return await this.recipeModel.findById(id);
  }

  async editById(recipeDto: RecipeDto): Promise<Recipe | null> {
    return await this.recipeModel.updateOne(recipeDto);
  }

  async deleteById(id: string): Promise<Recipe | null> {
    return await this.recipeModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<Recipe[]> {
    return await this.recipeModel.find();
  }

  async getUserRecipes(id: string): Promise<Recipe[]> {
    const user = await this.userService.findById(id);

    if (!user) {
      throw new HttpException(
        Exceptions.UserDosentExists,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const recipes: Recipe[] = await user
      .populate('recipes')
      .execPopulate()
      .then(function (user) {
        return user.recipes;
      });

    return recipes;
  }
}
