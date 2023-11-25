import {Id, Ticker} from "../../core";

export type OrderType = "LIMIT" | "MARKET"
export type OrderDirection = "BUY" | "SELL"

export type OrderStatus = string

export interface Order {
    id: Id,
    account: Id,
    ticker: Ticker,
    price: number,
    quantity: number,
    dtype: OrderType,
    direction: OrderDirection,
    status: OrderStatus
}
