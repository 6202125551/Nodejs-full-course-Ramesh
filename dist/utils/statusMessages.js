"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrResponse = exports.APIResponse = void 0;
class APIResponse {
    constructor(status = 200, message = "success", data = []) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.APIResponse = APIResponse;
class ErrResponse {
    constructor(status = 400, message = "fail") {
        this.status = status;
        this.message = message;
    }
}
exports.ErrResponse = ErrResponse;
//# sourceMappingURL=statusMessages.js.map