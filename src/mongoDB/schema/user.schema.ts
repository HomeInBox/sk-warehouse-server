import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const USER = new mongoose.Schema({
  USERNAME: String,
  PASSWORD: String,
  EMAIL: String,
  PHONENUMBER:String,
  NAME:String,
  CREATE_DATE:String,
  CREATE_BY:String,
  UPDATE_DATE:String,
  UPDATE_BY:String,
});

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