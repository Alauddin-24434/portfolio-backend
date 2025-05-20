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
const mongoose_1 = __importDefault(require("mongoose"));
const Logger_1 = require("./app/utils/Logger");
const app_1 = __importDefault(require("./app"));
const config_1 = require("./app/config");
// server connect 
function starServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.envVariable.DB_URL);
            Logger_1.logger.info("Mongodb Connected successfully!");
            app_1.default.listen(config_1.envVariable.PORT, () => {
                Logger_1.logger.info(`🚀 Server is running on port ${config_1.envVariable.PORT}`);
            });
        }
        catch (error) {
            Logger_1.logger.error("❌ Failed to connect to MongoDB", error);
            process.exit(1);
        }
    });
}
// start server call
starServer();
