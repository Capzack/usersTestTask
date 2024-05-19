import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginUserDto} from "./dto/login-user.dto";
import {Public} from "./auth.public";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {AccessDataDto} from "./dto/accessData.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: "Login user"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: AccessDataDto})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request"})
    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('login')
    signIn(@Body() loginUserDto: LoginUserDto) {
        return this.authService.signIn(loginUserDto);
    }
}