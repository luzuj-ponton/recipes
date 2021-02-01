import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Recipe } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';
import { RecipesParams } from './recipes.types';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get(':id')
  async getOne(@Param() params: RecipesParams): Promise<Recipe | null> {
    return await this.recipesService.findById(params.id);
  }

  @Get()
  async getAll(): Promise<Recipe[]> {
    return await this.recipesService.getAll();
  }

  @Patch(':id')
  async updateOne(@Body() recipeDto: RecipeDto): Promise<Recipe | null> {
    return await this.recipesService.editById(recipeDto);
  }

  @Delete(':id')
  async deleteById(@Param() params: RecipesParams): Promise<Recipe | null> {
    return await this.recipesService.deleteById(params.id);
  }

  @Post()
  async createRecipe(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return await this.recipesService.create(recipeDto);
  }
}
