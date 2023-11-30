import {Id, Ticker} from "../../core";


export type DealType = "BUY" | "SELL"

export interface Deal {
    account: Id,
    type: DealType,
    ticker: Ticker,
    quantity: number,
    avgPrice: number,
}