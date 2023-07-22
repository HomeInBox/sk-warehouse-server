
import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UserDetail,GlobalService} from '../model/authiruzation.model'

@Injectable()

export class Extention{
    constructor(
        private _JwtService:JwtService
    ) {}

    GetUser():UserDetail{
       let UserDetail = this._JwtService.decode(GlobalService.token);
       let User : UserDetail = {
        Username : UserDetail['Username'],
        Password : UserDetail['Password'],
        Email : UserDetail['Email'],
        Phonenumber : UserDetail['Phonenumber'],
        Name : UserDetail['Name']
       }
       return User;
    }

    GetDateTimeNow():string{
        const datetimenow = new Date();
        let year = datetimenow.getFullYear();
        let month = datetimenow.getMonth() + 1;
        let day = datetimenow.getDate();
        let hour = datetimenow.getHours();
        let munite = datetimenow.getMinutes();
        return day+'/'+month+'/'+year +' '+ hour+':'+munite
    }

    isNullOrEmtry(obj):boolean
    {
        if(obj && obj !== 'null' && obj !== null && obj !== 'undefined' && obj !== undefined){
            return true;
        }
        return false;
    }
}

