import { Injectable, CanActivate, ExecutionContext ,UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';
import {jwtConstants} from './CONSTANTS';
import { JwtService } from '@nestjs/jwt';
import {GlobalService} from './model/authiruzation.model'
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _JwtService:JwtService
  ){

  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this._JwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      request['user'] = payload;
      //#region set globalvariable
      GlobalService.token = token;
      //#endregion
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}