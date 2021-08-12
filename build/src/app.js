"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_config_1 = require("./swagger-config");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const specs = swagger_jsdoc_1.default(swagger_config_1.options);
// Routes
app.use('/api', routes_1.default);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = app;
