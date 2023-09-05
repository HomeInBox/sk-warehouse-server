import { Controller,UseFilters,UseGuards,Post,Body} from '@nestjs/common';
import {HttpExceptionFilter} from '../../http-excepion.filter'
import { AuthGuard } from 'src/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import {reqCreatestoreModel,reqUploadFileModel} from '../../model/store.model'
import { StoreService } from 'src/Service/storeService/store.service';

@ApiBearerAuth('JWT-auth')
@Controller('store')
@UseGuards(AuthGuard)
@UseFilters(HttpExceptionFilter)
export class StoreController {

constructor(private _StoreService:StoreService)
{}

 @Post('Create')
 async CreateStore(@Body() request: reqCreatestoreModel){
   let result = await this._StoreService.CreateStore(request);
    return result;
 }

 @Post('UploadFile')
 async UploadFile(@Body() request: reqUploadFileModel){
   let result = await this._StoreService.UploadFile(request);
    return result;
 }

}
