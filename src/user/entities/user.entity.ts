import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EvaluationsEntity} from "../../evaluations/entities/evaluations.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity('user')
export class UserEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 100})
    name: string;

    @ApiProperty()
    @Column({length: 30})
    email: string;

    @OneToMany(() => EvaluationsEntity, (evaluationsEntity) => evaluationsEntity.lesson)
    evaluations: EvaluationsEntity[]
}