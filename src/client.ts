import { ClientConfig } from './core/baseClient';
import { SpotApi } from './spot/spotApi';
import { FuturesApi } from './futures/futuresApi';
import { OtcApi } from './otc/otcApi';
import { EarnApi } from './earn/earnApi';

export class BitqikClient {
  public spot: SpotApi;
  public futures: FuturesApi;
  public otc: OtcApi;
  public earn: EarnApi;

  constructor(config: ClientConfig = {}) {
    this.spot = new SpotApi(config);
    this.futures = new FuturesApi(config);
    this.otc = new OtcApi(config);
    this.earn = new EarnApi(config);
  }
}

export default BitqikClient;
