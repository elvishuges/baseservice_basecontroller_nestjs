import { Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ICrudService } from './interfaces/crud-service.interface';
import { CourseBase } from '../../core/shema/course.base';

export class CrudController<T> {
  constructor(private readonly ICrudService: ICrudService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  async findAll(): Promise<T[]> {
    return this.ICrudService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async findById(@Param('id') id: string): Promise<T> {
    return this.ICrudService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() entity: T): Promise<number> {
    return this.ICrudService.create(entity);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async delete(@Param('id') id: string) {
    this.ICrudService.delete(id);
  }

  @Put()
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  async update(@Body() entity: T): Promise<T> {
    return this.ICrudService.update(entity);
  }
}
