import {BASE_HOST, Id, Ticker} from "../../core";
import {Transaction} from "./domain";
import {axiosWrapper} from "../../shared/axios-wrapper";
import {Ref} from "vue";

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


export class TransactionGateway {
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
            slice_to: 50,
            order_by: 'date',
            asc: false,
        }
        const data: TransactionSchema[] = (await axiosWrapper.get(url, params)).data
        return data.reverse().map(item => transactionDeserializer(item))
    }

    async createWebSocket(ticker: Ticker, target: Ref<Transaction[]>) {
        const url = `ws://${BASE_HOST}/transaction/ws/${ticker}`
        const ws = new WebSocket(url)
        ws.onopen = () => console.log('WebSocket open')
        ws.onclose = () => console.log('WebSocket close')
        ws.onmessage = (msg) => {
            target.value.push(transactionDeserializer(JSON.parse(msg.data)))
        }
    }
}
