import { JwtGuard } from './jwt-strategy/jwt.guard';
import { Controller, Get, Headers, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  async login(@Headers() header): Promise<any> {
    const [, hash] = header.authorization.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    const token = await this.authService.login(email, password);
    return { token };
  }

  @UseGuards(JwtGuard)
  @Get('me')
  me(@Req() req): User {
    return req.user;
  }
}
