import { Module } from '@nestjs/common';
import {DataSourceModule} from "./datasource/typeorm.module";
import {UserModule} from "./user/user.module";
import { LessonsModule } from './lessons/lessons.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DataSourceModule, UserModule, LessonsModule, EvaluationsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
