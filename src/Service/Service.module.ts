import { Module} from '@nestjs/common';
import {AuthiruzationService} from './authenService/auth.service'
import {Extention} from './Extention.service'
import {MongoDBModule} from '../mongoDB/mongoDB.module'

@Module({
    providers: [AuthiruzationService,Extention],
    exports:[AuthiruzationService,Extention],
    imports:[MongoDBModule]
  })
  export class ServiceModule{}