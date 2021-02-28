import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTagsDto } from './dto/createTags.dto';
import { Tags } from './schema/tags.shema';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get()
  async getAllTags(): Promise<Tags[]> {
    return await this.tagsService.getAllTags();
  }

  @Post()
  async createTags(@Body() createTagsDto: CreateTagsDto): Promise<void> {
    await this.tagsService.createTags(createTagsDto);
  }
}
