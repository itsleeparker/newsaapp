"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
const constants_1 = require("./constants");
const news_entity_1 = require("./entity/news.entity");
const constants_2 = require("../constants");
const axios_1 = require("axios");
exports.providers = [
    {
        provide: constants_1.NEWS_PROVIDER,
        useFactory: (connection) => {
            return connection.model(news_entity_1.News.name, news_entity_1.NewsSchema);
        },
        inject: [constants_2.DATABASE_PROVIDER]
    },
    {
        provide: constants_1.NEW_AXIOS_CLENT,
        useFactory: () => new axios_1.Axios({
            url: "https://newsapi.org/v2"
        })
    }
];
//# sourceMappingURL=providers.js.map