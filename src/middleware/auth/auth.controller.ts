import { Controller, Post, Get, Req, Body, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { CreateUserDto } from '@user/users/dto/create-user.dto';
import { LoginUserDto } from '@user/users/dto/login-user.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from './interfaces/payload.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto,): Promise<RegistrationStatus> {
        console.log(createUserDto, 'Auth Controller');

        const result:
            RegistrationStatus = await this.authService.register(createUserDto,);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
        return await this.authService.login(loginUserDto);
    }

    @Get('whoami')
    @UseGuards(AuthGuard())
    public async testAuth(@Req() req: any): Promise<JwtPayload> {
        return req.user;
    }
}
