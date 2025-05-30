# bitqik-client

TypeScript SDK for connecting to Bitqik exchange APIs. Currently implements the
Spot API and scaffolds for Futures, OTC and Earn features.

## Installation

```
npm install bitqik-client
```

## Usage

```ts
import BitqikClient from 'bitqik-client';

const client = new BitqikClient({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_SECRET',
});

client.spot.getTime().then(console.log);
```

For full API documentation see the [docs](./docs/README.md) directory.

## Disclaimer

Endpoints and parameter details are based on the provided specification and may
need adjustments against the official Bitqik documentation before production
use.
