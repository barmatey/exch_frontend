import {Id, Ticker} from "../core";
import {Commodity} from "./domain";
import {axiosWrapper} from "../shared/axios-wrapper";

interface CommoditySchema {
    uuid: Id,
    ticker: Ticker,
    description: string,
    specification: string,
}

function commodityDeserializer(data: CommoditySchema): Commodity {
    return {
        id: data.uuid,
        ticker: data.ticker,
        description: data.description,
    }
}


export class CommodityGateway {
    async getMany(): Promise<Commodity[]> {
        const url = "/commodity/"
        const data: CommoditySchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => commodityDeserializer(item))
    }
}
