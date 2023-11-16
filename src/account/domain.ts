import {Id} from "../core";

export interface Account{
    id: Id,
    cash: number,
    buyOrdersAmount: number,
    sellOrdersAmount: number,
}

export function getBlankAccount(): Account {
    return {
        id: Id(null),
        cash: 0 ,
        sellOrdersAmount: 0,
        buyOrdersAmount: 0,
    }
}