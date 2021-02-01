import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exceptions } from '../../../shared/src/enums/exceptions.enum';
import { CreateUserDto } from './dto/createUserDto';

import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async register(createUserDto: CreateUserDto): Promise<void> {
    const { email, password } = createUserDto;
    const user = new this.userModel();

    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    const existingUser = await this.userModel.findOne(createUserDto);

    if (existingUser) {
      throw new ConflictException(Exceptions.UserAlredyExists);
    } else {
      try {
        user.save();
      } catch {
        throw new InternalServerErrorException();
      }
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
