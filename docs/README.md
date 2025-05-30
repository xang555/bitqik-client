# Bitqik Client SDK

This SDK provides basic access to Bitqik exchange APIs for Spot trading.
Futures, OTC and Earn modules are included as placeholders for future
expansion.

## Installation

```
npm install bitqik-client
```

## Usage

```ts
import BitqikClient from 'bitqik-client';

const client = new BitqikClient({
  apiKey: 'YOUR_KEY',
  apiSecret: 'YOUR_SECRET',
});

async function example() {
  const markets = await client.spot.getMarketSummary();
  console.log(markets);
}

example();
```

## Building

```
npm run build
```
