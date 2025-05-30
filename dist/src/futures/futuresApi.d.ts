import { BaseClient, ClientConfig } from '../core/baseClient';
import { MarketSummaryResponse, ChartingResponse, PriceResponse, OrderBookGroupResponse, OrderBookResponse, TradeResponse, OrderResponse } from '../spot/models';
import { FuturesCreateOrderRequest, FuturesAmendOrderRequest, ClosePositionRequest, RiskLimitRequest, LeverageRequest, SettleInRequest, BindTPSLRequest, TransferRequest } from './models';
export declare class FuturesApi extends BaseClient {
    constructor(config?: ClientConfig);
    getMarketSummary(options?: {
        symbol?: string;
        useNewSymbolNaming?: boolean;
        listFullAttributes?: boolean;
    }): Promise<MarketSummaryResponse>;
    getOhlcv(symbol: string, options: {
        start?: string;
        end?: string;
        resolution: string;
    }): Promise<ChartingResponse>;
    getPrice(symbol?: string, useNewSymbolNaming?: boolean): Promise<PriceResponse>;
    getOrderbook(symbol: string, useNewSymbolNaming?: boolean): Promise<OrderBookGroupResponse>;
    getOrderbookL2(symbol: string, options?: {
        depth?: number;
        useNewSymbolNaming?: boolean;
    }): Promise<OrderBookResponse>;
    getTrades(symbol: string, options?: {
        startTime?: string;
        endTime?: string;
        beforeSerialId?: string;
        afterSerialId?: string;
        count?: number;
        useNewSymbolNaming?: boolean;
    }): Promise<TradeResponse>;
    getFundingHistory(options?: {
        symbol?: string;
        count?: number;
        from?: number;
        to?: number;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    createOrder(req: FuturesCreateOrderRequest): Promise<OrderResponse>;
    amendOrder(req: FuturesAmendOrderRequest): Promise<OrderResponse>;
    cancelOrder(symbol: string, params?: {
        orderID?: string;
        clOrderID?: string;
    }): Promise<OrderResponse>;
    queryOrder(params?: {
        orderID?: string;
        clOrderID?: string;
    }): Promise<OrderResponse>;
    createPegOrder(req: FuturesCreateOrderRequest): Promise<OrderResponse>;
    cancelAllAfter(timeout: number): Promise<void>;
    getOpenOrders(symbol: string, options?: {
        orderID?: string;
        clOrderID?: string;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    getTradeHistory(symbol: string, options?: {
        startTime?: string;
        endTime?: string;
        beforeSerialId?: string;
        afterSerialId?: string;
        count?: number;
        clOrderID?: string;
        orderID?: string;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    getPositions(options?: {
        symbol?: string;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    closePosition(req: ClosePositionRequest): Promise<any>;
    getRiskLimit(symbol: string): Promise<any>;
    setRiskLimit(req: RiskLimitRequest): Promise<any>;
    getLeverage(symbol: string): Promise<any>;
    setLeverage(req: LeverageRequest): Promise<any>;
    settleIn(req: SettleInRequest): Promise<any>;
    getFees(symbol?: string, useNewSymbolNaming?: boolean): Promise<any>;
    bindTPSL(req: BindTPSLRequest): Promise<any>;
    getPositionMode(symbol?: string): Promise<any>;
    setPositionMode(req: {
        symbol: string;
        positionMode: string;
    }): Promise<any>;
    getWallet(params: {
        wallet: string;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    getWalletHistory(options?: {
        wallet?: string;
        startTime?: string;
        endTime?: string;
        count?: number;
        useNewSymbolNaming?: boolean;
    }): Promise<any>;
    getMargin(params: {
        symbol: string;
        startTime?: string;
        endTime?: string;
        count?: number;
    }): Promise<any>;
    transferWallet(req: TransferRequest): Promise<any>;
}
