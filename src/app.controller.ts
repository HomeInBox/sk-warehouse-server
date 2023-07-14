import { Controller, Get,UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from './auth.guard'
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}