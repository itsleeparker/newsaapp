import * as mongoose from "mongoose";
export declare const providers: {
    provide: string;
    useFactory: () => mongoose.ConnectOptions;
}[];
