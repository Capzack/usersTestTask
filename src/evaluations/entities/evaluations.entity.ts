import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LessonEntity} from "../../lessons/entites/lessons.entity";
import {UserEntity} from "../../user/entities/user.entity";
import {instanceToPlain, Exclude} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

@Entity({name: 'evaluations'})
export class EvaluationsEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    score: number;

    @Exclude({toPlainOnly: true})
    @CreateDateColumn({ name: 'createdAt'})
    createdAt: Date;

    @ManyToOne(() => LessonEntity, (lessonEntity) => lessonEntity.id)
    lesson: LessonEntity

    @ApiProperty({type: () => UserEntity, isArray: true})
    @ManyToOne(() => UserEntity, (userEntity) => userEntity.id)
    user: UserEntity

    toJSON() {
        return instanceToPlain(this);
    }
}


