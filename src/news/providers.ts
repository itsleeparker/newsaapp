import { connect, Connection } from "mongoose";
import { NEW_AXIOS_CLENT, NEWS_PROVIDER } from "./constants";
import { News, NewsSchema } from "./entity/news.entity";
import { DATABASE_PROVIDER } from "src/constants";
import { Axios } from "axios";

export const providers = [
    {
        provide :  NEWS_PROVIDER ,
        useFactory : (connection : Connection)=>{
            return connection.model(News.name , NewsSchema);
        } , 
        inject : [DATABASE_PROVIDER]
    } ,
    {
        provide : NEW_AXIOS_CLENT , 
        useFactory : ()=>new Axios({
            url : "https://newsapi.org/v2"
        })
    }   
]