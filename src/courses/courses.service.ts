import { Injectable } from '@nestjs/common';
import { Course, CourseDocument } from './schema/courses.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'src/core/crud/crud.service';

@Injectable()
export class CoursesService extends CrudService<Course> {
  constructor(@InjectModel(Course.name) model: Model<CourseDocument>) {
    super(model);
  }
}
