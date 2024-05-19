import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {IS_PUBLIC_KEY} from "./auth.public";

@Injectable()
export class AuthGuard implements CanActivate {
    private jwtConstants: string | Buffer;
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            // 💡 See this condition
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization']
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: '123'
                }
            );
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }
}