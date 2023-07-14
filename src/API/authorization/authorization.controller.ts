import { Controller,Get,Post,Req,Body,HttpCode } from '@nestjs/common';
import {reqLogin,resLogin} from '../../model/authiruzation.model'
import { request } from 'http';
//import {AuthiruzationApiService} from './authiruzation.service'
import {AuthiruzationService} from '../../Service/authenService/auth.service'
@Controller('authorization')
export class AuthorizationController {
constructor(
    private _AuthiruzationService:AuthiruzationService
){

}
    @Post('login')
    @HttpCode(200)
    async getHello(@Body() request: reqLogin){
        let token = this._AuthiruzationService.GenerateToken(request);
        return token;
    }


}

