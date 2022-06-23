import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CourseBase } from '../../core/shema/course.base';

export type CourseDocument = Course & Document;

@Schema()
export class Course extends CourseBase {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];
}

export const CourseShema = SchemaFactory.createForClass(Course);
