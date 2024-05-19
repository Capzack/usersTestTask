import {Body, Controller, HttpStatus, Param, Post, UseInterceptors} from '@nestjs/common';
import {SetEvaluationsDto} from "../lessons/dto/set-evaluations.dto";
import {EvaluationsService} from "./evaluations.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {EvaluationResponseDto} from "./dto/evaluation-response.dto";

@Controller('')
export class EvaluationsController {
    constructor(
        private readonly evaluationsService: EvaluationsService
    ) {}

    @ApiOperation({ summary: "Set the user's evaluation for the lesson"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: EvaluationResponseDto})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request",})
    @UseInterceptors()
    @Post('lessons/:id/evaluations')
    async setEvaluations(@Param('id') id: number, @Body() evaluation: SetEvaluationsDto){
        return new EvaluationResponseDto(await this.evaluationsService.setEvaluations(id, evaluation))
    }
}
