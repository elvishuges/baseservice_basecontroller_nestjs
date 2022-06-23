import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseShema } from './schema/courses.entity';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseShema }]),
  ],
  providers: [CoursesService],
  exports: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
