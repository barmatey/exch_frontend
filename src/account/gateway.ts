import {Id} from "../core";
import {axiosWrapper} from "../shared/axios-wrapper";
import {Account} from "./domain";

interface AccountSchema {
    cash: number,
    buy_deals_amount: number,
    sell_deals_amount: number,
    uuid: string,
}

function accountDeserializer(data: AccountSchema): Account{
    return {
        cash: data.cash,
        buyOrdersAmount: data.buy_deals_amount,
        sellOrdersAmount: data.sell_deals_amount,
        id: Id(data.uuid)
    }
}

export class AccountGateway {
    async getAccountById(id: Id): Promise<Account> {
        const url = `/account/${id}`
        const data: AccountSchema = (await axiosWrapper.get(url)).data
        return accountDeserializer(data)
    }
}