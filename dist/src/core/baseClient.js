"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const error_1 = require("../error");
function toHex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
}
class BaseClient {
    constructor({ apiKey = '', apiSecret = '', baseURL = 'https://api.bitqik.com/spot' } = {}) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.baseURL = baseURL.replace(/\/$/, '');
    }
    async sign(path, nonce, body) {
        const encoder = new TextEncoder();
        const keyData = encoder.encode(this.apiSecret);
        const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-384' }, false, ['sign']);
        const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(path + nonce + body));
        return toHex(signature);
    }
    async request(method, path, params = {}, authenticated = false) {
        const url = new URL(this.baseURL + path);
        let body;
        if (method === 'GET' && Object.keys(params).length) {
            Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, String(v)));
        }
        else if (method !== 'GET') {
            body = JSON.stringify(params);
        }
        const headers = {};
        const nonce = Date.now().toString();
        if (authenticated) {
            headers['request-api'] = this.apiKey;
            headers['request-nonce'] = nonce;
            headers['request-sign'] = await this.sign(path, nonce, body || '');
        }
        if (body)
            headers['Content-Type'] = 'application/json';
        const response = await fetch(url.toString(), { method, headers, body });
        const text = await response.text();
        if (!response.ok) {
            throw new error_1.BitqikError(response.status, text);
        }
        return text ? JSON.parse(text) : undefined;
    }
}
exports.BaseClient = BaseClient;
