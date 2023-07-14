import { Module , NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{ApiModule} from './API/Api.module'
import {LoggerMiddleware } from './Middleware'
import{ServiceModule} from './Service/Service.module'
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from './CONSTANTS'

@Module({
  imports: [ApiModule
    ,ServiceModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path:'*',method:RequestMethod.POST});
  }
}
