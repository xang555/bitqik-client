import { ClientConfig } from './core/baseClient';
import { SpotApi } from './spot/spotApi';
import { FuturesApi } from './futures/futuresApi';
import { OtcApi } from './otc/otcApi';
import { EarnApi } from './earn/earnApi';
export declare class BitqikClient {
    spot: SpotApi;
    futures: FuturesApi;
    otc: OtcApi;
    earn: EarnApi;
    constructor(config?: ClientConfig);
}
export default BitqikClient;
