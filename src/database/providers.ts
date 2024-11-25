import { DATABASE_PROVIDER } from "src/constants";
import * as mongoose from "mongoose";

export const providers =  [
    {
        provide : DATABASE_PROVIDER , 
        useFactory  : ()=>{
            const uri = 'mongodb+srv://v500:walkingfish2@v500system.3x5dlaa.mongodb.net/v500'
            return mongoose.connect(uri) as mongoose.ConnectOptions;
        } 
    }
]