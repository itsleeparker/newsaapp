import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    timestamps : true
})
export class News{
    @Prop({
        type : String
    })
    title : string  ; 

    @Prop({
        type : String
    })
    description  : string  ; 

    @Prop({
        type : String
    })
    url : string  ; 

    @Prop({
        type : String
    })
    urlToImage : string  ; 

    @Prop({
        type : Date , 
        default : new Date()
    })
    publishedAt : Date  ; 

    @Prop({
        type : String
    })
    author : string  ; 
}


export type NewsDocument  = News & Document;

export const NewsSchema = SchemaFactory.createForClass(News);


NewsSchema.pre("save" , async function(next ){
    const doc = this as NewsDocument;
    doc.publishedAt = new Date(doc.publishedAt);
    next()
})