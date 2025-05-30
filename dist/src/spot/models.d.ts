export interface MarketSummary {
    symbol: string;
    last: number;
    lowestAsk: number;
    highestBid: number;
    percentageChange: number;
    volume: number;
    high24Hr: number;
    low24Hr: number;
    base: string;
    quote: string;
    active: boolean;
    size: number;
    minValidPrice: number;
    minPriceIncrement: number;
    minOrderSize: number;
    minSizeIncrement: number;
    maxOrderSize: number;
    openTime: number;
    closeTime: number;
    startMatching: number;
    inactiveTime: number;
    futures: boolean;
}
export type MarketSummaryResponse = MarketSummary[];
export type ChartingResponse = number[][];
export interface PriceItem {
    symbol: string;
    indexPrice: number;
    lastPrice: number;
    markPrice?: number;
}
export type PriceResponse = PriceItem[];
export interface OrderBookQuote {
    price: number | string;
    size: number | string;
}
export interface OrderBookGroupResponse {
    symbol: string;
    buyQuote: OrderBookQuote[];
    sellQuote: OrderBookQuote[];
    timestamp: number;
}
export interface TradeItem {
    price: number;
    size: number;
    side: string;
    symbol: string;
    serialId: number;
    timestamp: number;
}
export type TradeResponse = TradeItem[];
export interface TimeResponse {
    iso: string;
    epoch: number;
}
export interface CreateOrderRequest {
    symbol: string;
    price?: number;
    size: number;
    side: 'BUY' | 'SELL';
    time_in_force?: string;
    type: string;
    txType?: string;
    stopPrice?: number;
    triggerPrice?: number;
    trailValue?: number;
    postOnly?: boolean;
    clOrderID?: string;
    stealth?: number;
    deviation?: number;
}
export interface OrderInfo {
    status: number;
    symbol: string;
    orderType: number;
    price: number;
    side: string;
    size: number;
    orderID: string;
    timestamp: number;
    triggerPrice: number;
    stopPrice: number | null;
    trigger: boolean;
    message: string;
    averageFillPrice: string | number;
    fillSize: number;
    clOrderID: string | null;
    stealth: string | number;
    deviation: string | number;
    postOnly: boolean;
    originalSize: number;
    remainingSize: number;
    time_in_force: string;
}
export type OrderResponse = OrderInfo[];
