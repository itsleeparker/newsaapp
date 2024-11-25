import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { NEW_AXIOS_CLENT, NEWS_PROVIDER } from './constants';
import { NewsDocument } from './entity/news.entity';
import { Model } from 'mongoose';
import axios, { Axios }  from 'axios';
import { CreateNewsDto } from './dto/create.dto';
import { NewsQueryDto } from './dto/query.dto';

@Injectable()
export class NewsService {

    constructor(
        @Inject(NEWS_PROVIDER)
        private readonly newsModel:Model<NewsDocument> , 
    ){}

    private async dumpNews(data:Array<CreateNewsDto>){
        try {
            for(const news of data){
                await this.newsModel.create(news);
            }
        } catch (error) {
            throw error;
        }
    }

    async fetchAndGenerate(){
        try {
            const params = "https://newsapi.org/v2/everything?q=tesla&from=2024-11-23&sortBy=publishedAt&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0"
            const response = await axios.get(params)
            if(response.status >= 201) throw new HttpException("Failed to fetch News " , HttpStatus.CONFLICT)
            console.log("Generated response" , response.data);
            return await this.dumpNews(response.data.articles);
        } catch (error) {
            throw new HttpException(error.message , HttpStatus.CONFLICT);
        }
    }

    async search(params:NewsQueryDto){
        try {
            const query = new RegExp(params.search, 'i');
            const date = new Date(params.published)
            return await this.newsModel.find({
                $or: [
                    { description: query },
                    { title: query }  
                ]
            }).sort({publishedAt : -1})
        } catch (error) {
            throw new HttpException(error.message , HttpStatus.CONFLICT);
        }
    }

    async searchByText(params: NewsQueryDto) {
        try {
            const query = new RegExp(params.search, 'i');
            return this.newsModel.find({
                $or: [
                    { description: query },
                    { title: query }  
                ]
            });
        } catch (error) {
            throw new HttpException('Failed to search news' , HttpStatus.CONFLICT);
        }
    }

    async searchByDate(params: NewsQueryDto) {
        try {
            const date = new Date(params.published)
            return await this.newsModel.find({
            }).sort({ publishedAt: -1 });
            
        } catch (error) {
            throw new HttpException(
                'Error searching news by date', 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
