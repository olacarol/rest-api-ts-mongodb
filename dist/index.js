"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongodb_1 = require("mongodb");
const customer_1 = __importDefault(require("./routes/customer"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = (0, express_1.default)();
            const port = 3000;
            const mongoClient = yield mongodb_1.MongoClient.connect('mongodb://localhost:27017/crm_api');
            const DB = mongoClient.db();
            app.use(body_parser_1.default.json({ limit: '5mb' }));
            app.use('/customers', (0, customer_1.default)(DB));
            app.listen(port, () => {
                console.log(`Server is running on http://localhost:${port}`);
            });
        }
        catch (error) {
            console.error('Error starting the server:', error);
        }
    });
}
start();
