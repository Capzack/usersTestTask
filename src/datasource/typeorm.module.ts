import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import {UserEntity} from "../user/entities/user.entity";
import {LessonEntity} from "../lessons/entites/lessons.entity";
import {EvaluationsEntity} from "../evaluations/entities/evaluations.entity";
import {AuthUserEntity} from "../auth/entites/authUser.entity";

@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: DataSource,
            inject: [],
            useFactory: async () => {
                try {
                    const dataSource = new DataSource({
                        type: 'postgres',
                        host: "localhost",
                        port: 5432,
                        username: 'postgres',
                        password: 'test',
                        synchronize: true,
                        database: 'usersTestTask',
                        entities: [UserEntity, LessonEntity, EvaluationsEntity, AuthUserEntity],
                    });
                    await dataSource.initialize();
                    console.log('Database connected successfully');
                    return dataSource;
                } catch (error) {
                    console.log('Error connecting to datasource', error);
                    throw error;
                }
            },
        },
    ],
    exports: [DataSource],
})
export class DataSourceModule {}