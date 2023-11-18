import {BASE_HOST, Id, Ticker} from "../../../core";
import {Order, OrderBook, Transaction} from "./domain";
import {Ref} from "vue";

interface TransactionSchema {
    uuid: string,
    ticker: Ticker,
    date: string,
    price: number,
    quantity: number,
}

interface OrderCreateSchema {
    account: Id,
    ticker: Ticker,
    dtype: string,
    direction: string,
    price: number,
    quantity: number,
}

function transactionDeserializer(schema: TransactionSchema): Transaction {
    return {
        date: new Date(schema.date),
        price: schema.price,
        quantity: schema.quantity,
    }
}

function orderCreateSerializer(order: Order): OrderCreateSchema {
    return {
        account: order.account,
        direction: order.direction,
        dtype: order.dtype,
        price: order.price,
        quantity: order.quantity,
        ticker: order.ticker,
    }
}

interface OrderBookSchema {
    ticker: Ticker,
    buy_level: [number, number][],
    sell_level: [number, number][],
    transactions: TransactionSchema[],

}

function orderBookDeserializer(data: OrderBookSchema): OrderBook {
    const buyLvl = new Map()
    data.buy_level.reverse().forEach(item => buyLvl.set(item[0], item[1]))

    const sellLvl = new Map()
    data.sell_level.forEach(item => sellLvl.set(item[0], item[1]))
    return {
        buyLevel: buyLvl,
        sellLevel: sellLvl,
        ticker: data.ticker,
    }
}

export class OrderBookGateway {
    private orderBook?: Ref<OrderBook>
    private ws?: WebSocket
    private transactions?: Ref<Transaction[]>

    createWebsocket(orderBook: Ref<OrderBook>, transactions: Ref<Transaction[]>) {
        this.orderBook = orderBook
        this.transactions = transactions
        const url = `ws://${BASE_HOST}/market/ws/${this.orderBook.value.ticker}`
        this.ws = new WebSocket(url)
        this.ws.onopen = () => console.log("WebSocket opened")
        this.ws.onmessage = (event) => {
            const orderBookSchema: OrderBookSchema = JSON.parse(event.data)
            this.orderBook!.value = orderBookDeserializer(orderBookSchema)
            this.transactions!.value = orderBookSchema.transactions.map(item => transactionDeserializer(item))
        }
        this.ws.onclose = () => console.log("WebSocket closed")
    }

    async sendOrder(order: Order) {
        if (!this.ws || !this.orderBook) throw Error()

        const data: OrderCreateSchema = orderCreateSerializer(order)
        this.ws.send(JSON.stringify(data))
        console.log("ssendOrder")
    }
}