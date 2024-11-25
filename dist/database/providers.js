"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
const constants_1 = require("../constants");
const mongoose = require("mongoose");
exports.providers = [
    {
        provide: constants_1.DATABASE_PROVIDER,
        useFactory: () => {
            const uri = 'mongodb+srv://v500:walkingfish2@v500system.3x5dlaa.mongodb.net/v500';
            return mongoose.connect(uri);
        }
    }
];
//# sourceMappingURL=providers.js.map