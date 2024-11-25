import { NewsService } from './news.service';
import { NewsQueryDto } from './dto/query.dto';
export declare class NewsController {
    private readonly service;
    constructor(service: NewsService);
    dumpNews(): Promise<void>;
    search(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entity/news.entity").NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    get(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entity/news.entity").NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getByDate(params: NewsQueryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entity/news.entity").NewsDocument> & import("./entity/news.entity").News & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
