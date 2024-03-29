import { ApiOperation } from '@nestjs/swagger';
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'test' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
