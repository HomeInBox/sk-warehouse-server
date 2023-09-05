import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Schema()
export class USER_SCHEMA {
  @Prop({ type: String, required: true ,unique:true,index:true})
  USERNAME: String
  @Prop({ type: String, required: true})
  PASSWORD: String
  @Prop({ type: String, required: true ,unique:true})
  EMAIL: string;
  @Prop()
  NAME:String;
  @Prop()
  CREATE_DATE:String;
  @Prop()
  CREATE_BY:String;
  @Prop()
  UPDATE_DATE:String;
  @Prop()
  UPDATE_BY:String;
}
export const USER = SchemaFactory.createForClass(USER_SCHEMA);

export interface USER_SCHEMA_DOCUMENT extends Document {
  USERNAME: string;
  PASSWORD: string;
  EMAIL: string;
  PHONENUMBER:string;
  NAME:string;
   CREATE_DATE: string;
   CREATE_BY: string;
   UPDATE_DATE: string;
   UPDATE_BY: string;
}

export class USER_SCHEMA_MODEL {
  USERNAME: string;
  PASSWORD: string;
  EMAIL: string;
  PHONENUMBER:string;
  NAME:string;
   CREATE_DATE: string;
   CREATE_BY: string;
   UPDATE_DATE: string;
   UPDATE_BY: string;
}