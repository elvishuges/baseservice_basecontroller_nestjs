import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const MONGODB_TABLE_NAME = 'noderest';

@Module({
  imports: [
    CoursesModule,
    UsersModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/${MONGODB_TABLE_NAME}`),
    AuthModule,
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
