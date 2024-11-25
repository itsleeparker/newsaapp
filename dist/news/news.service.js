"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const mongoose_1 = require("mongoose");
const axios_1 = require("axios");
let NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    async dumpNews(data) {
        try {
            for (const news of data) {
                await this.newsModel.create(news);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async fetchAndGenerate() {
        try {
            const params = "https://newsapi.org/v2/everything?q=tesla&from=2024-11-23&sortBy=publishedAt&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0";
            const response = await axios_1.default.get(params);
            if (response.status >= 201)
                throw new common_1.HttpException("Failed to fetch News ", common_1.HttpStatus.CONFLICT);
            console.log("Generated response", response.data);
            return await this.dumpNews(response.data.articles);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
        }
    }
    async search(params) {
        try {
            const query = new RegExp(params.search, 'i');
            const date = new Date(params.published);
            return await this.newsModel.find({
                $or: [
                    { description: query },
                    { title: query }
                ]
            }).sort({ publishedAt: -1 });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.CONFLICT);
        }
    }
    async searchByText(params) {
        try {
            const query = new RegExp(params.search, 'i');
            return this.newsModel.find({
                $or: [
                    { description: query },
                    { title: query }
                ]
            });
        }
        catch (error) {
            throw new common_1.HttpException('Failed to search news', common_1.HttpStatus.CONFLICT);
        }
    }
    async searchByDate(params) {
        try {
            const date = new Date(params.published);
            return await this.newsModel.find({}).sort({ publishedAt: -1 });
        }
        catch (error) {
            throw new common_1.HttpException('Error searching news by date', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.NEWS_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NewsService);
//# sourceMappingURL=news.service.js.map