"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesApi = void 0;
const baseClient_1 = require("../core/baseClient");
class FuturesApi extends baseClient_1.BaseClient {
    constructor(config = {}) {
        const baseURL = config.baseURL || 'https://api.bitqik.com/futures';
        super({ ...config, baseURL });
    }
    getMarketSummary(options = {}) {
        return this.request('GET', '/api/v2.1/market_summary', options);
    }
    getOhlcv(symbol, options) {
        return this.request('GET', '/api/v2.1/ohlcv', { symbol, ...options });
    }
    getPrice(symbol, useNewSymbolNaming) {
        const params = {};
        if (symbol)
            params.symbol = symbol;
        if (useNewSymbolNaming !== undefined)
            params.useNewSymbolNaming = useNewSymbolNaming;
        return this.request('GET', '/api/v2.1/price', params);
    }
    getOrderbook(symbol, useNewSymbolNaming) {
        const params = { symbol };
        if (useNewSymbolNaming !== undefined)
            params.useNewSymbolNaming = useNewSymbolNaming;
        return this.request('GET', '/api/v2.1/orderbook', params);
    }
    getOrderbookL2(symbol, options = {}) {
        return this.request('GET', '/api/v2.1/orderbook/L2', { symbol, ...options });
    }
    getTrades(symbol, options = {}) {
        return this.request('GET', '/api/v2.1/trades', { symbol, ...options });
    }
    getFundingHistory(options = {}) {
        return this.request('GET', '/api/v2.1/funding_history', options);
    }
    createOrder(req) {
        return this.request('POST', '/api/v2.1/order', req, true);
    }
    amendOrder(req) {
        return this.request('PUT', '/api/v2.1/order', req, true);
    }
    cancelOrder(symbol, params = {}) {
        return this.request('DELETE', '/api/v2.1/order', { symbol, ...params }, true);
    }
    queryOrder(params = {}) {
        return this.request('GET', '/api/v2.1/order', params, true);
    }
    createPegOrder(req) {
        return this.request('POST', '/api/v2.1/order/peg', req, true);
    }
    cancelAllAfter(timeout) {
        return this.request('POST', '/api/v2.1/order/cancelAllAfter', { timeout }, true);
    }
    getOpenOrders(symbol, options = {}) {
        return this.request('GET', '/api/v2.1/user/open_orders', { symbol, ...options }, true);
    }
    getTradeHistory(symbol, options = {}) {
        return this.request('GET', '/api/v2.1/user/trade_history', { symbol, ...options }, true);
    }
    getPositions(options = {}) {
        return this.request('GET', '/api/v2.1/user/positions', options, true);
    }
    closePosition(req) {
        return this.request('POST', '/api/v2.1/order/close_position', req, true);
    }
    getRiskLimit(symbol) {
        return this.request('GET', '/api/v2.1/risk_limit', { symbol }, true);
    }
    setRiskLimit(req) {
        return this.request('POST', '/api/v2.1/risk_limit', req, true);
    }
    getLeverage(symbol) {
        return this.request('GET', '/api/v2.1/leverage', { symbol }, true);
    }
    setLeverage(req) {
        return this.request('POST', '/api/v2.1/leverage', req, true);
    }
    settleIn(req) {
        return this.request('POST', '/api/v2.1/settle_in', req, true);
    }
    getFees(symbol, useNewSymbolNaming) {
        const params = {};
        if (symbol)
            params.symbol = symbol;
        if (useNewSymbolNaming !== undefined)
            params.useNewSymbolNaming = useNewSymbolNaming;
        return this.request('GET', '/api/v2.1/user/fees', params, true);
    }
    bindTPSL(req) {
        return this.request('POST', '/api/v2.1/order/bind/tpsl', req, true);
    }
    getPositionMode(symbol) {
        const params = {};
        if (symbol)
            params.symbol = symbol;
        return this.request('GET', '/api/v2.1/position_mode', params, true);
    }
    setPositionMode(req) {
        return this.request('POST', '/api/v2.1/position_mode', req, true);
    }
    getWallet(params) {
        return this.request('GET', '/api/v2.1/user/wallet', params, true);
    }
    getWalletHistory(options = {}) {
        return this.request('GET', '/api/v2.1/user/wallet_history', options, true);
    }
    getMargin(params) {
        return this.request('GET', '/api/v2.1/user/margin', params, true);
    }
    transferWallet(req) {
        return this.request('POST', '/api/v2.1/user/wallet/transfer', req, true);
    }
}
exports.FuturesApi = FuturesApi;
