import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  createUser() {
    return 'User was created';
  }
}
