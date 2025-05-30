import { BaseClient } from '../core/baseClient';
import { MarketSummaryResponse, ChartingResponse, PriceResponse, OrderBookGroupResponse, TradeResponse, TimeResponse, CreateOrderRequest, OrderResponse } from './models';
export declare class SpotApi extends BaseClient {
    getMarketSummary(symbol?: string): Promise<MarketSummaryResponse>;
    getOhlcv(symbol: string, options?: {
        start?: number;
        end?: number;
        resolution?: number;
    }): Promise<ChartingResponse>;
    getPrice(symbol: string): Promise<PriceResponse>;
    getOrderbook(symbol: string, group?: string, limit_bids?: string, limit_asks?: string): Promise<OrderBookGroupResponse>;
    getTrades(symbol: string, options?: {
        startTime?: number;
        endTime?: number;
        count?: number;
    }): Promise<TradeResponse>;
    getTime(): Promise<TimeResponse>;
    createOrder(req: CreateOrderRequest): Promise<OrderResponse>;
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
