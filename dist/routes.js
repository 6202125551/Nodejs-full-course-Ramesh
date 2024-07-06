"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const controllers_1 = require("./controllers");
exports.router.route('/get').get(controllers_1.getData);
exports.router.route('/create').post(controllers_1.createData);
exports.router.route('/update').put(controllers_1.updateData);
exports.router.route('/delete').delete(controllers_1.deleteData);
//# sourceMappingURL=routes.js.map