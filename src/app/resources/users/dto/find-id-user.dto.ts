import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindIdUserDto {

    @ApiProperty()
    id: string
}
