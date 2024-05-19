import {IsNotEmpty, IsNumberString, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SetEvaluationsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    @MaxLength(2)
    readonly score: string;
}