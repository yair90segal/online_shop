import { Injectable } from '@nestjs/common';
import { CreateUserLocalDto } from './dto/createUserLocal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

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

    return await this.userRepository.save(newUser);
  }
}
