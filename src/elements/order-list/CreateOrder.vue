<template>
    <div>
        <div class="create-order">
            <div>
                <label>Price</label>
                <input class="order-input" type="number" v-model="price"/>
            </div>

            <div>
                <label>Quantity</label>
                <input class="order-input" type="number" v-model="quantity">
            </div>

            <button style="background: var(--ui-main-color-green)" @click="createOrder('BUY')">Buy</button>
            <button style="background: var(--ui-main-color-red)" @click="createOrder('SELL')">Sell</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import {Order, OrderDirection} from "./domain";
import {Id, Ticker} from "../../core";
import {OrderGateway} from "./gateway";
import {useAuthStore} from "../../shared/auth-store";

const p = defineProps<{
    ticker: Ticker,
}>()

const authStore = useAuthStore()
const accId = Id(authStore.getUser?.id)

const price = ref(5)
const quantity = ref(1)

async function createOrder(direction: OrderDirection) {
    const data: Order = {
        account: accId,
        direction: direction,
        dtype: 'LIMIT',
        id: "",
        price: price.value,
        quantity: quantity.value,
        ticker: p.ticker,
        status: 'PENDING',
    }
    const gateway = new OrderGateway()
    const order = await gateway.createOrder(data)
}
</script>

<style scoped>
.create-order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--ui-main-color-primary-hover);
    width: 576px;
    border-radius: 6px;
    padding: 12px;
}

input {
    width: 138px;
    height: 36px;
    border-radius: 18px;
    border: none;
    padding: 0 6px;
}

input:focus {
    border: none;
}

button {
    width: 120px;
    height: 36px;
    border-radius: 18px;
    border: none;
    margin-top: 24px;
    cursor: pointer;
    font-weight: normal;
}

label {
    display: block;
    color: white;
}

:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
</style>