import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(
    private _ConfigService:ConfigService
  )
  {}
  getHello(): string {
    let port = this._ConfigService.get<number>('port');
    let db = this._ConfigService.get<number>('DATABASE_URL');
    let env = this._ConfigService.get<number>('test');
    return env + '|| Hello World!' + db;
  }
}
