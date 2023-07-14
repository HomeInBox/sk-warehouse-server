import { ApiProperty } from '@nestjs/swagger';

export class reqLogin{
    @ApiProperty()
    username:string;
    @ApiProperty()
    password:string
}
export class resLogin{
    token:string;
}