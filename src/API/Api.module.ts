import { Module } from '@nestjs/common';
import {AuthorizationController} from './authorization/authorization.controller'
import {ServiceModule} from '../Service/Service.module'
import { StoreController } from './store/store.controller';
@Module({
    imports: [ServiceModule],
    controllers: [AuthorizationController, StoreController],
    providers: [],
})
export class ApiModule{}