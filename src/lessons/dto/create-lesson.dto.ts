import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateLessonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly code: string;
}