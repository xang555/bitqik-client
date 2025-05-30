export interface ClientConfig {
    apiKey?: string;
    apiSecret?: string;
    baseURL?: string;
}
export declare class BaseClient {
    protected apiKey: string;
    protected apiSecret: string;
    protected baseURL: string;
    constructor({ apiKey, apiSecret, baseURL }?: ClientConfig);
    private sign;
    protected request<T>(method: string, path: string, params?: Record<string, any>, authenticated?: boolean): Promise<T>;
}
