import { Body, Controller, Post } from '@nestjs/common';
import { RatingDto } from './dto/rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Post()
  async saveRating(@Body() ratingDto: RatingDto) {
    return await this.ratingService.saveRating(ratingDto);
  }
}
