
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './middleware/auth/auth.service';
import { LocalAuthGuard } from './middleware/local-auth.guard';
import { JwtAuthGuard } from './middleware/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}