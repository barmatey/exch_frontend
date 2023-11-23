import {BASE_HOST, Id, Ticker} from "../../core";
import {Order, OrderDirection, OrderType} from "./domain";
import {Ref} from "vue";
import {axiosWrapper} from "../../shared/axios-wrapper";

interface OrderCreateSchema {
    account: Id,
    ticker: Ticker,
    dtype: OrderType,
    direction: OrderDirection,
    price: number,
    quantity: number,
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
        ticker: data.ticker
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
    }
}

export class OrderGateway {
    async getAccountOrders(account_id: Id): Promise<Order[]> {
        const url = `/order/${account_id}`
        const data: OrderRetrieveSchema[] = (await axiosWrapper.get(url)).data
        return data.map(item => orderRetrieveDeserializer(item))
    }

    async createOrder(order: Order) {
        const url = `/order`
        const data: OrderCreateSchema = orderCreateSerializer(order)
        await axiosWrapper.post(url, data)
    }

    async cancelOrder(order: Order): Promise<void> {
        const url = `/order/cancel`
        const data: OrderRetrieveSchema = orderRetrieveSerializer(order)
        await axiosWrapper.patch(url, data)
    }
}