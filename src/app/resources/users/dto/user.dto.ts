import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
    
    @IsNotEmpty()
    @IsEmail()
    fullname: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    password: string;
    
}