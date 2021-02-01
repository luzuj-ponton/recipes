import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUserDto';
import { UsersService } from 'src/user/users.service';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    this.usersService.register(createUserDto);
  }
}
