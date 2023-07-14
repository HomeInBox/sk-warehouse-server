import { Module } from '@nestjs/common';
import {AuthorizationController} from './authorization/authorization.controller'
import {ServiceModule} from '../Service/Service.module'
@Module({
    imports: [ServiceModule],
    controllers: [AuthorizationController],
    providers: [],
})
export class ApiModule{}