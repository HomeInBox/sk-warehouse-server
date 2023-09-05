import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import {reqLogin,reqCreateUser,UserDetail,reqUpdateUser} from '../../model/authiruzation.model'
import { InjectModel } from '@nestjs/mongoose';
import { USER_SCHEMA_DOCUMENT,USER_SCHEMA_MODEL} from '../../mongoDB/schema/user.schema';
import {Extention} from '../Extention.service'
import {ResponseModel,IResponse} from '../../model/Response.model'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()

export class AuthiruzationService{

    constructor(
        private _JwtService:JwtService,
        private _Extention:Extention,
        @InjectModel('USER') private _USER_SCHEMA_DOCUMENT: Model<USER_SCHEMA_DOCUMENT>
        
        ) {}

    async GenerateToken(req:reqLogin){
        try{
            let token; 
            let User = await this._USER_SCHEMA_DOCUMENT.findOne({USERNAME:req.username,PASSWORD:req.password}).exec();
            if(User != null){
                let HasUser :UserDetail = {
                    Username : User.USERNAME,
                    Password : User.PASSWORD,
                    Email : User.EMAIL,
                    Phonenumber : User.PHONENUMBER,
                    Name : User.NAME
                }
                token =  await this._JwtService.signAsync(HasUser);
            }
            return token;
        }catch(ex){
            throw new InternalServerErrorException(ex);
        }
    }

    async CreateUser(req:reqCreateUser):Promise<IResponse<boolean>>{
        try{
            let datetimeNow = this._Extention.GetDateTimeNow();
            let existUser = await this._USER_SCHEMA_DOCUMENT.findOne({USERNAME:req.Username,PHONENUMBER:req.Phonenumber,EMAIL:req.Email}).exec();
            if(existUser == null){
                let data : USER_SCHEMA_MODEL = {
                    USERNAME : req.Username,
                    PASSWORD : req.Password,
                    EMAIL : req.Email,
                    PHONENUMBER : req.Email,
                    NAME : req.Name,
                    CREATE_BY : '',
                    CREATE_DATE : datetimeNow,
                    UPDATE_BY : null,
                    UPDATE_DATE : null
                }
            const createdUser = new this._USER_SCHEMA_DOCUMENT(data);
            await createdUser.save();
            }else{
                throw new InternalServerErrorException("มี Username หรือ เบอร์โทรนี้เเล้ว");
            }
        }catch(ex){
            throw new InternalServerErrorException(ex);
        }

        return ResponseModel.Success<boolean>(null);
    }

    async UpdateUser(req:reqUpdateUser):Promise<IResponse<boolean>>{
        try{
            let getUser = this._Extention.GetUser();
            let datetimeNow = this._Extention.GetDateTimeNow();
            let User = await this._USER_SCHEMA_DOCUMENT.findOne({USERNAME:getUser.Username,PASSWORD:getUser.Password}).exec();
            if(User != null){
                User.NAME =  req.Name
                User.EMAIL =  req.Email
                User.PHONENUMBER = req.Phonenumber
                User.EMAIL = req.Email
                User.UPDATE_DATE = datetimeNow
                User.UPDATE_BY = User.NAME
                User.updateOne(User).exec();
            }
            return ResponseModel.Success<boolean>(null);
        }catch(ex){
            throw new InternalServerErrorException(ex);
        }
        
    }

    async DeleteUser(){

    }
}