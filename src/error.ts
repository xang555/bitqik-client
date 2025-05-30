export class BitqikError extends Error {
  constructor(public status: number, public body: string) {
    super(`HTTP ${status}: ${body}`);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export interface ErrorResponse {
  code: number;
  message: string;
}
