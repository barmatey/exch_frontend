import {Id, Ticker} from "../../core";

export interface OrderBook {
    ticker: Ticker,
    buyLevel: Map<number, number>,
    sellLevel: Map<number, number>,
}

export function createOrderBook(ticker: string): OrderBook {
    return {
        ticker: ticker,
        buyLevel: new Map(),
        sellLevel: new Map(),
    }
}

export type OrderType = "LIMIT" | "MARKET"
export type OrderDirection = "BUY" | "SELL"

export interface Order {
    id: Id,
    account: Id,
    ticker: Ticker,
    price: number,
    quantity: number,
    dtype: OrderType,
    direction: OrderDirection,
}
