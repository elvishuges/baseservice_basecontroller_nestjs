import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  async login(@Body() loginDto: UserLoginDto, @Request() req): Promise<any> {
    return req.user;
  }

  @Post('register')
  async register(@Body() dto: CreateUserDto): Promise<any> {
    try {
      await this.usersService.validCreate(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    return await this.usersService.create(dto);
  }
}
