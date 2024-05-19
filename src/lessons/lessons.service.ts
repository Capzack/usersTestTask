import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {LessonEntity} from "./entites/lessons.entity";
import {Repository} from "typeorm";
import {CreateLessonDto} from "./dto/create-lesson.dto";

@Injectable()
export class LessonsService {

    constructor(
        @InjectRepository(LessonEntity)
        private readonly lessonRepository: Repository<LessonEntity>
    ) {}

    async getAll(){
        const lessons = await this.lessonRepository.find({
            relations: {
                evaluations: {
                  user: true,
                },
            }
        });
        return lessons
    }

    async createOne(createLesson: CreateLessonDto){
        const lesson = this.lessonRepository.create(createLesson);
        await this.lessonRepository.save(lesson)
        return lesson
    }
}
