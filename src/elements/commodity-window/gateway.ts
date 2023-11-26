import {Commodity} from "./domain";
import {axiosWrapper} from "../../shared/axios-wrapper";

interface CommoditySchema {
    ticker: string,
    description: string,
    specification: string,
    uuid: string,
}

function commodityDeserializer(data: CommoditySchema): Commodity {
    return {
        ticker: data.ticker,
        description: data.description,
        specification: data.specification,
        id: data.uuid,
    }
}

export class CommodityGateway{
    async getCommodities(): Promise<Commodity[]> {
        const url = `/commodity`
        const data: CommoditySchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => commodityDeserializer(item))
    }
}
