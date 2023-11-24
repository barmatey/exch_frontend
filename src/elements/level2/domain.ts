import {Ticker} from "../../core";

export interface OrderBook{
    ticker: Ticker,
    buyers: Map<number, number>,
    sellers:Map<number,  number>,
}