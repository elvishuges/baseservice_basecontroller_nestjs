import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './schema/user.entity';
import { IsEmailUnique } from './validators/is-email-unique.validator';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserShema }]),
  ],
  controllers: [UsersController],
  providers: [IsEmailUnique, UsersService],
  exports: [IsEmailUnique, UsersService],
})
export class UsersModule {}
