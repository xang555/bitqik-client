import { BaseClient } from '../core/baseClient';
import {
  MarketSummaryResponse,
  ChartingResponse,
  PriceResponse,
  OrderBookGroupResponse,
  OrderBookResponse,
  TradeResponse,
  TimeResponse,
  CreateOrderRequest,
  AmendOrderRequest,
  OrderResponse,
} from './models';

export class SpotApi extends BaseClient {
  getMarketSummary(symbol?: string): Promise<MarketSummaryResponse> {
    return this.request('GET', '/api/v3.2/market_summary', symbol ? { symbol } : {});
  }

  getOhlcv(symbol: string, options: { start?: number; end?: number; resolution?: number } = {}): Promise<ChartingResponse> {
    return this.request('GET', '/api/v3.2/ohlcv', { symbol, ...options });
  }

  getPrice(symbol: string): Promise<PriceResponse> {
    return this.request('GET', '/api/v3.2/price', { symbol });
  }

  getOrderbook(symbol: string, group?: string, limit_bids?: string, limit_asks?: string): Promise<OrderBookGroupResponse> {
    const params: any = { symbol };
    if (group) params.group = group;
    if (limit_bids) params.limit_bids = limit_bids;
    if (limit_asks) params.limit_asks = limit_asks;
    return this.request('GET', '/api/v3.2/orderbook', params);
  }

  getOrderbookL2(symbol: string, depth?: number): Promise<OrderBookResponse> {
    const params: any = { symbol };
    if (depth !== undefined) params.depth = depth;
    return this.request('GET', '/api/v3.2/orderbook/L2', params);
  }

  getTrades(symbol: string, options: { startTime?: number; endTime?: number; count?: number } = {}): Promise<TradeResponse> {
    return this.request('GET', '/api/v3.2/trades', { symbol, ...options });
  }

  getTime(): Promise<TimeResponse> {
    return this.request('GET', '/api/v3.2/time');
  }

  createOrder(req: CreateOrderRequest): Promise<OrderResponse> {
    return this.request('POST', '/api/v3.2/order', req, true);
  }

  amendOrder(req: AmendOrderRequest): Promise<OrderResponse> {
    return this.request('PUT', '/api/v3.2/order', req, true);
  }

  createPegOrder(req: CreateOrderRequest): Promise<OrderResponse> {
    return this.request('POST', '/api/v3.2/order/peg', req, true);
  }

  cancelAllAfter(timeout: number): Promise<void> {
    return this.request('POST', '/api/v3.2/order/cancelAllAfter', { timeout }, true);
  }

  cancelOrder(symbol: string, orderID?: string, clOrderID?: string): Promise<OrderResponse> {
    const params: any = { symbol };
    if (orderID) params.orderID = orderID;
    if (clOrderID) params['clOrderID'] = clOrderID;
    return this.request('DELETE', '/api/v3.2/order', params, true);
  }

  queryOrder(orderID?: string, clOrderID?: string): Promise<OrderResponse> {
    const params: any = {};
    if (orderID) params.orderID = orderID;
    if (clOrderID) params.clOrderID = clOrderID;
    return this.request('GET', '/api/v3.2/order', params, true);
  }

  getOpenOrders(symbol: string, options: { orderID?: string; clOrderID?: string } = {}): Promise<any> {
    return this.request('GET', '/api/v3.2/user/open_orders', { symbol, ...options }, true);
  }

  getTradeHistory(symbol: string, options: { startTime?: number; endTime?: number; count?: number; clOrderID?: string; orderID?: string; isMatchSymbol?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v3.2/user/trade_history', { symbol, ...options }, true);
  }

  getFees(symbol?: string): Promise<any> {
    return this.request('GET', '/api/v3.2/user/fees', symbol ? { symbol } : {}, true);
  }
}
