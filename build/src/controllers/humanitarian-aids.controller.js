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
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanitarianAidsController = void 0;
const synchronizer_service_1 = require("../services/synchronizer.service");
class HumanitarianAidsController {
    constructor() { }
    ;
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield synchronizer_service_1.syncWithExternalSystem();
                const activities = data["iati-activities"];
                const finaldata = [];
                activities.map((e) => {
                    var _a, _b, _c;
                    const year = (_a = e["iati-activity"].budget) === null || _a === void 0 ? void 0 : _a.value["value-date"];
                    const ngo = e["iati-activity"]["contact-info"].organisation.narrative;
                    const aid = (_c = (_b = e["iati-activity"].budget) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.text;
                    const jsonData = {
                        year: year,
                        ngo: ngo,
                        aid: aid
                    };
                    finaldata.push(jsonData);
                });
                return res.json(finaldata);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ;
}
exports.humanitarianAidsController = new HumanitarianAidsController();
