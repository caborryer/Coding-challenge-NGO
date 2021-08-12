"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Humanitarian aid API",
            version: "1.0.0",
            description: "API that shows the latest aid to Sudan"
        },
        servers: [
            {
                url: "http://localhost:4004"
            }
        ],
    },
    apis: ["./src/routes/*.ts"]
};
