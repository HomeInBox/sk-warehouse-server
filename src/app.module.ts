import { Module , NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{ApiModule} from './API/Api.module'
import {LoggerMiddleware } from './Middleware'
import{ServiceModule} from './Service/Service.module'
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from './CONSTANTS'
import { ConfigModule,ConfigService } from '@nestjs/config';
import config from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import {HttpExceptionFilter} from './http-excepion.filter'
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ApiModule
    ,ServiceModule
    ,JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    })
    ,ConfigModule.forRoot({
      isGlobal: true,
      load:[config]
    })
    ,MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      })
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path:'*',method:RequestMethod.POST});
  }
}
