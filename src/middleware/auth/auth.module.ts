import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@user/users/users.module';
import { JwtStrategy } from '../jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './../constants';
@Module({
    imports: [
        UsersModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false
        }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {
                expiresIn: jwtConstants.expires
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule, JwtModule]
})

export class AuthModule { }
