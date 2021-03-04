import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  fullname: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
