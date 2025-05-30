export declare class BitqikError extends Error {
    status: number;
    body: string;
    constructor(status: number, body: string);
}
export interface ErrorResponse {
    code: number;
    message: string;
}
