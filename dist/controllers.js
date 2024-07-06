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
exports.deleteData = exports.updateData = exports.createData = exports.getData = void 0;
const empSchema_1 = require("./mongoDbSchemas/empSchema");
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield empSchema_1.empSchema.find({})
        .then((result) => {
        if (result.length > 0) {
            res.status(200).json({
                status: "Success", data: result
            });
        }
        else {
            res.status(201).json({
                status: "Success",
                msg: "Date not available"
            });
        }
    })
        .catch((e) => {
        res.status(400).json({
            status: "Failed",
            msg: "Error"
        });
    });
});
exports.getData = getData;
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.insertMany(body)
        .then((result) => {
        res.status(200).json({
            status: "success",
            msg: "Saved Successfully"
        });
    })
        .catch((e) => {
        res.status(400).json({
            status: "Failed",
            msg: "Error"
        });
    });
});
exports.createData = createData;
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.updateOne({ empno: body.empno }, { ename: body.ename, sal: body.sal })
        .then((result) => {
        res.status(200).json({
            status: "success",
            data: result
        });
    })
        .catch((e) => {
        res.status(400).json({
            status: "Failed",
            Msg: "Failed to update the data"
        });
    });
});
exports.updateData = updateData;
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.deleteOne({ empno: body.empno })
        .then((result) => {
        res.status(200).json({
            status: "Success",
            msg: "Data deleted successfully"
        });
    })
        .catch((e) => {
        res.status(400).json({
            status: "Failed",
            msg: "Failed to delete the data"
        });
    });
});
exports.deleteData = deleteData;
//# sourceMappingURL=controllers.js.map