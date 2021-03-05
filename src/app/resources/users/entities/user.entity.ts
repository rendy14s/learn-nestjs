import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({
        type: 'int',
        nullable: false,
        primary: true
    })

    fullname: string;
    @Column({
        type: 'varchar',
        nullable: false,
        select: false
    })

    password: string;
    @Column({
        type: 'varchar',
        nullable: false
    })

    email: string;

    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

}
