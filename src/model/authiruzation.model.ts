import { ApiProperty } from '@nestjs/swagger';

export class reqLogin{
    @ApiProperty()
    username:string;
    @ApiProperty()
    password:string
}

export class reqCreateUser{
    @ApiProperty()
    Username: string;
    @ApiProperty()
    Password: string;
    @ApiProperty()
    Email: string;
    @ApiProperty()
    Phonenumber: string;
}

export class resLogin{
    token:string;
}

export class UserDetail {
    Username: string;
    Password: string;
    Email: string;
    Phonenumber: string;
    Name:string;
}

export class GlobalService{ 
    static token: string; 
 }