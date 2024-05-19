import {Body, Controller, Get, HttpStatus, Post} from '@nestjs/common';
import {LessonsService} from "./lessons.service";
import {CreateLessonDto} from "./dto/create-lesson.dto";
import {ApiOperation, ApiResponse, OmitType} from "@nestjs/swagger";
import {LessonEntity} from "./entites/lessons.entity";

@Controller('lessons')
export class LessonsController{
    constructor(
        private readonly lessonsService: LessonsService,
    ) {}


    @ApiOperation({ summary: "Everything about lesson"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: LessonEntity, isArray: true})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request"})
    @Get()
    async getAll(){
        return this.lessonsService.getAll()
    }

    @ApiOperation({ summary: "Create a lesson"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: OmitType(LessonEntity, ['evaluations'])})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request"})
    @Post()
    async create(@Body() lesson: CreateLessonDto){
        return this.lessonsService.createOne(lesson)
    }
}