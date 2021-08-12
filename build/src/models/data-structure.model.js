"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    year: String,
    donor: String,
    aids: Number,
});
exports.default = mongoose_1.model('Book', DataSchema);
