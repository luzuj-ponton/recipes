import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';
import { Exceptions } from '../../../shared/src/enums/exceptions.enum';
import { User } from '../user/schema/user.schema';
import { GetAllQueryOptions } from './types/getAllQueryOptions.type';
import { GetAllRecipesResponse } from '../types/getAllRecipesResponse.type';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async create(createRecipeDto: RecipeDto, user: User): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto);
    user?.recipes.push(createdRecipe);
    user?.save();
    createdRecipe.createdAt = new Date().getTime();
    return await createdRecipe.save();
  }

  async findById(id: string): Promise<RecipeDocument> {
    const recipe = await this.recipeModel.findById(id);
    if (!recipe) {
      throw new HttpException(
        Exceptions.RecipeDoesntExist,
        HttpStatus.BAD_REQUEST,
      );
    }

    return await recipe;
  }

  async editById(recipeDto: RecipeDto, id: string, user: User): Promise<void> {
    const recipeIndex = user.recipes.findIndex(
      (recipe: Recipe) => String(recipe) === id,
    );
    if (recipeIndex === -1) {
      throw new HttpException(
        Exceptions.RecipeDoesntBelongToUser,
        HttpStatus.BAD_REQUEST,
      );
    }

    const recipe = await this.findById(id);
    return await recipe.updateOne(recipeDto);
  }

  async deleteById(id: string, user: User): Promise<Recipe | null> {
    const recipesCopy: Recipe[] = user.recipes || [];
    const recipeIndex = recipesCopy.findIndex(
      (recipe: Recipe) => String(recipe) === id,
    );
    if (recipeIndex !== -1) {
      recipesCopy.splice(recipeIndex, 1);
      user.recipes = recipesCopy;
      user.save();
    } else {
      throw new HttpException(
        Exceptions.RecipeDoesntExist,
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.recipeModel.findByIdAndDelete(id);
  }

  async getAll({
    offset,
    limit,
    fields,
    text,
    tagsArr,
  }: GetAllQueryOptions): Promise<GetAllRecipesResponse> {
    const query: FilterQuery<RecipeDocument> = {};

    if (fields && text) {
      query[fields] = { $regex: text, $options: 'i' };
    }

    if (tagsArr) {
      query.tags = { $all: tagsArr };
    }

    const results: number = await this.recipeModel.find(query).countDocuments();

    const currentRecipes: Recipe[] = await this.recipeModel
      .find(query)
      .skip(Number(offset))
      .limit(Number(limit))
      .exec();

    return {
      recipes: currentRecipes,
      resultsQuantity: results,
    };
  }

  async getUserRecipes(user: User): Promise<Recipe[]> {
    const recipes: Recipe[] = await user
      .populate('recipes')
      .execPopulate()
      .then(function (user) {
        return user.recipes;
      });

    return recipes;
  }
}
