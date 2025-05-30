export * from '../spot/models';

export interface FuturesCreateOrderRequest {
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
  reduceOnly?: boolean;
  clOrderID?: string;
  trigger?: string;
  takeProfitPrice?: number;
  takeProfitTrigger?: string;
  stopLossPrice?: number;
  stopLossTrigger?: string;
  positionMode?: string;
}

export interface FuturesAmendOrderRequest {
  symbol: string;
  orderID?: string;
  clOrderID?: string;
  type: string;
  value?: number;
  slide?: boolean;
  orderPrice?: number;
  orderSize?: number;
  triggerPrice?: number;
}

export interface ClosePositionRequest {
  price?: number;
  symbol: string;
  type: 'LIMIT' | 'MARKET';
  positionId?: string;
}

export interface RiskLimitRequest {
  symbol: string;
  riskLimit: number;
  positionMode?: string;
  useNewSymbolNaming?: boolean;
}

export interface LeverageRequest {
  symbol: string;
  leverage: number;
  useNewSymbolNaming?: boolean;
  positionMode?: string | number;
  marginMode?: string | number;
}

export interface SettleInRequest {
  symbol: string;
  currency: string;
  positionId?: string;
}

export interface BindTPSLRequest {
  symbol: string;
  side?: string;
  takeProfitPrice?: number;
  takeProfitTrigger?: string;
  stopLossPrice?: number;
  stopLossTrigger?: string;
  positionMode?: string;
}

export interface TransferRequest {
  walletSrc?: string;
  walletSrcType: string;
  walletDest?: string;
  walletDestType: string;
  apiWallets: Array<{ currency: string; allBalance: boolean }>;
}
