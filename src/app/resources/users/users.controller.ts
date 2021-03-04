import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppService } from './../../../app.service'

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
