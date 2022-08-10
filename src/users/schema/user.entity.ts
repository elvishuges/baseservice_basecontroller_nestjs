import { Column, Entity, Index } from 'typeorm';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hashSync } from 'bcrypt';

import { Exclude } from 'class-transformer';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Index()
  @Prop()
  firstName: string;

  @Index()
  @Prop()
  lastName: string;

  @Index({ unique: true })
  @Prop()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Prop({
    transformer: {
      to(password: string) {
        return hashSync(password, 10);
      },
      from(hash: string) {
        return hash;
      },
    },
  })
  password: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const UserShema = SchemaFactory.createForClass(User);
