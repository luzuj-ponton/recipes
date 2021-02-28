import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { Recipe } from './schema/recipe.shema';
import { RecipeDto } from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';
import { RecipesParams } from './recipes.types';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../decorators/auth-user.decorator';
import { User } from '../user/schema/user.schema';
import { GetAllQueryOptions } from './types/getAllQueryOptions.type';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @UseGuards(AuthGuard())
  @Get('user')
  async getUserRecipes(@GetUser() user: User): Promise<Recipe[]> {
    return await this.recipesService.getUserRecipes(user);
  }

  @Get()
  async getAll(@Query() queries: GetAllQueryOptions): Promise<Recipe[]> {
    return await this.recipesService.getAll(queries);
  }

  @Get(':id')
  async getOne(@Param() params: RecipesParams): Promise<Recipe> {
    return await this.recipesService.findById(params.id);
  }

  @UseGuards(AuthGuard())
  @Patch(':id')
  async updateOne(
    @GetUser() user: User,
    @Body() recipeDto: RecipeDto,
    @Param() params: { id: string },
  ): Promise<void> {
    return await this.recipesService.editById(recipeDto, params.id, user);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  async deleteById(
    @GetUser() user: User,
    @Param() params: RecipesParams,
  ): Promise<Recipe | null> {
    return await this.recipesService.deleteById(params.id, user);
  }

  @UseGuards(AuthGuard())
  @Post()
  async createRecipe(
    @Body() recipeDto: RecipeDto,
    @GetUser() user: User,
  ): Promise<Recipe> {
    return await this.recipesService.create(recipeDto, user);
  }
}
