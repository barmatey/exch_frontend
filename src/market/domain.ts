import {Id, Ticker} from "../core";

export interface OrderBook {
    ticker: Ticker,
    buyLevel: Map<number, number>,
    sellLevel: Map<number, number>,
}

export function OrderBook(ticker: string): OrderBook {
    return {
        ticker: ticker,
        buyLevel: new Map(),
        sellLevel: new Map(),
    }
}

type OrderType = "LIMIT" | "MARKET"
type OrderDirection = "BUY" | "SELL"

export interface Order {
    account: Id,
    ticker: Ticker,
    price: number,
    quantity: number,
    dtype: OrderType,
    direction: OrderDirection,
}
