import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './../users/users.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: UserLoginDto, @Request() req): Promise<any> {
    console.log('loginDto', loginDto);

    return req.user;
  }
}
