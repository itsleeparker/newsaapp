import { NewsDocument } from './entity/news.entity';
import { Model } from 'mongoose';
import { NewsQueryDto } from './dto/query.dto';
export declare class NewsService {
    private readonly newsModel;
    constructor(newsModel: Model<NewsDocument>);
    private dumpNews;
    fetchAndGenerate(): Promise<void>;
    search(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    searchByText(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    searchByDate(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
