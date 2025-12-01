import { Injectable } from '@nestjs/common';
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

  async createUser(createUserDto: CreateUserLocalDto) {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    return await this.userRepository.save(newUser);
  }

  async findByUsernameOrEmail(identifier: string) {
    return await this.userRepository.findOne({
      where: [
        {
          username: identifier,
        },
        {
          email: identifier,
        },
      ],
    });
  }
}
