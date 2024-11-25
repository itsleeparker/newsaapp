import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { providers } from './providers';

@Module({
  providers: [NewsService, ...providers],
  controllers: [NewsController] ,  
})
export class NewsModule {}
