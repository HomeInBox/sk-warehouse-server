import * as mongoose from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class STORE_SCHEMA {
  @Prop({ type: String, required: true ,unique:true,index:true})
  STORE_NAME:String;
  @Prop({ type: Number, required: true ,unique:true})
  STORE_QTY:Number;
  @Prop({ type: String, required: true ,unique:true})
  STORE_UNIT_TYPE:String;
  @Prop({ type: String, required: true ,unique:true})
  STORE_IMAGE_NAME:String;
  @Prop({ type: String, required: true ,unique:true})
  CONTENT_TYPE_FILE:String;
  @Prop()
  CREATE_DATE:String;
  @Prop()
  CREATE_BY:String;
  @Prop()
  UPDATE_DATE:String;
  @Prop()
  UPDATE_BY:String;
}
export const STORE = SchemaFactory.createForClass(STORE_SCHEMA);

export interface STORE_SCHEMA_DOCUMENT extends Document {
    STORE_NAME:String;
    STORE_QTY:number;
    STORE_UNIT_TYPE:String;
    STORE_IMAGE_NAME:string;
    CONTENT_TYPE_FILE:String;
    CREATE_DATE: string;
    CREATE_BY: string;
    UPDATE_DATE: string;
    UPDATE_BY: string;
  }
  
  export class STORE_SCHEMA_MODEL {
    STORE_NAME:String;
    STORE_QTY:Number;
    STORE_UNIT_TYPE:String;
    STORE_IMAGE_NAME:string;
    CONTENT_TYPE_FILE:String;
    CREATE_DATE: string;
    CREATE_BY: string;
    UPDATE_DATE: string;
    UPDATE_BY: string;
  }