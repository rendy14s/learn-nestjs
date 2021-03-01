
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    password: string;

    @Column()
    createAt: Timestamp;

    @Column()
    updateAt: Timestamp;
}
