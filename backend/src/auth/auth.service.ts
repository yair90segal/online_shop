import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { CreateUserLocalDto } from 'src/user/dto/createUserLocal.dto';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async registerLocal(dto: CreateUserLocalDto) {
    const byUsername = await this.userService.findByUsernameOrEmail(
      dto.username,
    );

    if (byUsername) throw new BadRequestException('Username already exist');

    const user = await this.userService.createUser(dto);

    return await this.buildResponse(user);
  }

  async login(identifier: string, pass: string) {
    const user = await this.userService.findByUsernameOrEmail(identifier);

    if (!user) throw new UnauthorizedException('Invalid username or password');

    const passwordMatch = await compare(pass, user.password);
    if (!passwordMatch)
      throw new UnauthorizedException('Invalid username or password');

    return await this.buildResponse(user);
  }

  async buildResponse(user: UserEntity) {
    const token = await this.jwtService.signAsync({
      sub: user.id,
      role: user.role,
    });

    return {
      userId: user.id,
      token,
    };
  }
}
