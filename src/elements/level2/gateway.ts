import {BASE_HOST, Ticker} from "../../core";
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
    data.buy_level.reverse().forEach(item => buyers.set(item[0], item[1]))
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
        const url = `ws://${BASE_HOST}/market/ws/${this.target.value.ticker}`
        this.ws = new WebSocket(url)
        this.ws.onopen = () => console.log('Level2 WebSocket open')
        this.ws.onclose = () => console.log('Level2 WebSocket close')
        this.ws.onmessage = (msg) => {
            this.target.value = orderBookDeserializer(JSON.parse(msg.data))
        }
    }
}
