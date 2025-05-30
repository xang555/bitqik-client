import { BitqikError } from '../error';

export interface ClientConfig {
  apiKey?: string;
  apiSecret?: string;
  baseURL?: string;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export class BaseClient {
  protected apiKey: string;
  protected apiSecret: string;
  protected baseURL: string;

  constructor({ apiKey = '', apiSecret = '', baseURL = 'https://api.bitqik.com/spot' }: ClientConfig = {}) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseURL = baseURL.replace(/\/$/, '');
  }

  private async sign(path: string, nonce: string, body: string): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(this.apiSecret);
    const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-384' }, false, ['sign']);
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(path + nonce + body));
    return toHex(signature);
  }

  protected async request<T>(method: string, path: string, params: Record<string, any> = {}, authenticated = false): Promise<T> {
    const url = new URL(this.baseURL + path);
    let body: string | undefined;
    if (method === 'GET' && Object.keys(params).length) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, String(v)));
    } else if (method !== 'GET') {
      body = JSON.stringify(params);
    }

    const headers: Record<string, string> = {};
    const nonce = Date.now().toString();
    if (authenticated) {
      headers['request-api'] = this.apiKey;
      headers['request-nonce'] = nonce;
      headers['request-sign'] = await this.sign(path, nonce, body || '');
    }
    if (body) headers['Content-Type'] = 'application/json';

    const response = await fetch(url.toString(), { method, headers, body });
    const text = await response.text();
    if (!response.ok) {
      throw new BitqikError(response.status, text);
    }
    return text ? JSON.parse(text) : (undefined as unknown as T);
  }
}
