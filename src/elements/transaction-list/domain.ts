import {Id, Ticker} from "../../core";

export interface Transaction {
    id: Id,
    ticker: Ticker,
    date: Date,
    price: number,
    quantity: number,
}
