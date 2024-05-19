import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EvaluationsEntity} from "../../evaluations/entities/evaluations.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity('lesson')
export class LessonEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 100, default: 'Default lesson'})
    name: string;

    @ApiProperty()
    @Column({length: 20, default: 'Default lesson code'})
    code: string;

    @ApiProperty({type: () => EvaluationsEntity, isArray: true})
    @OneToMany(() => EvaluationsEntity, (evaluationsEntity) => evaluationsEntity.lesson)
    evaluations: EvaluationsEntity[]
}
