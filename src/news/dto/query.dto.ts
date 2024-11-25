import { Query } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional , IsString } from "class-validator";


export class NewsQueryDto{
    @IsString()
    @IsOptional()
    @ApiProperty({
        description : "Search Params" ,
        default : ""
    })
    search : string ;

    @IsString()
    @IsOptional()
    published : string ;
}