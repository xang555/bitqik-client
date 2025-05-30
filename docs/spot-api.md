# Spot API Usage

This document provides details on using the Spot trading endpoints implemented in this SDK. Each method corresponds to a REST route under the default base URL `https://api.bitqik.com/spot`.

## Client Overview

The SDK exports a `BitqikClient` class which exposes the `spot` module. `SpotApi` extends the shared `BaseClient` to handle HTTP requests and authentication. Instantiate `BitqikClient` once with your API credentials:

```ts
import BitqikClient from 'bitqik-client';

const client = new BitqikClient({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_SECRET',
});
```

All Spot methods return promises that resolve to the typed response objects defined in `src/spot/models.ts`.

---

## Routes

Below is a list of Spot API methods with the corresponding HTTP route, parameters and example usage.

### getMarketSummary

* **Method:** `GET /api/v3.2/market_summary`
* **Auth:** none
* **Params:** `symbol?` – optional trading pair symbol

```ts
// fetch all markets
const summary = await client.spot.getMarketSummary();

// fetch a single market
const btcUsdt = await client.spot.getMarketSummary('BTC_USDT');
```

### getOhlcv

* **Method:** `GET /api/v3.2/ohlcv`
* **Auth:** none
* **Params:**
  * `symbol` – required trading pair symbol
  * `start?` – unix timestamp in milliseconds
  * `end?` – unix timestamp in milliseconds
  * `resolution?` – candle size in seconds

```ts
const candles = await client.spot.getOhlcv('BTC_USDT', {
  start: 1690992000000,
  end: Date.now(),
  resolution: 60,
});
```

### getPrice

* **Method:** `GET /api/v3.2/price`
* **Auth:** none
* **Params:** `symbol` – required trading pair symbol

```ts
const price = await client.spot.getPrice('BTC_USDT');
```

### getOrderbook

* **Method:** `GET /api/v3.2/orderbook`
* **Auth:** none
* **Params:**
  * `symbol` – required trading pair symbol
  * `group?` – group size
  * `limit_bids?` – maximum bid levels
  * `limit_asks?` – maximum ask levels

```ts
const ob = await client.spot.getOrderbook('BTC_USDT', '0', '50', '50');
```

### getOrderbookL2

* **Method:** `GET /api/v3.2/orderbook/L2`
* **Auth:** none
* **Params:**
  * `symbol` – required trading pair symbol
  * `depth?` – number of levels

```ts
const levels = await client.spot.getOrderbookL2('BTC_USDT', 50);
```

### getTrades

* **Method:** `GET /api/v3.2/trades`
* **Auth:** none
* **Params:**
  * `symbol` – required trading pair symbol
  * `startTime?` – unix timestamp in milliseconds
  * `endTime?` – unix timestamp in milliseconds
  * `count?` – max number of trades

```ts
const trades = await client.spot.getTrades('BTC_USDT', { count: 100 });
```

### getTime

* **Method:** `GET /api/v3.2/time`
* **Auth:** none

```ts
const serverTime = await client.spot.getTime();
```

### createOrder

* **Method:** `POST /api/v3.2/order`
* **Auth:** required
* **Body:** [`CreateOrderRequest`](../src/spot/models.ts)

```ts
const order = await client.spot.createOrder({
  symbol: 'BTC_USDT',
  price: 20000,
  size: 1,
  side: 'BUY',
  type: 'LIMIT',
});
```

### amendOrder

* **Method:** `PUT /api/v3.2/order`
* **Auth:** required
* **Body:** [`AmendOrderRequest`](../src/spot/models.ts)

```ts
const amended = await client.spot.amendOrder({
  symbol: 'BTC_USDT',
  orderID: '123',
  type: 'SIZE',
  value: 2,
});
```

### createPegOrder

* **Method:** `POST /api/v3.2/order/peg`
* **Auth:** required
* **Body:** `CreateOrderRequest`

```ts
await client.spot.createPegOrder({
  symbol: 'BTC_USDT',
  size: 1,
  side: 'BUY',
  type: 'PEG',
  trailValue: 10,
});
```

### cancelAllAfter

* **Method:** `POST /api/v3.2/order/cancelAllAfter`
* **Auth:** required
* **Body:** `{ timeout: number }` – cancellation window in milliseconds

```ts
await client.spot.cancelAllAfter(60000); // cancel orders after 60s
```

### cancelOrder

* **Method:** `DELETE /api/v3.2/order`
* **Auth:** required
* **Params:**
  * `symbol` – required trading pair symbol
  * `orderID?` – server order ID
  * `clOrderID?` – client order ID

```ts
await client.spot.cancelOrder('BTC_USDT', '123');
```

### queryOrder

* **Method:** `GET /api/v3.2/order`
* **Auth:** required
* **Params:** `orderID?`, `clOrderID?`

```ts
const info = await client.spot.queryOrder('123');
```

### getOpenOrders

* **Method:** `GET /api/v3.2/user/open_orders`
* **Auth:** required
* **Params:**
  * `symbol` – required trading pair symbol
  * `orderID?`
  * `clOrderID?`

```ts
const open = await client.spot.getOpenOrders('BTC_USDT');
```

### getTradeHistory

* **Method:** `GET /api/v3.2/user/trade_history`
* **Auth:** required
* **Params:**
  * `symbol` – required trading pair symbol
  * `startTime?`
  * `endTime?`
  * `count?`
  * `clOrderID?`
  * `orderID?`
  * `isMatchSymbol?`

```ts
const history = await client.spot.getTradeHistory('BTC_USDT', { count: 50 });
```

### getFees

* **Method:** `GET /api/v3.2/user/fees`
* **Auth:** required
* **Params:** `symbol?`

```ts
const fees = await client.spot.getFees('BTC_USDT');
```

---

These examples demonstrate typical usage. Refer to the TypeScript types in `src/spot/models.ts` for the full shape of request and response objects.

