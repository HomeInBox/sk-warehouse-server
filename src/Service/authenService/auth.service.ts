import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {reqLogin} from '../../model/authiruzation.model'

@Injectable()

export class AuthiruzationService{

    constructor(private _JwtService:JwtService) {}

    async GenerateToken(req:reqLogin){
        const token =  await this._JwtService.signAsync(req)
        return token;
    }
}