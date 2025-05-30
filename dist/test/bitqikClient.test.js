"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../src/client"));
function assert(condition, msg) {
    if (!condition)
        throw new Error(msg || 'Assertion failed');
}
const client = new client_1.default();
assert(typeof client.spot.getMarketSummary === 'function');
assert(typeof client.futures === 'object');
console.log('SDK structure checks passed.');
