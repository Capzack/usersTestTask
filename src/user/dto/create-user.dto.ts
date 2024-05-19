import {IsEmail, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly email: string;
}