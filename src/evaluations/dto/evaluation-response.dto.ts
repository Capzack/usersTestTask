import {EvaluationsEntity} from "../entities/evaluations.entity";
import {ApiProperty} from "@nestjs/swagger";

export class EvaluationResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    score: string;
    constructor(evaluation: EvaluationsEntity) {
        this.id = evaluation.lesson.id.toString()
        this.user_id = evaluation.user.id.toString()
        this.score = evaluation.score.toString()
    }
}