import { Controller, Request, Post, Get } from '@nestjs/common';
import { AuthService } from './middleware/auth/auth.service';
import { UsersService } from '@user/users/users.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
