
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './middleware/auth/auth.service';
import { LocalAuthGuard } from './middleware/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}