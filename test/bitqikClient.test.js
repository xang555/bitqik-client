const assert = require('assert');
const BitqikClient = require('../src/bitqikClient');

// Ensure all methods exist
const client = new BitqikClient();
[
  'getMarketSummary',
  'getOHLCV',
  'getPrice',
  'getOrderbook',
  'getOrderbookL2',
  'getTrades',
  'getServerTime',
  'createOrder',
  'amendOrder',
  'cancelOrder',
  'queryOrder',
  'createPegOrder',
  'cancelAllAfter',
  'getOpenOrders',
  'getTradeHistory',
  'getFees'
].forEach(name => {
  assert.strictEqual(typeof client[name], 'function', `${name} should exist`);
});

// Signature generation check with known secret
const testClient = new BitqikClient({ apiKey: 'k', apiSecret: 'secret' });
const expectedSig = '66d749f17bb6151151e8fdd5bf3a0e3580c1c90ac9ce46801eacf2245cff09ad3c5e8cad82105de26104a6168f888d1f';
const sig = testClient._sign('/api/v3.2/user/open_orders', '', '12345');
assert.strictEqual(sig, expectedSig, 'signature should match expected value');

console.log('All tests passed.');
