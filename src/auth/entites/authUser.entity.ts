import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('auth users')
export class AuthUserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    login: string;

    @Column({length: 20})
    pass: string;
}