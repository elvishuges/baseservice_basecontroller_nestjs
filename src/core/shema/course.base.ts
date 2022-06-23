import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BaseDocument = CourseBase & Document;

@Schema()
export class CourseBase {
  @Prop()
  author: string;
}
