# bitqik-client

JavaScript SDK for interacting with the Bitqik **spot** API. All documented
endpoints are available through convenience methods and authenticated requests
are automatically signed with `HMAC-SHA384`.

## Installation

```
npm install bitqik-client
```

## Usage

```
const BitqikClient = require('bitqik-client');
const client = new BitqikClient({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_SECRET',
});

async function example() {
  const summary = await client.getMarketSummary('BTC-USD');
  console.log(summary);
  // private endpoints automatically include authentication
  // await client.createOrder({ symbol: 'BTC-USD', side: 'BUY', type: 'MARKET', size: 0.001 });
}

example().catch(console.error);
```

## Disclaimer

This package was generated without direct access to the official Bitqik API
specification and should be treated as a starting point. Review and update the
endpoint paths and parameters according to the official documentation before
using in production.
