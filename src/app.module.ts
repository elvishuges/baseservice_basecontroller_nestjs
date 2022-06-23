import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGODB_TABLE_NAME = 'noderest';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/${MONGODB_TABLE_NAME}`),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
