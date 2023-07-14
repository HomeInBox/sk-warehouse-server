import { Module} from '@nestjs/common';
import {AuthiruzationService} from './authenService/auth.service'

@Module({
    providers: [AuthiruzationService],
    exports:[AuthiruzationService],
  })
  export class ServiceModule{}