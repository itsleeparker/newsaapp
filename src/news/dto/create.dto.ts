import { ApiProperty } from "@nestjs/swagger";

export class CreateNewsDto{
    @ApiProperty({
        description : "Authour Name" , 
        name : "authour"
    })
    author  : string ;

    @ApiProperty({
        description : "Title of the document" , 
        name : "title"  ,
    })
    title  : string ;


    @ApiProperty({
        description : "Description of the document" , 
        name : "Description"  ,
    })
    description  : string  ; 


    @ApiProperty({
        description : "Url of the document" , 
        name : "url"  ,
    })
    url : string  ; 

    @ApiProperty({
        description : "Url Of image of the document" , 
        name : "Description"  ,
    })
    urlToImage  : string;

    @ApiProperty({
        description : "Published Date of the document" , 
        name : "Published"  ,
    })
    publishedAt :  string  ; 
}