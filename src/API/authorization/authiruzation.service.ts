import { Injectable, UnauthorizedException } from '@nestjs/common';
import {reqLogin} from '../../model/authiruzation.model';
//import {AuthiruzationService} from '../../CoreService/authenService/auth.service'
@Injectable()
export class AuthiruzationApiService{

    constructor(/*private _AuthiruzationService:AuthiruzationService*/) {}

    async GetToken(req:reqLogin){
        // const token =  await this._AuthiruzationService.GenerateToken(req);
        // return token;
        return null;
    }
}