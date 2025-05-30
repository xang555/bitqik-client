"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitqikClient = void 0;
const spotApi_1 = require("./spot/spotApi");
const futuresApi_1 = require("./futures/futuresApi");
const otcApi_1 = require("./otc/otcApi");
const earnApi_1 = require("./earn/earnApi");
class BitqikClient {
    constructor(config = {}) {
        this.spot = new spotApi_1.SpotApi(config);
        this.futures = new futuresApi_1.FuturesApi(config);
        this.otc = new otcApi_1.OtcApi(config);
        this.earn = new earnApi_1.EarnApi(config);
    }
}
exports.BitqikClient = BitqikClient;
exports.default = BitqikClient;
