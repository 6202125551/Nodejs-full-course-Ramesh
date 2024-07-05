"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoconnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://127.0.0.1/testDB';
function mongoconnection() {
    mongoose_1.default.connect(uri)
        .then(() => {
        console.log("DB is connected");
    })
        .catch((e) => {
        console.log("DB not connected");
    });
}
exports.mongoconnection = mongoconnection;
