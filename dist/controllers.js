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
const statusMessages_1 = require("./utils/statusMessages");
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield empSchema_1.empSchema.find({})
        .then((result) => {
        if (result.length > 0) {
            res.status(200).send(new statusMessages_1.APIResponse(200, "Data Available", result));
        }
        else {
            res.status(201).send(new statusMessages_1.APIResponse(201, "Data not Available", result));
        }
    })
        .catch((e) => {
        res.status(400).send(new statusMessages_1.ErrResponse());
    });
});
exports.getData = getData;
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.insertMany(body)
        .then((result) => {
        res.status(200).send(new statusMessages_1.APIResponse());
    })
        .catch((e) => {
        res.status(400).send(new statusMessages_1.ErrResponse());
    });
});
exports.createData = createData;
const updateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.updateOne({ empno: body.empno }, { ename: body.ename, sal: body.sal })
        .then((result) => {
        res.status(200).send(new statusMessages_1.APIResponse());
    })
        .catch((e) => {
        res.status(400).send(new statusMessages_1.ErrResponse());
    });
});
exports.updateData = updateData;
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield empSchema_1.empSchema.deleteOne({ empno: body.empno })
        .then((result) => {
        res.status(200).send(new statusMessages_1.APIResponse());
    })
        .catch((e) => {
        res.status(400).send(new statusMessages_1.ErrResponse());
    });
});
exports.deleteData = deleteData;
//# sourceMappingURL=controllers.js.map