import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Recipe } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';
import { RecipesParams } from './recipes.types';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard())
  @Patch(':id')
  async updateOne(
    @Body() recipeDto: RecipeDto,
    @Param() params: { id: string },
  ): Promise<void> {
    return await this.recipesService.editById(recipeDto, params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params: RecipesParams): Promise<Recipe | null> {
    return await this.recipesService.deleteById(params.id);
  }

  @UseGuards(AuthGuard())
  @Post()
  async createRecipe(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return await this.recipesService.create(recipeDto);
  }

  @UseGuards(AuthGuard())
  @Get('user/:id')
  async getUserRecipes(@Param() user: { id: string }): Promise<Recipe[]> {
    return await this.recipesService.getUserRecipes(user.id);
  }
}
