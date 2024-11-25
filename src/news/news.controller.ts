import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsQueryDto } from './dto/query.dto';

@Controller('news')
export class NewsController {

    constructor(
        private readonly service:NewsService
    ){}

    @Get("/dump")
    async dumpNews(){return await this.service.fetchAndGenerate()}

    @Get("/search")
    async search(@Query() params:NewsQueryDto){return await this.service.searchByText(params)}

    @Get("/")
    async get(@Query() params:NewsQueryDto){return await this.service.search(params)}

    @Get("/by-date")
    async getByDate(@Query() params:NewsQueryDto){return await this.service.searchByDate(params)}
}
