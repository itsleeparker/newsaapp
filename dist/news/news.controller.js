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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
const query_dto_1 = require("./dto/query.dto");
let NewsController = class NewsController {
    constructor(service) {
        this.service = service;
    }
    async dumpNews() { return await this.service.fetchAndGenerate(); }
    async search(params) { return await this.service.searchByText(params); }
    async get(params) { return await this.service.search(params); }
    async getByDate(params) { return await this.service.searchByDate(params); }
};
exports.NewsController = NewsController;
__decorate([
    (0, common_1.Get)("/dump"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "dumpNews", null);
__decorate([
    (0, common_1.Get)("/search"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.NewsQueryDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.NewsQueryDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)("/by-date"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.NewsQueryDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getByDate", null);
exports.NewsController = NewsController = __decorate([
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map