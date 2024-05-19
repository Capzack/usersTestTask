import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {EvaluationsEntity} from "./entities/evaluations.entity";
import {Repository} from "typeorm";
import {SetEvaluationsDto} from "../lessons/dto/set-evaluations.dto";
import {UserEntity} from "../user/entities/user.entity";
import {LessonEntity} from "../lessons/entites/lessons.entity";

@Injectable()
export class EvaluationsService {
    constructor(
        @InjectRepository(EvaluationsEntity)
        private readonly evaluationsRepository: Repository<EvaluationsEntity>,

        @InjectRepository(UserEntity)
        private readonly userEntity: Repository<UserEntity>,

        @InjectRepository(LessonEntity)
        private readonly lessonEntity: Repository<LessonEntity>
    ) {}

    async setEvaluations(lessonId: number, evaluationDto: SetEvaluationsDto):Promise<EvaluationsEntity>{
        const [user, lesson] = await Promise.all([
            this.userEntity.findOne({where: {id: +evaluationDto.user_id}}),
            this.lessonEntity.findOne({where: {id: lessonId}})
        ])
        if(!user){
            throw new NotFoundException("User not found");
        }
        if(!lesson) {
            throw new NotFoundException("Lesson not found");
        }
        console.log(user, lesson)
        const evaluation = this.evaluationsRepository.create({
            score: +evaluationDto.score,
            user: {id: +evaluationDto.user_id},
            lesson: {id: lessonId},
        })
        await this.evaluationsRepository.save(evaluation)
        return evaluation
    }
}
