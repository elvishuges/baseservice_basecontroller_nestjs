import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CrudService } from 'src/core/crud/crud.service';

import { Model } from 'mongoose';
import { UserDocument, User } from './schema/user.entity';

@Injectable()
export class UsersService extends CrudService<User> {
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
