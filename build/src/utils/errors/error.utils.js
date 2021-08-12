"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorSystem = void 0;
class ErrorSystem extends Error {
    constructor(message, typeError) {
        super(message);
        this.name = typeError || ErrorSystem.name;
        this._logs();
    }
    _logs() {
        console.log(`[${this.name}] ${this.message}`);
    }
}
exports.ErrorSystem = ErrorSystem;
