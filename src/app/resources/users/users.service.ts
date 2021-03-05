import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from '@shared/mapper';
import { comparePasswords } from '@shared/utils';
import { User } from '@user/users/entities/user.entity';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindIdUserDto } from './dto/find-id-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto, 'User Service');

    const user: User = await this.userRepo.create(createUserDto);

    await this.userRepo.save(user);

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(options?: object): Promise<CreateUserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async loginLogic({ email, password }: LoginUserDto): Promise<CreateUserDto> {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credential', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async getOneTodo(id: string): Promise<FindIdUserDto> {
    const findUser = await this.userRepo.findOne({
      where: { id },
    });

    if (!findUser) {
      throw new HttpException(
        `findUser list doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toUserDto(findUser);
  }
}
