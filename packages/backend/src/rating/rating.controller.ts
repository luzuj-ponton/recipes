import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../decorators/auth-user.decorator';
import { User } from '../user/schema/user.schema';
import { RatingDto } from './dto/rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @UseGuards(AuthGuard())
  @Post()
  async saveRating(@GetUser() user: User, @Body() ratingDto: RatingDto) {
    return await this.ratingService.saveRating(ratingDto, user);
  }
}
