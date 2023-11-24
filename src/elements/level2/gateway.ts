import {Ticker} from "../../core";
import {OrderBook} from "./domain";
import {Ref} from "vue";

interface OrderBookSchema {
    ticker: Ticker
    buy_level: [number, number][]
    sell_level: [number, number][]
}

function orderBookDeserializer(data: OrderBookSchema): OrderBook {
    const ticker = data.ticker
    const buyers = new Map()
    const sellers = new Map()
    data.buy_level.forEach(item => buyers.set(item[0], item[1]))
    data.sell_level.forEach(item => sellers.set(item[0], item[1]))
    return {ticker, buyers, sellers,}
}

export class OrderBookGateway {
    target: Ref<OrderBook>
    ws?: WebSocket

    constructor(orderBook: Ref<OrderBook>) {
        this.target = orderBook
    }

    createWebsocket(){
        const url = `ws://localhost:8000/market/ws/${this.target.value.ticker}`
        this.ws = new WebSocket(url)
        this.ws.onopen = () => console.log('WebSocket open')
        this.ws.onclose = () => console.log('WebSocket close')
        this.ws.onmessage = (msg) => {
            this.target.value = orderBookDeserializer(msg.data)
        }
    }
}
