"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eschema = new mongoose_1.default.Schema({
    empno: {
        type: Number
    },
    ename: {
        type: String
    },
    sal: {
        type: Number
    }
});
exports.empSchema = mongoose_1.default.model('emp', eschema);
//# sourceMappingURL=empSchema.js.map