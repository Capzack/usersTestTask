import {Body, Controller, Get, HttpStatus, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {UserEntity} from "./entities/user.entity";

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService,
    ) {}

    @ApiOperation({ summary: "Gives list of all users" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: UserEntity, isArray: true})
    @Get()
    async getAll(): Promise<UserEntity[]>{
        return this.userService.getAll()
    }

    @ApiOperation({ summary: "Creates a user"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: UserEntity})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request",})
    @Post()
    async create(@Body() user: CreateUserDto): Promise<UserEntity>{
        return this.userService.createOne(user)
    }
}