import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exceptions } from '../../../shared/src/enums/exceptions.enum';
import { CreateUserDto } from './dto/createUserDto';
import { User, UserDocument } from './schema/user.schema';
import { LoginUserDto } from './dto/loginUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async register(createUserDto: CreateUserDto): Promise<void> {
    const { email, password } = createUserDto;
    const user = new this.userModel();

    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new ConflictException(Exceptions.UserAlredyExists);
    } else {
      try {
        await user.save();
      } catch {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<void> {
    const correctPass = await this.validateUserPassword(loginUserDto);

    if (!correctPass) {
      throw new UnauthorizedException(Exceptions.InvalidCredentials);
    }
  }

  private async validateUserPassword(
    loginUserDto: LoginUserDto,
  ): Promise<string | null> {
    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({
      email: email,
    });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
