import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsEmail()
  fullname: string;

  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  password: string;
}
