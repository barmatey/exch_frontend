import {BASE_HOST, Id, TEMP_ACC_ID, Ticker} from "../core";
import {OrderBook} from "./domain";
import {Ref} from "vue";

interface TransactionSchema {

}

interface OrderCreateSchema {
    account: Id,
    ticker: Ticker,
    dtype: string,
    direction: string,
    price: number,
    quantity: number,
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
    private target?: Ref<OrderBook>
    private ws?: WebSocket

    createWebsocket(target: Ref<OrderBook>) {
        this.target = target
        const url = `ws://${BASE_HOST}/market/ws/${this.target.value.ticker}`
        this.ws = new WebSocket(url)
        this.ws.onopen = () => {
            console.log("WebSocket opened")
        }
        this.ws.onmessage = (event) => {
            const orderBookSchema: OrderBookSchema = JSON.parse(event.data)
            this.target!.value = orderBookDeserializer(orderBookSchema)
        }
    }

    async sendOrder() {
        if (!this.ws || !this.target) throw Error()

        const data: OrderCreateSchema = {
            account: TEMP_ACC_ID,
            direction: "BUY",
            dtype: "LIMIT",
            price: 1,
            quantity: 100,
            ticker: this.target.value.ticker,
        }
        this.ws.send(JSON.stringify(data))
        console.log("ssendOrder")
    }
}