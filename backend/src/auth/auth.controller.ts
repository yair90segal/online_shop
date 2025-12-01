import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserLocalDto } from 'src/user/dto/createUserLocal.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  async registerLocal(@Body() dto: CreateUserLocalDto) {
    return await this.auth.registerLocal(dto);
  }

  async login(@Body() body: { identifier: string; password: string }) {
    return this.auth.login(body.identifier, body.password);
  }
}
