"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotApi = void 0;
const baseClient_1 = require("../core/baseClient");
class SpotApi extends baseClient_1.BaseClient {
    getMarketSummary(symbol) {
        return this.request('GET', '/api/v3.2/market_summary', symbol ? { symbol } : {});
    }
    getOhlcv(symbol, options = {}) {
        return this.request('GET', '/api/v3.2/ohlcv', { symbol, ...options });
    }
    getPrice(symbol) {
        return this.request('GET', '/api/v3.2/price', { symbol });
    }
    getOrderbook(symbol, group, limit_bids, limit_asks) {
        const params = { symbol };
        if (group)
            params.group = group;
        if (limit_bids)
            params.limit_bids = limit_bids;
        if (limit_asks)
            params.limit_asks = limit_asks;
        return this.request('GET', '/api/v3.2/orderbook', params);
    }
    getOrderbookL2(symbol, depth) {
        const params = { symbol };
        if (depth !== undefined)
            params.depth = depth;
        return this.request('GET', '/api/v3.2/orderbook/L2', params);
    }
    getTrades(symbol, options = {}) {
        return this.request('GET', '/api/v3.2/trades', { symbol, ...options });
    }
    getTime() {
        return this.request('GET', '/api/v3.2/time');
    }
    createOrder(req) {
        return this.request('POST', '/api/v3.2/order', req, true);
    }
    amendOrder(req) {
        return this.request('PUT', '/api/v3.2/order', req, true);
    }
    createPegOrder(req) {
        return this.request('POST', '/api/v3.2/order/peg', req, true);
    }
    cancelAllAfter(timeout) {
        return this.request('POST', '/api/v3.2/order/cancelAllAfter', { timeout }, true);
    }
    cancelOrder(symbol, orderID, clOrderID) {
        const params = { symbol };
        if (orderID)
            params.orderID = orderID;
        if (clOrderID)
            params['clOrderID'] = clOrderID;
        return this.request('DELETE', '/api/v3.2/order', params, true);
    }
    queryOrder(orderID, clOrderID) {
        const params = {};
        if (orderID)
            params.orderID = orderID;
        if (clOrderID)
            params.clOrderID = clOrderID;
        return this.request('GET', '/api/v3.2/order', params, true);
    }
    getOpenOrders(symbol, options = {}) {
        return this.request('GET', '/api/v3.2/user/open_orders', { symbol, ...options }, true);
    }
    getTradeHistory(symbol, options = {}) {
        return this.request('GET', '/api/v3.2/user/trade_history', { symbol, ...options }, true);
    }
    getFees(symbol) {
        return this.request('GET', '/api/v3.2/user/fees', symbol ? { symbol } : {}, true);
    }
}
exports.SpotApi = SpotApi;
