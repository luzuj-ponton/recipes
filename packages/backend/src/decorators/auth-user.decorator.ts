import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/user/schema/user.schema';

export const GetUser = createParamDecorator(
  (_, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
