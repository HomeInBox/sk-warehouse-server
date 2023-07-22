import { Controller,Get,Post,Req,Body,HttpCode ,UseFilters,InternalServerErrorException,NotFoundException,HttpStatus} from '@nestjs/common';
import {reqLogin,resLogin,reqCreateUser} from '../../model/authiruzation.model'
import {ResponseModel} from '../../model/Response.model'
import { HttpExceptionFilter } from '../../http-excepion.filter';
import {AuthiruzationService} from '../../Service/authenService/auth.service'


@UseFilters(HttpExceptionFilter)
@Controller('authorization')
export class AuthorizationController {
constructor(
    private _AuthiruzationService:AuthiruzationService
){

}
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async getHello(@Body() request: reqLogin){
            let token = this._AuthiruzationService.GenerateToken(request);
            return token;
    }

    @Post('createuser')
    @HttpCode(HttpStatus.OK)
    async CreateUser(@Body() request: reqCreateUser):Promise<ResponseModel<reqCreateUser>>{
        let result = this._AuthiruzationService.CreateUser(request);
        return result;
    }


}

