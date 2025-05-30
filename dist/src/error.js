"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitqikError = void 0;
class BitqikError extends Error {
    constructor(status, body) {
        super(`HTTP ${status}: ${body}`);
        this.status = status;
        this.body = body;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.BitqikError = BitqikError;
