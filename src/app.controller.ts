import { Controller, Get, Post, Req, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from '@user/users/users.service';
import { FindIdUserDto } from '@user/users/dto/find-id-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: string): Promise<FindIdUserDto> {
    return await this.userService.getOneTodo(id);
  }
}
