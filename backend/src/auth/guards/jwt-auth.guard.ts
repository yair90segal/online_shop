/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    console.log('### AUTH HEADER:', req.headers['authorization']);
    console.log('### INSIDE JwtAuthGuard.canActivate — THIS IS MY GUARD');
    return super.canActivate(context);
  }
}
