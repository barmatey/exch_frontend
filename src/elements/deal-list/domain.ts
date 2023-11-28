import {Id, Ticker} from "../../core";


export type DealStatus = 'PROCESSING' | 'CLOSED'
export type DealType = "BUY" | "SELL"

export interface Deal {
    account: Id,
    type: DealType,
    ticker: Ticker,
    status: DealStatus,
    quantity: number,
    avgPrice: number,
}