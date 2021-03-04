import { getConnectionOptions, getConnection } from 'typeorm';
import * as bcrypt from 'bcrypt';

export const comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
};


export const getDbConnectionOptions = async (
    connectionName: string = 'default',
) => {
    const options = await getConnectionOptions(
        process.env.name || 'development',
    );
    return {
        ...options,
        name: connectionName,
    };
};