import { BaseClient, ClientConfig } from '../core/baseClient';
import {
  MarketSummaryResponse,
  ChartingResponse,
  PriceResponse,
  OrderBookGroupResponse,
  OrderBookResponse,
  TradeResponse,
  OrderResponse,
} from '../spot/models';
import {
  FuturesCreateOrderRequest,
  FuturesAmendOrderRequest,
  ClosePositionRequest,
  RiskLimitRequest,
  LeverageRequest,
  SettleInRequest,
  BindTPSLRequest,
  TransferRequest,
} from './models';

export class FuturesApi extends BaseClient {
  constructor(config: ClientConfig = {}) {
    const baseURL = config.baseURL || 'https://api.bitqik.com/futures';
    super({ ...config, baseURL });
  }

  getMarketSummary(options: { symbol?: string; useNewSymbolNaming?: boolean; listFullAttributes?: boolean } = {}): Promise<MarketSummaryResponse> {
    return this.request('GET', '/api/v2.1/market_summary', options);
  }

  getOhlcv(symbol: string, options: { start?: string; end?: string; resolution: string }): Promise<ChartingResponse> {
    return this.request('GET', '/api/v2.1/ohlcv', { symbol, ...options });
  }

  getPrice(symbol?: string, useNewSymbolNaming?: boolean): Promise<PriceResponse> {
    const params: any = {};
    if (symbol) params.symbol = symbol;
    if (useNewSymbolNaming !== undefined) params.useNewSymbolNaming = useNewSymbolNaming;
    return this.request('GET', '/api/v2.1/price', params);
  }

  getOrderbook(symbol: string, useNewSymbolNaming?: boolean): Promise<OrderBookGroupResponse> {
    const params: any = { symbol };
    if (useNewSymbolNaming !== undefined) params.useNewSymbolNaming = useNewSymbolNaming;
    return this.request('GET', '/api/v2.1/orderbook', params);
  }

  getOrderbookL2(symbol: string, options: { depth?: number; useNewSymbolNaming?: boolean } = {}): Promise<OrderBookResponse> {
    return this.request('GET', '/api/v2.1/orderbook/L2', { symbol, ...options });
  }

  getTrades(symbol: string, options: { startTime?: string; endTime?: string; beforeSerialId?: string; afterSerialId?: string; count?: number; useNewSymbolNaming?: boolean } = {}): Promise<TradeResponse> {
    return this.request('GET', '/api/v2.1/trades', { symbol, ...options });
  }

  getFundingHistory(options: { symbol?: string; count?: number; from?: number; to?: number; useNewSymbolNaming?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v2.1/funding_history', options);
  }

  createOrder(req: FuturesCreateOrderRequest): Promise<OrderResponse> {
    return this.request('POST', '/api/v2.1/order', req, true);
  }

  amendOrder(req: FuturesAmendOrderRequest): Promise<OrderResponse> {
    return this.request('PUT', '/api/v2.1/order', req, true);
  }

  cancelOrder(symbol: string, params: { orderID?: string; clOrderID?: string } = {}): Promise<OrderResponse> {
    return this.request('DELETE', '/api/v2.1/order', { symbol, ...params }, true);
  }

  queryOrder(params: { orderID?: string; clOrderID?: string } = {}): Promise<OrderResponse> {
    return this.request('GET', '/api/v2.1/order', params, true);
  }

  createPegOrder(req: FuturesCreateOrderRequest): Promise<OrderResponse> {
    return this.request('POST', '/api/v2.1/order/peg', req, true);
  }

  cancelAllAfter(timeout: number): Promise<void> {
    return this.request('POST', '/api/v2.1/order/cancelAllAfter', { timeout }, true);
  }

  getOpenOrders(symbol: string, options: { orderID?: string; clOrderID?: string; useNewSymbolNaming?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v2.1/user/open_orders', { symbol, ...options }, true);
  }

  getTradeHistory(symbol: string, options: { startTime?: string; endTime?: string; beforeSerialId?: string; afterSerialId?: string; count?: number; clOrderID?: string; orderID?: string; useNewSymbolNaming?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v2.1/user/trade_history', { symbol, ...options }, true);
  }

  getPositions(options: { symbol?: string; useNewSymbolNaming?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v2.1/user/positions', options, true);
  }

  closePosition(req: ClosePositionRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/order/close_position', req, true);
  }

  getRiskLimit(symbol: string): Promise<any> {
    return this.request('GET', '/api/v2.1/risk_limit', { symbol }, true);
  }

  setRiskLimit(req: RiskLimitRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/risk_limit', req, true);
  }

  getLeverage(symbol: string): Promise<any> {
    return this.request('GET', '/api/v2.1/leverage', { symbol }, true);
  }

  setLeverage(req: LeverageRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/leverage', req, true);
  }

  settleIn(req: SettleInRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/settle_in', req, true);
  }

  getFees(symbol?: string, useNewSymbolNaming?: boolean): Promise<any> {
    const params: any = {};
    if (symbol) params.symbol = symbol;
    if (useNewSymbolNaming !== undefined) params.useNewSymbolNaming = useNewSymbolNaming;
    return this.request('GET', '/api/v2.1/user/fees', params, true);
  }

  bindTPSL(req: BindTPSLRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/order/bind/tpsl', req, true);
  }

  getPositionMode(symbol?: string): Promise<any> {
    const params: any = {};
    if (symbol) params.symbol = symbol;
    return this.request('GET', '/api/v2.1/position_mode', params, true);
  }

  setPositionMode(req: { symbol: string; positionMode: string }): Promise<any> {
    return this.request('POST', '/api/v2.1/position_mode', req, true);
  }

  getWallet(params: { wallet: string; useNewSymbolNaming?: boolean }): Promise<any> {
    return this.request('GET', '/api/v2.1/user/wallet', params, true);
  }

  getWalletHistory(options: { wallet?: string; startTime?: string; endTime?: string; count?: number; useNewSymbolNaming?: boolean } = {}): Promise<any> {
    return this.request('GET', '/api/v2.1/user/wallet_history', options, true);
  }

  getMargin(params: { symbol: string; startTime?: string; endTime?: string; count?: number }): Promise<any> {
    return this.request('GET', '/api/v2.1/user/margin', params, true);
  }

  transferWallet(req: TransferRequest): Promise<any> {
    return this.request('POST', '/api/v2.1/user/wallet/transfer', req, true);
  }
}
