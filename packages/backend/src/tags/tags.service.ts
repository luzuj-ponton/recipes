import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTagsDto } from './dto/createTags.dto';
import { Tags, TagsDocument } from './schema/tags.shema';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tags.name) private tagsModel: Model<TagsDocument>) {}

  async getAllTags(): Promise<Tags[]> {
    return await this.tagsModel.find();
  }

  async createTags(createTagsDto: CreateTagsDto): Promise<void> {
    const tags = new this.tagsModel();
    tags.innerTags = createTagsDto.innerTags;

    tags.save();
  }
}
