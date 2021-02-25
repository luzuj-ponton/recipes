import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/user/schema/user.schema';

export const GetUser = createParamDecorator(
  (_, req): User => {
    return req.user;
  },
);
