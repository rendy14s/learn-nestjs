import { User } from '@user/users/entities/user.entity';
import { CreateUserDto } from '@user/users/dto/create-user.dto';

export const toUserDto = (data: User): CreateUserDto => {
    const { id, username, password, email } = data;

    let userDto: CreateUserDto = {
        id,
        username,
        password,
        email
    };

    return userDto;
};