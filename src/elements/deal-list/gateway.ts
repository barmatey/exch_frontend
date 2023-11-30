import {Id, Ticker} from "../../core";
import {Deal} from "./domain";
import {axiosWrapper} from "../../shared/axios-wrapper";


interface DealSchema {
    account_uuid: string,
    ticker: Ticker,
    avg_price: number,
    total_quantity: number,
}

function dealDeserializer(data: DealSchema): Deal{
    return {
        account: Id(data.account_uuid),
        avgPrice: data.avg_price,
        quantity: data.total_quantity,
        ticker: data.ticker,
        type: data.total_quantity >= 0
            ? "BUY"
            : "SELL",
    }
}


export class DealGateway {
    async getAccountDeals(accId: Id): Promise<Deal[]> {
        const url = `/position/${accId}`
        const data: DealSchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => dealDeserializer(item))
    }
}