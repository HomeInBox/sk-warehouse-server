import {Module} from '@nestjs/common'
import {MongooseModule } from '@nestjs/mongoose';
import {USER} from './schema/user.schema'
import { STORE } from './schema/store.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name:'STORE', schema: STORE }]),
        MongooseModule.forFeature([{ name:'USER', schema: USER }])
    ],
    exports:[
        MongooseModule.forFeature([{ name:'STORE', schema: STORE }]),
        MongooseModule.forFeature([{ name:'USER', schema: USER }])
    ]
})
export class MongoDBModule{
    
}