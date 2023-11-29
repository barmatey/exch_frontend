import {Id} from "../../core";
import {Deal, DealStatus} from "./domain";
import {axiosWrapper} from "../../shared/axios-wrapper";


interface DealSchema {
    account: string,
    ticker: string,
    status: DealStatus
    avg_price: number,
    total_quantity: number,
}

function dealDeserializer(data: DealSchema): Deal{
    return {
        account: Id(data.account),
        avgPrice: data.avg_price,
        quantity: data.total_quantity,
        status: data.status,
        ticker: data.ticker,
        type: data.total_quantity >= 0
            ? "BUY"
            : "SELL",
    }
}


export class DealGateway {
    async getAccountDeals(accId: Id): Promise<Deal[]> {
        const url = `/deal/${accId}`
        const data: DealSchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => dealDeserializer(item))
    }
}