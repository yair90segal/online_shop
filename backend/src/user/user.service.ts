import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserLocalDto } from './dto/createUserLocal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

export interface UserResponse {
  userId: number;
  token: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(
    createUserDto: CreateUserLocalDto,
  ): Promise<CreateUserLocalDto> {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    const userByEmail = await this.findByEmail(newUser.email);
    const userByUsername = await this.findByUsername(newUser.username);

    if (userByEmail || userByUsername) {
      throw new HttpException(
        'Email or username already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return await this.userRepository.save(newUser);
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
