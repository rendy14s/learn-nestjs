import { Controller, Request, Post, Get } from '@nestjs/common';
import { AuthService } from './middleware/auth/auth.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  async register(@Request() req) {
    return this.authService.register(req.user);
  }
}
