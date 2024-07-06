"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = require("./dbConnection");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 3000;
(0, dbConnection_1.mongoconnection)();
app.use(express_1.default.json());
app.use('/api/v1/mongodb', routes_1.router);
app.get('/test', (req, res) => {
    res.status(200).json({
        status: "Success",
        msg: "Test"
    });
});
// app.post('/create', )
// app.get('/get',)
// app.post('/update', )
// app.post('/delete',)
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});
//# sourceMappingURL=app.js.map