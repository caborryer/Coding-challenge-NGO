"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
const config_1 = __importDefault(require("../src/utils/config"));
const { dbUsername, cluster, dbPassword, dbName } = config_1.default;
exports.mongodb = {
    connectionString: `mongodb+srv://${dbUsername}:${dbPassword}@${cluster}/${dbName}?retryWrites=true&w=majority`
};
