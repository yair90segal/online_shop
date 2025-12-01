import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserLocalDto } from './dto/createUserLocal.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body('user') createUserDto: CreateUserLocalDto) {
    return await this.userService.createUser(createUserDto);
  }
}
