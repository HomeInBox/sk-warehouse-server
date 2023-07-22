import { Post, Res, HttpStatus } from '@nestjs/common';

export class ResponseModel<T>{
    constructor(){
        this.IsSuccess = false;
        this.Status = HttpStatus.BAD_REQUEST;
    }
    Error:string;
    IsSuccess:boolean;
    Status:number;
    Data:T
}