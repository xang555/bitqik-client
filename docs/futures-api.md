# Futures API Usage

This guide documents the Futures trading methods available in this SDK. All requests default to the base URL `https://api.bitqik.com/futures` unless overridden via the client configuration.

## Client Overview

Import `BitqikClient` and use the exposed `futures` module:

```ts
import BitqikClient from 'bitqik-client';

const client = new BitqikClient({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_SECRET',
});
```

All methods return promises resolving to the typed objects defined in `src/futures/models.ts` and `src/spot/models.ts`.

---

## Routes

Below is a summary of each Futures API method, its HTTP route and parameters.

### getMarketSummary
* **Method:** `GET /api/v2.1/market_summary`
* **Auth:** none
* **Params:** `symbol?`, `useNewSymbolNaming?`, `listFullAttributes?`

### getOhlcv
* **Method:** `GET /api/v2.1/ohlcv`
* **Auth:** none
* **Params:** `symbol`, `start?`, `end?`, `resolution`

### getPrice
* **Method:** `GET /api/v2.1/price`
* **Auth:** none
* **Params:** `symbol?`, `useNewSymbolNaming?`

### getOrderbook
* **Method:** `GET /api/v2.1/orderbook`
* **Auth:** none
* **Params:** `symbol`, `useNewSymbolNaming?`

### getOrderbookL2
* **Method:** `GET /api/v2.1/orderbook/L2`
* **Auth:** none
* **Params:** `symbol`, `depth?`, `useNewSymbolNaming?`

### getTrades
* **Method:** `GET /api/v2.1/trades`
* **Auth:** none
* **Params:** `symbol`, `startTime?`, `endTime?`, `beforeSerialId?`, `afterSerialId?`, `count?`, `useNewSymbolNaming?`

### getFundingHistory
* **Method:** `GET /api/v2.1/funding_history`
* **Auth:** none
* **Params:** `symbol?`, `count?`, `from?`, `to?`, `useNewSymbolNaming?`

### createOrder
* **Method:** `POST /api/v2.1/order`
* **Auth:** required
* **Body:** [`FuturesCreateOrderRequest`](../src/futures/models.ts)

### amendOrder
* **Method:** `PUT /api/v2.1/order`
* **Auth:** required
* **Body:** [`FuturesAmendOrderRequest`](../src/futures/models.ts)

### cancelOrder
* **Method:** `DELETE /api/v2.1/order`
* **Auth:** required
* **Params:** `symbol`, `orderID?`, `clOrderID?`

### queryOrder
* **Method:** `GET /api/v2.1/order`
* **Auth:** required
* **Params:** `orderID?`, `clOrderID?`

### createPegOrder
* **Method:** `POST /api/v2.1/order/peg`
* **Auth:** required
* **Body:** `FuturesCreateOrderRequest`

### cancelAllAfter
* **Method:** `POST /api/v2.1/order/cancelAllAfter`
* **Auth:** required
* **Body:** `{ timeout: number }`

### getOpenOrders
* **Method:** `GET /api/v2.1/user/open_orders`
* **Auth:** required
* **Params:** `symbol`, `orderID?`, `clOrderID?`, `useNewSymbolNaming?`

### getTradeHistory
* **Method:** `GET /api/v2.1/user/trade_history`
* **Auth:** required
* **Params:** `symbol`, `startTime?`, `endTime?`, `beforeSerialId?`, `afterSerialId?`, `count?`, `clOrderID?`, `orderID?`, `useNewSymbolNaming?`

### getPositions
* **Method:** `GET /api/v2.1/user/positions`
* **Auth:** required
* **Params:** `symbol?`, `useNewSymbolNaming?`

### closePosition
* **Method:** `POST /api/v2.1/order/close_position`
* **Auth:** required
* **Body:** [`ClosePositionRequest`](../src/futures/models.ts)

### getRiskLimit
* **Method:** `GET /api/v2.1/risk_limit`
* **Auth:** required
* **Params:** `symbol`

### setRiskLimit
* **Method:** `POST /api/v2.1/risk_limit`
* **Auth:** required
* **Body:** [`RiskLimitRequest`](../src/futures/models.ts)

### getLeverage
* **Method:** `GET /api/v2.1/leverage`
* **Auth:** required
* **Params:** `symbol`

### setLeverage
* **Method:** `POST /api/v2.1/leverage`
* **Auth:** required
* **Body:** [`LeverageRequest`](../src/futures/models.ts)

### settleIn
* **Method:** `POST /api/v2.1/settle_in`
* **Auth:** required
* **Body:** [`SettleInRequest`](../src/futures/models.ts)

### getFees
* **Method:** `GET /api/v2.1/user/fees`
* **Auth:** required
* **Params:** `symbol?`, `useNewSymbolNaming?`

### bindTPSL
* **Method:** `POST /api/v2.1/order/bind/tpsl`
* **Auth:** required
* **Body:** [`BindTPSLRequest`](../src/futures/models.ts)

### getPositionMode
* **Method:** `GET /api/v2.1/position_mode`
* **Auth:** required
* **Params:** `symbol?`

### setPositionMode
* **Method:** `POST /api/v2.1/position_mode`
* **Auth:** required
* **Body:** `{ symbol: string; positionMode: string }`

### getWallet
* **Method:** `GET /api/v2.1/user/wallet`
* **Auth:** required
* **Params:** `wallet`, `useNewSymbolNaming?`

### getWalletHistory
* **Method:** `GET /api/v2.1/user/wallet_history`
* **Auth:** required
* **Params:** `wallet?`, `startTime?`, `endTime?`, `count?`, `useNewSymbolNaming?`

### getMargin
* **Method:** `GET /api/v2.1/user/margin`
* **Auth:** required
* **Params:** `symbol`, `startTime?`, `endTime?`, `count?`

### transferWallet
* **Method:** `POST /api/v2.1/user/wallet/transfer`
* **Auth:** required
* **Body:** [`TransferRequest`](../src/futures/models.ts)

---

These examples provide an overview of the available methods. Refer to the TypeScript type definitions for full request and response structures.
