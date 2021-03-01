import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tags, TagsSchema } from './schema/tags.shema';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tags.name, schema: TagsSchema }]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
