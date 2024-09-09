import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//Model
export type Document = HydratedDocument<User>;

//All code được copy từ trang NestJS
//https://docs.nestjs.com/techniques/mongodb

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  married: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
