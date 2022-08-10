import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CrudService } from 'src/core/crud/crud.service';

import { Model } from 'mongoose';
import { UserDocument, User } from './schema/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService extends CrudService<User> {
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  public async validCreate(dto: CreateUserDto) {
    const userRegistred = await this.findByEmail(dto.email);
    if (userRegistred) {
      throw new ConflictException(
        `The user with email ${dto.email} is already registered`,
      );
    }
  }

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
