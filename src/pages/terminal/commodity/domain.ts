import {Id, Ticker} from "../../../core";

export interface Commodity {
    id: Id,
    ticker: Ticker,
    description: string,
}

export function createCommodity(): Commodity {
    return {
        id: Id(null),
        ticker: "",
        description: "",
    }
}