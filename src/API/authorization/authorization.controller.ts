import { Controller,Get,Post,Req,Body,HttpCode ,UseFilters,UseGuards,HttpStatus} from '@nestjs/common';
import {reqLogin,resLogin,reqCreateUser,reqUpdateUser} from '../../model/authiruzation.model'
import {IResponse} from '../../model/Response.model'
import { HttpExceptionFilter } from '../../http-excepion.filter';
import {AuthiruzationService} from '../../Service/authenService/auth.service'
import { AuthGuard } from 'src/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
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
            let token = await this._AuthiruzationService.GenerateToken(request);
            return token;
    }

    @Post('createuser')
    @HttpCode(HttpStatus.OK)
    async CreateUser(@Body() request: reqCreateUser):Promise<IResponse<boolean>>{
        let result = await this._AuthiruzationService.CreateUser(request);
        return result;
    }

    @UseGuards(AuthGuard)
    @Post('updateuser')
    @HttpCode(HttpStatus.OK)
    async UpdateUser(@Body() request: reqUpdateUser):Promise<IResponse<boolean>>{
        let result = await this._AuthiruzationService.UpdateUser(request);
        return result;
    }
}

