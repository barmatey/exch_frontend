import {Id, Ticker} from "../../core";
import {Transaction} from "./domain";
import {axiosWrapper} from "../../shared/axios-wrapper";

interface TransactionSchema {
    uuid: Id,
    ticker: Ticker,
    date: string,
    price: number,
    quantity: number,
}

function transactionDeserializer(data: TransactionSchema): Transaction {
    return {
        id: data.uuid,
        ticker: data.ticker,
        date: new Date(data.date),
        price: data.price,
        quantity: data.quantity,
    }
}


export class TransactionRepo {
    async getAccountTransactions(accountId: Id): Promise<Transaction[]> {
        const url = `/transaction/${accountId}`
        const data: TransactionSchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => transactionDeserializer(item))
    }

    async getTickerTransactions(ticker: Ticker): Promise<Transaction[]> {
        const url = '/transaction'
        const params = {
            ticker: ticker,
            slice_from: 0,
            slice_to: 100,
            order_by: 'date',
            asc: false,
        }
        const data: TransactionSchema[] = (await axiosWrapper.get(url, params)).data
        return data.map(item => transactionDeserializer(item))
    }
}
