import { BaseClient } from '../core/baseClient';
import { MarketSummaryResponse, ChartingResponse, PriceResponse, OrderBookGroupResponse, OrderBookResponse, TradeResponse, TimeResponse, CreateOrderRequest, AmendOrderRequest, OrderResponse } from './models';
export declare class SpotApi extends BaseClient {
    getMarketSummary(symbol?: string): Promise<MarketSummaryResponse>;
    getOhlcv(symbol: string, options?: {
        start?: number;
        end?: number;
        resolution?: number;
    }): Promise<ChartingResponse>;
    getPrice(symbol: string): Promise<PriceResponse>;
    getOrderbook(symbol: string, group?: string, limit_bids?: string, limit_asks?: string): Promise<OrderBookGroupResponse>;
    getOrderbookL2(symbol: string, depth?: number): Promise<OrderBookResponse>;
    getTrades(symbol: string, options?: {
        startTime?: number;
        endTime?: number;
        count?: number;
    }): Promise<TradeResponse>;
    getTime(): Promise<TimeResponse>;
    createOrder(req: CreateOrderRequest): Promise<OrderResponse>;
    amendOrder(req: AmendOrderRequest): Promise<OrderResponse>;
    createPegOrder(req: CreateOrderRequest): Promise<OrderResponse>;
    cancelAllAfter(timeout: number): Promise<void>;
    cancelOrder(symbol: string, orderID?: string, clOrderID?: string): Promise<OrderResponse>;
    queryOrder(orderID?: string, clOrderID?: string): Promise<OrderResponse>;
    getOpenOrders(symbol: string, options?: {
        orderID?: string;
        clOrderID?: string;
    }): Promise<any>;
    getTradeHistory(symbol: string, options?: {
        startTime?: number;
        endTime?: number;
        count?: number;
        clOrderID?: string;
        orderID?: string;
        isMatchSymbol?: boolean;
    }): Promise<any>;
    getFees(symbol?: string): Promise<any>;
}
