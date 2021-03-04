import { Injectable } from '@nestjs/common';
import { UsersService } from '@user/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@user/users/dto/create-user.dto';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '@user/users/dto/login-user.dto';
import { UserDto } from '@user/users/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
        console.log(userDto, 'Auth Service')
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };

        try {
            await this.usersService.create(userDto);
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }

        return status;
    }

    async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
        // find user in db
        const user = await this.usersService.loginLogic(loginUserDto);

        // generate and sign token
        const token = this._createToken(user);

        return {
            email: user.email,
            ...token,
        };
    }

    private _createToken({ email }: UserDto): any {
        const expiresIn = process.env.EXPIRESIN;

        const user: JwtPayload = { email };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn,
            accessToken,
        };
    }
}
