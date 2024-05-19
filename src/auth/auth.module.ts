import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {AuthUserEntity} from "./entites/authUser.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth.guard";

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthUserEntity]),
      JwtModule.register({
        global: true,
        secret: '123',
        signOptions: { expiresIn: '600s' },
      }),
  ],
  providers: [
      AuthService,
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
  ],
  controllers: [AuthController]
})
export class AuthModule {}
