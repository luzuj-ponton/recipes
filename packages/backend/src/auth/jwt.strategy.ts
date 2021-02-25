import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Exceptions } from '../../../shared/src/enums/exceptions.enum';
import { User, UserDocument } from '../user/schema/user.schema';
import { JwtPayload } from './types/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'XMSnt876PjKwC',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userModel.findOne({ email: payload.email });
    if (!user) {
      new UnauthorizedException(Exceptions.InvalidCredentials);
    }

    return user;
  }
}
