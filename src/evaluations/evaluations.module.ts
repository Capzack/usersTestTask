import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EvaluationsEntity} from "./entities/evaluations.entity";
import {UserEntity} from "../user/entities/user.entity";
import {LessonEntity} from "../lessons/entites/lessons.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([EvaluationsEntity, UserEntity, LessonEntity])
  ],
  providers: [EvaluationsService],
  controllers: [EvaluationsController],
})
export class EvaluationsModule {}
