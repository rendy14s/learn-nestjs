import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
    id: string;
    @Column({
        type: 'int',
        nullable: false,
        primary: true
    })

    username: string;
    @Column({
        type: 'varchar',
        nullable: false
    })

    password: string;
    @Column({
        type: 'varchar',
        nullable: false
    })
    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    email: string;

}
