import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/createUserDto';
import { LoginUserDto } from '../user/dto/loginUserDto';
import { UsersService } from '../user/users.service';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    return await this.usersService.register(createUserDto);
  }

  @Post('login')
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    return await this.usersService.login(loginUserDto);
  }
}
