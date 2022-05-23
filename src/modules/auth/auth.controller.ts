import { JwtGuard } from './jwt-strategy/jwt.guard';
import { Controller, Get, Headers, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';
import { ApiBasicAuth, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Role } from './role/role.decorator';
import { RoleGuard } from './role/role.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBasicAuth()
  @ApiOperation({ summary: 'Login request', tags: ['Authentication'] })
  @Get('login')
  async login(@Headers() header): Promise<any> {
    const [, hash] = header.authorization.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    const credentials = await this.authService.login(email, password);
    return credentials;
  }

  @Role('student')
  @UseGuards(JwtGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user information', tags: ['Authentication'] })
  @Get('me')
  me(@Req() req): User {
    return req.user;
  }
}
