import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AuthUserEntity} from "./entites/authUser.entity";
import {LoginUserDto} from "./dto/login-user.dto";
import {JwtService} from "@nestjs/jwt";
import {AccessDataDto} from "./dto/accessData.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthUserEntity)
        private readonly authRepository: Repository<AuthUserEntity>,
        private jwtService: JwtService,
    ) {}

    async signIn(loginUserDto: LoginUserDto): Promise<AccessDataDto> {
        const authUser = await this.authRepository.findOne({
            where: {
                login: loginUserDto.login
            }
        })
        if (!authUser || authUser.pass !== loginUserDto.password) {
            throw new UnauthorizedException();
        }
        const payload = { sub: authUser.id, username: authUser.login };
        return new AccessDataDto(await this.jwtService.signAsync(payload))
    }
}