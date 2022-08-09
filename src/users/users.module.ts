import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './schema/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserShema }]),
  ],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
