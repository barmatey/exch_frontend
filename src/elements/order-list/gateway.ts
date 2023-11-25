import {BASE_HOST, Id, Ticker} from "../../core";
import {Order, OrderDirection, OrderStatus, OrderType} from "./domain";
import {Ref} from "vue";
import {axiosWrapper} from "../../shared/axios-wrapper";

interface OrderCreateSchema {
    account: Id,
    ticker: Ticker,
    dtype: OrderType,
    direction: OrderDirection,
    price: number,
    quantity: number,
    status: OrderStatus,
}

function orderCreateSerializer(order: Order): OrderCreateSchema {
    return {
        account: order.account,
        direction: order.direction,
        dtype: order.dtype,
        price: order.price,
        quantity: order.quantity,
        ticker: order.ticker,
        status: order.status,
    }
}

interface OrderRetrieveSchema extends OrderCreateSchema {
    uuid: Id,
}

function orderRetrieveDeserializer(data: OrderRetrieveSchema): Order {
    return {
        id: Id(data.uuid),
        account: data.account,
        direction: data.direction,
        dtype: data.dtype,
        price: data.price,
        quantity: data.quantity,
        ticker: data.ticker,
        status: data.status,
    }
}

function orderRetrieveSerializer(order: Order): OrderRetrieveSchema {
    return {
        uuid: order.id,
        account: order.account,
        direction: order.direction,
        dtype: order.dtype,
        price: order.price,
        quantity: order.quantity,
        ticker: order.ticker,
        status:order.status,
    }
}

export class OrderGateway {
    createWebsocket(target: Ref<Order[]>, accountId: Id) {
        const url = `ws://${BASE_HOST}/order/ws/${accountId}`
        const ws = new WebSocket(url)
        ws.onopen = () => console.log('Order WebSocket open')
        ws.onclose = () => console.log('Order WebSocket close')
        ws.onmessage = (msg) => {
            const order = orderRetrieveDeserializer(JSON.parse(msg.data))
            switch (order.status){
                case "PENDING":
                    target.value.push(order)
                    break
                default:
                    throw Error()
            }
        }
        return ws
    }

    async getAccountOrders(account_id: Id): Promise<Order[]> {
        const url = `/order/${account_id}`
        const data: OrderRetrieveSchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => orderRetrieveDeserializer(item))
    }

    async createOrder(order: Order): Promise<Order> {
        const url = `/order`
        const data: OrderCreateSchema = orderCreateSerializer(order)
        const createdOrder: OrderRetrieveSchema = (await axiosWrapper.post(url, data)).data
        return orderRetrieveDeserializer(createdOrder)
    }

    async cancelOrder(order: Order): Promise<void> {
        const url = `/order/cancel`
        const data: OrderRetrieveSchema = orderRetrieveSerializer(order)
        await axiosWrapper.patch(url, data)
    }
}