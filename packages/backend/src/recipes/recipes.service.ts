import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async create(createRecipeDto: RecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto);
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
}
