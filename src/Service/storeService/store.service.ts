import { Injectable,InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { STORE_SCHEMA_DOCUMENT,STORE_SCHEMA_MODEL } from "src/mongoDB/schema/store.schema";
import { Extention } from "../Extention.service";
import { reqCreatestoreModel,reqUploadFileModel} from "src/model/store.model";
import {ResponseModel,IResponse} from '../../model/Response.model'
import sharp from "sharp";

@Injectable()

export class StoreService{
    constructor(
        private _Extention:Extention,
        @InjectModel('STORE') private _STORE_SCHEMA_DOCUMENT : Model<STORE_SCHEMA_DOCUMENT>
    ){

    }
    async CreateStore(req:reqCreatestoreModel):Promise<IResponse<boolean>>{
        try{
            let user = this._Extention.GetUser();
            let datetimeNow = this._Extention.GetDateTimeNow();
            let data :  STORE_SCHEMA_MODEL = {
                STORE_NAME:req.name,
                STORE_QTY:req.qty,
                STORE_UNIT_TYPE:req.unitType,
                STORE_IMAGE_NAME:req.imageNameStore,
                CONTENT_TYPE_FILE:req.contentTypefile,
                CREATE_BY:user.Name,
                CREATE_DATE:datetimeNow,
                UPDATE_BY:'',
                UPDATE_DATE:''
            }
            const createStore = new this._STORE_SCHEMA_DOCUMENT(data);
            await createStore.save();
        }catch(ex){
            throw new InternalServerErrorException(ex);
        }
      return ResponseModel.Success<boolean>(null);
    }

    async UploadFile(req:reqUploadFileModel):Promise<IResponse<boolean>>{
        try{
            console.log(new Uint8Array(req.file));
            const outputPath = `../../assets/image`; 
            const buffer = Buffer.from(req.file.buffer);
            console.log(buffer);
            
            await sharp(buffer).toFile(outputPath);
            
        }catch(ex){
            throw new InternalServerErrorException(ex);
        }
        return ResponseModel.Success<boolean>(null);
    }
}