import { ExceptionFilter, Catch, ArgumentsHost, HttpException ,HttpStatus} from '@nestjs/common';
import { Request, Response } from 'express';
import {ResponseModel} from './model/Response.model'


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    
    let ResponseResult : ResponseModel<null> = {
      Error : exception.message,
      Data : null,
      IsSuccess : false,
      Status : status
    }
    
    response
      .status(status)
      .json(ResponseResult);
  }
}