import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async getAll(){
        const users = await this.userRepository.find();
        return users
    }

    async createOne(createUser: CreateUserDto){
        const user =  this.userRepository.create(createUser);
        await this.userRepository.save(user)
        return user
    }
}