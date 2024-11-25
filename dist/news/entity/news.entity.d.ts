import { Document } from "mongoose";
export declare class News {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    author: string;
}
export type NewsDocument = News & Document;
export declare const NewsSchema: import("mongoose").Schema<News, import("mongoose").Model<News, any, any, any, Document<unknown, any, News> & News & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, News, Document<unknown, {}, import("mongoose").FlatRecord<News>> & import("mongoose").FlatRecord<News> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
