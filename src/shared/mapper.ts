import { User } from '@user/users/entities/user.entity';
import { CreateUserDto } from '@user/users/dto/create-user.dto';

export const toUserDto = (data: User): CreateUserDto => {
    const { fullname, password, email } = data;

    let userDto: CreateUserDto = {
        fullname,
        password,
        email
    };

    return userDto;
};