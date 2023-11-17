import {Ticker} from "../core";

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
