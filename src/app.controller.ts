import { Controller, Get,UseGuards,Req ,UseFilters} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from './auth.guard'
import { ApiBearerAuth } from '@nestjs/swagger';
import {Extention} from './Service/Extention.service'

@ApiBearerAuth('JWT-auth')
@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService,private _Extention:Extention) {}

  @Get()
  getHello(): string {
    this._Extention.GetUser();
    return this.appService.getHello();
  }
}
