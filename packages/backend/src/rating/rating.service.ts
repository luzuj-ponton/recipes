import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RatingDto } from './dto/rating.dto';
import { Rating, RatingDocument } from './schema/rating.schema';
import { Exceptions } from '@exceptions';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
  ) {}

  async saveRating(ratingDto: RatingDto) {
    const existingRating = await this.ratingModel.findOne({
      userId: ratingDto.userId,
    });

    if (existingRating) {
      if (existingRating.userId === ratingDto.userId) {
        return await existingRating
          .updateOne(ratingDto)
          .then((user) => console.log(user));
      } else {
        throw new HttpException(
          Exceptions.CannotAsingExistingRatingToNewUser,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const rating = new this.ratingModel(ratingDto);
    return await rating.save();
  }
}
