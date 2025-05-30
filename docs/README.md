# Bitqik Client SDK

This repository contains a TypeScript client for the Bitqik exchange. The package exposes typed modules for the Spot API and scaffolds for the Futures, OTC and Earn endpoints.

## Installation

```bash
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

## Project structure

The code is organised into feature modules under `src/`:

- `core` – shared HTTP logic and request signing.
- `spot` – fully implemented Spot trading API.
- `futures`, `otc`, `earn` – placeholders for future expansion.

All compiled files are emitted to `dist/` when running `npm run build`.

## Documentation

Detailed usage for every Spot endpoint is available in [Spot API Usage](./spot-api.md).
Documentation for the Futures module can be found in [Futures API Usage](./futures-api.md).

## Building

```bash
npm run build
```

