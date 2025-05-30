import BitqikClient from '../src/client';

function assert(condition: boolean, msg?: string) {
  if (!condition) throw new Error(msg || 'Assertion failed');
}

const client = new BitqikClient();
assert(typeof client.spot.getMarketSummary === 'function');
assert(typeof client.futures === 'object');
console.log('SDK structure checks passed.');
