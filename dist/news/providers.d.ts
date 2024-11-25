import { Connection } from "mongoose";
import { News } from "./entity/news.entity";
import { Axios } from "axios";
export declare const providers: ({
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<News, {}, {}, {}, import("mongoose").Document<unknown, {}, News> & News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<News, import("mongoose").Model<News, any, any, any, import("mongoose").Document<unknown, any, News> & News & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, News, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<News>> & import("mongoose").FlatRecord<News> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
} | {
    provide: string;
    useFactory: () => Axios;
    inject?: undefined;
})[];
