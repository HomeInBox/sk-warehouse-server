import { Module} from '@nestjs/common';
import {AuthiruzationService} from './authenService/auth.service'
import {Extention} from './Extention.service'
import {MongoDBModule} from '../mongoDB/mongoDB.module'
import {StoreService} from './storeService/store.service'

@Module({
    providers: [AuthiruzationService,Extention,StoreService],
    exports:[AuthiruzationService,Extention,StoreService],
    imports:[MongoDBModule]
  })
  export class ServiceModule{}