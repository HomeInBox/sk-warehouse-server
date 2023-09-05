import { Post, Res, HttpStatus } from '@nestjs/common';

export interface IResponse<T>{
    Error:string;
    IsSuccess:boolean;
    Status:number;
    Data:T
}

export class ResponseModel{
   static Success<T>(data:T){
        let result : IResponse<T> = {
            Error:null,
            IsSuccess : true,
            Data : data,
            Status : HttpStatus.OK,
        }
        return result;
    }
}