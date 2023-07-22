import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import {USER} from './schema/user.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name:'USER', schema: USER }])
    ],
    exports:[
        MongooseModule.forFeature([{ name:'USER', schema: USER }])
    ]
})
export class MongoDBModule{
    
}