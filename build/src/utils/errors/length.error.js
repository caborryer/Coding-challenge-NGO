"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = void 0;
const error_utils_1 = require("./error.utils");
class DataError extends error_utils_1.ErrorSystem {
    constructor(message) {
        super(message, DataError.name);
    }
}
exports.DataError = DataError;
