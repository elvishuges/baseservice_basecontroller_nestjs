import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Repository, DeepPartial } from 'typeorm';

import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiOperation({ summary: 'Get course by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @ApiOperation({ summary: 'Get all courses' })
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @ApiOperation({ summary: 'Create a Course' })
  @Post()
  create(@Body() dto: CreateCourseDto) {
    return this.coursesService.create(dto);
  }

  @ApiOperation({ summary: 'Delete a Course' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
