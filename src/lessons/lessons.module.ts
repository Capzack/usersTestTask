import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LessonEntity} from "./entites/lessons.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonEntity])
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService]
})
export class LessonsModule {}
