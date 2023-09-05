import { ApiProperty } from '@nestjs/swagger';

export class reqCreatestoreModel{
    @ApiProperty()
    name:string;
    @ApiProperty()
    qty:number;
    @ApiProperty()
    unitType:string;
    @ApiProperty()
    imageNameStore:string;
    @ApiProperty()
    contentTypefile:string;
}

export class reqUploadFileModel{
    @ApiProperty()
    file:Uint8Array
}