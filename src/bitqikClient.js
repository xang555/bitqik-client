'use strict';
const crypto = require('crypto');

class BitqikClient {
  constructor({ apiKey = '', apiSecret = '', baseURL = 'https://api.bitqik.com/spot' } = {}) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseURL = baseURL.replace(/\/$/, '');
  }

  _sign(path, body, nonce) {
    const payload = path + nonce + body;
    return crypto.createHmac('sha384', this.apiSecret).update(payload).digest('hex');
  }

  async _request(method, path, { params = {}, body = null, auth = false } = {}) {
    const url = new URL(this.baseURL + path);
    if (params && Object.keys(params).length) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null) url.searchParams.append(k, v);
      });
    }

    const options = { method, headers: {} };
    let bodyString = '';
    if (body && method !== 'GET') {
      bodyString = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json';
      options.body = bodyString;
    }

    if (auth) {
      const nonce = Date.now().toString();
      const signature = this._sign(path, bodyString, nonce);
      options.headers['request-api'] = this.apiKey;
      options.headers['request-nonce'] = nonce;
      options.headers['request-sign'] = signature;
    }

    const res = await fetch(url, options);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text}`);
    }
    return res.json();
  }

  // Public endpoints
  getMarketSummary(symbol) {
    return this._request('GET', '/api/v3.2/market_summary', { params: { symbol } });
  }

  getOHLCV({ symbol, start, end, resolution }) {
    return this._request('GET', '/api/v3.2/ohlcv', { params: { symbol, start, end, resolution } });
  }

  getPrice(symbol) {
    return this._request('GET', '/api/v3.2/price', { params: { symbol } });
  }

  getOrderbook(params) {
    return this._request('GET', '/api/v3.2/orderbook', { params });
  }

  getOrderbookL2({ symbol, depth }) {
    return this._request('GET', '/api/v3.2/orderbook/L2', { params: { symbol, depth } });
  }

  getTrades(params) {
    return this._request('GET', '/api/v3.2/trades', { params });
  }

  getServerTime() {
    return this._request('GET', '/api/v3.2/time');
  }

  // Private endpoints
  createOrder(order) {
    return this._request('POST', '/api/v3.2/order', { body: order, auth: true });
  }

  amendOrder(data) {
    return this._request('PUT', '/api/v3.2/order', { body: data, auth: true });
  }

  cancelOrder(params) {
    return this._request('DELETE', '/api/v3.2/order', { params, auth: true });
  }

  queryOrder(params) {
    return this._request('GET', '/api/v3.2/order', { params, auth: true });
  }

  createPegOrder(order) {
    return this._request('POST', '/api/v3.2/order/peg', { body: order, auth: true });
  }

  cancelAllAfter(timeout) {
    return this._request('POST', '/api/v3.2/order/cancelAllAfter', { body: { timeout }, auth: true });
  }

  getOpenOrders(params) {
    return this._request('GET', '/api/v3.2/user/open_orders', { params, auth: true });
  }

  getTradeHistory(params) {
    return this._request('GET', '/api/v3.2/user/trade_history', { params, auth: true });
  }

  getFees(params) {
    return this._request('GET', '/api/v3.2/user/fees', { params, auth: true });
  }
}

module.exports = BitqikClient;
